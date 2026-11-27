import { ArrowRight, CalendarBlank, FileText, ShieldCheck, Translate } from "@phosphor-icons/react";
import { getLegalPage } from "./legalContent";
import { useCopy } from "./i18n";

export function LegalContentPage({ slug }) {
  const copy = useCopy();
  const page = getLegalPage(slug);

  if (!page) return null;

  return (
    <>
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-hero-copy" lang="en">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
          </div>
          <aside className="legal-meta" aria-label={copy.legal.docInfo}>
            <span><CalendarBlank size={20} aria-hidden="true" /> {copy.legal.lastUpdated} <strong>{page.lastUpdated}</strong></span>
            <span><FileText size={20} aria-hidden="true" /> {copy.legal.version} <strong>{page.version}</strong></span>
          </aside>
        </div>
      </section>

      {copy.legal.governing ? (
        <p className="legal-governing">
          <Translate size={19} weight="regular" aria-hidden="true" />
          {copy.legal.governing}
        </p>
      ) : null}

      <div className="legal-content-shell">
        <aside className="legal-toc">
          <div>
            <span>{copy.legal.onThisPage}</span>
            <nav aria-label={`${page.title} ${copy.legal.sectionsAria}`} lang="en">
              {page.toc.map((entry) => (
                <button key={entry.id} type="button" onClick={() => document.getElementById(entry.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}>
                  {entry.title.replace(/^\d+\.\s*/, "")}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <article className="legal-article" lang="en">
          <div className="legal-notice">
            <ShieldCheck size={24} weight="regular" aria-hidden="true" />
            <p lang={undefined}>{copy.legal.notice}</p>
          </div>
          {/* Approved wording, rendered exactly as published. See legalContent.ts. */}
          <div className="legal-document" dangerouslySetInnerHTML={{ __html: page.html }} />
        </article>
      </div>

      <section className="legal-help">
        <div>
          <p className="eyebrow">{copy.legal.helpEyebrow}</p>
          <h2>{copy.legal.helpTitle}</h2>
          <p>{copy.legal.helpBody}</p>
        </div>
        <a className="button button-orange" href="mailto:support@sonitransfer.com">
          {copy.legal.helpCta} <ArrowRight size={18} weight="bold" aria-hidden="true" />
        </a>
      </section>
    </>
  );
}
