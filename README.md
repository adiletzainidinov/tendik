# Теңдик

«Теңдик» — сайт мечиттеги балдар үчүн Куран курсунун: 80 сабактан турган
«Исламдын негиздери» программасы, баалар, расписание жана каттоо (WhatsApp
аркылуу). Kyrgyz-language, mobile-first.

Это статический маркетинговый/информационный сайт курса. Регистрация не
использует backend — форма собирает имя родителя и адрес и открывает готовое
сообщение в WhatsApp.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, статическая генерация)
- React 19
- Tailwind CSS v4 (токены в `src/app/globals.css`)
- [Zustand](https://github.com/pmndrs/zustand) — состояние формы регистрации
- TypeScript (strict)
- `lucide-react` — иконки

Новых тяжёлых зависимостей нет; декор — оригинальные inline-SVG.

## Требования

- Node.js `>=20 <24` (CI использует Node 22)
- npm

## Команды

```bash
npm ci          # установка по lock-файлу
npm run dev     # локальная разработка (webpack)
npm run lint    # ESLint
npm run typecheck  # tsc --noEmit
npm run build   # production build
npm run check   # lint + typecheck + build
npm start       # запуск production-сборки
```

## Маршруты

- `/` — главная (ценность, программа, расписание, каттоо, дарек);
- `/programma` — полная программа «Исламдын негиздери» (80 сабак, 8 модулей);
- `/maalymat` — подробности (баалар, багыттар, мотивация, төлөм, возврат,
  ата-энелерге, суроо-жооп, Instagram).

## Структура проекта

```
src/
  app/            — маршруты, layout, globals.css, not-found
  components/
    layout/       — shell, header, footer, drawer, sticky bar
    sections/     — секции страниц
    programma/    — компоненты страницы программы
    registration/ — форма и sheet каттоо
    ui/           — Button, Card, Accordion, SectionHeading, Progress …
    decor/        — декоративные SVG (түндүк, горы, боз үй, орнаменты)
  config/         — siteConfig (единый источник истины)
  data/           — контент курса и 80 сабак
  lib/            — cn, format, whatsapp helpers
  store/          — Zustand store каттоо
  types/          — типы
```

## Где менять бизнес-данные

Всё живёт в единых источниках истины — не хардкодить в компонентах:

| Что | Где |
|-----|-----|
| Название, tagline, метаданные | `src/config/site-config.ts` |
| Цены (25 мест) и порядок | `siteConfig.pricing.seatPrices` |
| Тарифы после запуска | `siteConfig.pricing.afterLaunch` |
| Кол-во мест в группе | `siteConfig.minimumStudents` (= длина seatPrices) |
| Зарегистрировано учеников | `siteConfig.registeredStudents` |
| Расписание (Бешим/Шам/часы) | `siteConfig.courseSchedule` |
| Длительность программы | `siteConfig.pricing.programDurationMonths` |
| Контакты, WhatsApp | `siteConfig.contact` |
| Адрес, карта | `siteConfig.location` |
| Instagram | `siteConfig.social.instagram` |
| 80 сабак, модули, оценивание | `src/data/islam-foundations-program.ts` |
| Прочий контент курса | `src/data/course-data.ts` |

Инварианты данных (ровно 80 сабак 1–80, 8 модулей, оценивание = 100 баллов)
проверяются `validateProgram()` в `islam-foundations-program.ts` при импорте в
dev-режиме.

## Server / client conventions

По умолчанию компоненты серверные. `"use client"` добавляется только там, где
нужен браузерный runtime (обработчики, состояние, `window`/`document`):
hero/CTA с открытием формы, header/drawer, sticky bar, sheet и форма, аккордеоны.
Не переводить статические секции в client без измеримой пользы.

## Государственная символика

Официальные флаг и герб КР **не изображаются** — используются только
стилизованные декоративные мотивы (түндүк, орнаменты). Правила и порядок
добавления проверенных официальных ассетов описаны в [`ATTRIBUTION.md`](./ATTRIBUTION.md).

## Deployment

Деплой выполняет **Vercel** автоматически по push в `main`. Отдельного
deployment-workflow в репозитории нет; GitHub Actions (`.github/workflows/quality.yml`)
запускает только lint + typecheck + build на PR и push в `main`.
