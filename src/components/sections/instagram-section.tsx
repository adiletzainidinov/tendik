import { ExternalLink, PlayCircle } from "lucide-react";
import { siteConfig, type InstagramPost } from "@/config/site-config";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { SectionHeading } from "@/components/ui/section-heading";

const IG_GRADIENT =
  "linear-gradient(135deg, #833ab4 0%, #fd1d1d 55%, #fcb045 100%)";

export function InstagramSection() {
  const { handle, profileUrl, posts } = siteConfig.social.instagram;
  const visiblePosts = posts.slice(0, 3);
  const openLabel = `${siteConfig.name} курсунун Instagram баракчасын ачуу`;

  return (
    <section
      aria-labelledby="instagram-title"
      className="px-5 pt-10"
      id="instagram"
    >
      <SectionHeading
        eyebrow="Чыныгы сабактар"
        title="Сабактар кандай өтөрүн көрүңүз"
        description="Instagram баракчабыздан сабактардын жүрүшүн, балдардын Куран үйрөнүп жаткан учурларын жана чыныгы пикирлерди көрө аласыз."
      />

      <div className="mt-5 rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-[var(--shadow-soft)]"
            style={{ background: IG_GRADIENT }}
          >
            <InstagramIcon className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <div className="flex flex-col leading-tight">
            <p
              id="instagram-title"
              className="text-[16px] font-semibold text-text"
            >
              {handle}
            </p>
            <p className="text-[13px] text-muted">
              Сабактардан видеолор жана окутуу тууралуу пикирлер
            </p>
          </div>
        </div>

        <p className="mt-4 text-[13.5px] leading-relaxed text-muted">
          Сөз менен гана эмес — иш жүзүндө кандай окутуп жатканыбызды көрүңүз.
        </p>

        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={openLabel}
          className={
            "mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl " +
            "bg-primary px-4 text-[15px] font-medium text-white shadow-[var(--shadow-soft)] " +
            "transition-colors hover:bg-primary-dark active:scale-[0.99]"
          }
        >
          <InstagramIcon aria-hidden className="h-4 w-4" />
          Чыныгы видеолорду көрүү
          <ExternalLink aria-hidden className="h-4 w-4 opacity-80" />
        </a>
      </div>

      {visiblePosts.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2.5">
          {visiblePosts.map((post) => (
            <PostCard key={post.url} post={post} />
          ))}
        </ul>
      )}
    </section>
  );
}

function PostCard({ post }: { post: InstagramPost }) {
  const badge = post.type === "lesson" ? "Сабактан видео" : "Чыныгы пикир";
  return (
    <li>
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className={
          "flex items-start gap-3 rounded-2xl border border-border bg-surface p-3.5 shadow-[var(--shadow-soft)] " +
          "transition-colors hover:bg-primary-soft/40"
        }
      >
        <span
          aria-hidden
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-dark"
        >
          <PlayCircle className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="text-[11px] font-medium tracking-wide text-primary-dark uppercase">
            {badge}
          </span>
          <p
            className="break-words text-[14px] font-semibold text-text"
            style={{ overflowWrap: "anywhere" }}
          >
            {post.title}
          </p>
          {post.description && (
            <p
              className="break-words text-[12.5px] leading-relaxed text-muted"
              style={{ overflowWrap: "anywhere" }}
            >
              {post.description}
            </p>
          )}
          <span className="mt-1 inline-flex items-center gap-1 text-[12.5px] font-medium text-primary">
            Видеону көрүү
            <ExternalLink aria-hidden className="h-3.5 w-3.5" />
          </span>
        </div>
      </a>
    </li>
  );
}
