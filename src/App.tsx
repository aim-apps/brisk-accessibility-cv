import {
  Accessibility,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Keyboard,
  MousePointer2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';

const candidate = {
  name: 'Monika Kowalewska',
  role: 'Frontend Engineer, Accessibility',
  email: 'kowalewska.mnk@gmail.com',
  location: 'Poland · Remote · async-first',
  photoSrc: '/monika-kowalewska.jpg',
  photoAlt:
    'Portrait of Monika Kowalewska, frontend engineer applying for the Brisk Teaching accessibility contractor role',
};

type IconComponent = ComponentType<{ 'aria-hidden': 'true'; className: string }>;
type FitCard = [IconComponent, string, string];

const fitCards: FitCard[] = [
  [
    FileCheck2,
    'Audit findings into shipped fixes',
    'I’ve worked through WCAG audit findings in a production product after US accessibility requirements became urgent for the business.',
  ],
  [
    Keyboard,
    'Keyboard and focus flows',
    'Modals, menus, forms, skip links, focus order, focus visibility, and escape paths treated as product behavior.',
  ],
  [
    Accessibility,
    'Screen-reader-aware React UI',
    'Hands-on remediation with NVDA, semantic HTML, accessible names, practical ARIA, and verified user flows.',
  ],
  [
    ShieldCheck,
    'Systemic remediation',
    'A11y work is tedious, but it becomes manageable when fixed at the reusable component level and documented well.',
  ],
];

const skills = [
  'React',
  'TypeScript',
  'WCAG 2.1 AA',
  'Semantic HTML',
  'ARIA',
  'Keyboard navigation',
  'Focus management',
  'NVDA',
  'Screen reader checks',
  'Design systems',
  'Component remediation',
  'Documentation',
  'CSS layout',
  'Testing mindset',
  'Async communication',
  'AI-assisted development',
];

const focusClass =
  'focus-visible:outline-none focus-visible:ring-[6px] focus-visible:ring-[#FF4FD8] focus-visible:ring-offset-[6px] focus-visible:ring-offset-[#FFF8E8] focus-visible:shadow-[0_0_0_12px_#FFFFFF,8px_8px_0_#202124] focus-visible:animate-[focus-pop_520ms_ease-out]';
const focusLabelClass = `${focusClass} focus-visible:after:pointer-events-none focus-visible:after:absolute focus-visible:after:-top-10 focus-visible:after:left-1/2 focus-visible:after:z-50 focus-visible:after:-translate-x-1/2 focus-visible:after:-rotate-3 focus-visible:after:whitespace-nowrap focus-visible:after:rounded-xl focus-visible:after:border-2 focus-visible:after:border-[#202124] focus-visible:after:bg-[#FF4FD8] focus-visible:after:px-3 focus-visible:after:py-1 focus-visible:after:font-mono focus-visible:after:text-xs focus-visible:after:font-black focus-visible:after:text-white focus-visible:after:shadow-[3px_3px_0_#202124] focus-visible:after:content-['yeah,_focus_works!']`;

function SkipLink() {
  return (
    <a
      href="#main"
      className={`sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#202124] focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white ${focusClass}`}
    >
      Skip to CV content
    </a>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border-2 border-[#202124] bg-white px-4 py-2 text-sm font-bold text-[#202124] shadow-[3px_3px_0_#202124]">
      {children}
    </span>
  );
}

function CodeSticker({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute z-20 rounded-xl border-2 border-[#202124] bg-white px-3 py-2 font-mono text-xs font-black text-[#202124] shadow-[3px_3px_0_#202124] ${className}`}
    >
      {children}
    </span>
  );
}

function FocusDemoSticker({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute z-20 rounded-xl border-2 border-[#202124] bg-[#FF4FD8] px-3 py-2 font-mono text-xs font-black text-white shadow-[3px_3px_0_#202124] ${className}`}
    >
      :focus-visible ✨
    </span>
  );
}

function Section({ eyebrow, title, children, id }: { eyebrow: string; title: string; children: ReactNode; id: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6B3DEB]">{eyebrow}</p>
      <h2 id={`${id}-heading`} className="mt-2 text-3xl font-black tracking-tight text-[#202124] md:text-5xl">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF8E8] text-[#202124] antialiased">
      <style>{`
        @keyframes focus-pop {
          0% { transform: translate(-2px, -2px) scale(0.98) rotate(-1deg); }
          45% { transform: translate(1px, 1px) scale(1.04) rotate(1deg); }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .focus-visible\\:animate-\\[focus-pop_520ms_ease-out\\]:focus-visible {
            animation: none !important;
          }
        }
      `}</style>
      <SkipLink />
      <header className="sticky top-0 z-40 border-b-2 border-[#202124] bg-[#FFF8E8]/95 backdrop-blur" aria-label="CV site header">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4" aria-label="Main navigation">
          <a href="#top" className={`relative rounded-full bg-[#B7F34B] px-4 py-2 text-sm font-black ${focusClass}`}>
            MK<span className="sr-only"> — Monika Kowalewska CV home</span>
          </a>
          <ul className="hidden items-center gap-6 text-sm font-black md:flex">
            <li>
              <a className={`relative rounded-md ${focusClass}`} href="#fit">
                Fit
              </a>
            </li>
            <li>
              <a className={`relative rounded-md ${focusClass}`} href="#work">
                Work
              </a>
            </li>
            <li>
              <a className={`relative rounded-md ${focusClass}`} href="#skills">
                Skills
              </a>
            </li>
          </ul>
          <a
            href={`mailto:${candidate.email}`}
            aria-label="Email Monika about the Brisk Teaching accessibility contractor role"
            className={`relative inline-flex items-center gap-2 rounded-full border-2 border-[#202124] bg-[#FF6B9A] px-5 py-3 text-sm font-black shadow-[4px_4px_0_#202124] transition hover:-translate-x-0.5 hover:-translate-y-0.5 ${focusClass}`}
          >
            Contact <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </a>
        </nav>
      </header>

      <main id="main" tabIndex={-1} className="outline-none">
        <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden border-b-2 border-[#202124]">
          <div aria-hidden="true" className="absolute -left-20 top-24 h-56 w-56 rounded-full bg-[#6B3DEB] opacity-20 blur-2xl" />
          <div aria-hidden="true" className="absolute right-6 top-16 h-28 w-28 rotate-12 rounded-[2rem] bg-[#B7F34B] shadow-[6px_6px_0_#202124]" />
          <div aria-hidden="true" className="absolute bottom-10 right-1/4 h-20 w-20 rounded-full bg-[#63D9FF] shadow-[5px_5px_0_#202124]" />

          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
            <div className="relative">
              <CodeSticker className="right-8 top-0 hidden rotate-3 lg:block">aria-labelledby=&quot;hero-heading&quot;</CodeSticker>
              <FocusDemoSticker className="left-56 top-16 hidden rotate-6 lg:block" />
              <p className="inline-flex items-center gap-2 rounded-full border-2 border-[#202124] bg-white px-4 py-2 text-sm font-black uppercase tracking-wide shadow-[4px_4px_0_#202124]">
                <Sparkles aria-hidden="true" className="h-4 w-4 text-[#6B3DEB]" />
                Tailored for Brisk Teaching
              </p>
              <h1 id="hero-heading" className="mt-8 max-w-4xl text-5xl font-black leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
                Accessibility that works where your product already works
              </h1>
              <p className="mt-8 max-w-2xl text-xl font-bold leading-8 md:text-2xl">
                {candidate.name} · {candidate.role}. I help teams turn WCAG audit findings into practical React/TypeScript fixes, reusable component patterns, and verified user flows.
              </p>
              <div className="mt-8 flex flex-wrap gap-3" aria-label="Candidate quick facts">
                <Pill>{candidate.location}</Pill>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#fit"
                  className={`relative inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#202124] bg-[#B7F34B] px-7 py-4 text-base font-black shadow-[5px_5px_0_#202124] transition hover:-translate-x-0.5 hover:-translate-y-0.5 ${focusLabelClass}`}
                >
                  See role fit <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </a>
                <a
                  href="#a11y-notes"
                  className={`relative inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#202124] bg-white px-7 py-4 text-base font-black shadow-[5px_5px_0_#202124] transition hover:-translate-x-0.5 hover:-translate-y-0.5 ${focusClass}`}
                >
                  Accessibility notes
                </a>
              </div>
            </div>
            <aside aria-labelledby="snapshot-heading" className="relative rounded-[2rem] border-2 border-[#202124] bg-white p-4 shadow-[8px_8px_0_#202124] md:self-end">
              <CodeSticker className="-left-5 top-10 -rotate-6">alt=&quot;portrait&quot;</CodeSticker>
              <CodeSticker className="right-6 top-72 rotate-3">aria-labelledby</CodeSticker>
              <div aria-hidden="true" className="absolute -right-4 -top-4 h-16 w-16 rotate-12 rounded-2xl border-2 border-[#202124] bg-[#FFD166] shadow-[4px_4px_0_#202124]" />
              <figure className="overflow-hidden rounded-[1.5rem] border-2 border-[#202124] bg-[#202124]">
                <img src={candidate.photoSrc} alt={candidate.photoAlt} className="aspect-[4/3] w-full object-cover object-[50%_38%]" />
              </figure>
              <div className="mt-5 rounded-[1.5rem] border-2 border-[#202124] bg-[#FFF8E8] p-5">
                <h2 id="snapshot-heading" className="text-2xl font-black">
                  Contract snapshot
                </h2>
                <dl className="mt-5 space-y-4">
                  <div>
                    <dt className="text-sm font-black uppercase tracking-wide text-[#6B3DEB]">Best fit</dt>
                    <dd className="mt-1 text-lg font-bold">Accessibility remediation for existing React UI</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-black uppercase tracking-wide text-[#6B3DEB]">Delivery style</dt>
                    <dd className="mt-1 text-lg font-bold">Async-first, milestone-based, low meeting overhead</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-black uppercase tracking-wide text-[#6B3DEB]">I optimize for</dt>
                    <dd className="mt-1 text-lg font-bold">User impact, component reuse, regression-resistant fixes</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </section>

        <div className="mx-auto max-w-7xl space-y-20 px-5 py-16 md:py-24">
          <Section id="fit" eyebrow="Why this role" title="A11y findings in. Better product out.">
            <div className="grid gap-5 md:grid-cols-2">
              {fitCards.map(([Icon, title, body]) => (
                <article key={title} className="rounded-[2rem] border-2 border-[#202124] bg-white p-6 shadow-[6px_6px_0_#202124]">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#202124] bg-[#63D9FF]">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-lg font-semibold leading-7 text-[#3b3b3b]">{body}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="work" eyebrow="Selected experience" title="Production UI, not portfolio theater.">
            <article className="relative rounded-[2rem] border-2 border-[#202124] bg-white p-6 shadow-[6px_6px_0_#202124]">
              <CodeSticker className="-right-4 -top-4 rotate-3">aria-label=&quot;WCAG remediation&quot;</CodeSticker>
              <h3 className="text-2xl font-black">Frontend Developer / Frontend Engineer</h3>
              <p className="mt-1 text-lg font-bold text-[#6B3DEB]">Zoovu · production React + TypeScript UI · distributed US/EU team</p>
              <ul className="mt-6 grid gap-3">
                <li className="flex gap-3 text-lg font-semibold leading-7">
                  <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#178F52]" />
                  Worked on a real WCAG audit backlog when accessibility requirements became mandatory for our US market.
                </li>
                <li className="flex gap-3 text-lg font-semibold leading-7">
                  <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#178F52]" />
                  Remediated issues with NVDA and screen-reader-oriented checks: labels, semantics, focus behavior, keyboard paths, and component states.
                </li>
                <li className="flex gap-3 text-lg font-semibold leading-7">
                  <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#178F52]" />
                  Turned tedious one-by-one fixes into reusable, documented component patterns so the same barrier did not keep coming back.
                </li>
                <li className="flex gap-3 text-lg font-semibold leading-7">
                  <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#178F52]" />
                  Built and maintained production frontend features in complex React/TypeScript product flows with API integration and reusable UI structure.
                </li>
              </ul>
            </article>
          </Section>

          <Section id="skills" eyebrow="Toolbox" title="Frontend skills mapped to accessibility delivery.">
            <ul className="flex flex-wrap gap-3" aria-label="Skills">
              {skills.map((skill) => (
                <li key={skill}>
                  <Pill>{skill}</Pill>
                </li>
              ))}
            </ul>
          </Section>

          <section id="a11y-notes" aria-labelledby="a11y-notes-heading" className="relative rounded-[2rem] border-2 border-[#202124] bg-[#D9CBFF] p-7 shadow-[8px_8px_0_#202124]">
            <CodeSticker className="right-8 top-8 rotate-6">role=&quot;note&quot;</CodeSticker>
            <div className="flex max-w-4xl flex-col gap-5 md:flex-row md:items-start">
              <MousePointer2 aria-hidden="true" className="h-10 w-10 shrink-0" />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em]">Built as a tiny accessibility demo</p>
                <h2 id="a11y-notes-heading" className="mt-2 text-3xl font-black md:text-5xl">
                  The CV is part of the signal.
                </h2>
                <p className="mt-4 text-lg font-semibold leading-8">
                  This page uses semantic landmarks, a skip link, one consistent high-contrast focus style, visible keyboard navigation states, labelled navigation, descriptive link names, non-color-only status cues, decorative icons hidden from assistive technology, and visual code stickers that make the accessibility intent visible in the UI.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
