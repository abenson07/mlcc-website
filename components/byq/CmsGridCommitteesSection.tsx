"use client";

import * as React from "react";
import Link from "next/link";

const IMAGE_URL =
  "https://byqsupply-components.netlify.app/skeletons/cms-grid/images/vertical-pattern-2.svg";

const COMMITTEES = [
  { title: "Newsletter", href: "/committees/newsletter" },
  { title: "Events", href: "/committees/events" },
  { title: "Emergency Hub", href: "/committees/emergency-hub" },
  { title: "Communications", href: "/committees/communications" },
  { title: "Advocacy", href: "/committees/advocacy" },
  { title: "Business Committee", href: "/committees/business-committee" },
] as const;

const SLIDE_COUNT = 4;

function ScissorsIcon() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function CircleIcon() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12.5" r="10" />
      <line x1="12" y1="8.5" x2="12" y2="12.5" />
      <line x1="12" y1="16.5" x2="12.01" y2="16.5" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 5L12.5 10L7.5 15"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardSlider() {
  const [slide, setSlide] = React.useState(0);

  const prev = () => setSlide((s) => (s === 0 ? SLIDE_COUNT - 1 : s - 1));
  const next = () => setSlide((s) => (s === SLIDE_COUNT - 1 ? 0 : s + 1));

  return (
    <div className="absolute inset-0 h-full w-full bg-transparent">
      <div className="relative h-full w-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${slide * 100}%)`, width: `${SLIDE_COUNT * 100}%` }}
        >
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <div key={i} className="h-full shrink-0" style={{ width: `${100 / SLIDE_COUNT}%` }}>
              <div className="h-full w-full">
                <img loading="lazy" src={IMAGE_URL} alt="" className="z-[1] h-full w-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          className="absolute left-0 top-1/2 z-10 ml-5 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 bg-sparkles-cream/64 text-sparkles-navy backdrop-blur-[16px]"
          aria-label="Previous slide"
        >
          <span className="flex h-4 w-4 items-center justify-center">
            <ChevronLeftIcon />
          </span>
        </button>

        <button
          type="button"
          onClick={next}
          className="absolute right-0 top-1/2 z-10 mr-5 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 bg-sparkles-cream/64 text-sparkles-navy backdrop-blur-[16px]"
          aria-label="Next slide"
        >
          <span className="flex h-4 w-4 items-center justify-center">
            <ChevronRightIcon />
          </span>
        </button>
      </div>
    </div>
  );
}

function Card({ title, href }: { title: string; href: string }) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <div className="relative h-[22.5rem] overflow-hidden max-[479px]:h-[17rem]">
          <div className="absolute left-0 top-3 z-10 bg-sparkles-navy/48 px-2 py-1 text-sparkles-cream backdrop-blur-[16px]">
            <div className="font-body text-[0.625rem] font-bold uppercase leading-3 tracking-[0.0625rem]">
              Label placeholder
            </div>
          </div>
          <CardSlider />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex h-6 items-center justify-start gap-4">
            <div className="flex items-center justify-start gap-2">
              <span className="flex h-4 w-4 flex-none items-center justify-center overflow-visible text-sparkles-navy">
                <ScissorsIcon />
              </span>
              <div className="font-body text-xs font-semibold uppercase leading-4 tracking-[0.0625rem] text-sparkles-navy">
                Label
              </div>
            </div>
            <div className="flex items-center justify-start gap-2">
              <span className="flex h-4 w-4 flex-none items-center justify-center overflow-visible text-sparkles-navy">
                <CircleIcon />
              </span>
              <div className="font-body text-xs font-semibold uppercase leading-4 tracking-[0.0625rem] text-sparkles-navy">
                Label
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              href={href}
              className="font-display text-2xl font-bold leading-7 tracking-[-0.03125rem] text-puget-night no-underline hover:underline"
            >
              {title}
            </Link>
            <div className="h-6 overflow-hidden max-[479px]:h-5">
              <div>
                <div className="flex gap-2 font-body text-sm text-sparkles-navy">
                  <div>Committee</div>
                  <div>·</div>
                  <div>MLCC</div>
                </div>
                <div>
                  <Link href={href} className="font-body text-sm text-sparkles-navy underline">
                    View committee
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CmsGridCommitteesSection() {
  return (
    <section className="bg-sparkles-cream text-sparkles-navy">
      <div className="px-8 max-[767px]:px-4">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="py-[7.5rem] max-[767px]:py-20">
            <div className="flex flex-col items-center justify-start gap-8">
              <div className="flex flex-col items-center justify-start gap-6 text-center max-[479px]:items-start max-[479px]:justify-start max-[479px]:text-left">
                <div className="inline-block rounded-[2rem] border border-sparkles-muted bg-white/50 px-3 py-2">
                  <div className="font-body text-xs font-bold uppercase leading-4 tracking-[0.0625rem] text-sparkles-navy">
                    Label placeholder
                  </div>
                </div>

                <h2 className="m-0 font-display text-5xl font-bold leading-[3.25rem] tracking-[-0.125rem] text-puget-night max-[767px]:text-[2.5rem] max-[767px]:leading-10 max-[767px]:tracking-[-0.0625rem]">
                  Committees
                </h2>
              </div>

              <div className="w-full">
                <div className="grid grid-cols-3 gap-8 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1 max-[479px]:gap-6">
                  {COMMITTEES.map((committee) => (
                    <Card key={committee.href} title={committee.title} href={committee.href} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CmsGridCommitteesSection;
