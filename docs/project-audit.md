# Senior frontend audit — «Теңдик»

Аудит и безопасные упрощения frontend-проекта. Ветка создана от `main`
`1cc6f29584445592b0a56db42f2113a171a766e7` (после мержа PR #10).

## Baseline (до изменений)

| Проверка | Команда | Exit | Результат |
|---|---|---|---|
| Node/npm | `node -v` / `npm -v` | — | v22.22.2 / 10.9.7 |
| Install | `npm ci` | 0 | ~35s, ок |
| Lint | `npx eslint .` | 0 | 0 проблем |
| Types | `tsc --noEmit` | 0 | 0 ошибок |
| Build | `next build` | 0 | 5 статических роутов (`/`, `/_not-found`, `/icon.svg`, `/maalymat`, `/programma`) |
| Whitespace | `git diff --check` | 0 | чисто |
| Deps | `npm ls --depth=0` | 0 | см. ниже |
| Security | `npm audit --omit=dev` | — | 2 moderate (next → postcss) |

Клиентских компонентов: 15. Крупнейшие файлы: `data/islam-foundations-program.ts`
(1267), `app/globals.css` (428 до чистки), `programma/program-content.tsx` (393),
`data/course-data.ts` (382).

## Инварианты данных (проверено скриптом)

- Уроков ровно **80**, номера 1–80 без пропусков и дублей ✔
- Модулей ровно **8** ✔
- Оценивание = **100** баллов (40+15+20+15+10) ✔
- Цен ровно **25**, места 1–25, min 5000 / max 15000 ✔
- `validateProgram()` (dev-only, `NODE_ENV !== production`) уже проверяет
  уроки/модули/сумму баллов — сохранён.

Бизнес-значения (телефон, WhatsApp, адрес, расписание, размер группы) в
компонентах **не хардкодятся** — всё из `siteConfig`. Отдельная проверка не
нашла утечек. ✔

---

## Findings

### AUDIT-001: Устаревшее имя пакета `qoranlearn`
- Severity: P1 · Category: DX/консистентность · Status: fixed
- Evidence: `package.json` `"name": "qoranlearn"`; проект называется «Теңдик».
- Root cause: имя осталось от прежнего проекта.
- Impact: путаница, неверное имя в lock-файле и метаданных npm.
- Best solution: `npm pkg set name=tendik` (синхронно обновляет и корень lock).
- Files: `package.json`, `package-lock.json` (root name).
- Risk: нулевой.
- Verification: `require('./package.json').name === 'tendik'`, lock root = `tendik`.

### AUDIT-002: Неиспользуемая зависимость `date-fns`
- Severity: P1 · Category: dead dependency · Status: fixed
- Evidence: `grep -rn "date-fns" src` → 0 импортов; присутствует в `dependencies`.
- Root cause: наследие; форматирование дат в проекте не используется.
- Impact: лишний вес node_modules и потенциальная зона уязвимостей.
- Best solution: `npm uninstall date-fns` (offline, синхронизирует lock).
- Files: `package.json`, `package-lock.json`.
- Risk: нулевой — импортов нет; build/lint/types зелёные после удаления.
- Verification: `npm ls date-fns` пусто; `grep date-fns package-lock.json` = 0.

### AUDIT-003: Лишний явный devDependency `babel-plugin-react-compiler`
- Severity: P2 · Category: dead dependency · Status: fixed
- Evidence: закреплён `"1.0.0"` в `devDependencies`; **нет** babel-конфига и
  `experimental.reactCompiler` в `next.config.ts`; React Compiler не включён.
  Пакет объявлен как **optional** зависимость самого `next`
  (`peerDependenciesMeta`/`optionalDependencies` → optional: true).
- Root cause: ненужный явный пин при выключенном React Compiler.
- Impact: вводит в заблуждение (кажется, что компилятор включён).
- Best solution: удалить явный пин (`npm uninstall`); Next при необходимости сам
  подтянет пакет как optional.
- Files: `package.json`, `package-lock.json`.
- Risk: низкий — lint (правила react-hooks) остаётся зелёным; включение React
  Compiler — отдельный follow-up.
- Verification: нет в `devDependencies`; `npx eslint .` exit 0.

### AUDIT-004: Мёртвый CSS в `globals.css`
- Severity: P2 · Category: dead code · Status: fixed
- Evidence: `grep` по всему `src` = 0 использований для классов:
  `.surface-program`, legacy-алиасы `.decor-hero` / `.decor-deep`,
  `.pattern-dots`, `.animate-rise-in`, `.animate-slide-up`,
  `.animate-slide-down`, `.animate-sticky-in` (+ их `@keyframes rise-in`,
  `slide-up`, `slide-down`, `sticky-in`).
- Root cause: остатки двух редизайнов; алиасы вводились для совместимости, но
  все потребители уже переведены на `surface-*`.
- Impact: раздувание CSS, ложные «точки расширения».
- Best solution: удалить неиспользуемые классы и их keyframes.
- Files: `src/app/globals.css`.
- Risk: низкий — удалялись только классы с 0 использований (подтверждено grep до
  удаления). Оставлены используемые: `surface-felt/hero/deep`, `texture-felt`,
  `pattern-ethnic-*`, `pattern-kerege`, `frame-gold`, `edge-gold-top`,
  `animate-fade-in/progress/float-slow`.
- Verification: build зелёный; визуальная проверка без регрессий.

### AUDIT-005: Фокус на поле с ошибкой не работал (+ глобальный query)
- Severity: P2 · Category: correctness/a11y · Status: fixed
- Evidence: `registration-form.tsx` при невалидной отправке вызывал
  `document.querySelector("[data-has-error='true']")` **сразу после**
  `setErrors(...)`. Проблемы две: (1) поиск по всему документу, а не по форме;
  (2) атрибут `data-has-error='true'` выставляется только на **следующем**
  рендере, а query выполняется синхронно до него — поэтому при первой отправке
  элемент не находится и фокус не переходит. Эмпирически (Playwright): пустая
  отправка не переводила фокус ни на одно поле.
- Root cause: гонка «query до ре-рендера» + слишком широкий scope.
- Impact: незрячий/клавиатурный пользователь после невалидной отправки не
  получает фокус на первом ошибочном поле — реальный a11y-дефект.
- Best solution: фокусировать первое ошибочное поле **по его id** (ключи ошибок
  совпадают с id инпутов), внутри текущей формы через `e.currentTarget` — инпуты
  уже в DOM, поэтому таймингом не зависим.
- Files: `src/components/registration/registration-form.tsx`.
- Risk: нулевой.
- Verification (Playwright): пустая отправка → фокус `#parentName`; после
  заполнения имени → фокус `#address`; показываются 2 `role="alert"`.

### AUDIT-006: Бессмысленный динамический `key` у `RegistrationForm`
- Severity: P3 · Category: cleanup · Status: fixed
- Evidence: `registration-sheet.tsx` — `{isOpen && <RegistrationForm key={isOpen ? "open" : "closed"} />}`.
  При `{isOpen && …}` компонент рендерится только когда `isOpen === true`, поэтому
  key всегда `"open"` и никогда не меняется — сброс уже обеспечивается
  mount/unmount при открытии/закрытии.
- Root cause: избыточная попытка «сбросить» состояние формы.
- Impact: мёртвый код, вводящий в заблуждение.
- Best solution: убрать `key`.
- Files: `src/components/registration/registration-sheet.tsx`.
- Risk: нулевой — поведение mount/unmount не меняется.
- Verification: повторное открытие формы даёт чистое состояние (ручная QA).

### AUDIT-007: На `/maalymat` отсутствует `h1`
- Severity: P2 · Category: a11y/SEO · Status: fixed
- Evidence: `SectionHeading` всегда рендерил `<h2>`; на `/maalymat` верхний
  заголовок — h2, страница без h1 (у `/` и `/programma` h1 есть).
- Root cause: общий компонент заголовка без выбора уровня.
- Impact: нарушение иерархии заголовков (скринридеры, SEO).
- Best solution: добавить необязательный проп `as?: "h1" | "h2"` (default h2,
  визуал не меняется); на `/maalymat` передать `as="h1"`.
- Files: `src/components/ui/section-heading.tsx`, `src/app/maalymat/page.tsx`.
- Risk: низкий — стиль прежний, меняется только тег.
- Verification: `/maalymat` имеет ровно один h1; типы/линт зелёные.

### AUDIT-008: Нет `typecheck` / `check` скриптов
- Severity: P2 · Category: DX · Status: fixed
- Evidence: `package.json` scripts: только dev/build/start/lint.
- Best solution: добавить `"typecheck": "tsc --noEmit"` и
  `"check": "npm run lint && npm run typecheck && npm run build"`.
- Files: `package.json`.
- Risk: нулевой. Fake `test` не добавлялся — тестов нет, gap зафиксирован (ниже).
- Verification: `npm run typecheck` exit 0; `npm run check` exit 0.

### AUDIT-009: Нет CI quality workflow
- Severity: P2 · Category: DX/качество · Status: fixed
- Evidence: `.github/` отсутствует.
- Best solution: `.github/workflows/quality.yml` — на PR/push в `main`:
  checkout → setup-node@22 (npm cache) → `npm ci` → lint → typecheck → build.
  Без deployment (это Vercel), без secrets, без write-операций.
- Files: `.github/workflows/quality.yml`.
- Risk: нулевой.
- Verification: YAML валиден; локально те же шаги зелёные (CI подтвердится на PR).

### AUDIT-010: Нет README
- Severity: P2 · Category: docs/DX · Status: fixed
- Best solution: краткий README (стек, Node, команды, маршруты, структура, где
  менять бизнес-данные, server/client conventions, символика, Vercel).
- Files: `README.md`.
- Risk: нулевой.

### AUDIT-011: Нет кастомной not-found
- Severity: P2 · Category: UX · Status: fixed
- Evidence: `src/app/not-found.tsx` отсутствовал (дефолт Next).
- Best solution: небольшая on-brand страница (серверный компонент, дизайн-система,
  кыргызский текст, ссылка на главную). `loading.tsx`/error boundary не
  добавлялись — сайт статический, состояний загрузки нет.
- Files: `src/app/not-found.tsx`.
- Risk: нулевой.
- Verification: build генерирует `/_not-found`; ручная проверка вида.

### AUDIT-012: Отсутствуют безопасные security-заголовки
- Severity: P2 · Category: security · Status: fixed
- Evidence: `next.config.ts` минимален (только `poweredByHeader:false`).
- Best solution: добавить `X-Content-Type-Options: nosniff`,
  `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`,
  `Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()`
  через `headers()`. CSP **не** добавляется (см. deferred).
- Files: `next.config.ts`.
- Risk: низкий — заголовки не ломают inline-стили/data-URI/внешние ссылки.
- Verification: build зелёный; заголовки применяются на всех путях.

### AUDIT-013: `background-attachment: fixed` на мобильных
- Severity: P2 · Category: performance · Status: fixed
- Evidence: `globals.css` body — `background-attachment: fixed` глобально.
- Root cause: внешний канвас с fixed-фоном виден только на широких экранах; на
  мобильных полотно во всю ширину перекрывает фон, но fixed провоцирует дорогой
  repaint при скролле.
- Best solution: включать `fixed` только в `@media (min-width: 640px)`.
- Files: `src/app/globals.css`.
- Risk: низкий — на десктопе вид прежний, на мобиле фон невиден в любом случае.
- Verification: визуально идентично; на мобиле убран лишний fixed-repaint.

### AUDIT-014: Нет skip-link и main landmark
- Severity: P2 · Category: a11y · Status: fixed
- Evidence: в `SitePageShell` нет ссылки «к контенту» и `id` на `<main>`.
- Best solution: skip-link (`sr-only` → виден по фокусу) на `#main-content`;
  `id="main-content"` + `tabIndex={-1}` на `<main>`.
- Files: `src/components/layout/site-page-shell.tsx`.
- Risk: нулевой — скрыт до фокуса.
- Verification: Tab с загрузки показывает skip-link, переводит фокус на контент.

### AUDIT-015: Несогласованность «Муаллим Саани» / «Муаллим Сани»
- Severity: P2 · Category: content consistency · Status: fixed
- Evidence: «Муаллим Саани» — 2 UI/метаданных места (`layout.tsx` keywords,
  `course-data.ts` CURRICULUM/learning-path/FAQ), против «Муаллим Сани» —
  доминирующая форма (~17 мест, включая все 80 уроков и /programma).
- Root cause: разночтение транслитерации.
- Impact: непоследовательность терминологии в UI/SEO.
- Best solution: нормализовать к доминирующей «Муаллим Сани». Религиозный смысл
  не меняется; уроки 1–80 не затронуты (они уже «Сани»).
- Files: `src/app/layout.tsx`, `src/data/course-data.ts`.
- Risk: нулевой.
- Verification: `grep "Муаллим Саани" src` = 0.

---

## Deferred (follow-up, не в этом PR)

### AUDIT-D01: Дублирование a11y-обвязки overlay (Drawer/Sheet)
- Severity: P2 · Status: deferred
- Evidence: `navigation-drawer.tsx` и `registration-sheet.tsx` дублируют Escape,
  focus-trap, `querySelectorAll` focusable, body scroll-lock, delayed autofocus.
- **Race-гипотеза (Drawer → Sheet) проверена и НЕ воспроизводится**: React
  выполняет все cleanup-эффекты до всех setup-эффектов в одном коммите, поэтому
  `remove('scroll-lock')` дровера всегда раньше `add('scroll-lock')` шита.
  Эмпирическая проверка Playwright: после перехода `body.classList` содержит
  `scroll-lock` (= true). Подтверждённого бага нет.
- Почему deferred: без подтверждённого дефекта извлечение общего
  `useModalA11y`/reference-counted lock — это рефакторинг a11y-критичного кода со
  средним риском (у оверлеев разная логика возврата фокуса: drawer → triggerRef,
  sheet → previouslyFocused). Разумно вынести в отдельный сфокусированный PR с
  прогоном всех overlay-сценариев.

### AUDIT-D02: 2 moderate уязвимости (next → postcss)
- Severity: P2 · Status: deferred
- Evidence: `npm audit --omit=dev` → `next` зависит от уязвимой версии `postcss`.
- Почему deferred: `npm audit fix --force` предлагает мажорный/breaking апгрейд
  Next. Это отдельная задача с прогоном build/визуальной регрессии, не «безопасное
  упрощение».

### AUDIT-D03: metadataBase / canonical / sitemap / robots
- Severity: P3 · Status: deferred (нет подтверждённого домена)
- Evidence: в `layout.tsx` нет `metadataBase`; нет `sitemap.ts`/`robots.ts`.
- Почему deferred: корректные абсолютные URL требуют реального production-домена.
  Выдумывать домен нельзя. Как появится домен — добавить `metadataBase`, `robots`,
  `sitemap` (тривиально для 3 статических маршрутов).

### AUDIT-D04: Content-Security-Policy
- Severity: P3 · Status: deferred
- Почему deferred: в проекте inline-стили, data-URI SVG, Next runtime и внешние
  ссылки (WhatsApp/Instagram/2GIS). Слепой CSP рискует сломать прод; требует
  отдельной проверки в реальном окружении.

### AUDIT-D05: Хардкод `#f2cf6f` (светлое золото) ×9
- Severity: P3 · Status: deferred
- Evidence: повторяется как «золото на тёмном» в hero/CTA/footer/module.
- Почему deferred: значение консистентно; вынос в токен `--color-gold-light` —
  чистая косметика без функциональной пользы. Кандидат на объединение при
  следующем касании дизайн-системы.

### Автотесты / CI-проверка инвариантов 80 уроков и 25 цен
- Status: gap зафиксирован
- Автоматических тестов в проекте нет. Инварианты уже проверяет dev-only
  `validateProgram()` (падает при импорте, если уроков ≠80/модулей ≠8/сумма ≠100).
  Полноценный test runner ради этого не добавлялся (в задаче запрещено добавлять
  зависимости ради аудита). Возможный follow-up: вынести проверки в отдельный
  Node-скрипт и вызывать его шагом CI без нового runner.

---

## Rejected / cannot reproduce

- **Scroll-lock race (Drawer→Sheet)** — cannot reproduce (см. AUDIT-D01):
  порядок эффектов React гарантирует корректный итог; эмпирически подтверждено.
- **Пустой Instagram делает секцию бессмысленной** — rejected: секция работает
  как CTA-переход на профиль (карточка + кнопка) независимо от `posts`.
- **`Accordion` (FAQ) и `ProgramLessonAccordion` дублируют друг друга** —
  rejected: разное поведение (у lesson-аккордеона есть «показать все/свернуть» и
  собственная модель раскрытия), объединение усложнит.
- **Мёртвые/дублирующиеся decor-компоненты** — rejected: все компоненты в
  `components/decor` используются (проверено пересчётом импортов).
- **Хардкод бизнес-значений в компонентах** — rejected: не найдено, всё из
  `siteConfig`.
- **Zustand избыточен** — rejected: оправдан (форма открывается из многих
  удалённых компонентов, draft переживает закрытие). persist не добавлялся.

---

## Итоговые проверки (после изменений)

| Проверка | Exit | Результат |
|---|---|---|
| `npm run lint` | 0 | 0 проблем |
| `npm run typecheck` | 0 | 0 ошибок |
| `npm run build` | 0 | 5 статических роутов |
| `npm run check` | 0 | зелёный |
| `git diff --check` | 0 | чисто |

Данные не тронуты: 80 уроков (1–80), 25 цен и их порядок, `registeredStudents`,
`minimumStudents`, `courseSchedule`, контакты, адрес, WhatsApp, Instagram,
название «Теңдик». Официальная госсимволика по-прежнему не изображается.
Новых runtime-зависимостей не добавлено; удалены `date-fns` и явный пин
`babel-plugin-react-compiler`.
