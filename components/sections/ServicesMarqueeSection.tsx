"use client";

import * as React from "react";

const involvementOptions = [
  {
    title: "Events Committee",
    img: "https://byqsupply-components.netlify.app/sparkles/images/ServicesImage1.jpg",
    imgSet:
      "https://byqsupply-components.netlify.app/sparkles/images/ServicesImage1-p-500.jpg 500w, https://byqsupply-components.netlify.app/sparkles/images/ServicesImage1-p-800.jpg 800w, https://byqsupply-components.netlify.app/sparkles/images/ServicesImage1.jpg 996w",
  },
  {
    title: "Programs & Activities",
    img: "https://byqsupply-components.netlify.app/sparkles/images/ServicesImage2.jpg",
    imgSet:
      "https://byqsupply-components.netlify.app/sparkles/images/ServicesImage2-p-500.jpg 500w, https://byqsupply-components.netlify.app/sparkles/images/ServicesImage2-p-800.jpg 800w, https://byqsupply-components.netlify.app/sparkles/images/ServicesImage2.jpg 996w",
  },
  {
    title: "Membership & Outreach",
    img: "https://byqsupply-components.netlify.app/sparkles/images/ServicesImage3.jpg",
    imgSet:
      "https://byqsupply-components.netlify.app/sparkles/images/ServicesImage3-p-500.jpg 500w, https://byqsupply-components.netlify.app/sparkles/images/ServicesImage3-p-800.jpg 800w, https://byqsupply-components.netlify.app/sparkles/images/ServicesImage3.jpg 996w",
  },
  {
    title: "Fundraising",
    img: "https://byqsupply-components.netlify.app/sparkles/images/ServicesImage4.jpg",
    imgSet:
      "https://byqsupply-components.netlify.app/sparkles/images/ServicesImage4-p-500.jpg 500w, https://byqsupply-components.netlify.app/sparkles/images/ServicesImage4-p-800.jpg 800w, https://byqsupply-components.netlify.app/sparkles/images/ServicesImage4.jpg 996w",
  },
  {
    title: "Facilities & Grounds",
    img: "https://byqsupply-components.netlify.app/sparkles/images/ServicesImage5.jpg",
    imgSet:
      "https://byqsupply-components.netlify.app/sparkles/images/ServicesImage5-p-500.jpg 500w, https://byqsupply-components.netlify.app/sparkles/images/ServicesImage5-p-800.jpg 800w, https://byqsupply-components.netlify.app/sparkles/images/ServicesImage5.jpg 996w",
  },
  {
    title: "Youth & Family Programs",
    img: "https://byqsupply-components.netlify.app/sparkles/images/ServicesImage6.jpg",
    imgSet:
      "https://byqsupply-components.netlify.app/sparkles/images/ServicesImage6-p-500.jpg 500w, https://byqsupply-components.netlify.app/sparkles/images/ServicesImage6-p-800.jpg 800w, https://byqsupply-components.netlify.app/sparkles/images/ServicesImage6.jpg 996w",
  },
  {
    title: "Volunteer Corps",
    img: "https://byqsupply-components.netlify.app/sparkles/images/ServicesImage7.jpg",
    imgSet:
      "https://byqsupply-components.netlify.app/sparkles/images/ServicesImage7-p-500.jpg 500w, https://byqsupply-components.netlify.app/sparkles/images/ServicesImage7-p-800.jpg 800w, https://byqsupply-components.netlify.app/sparkles/images/ServicesImage7.jpg 996w",
  },
];

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20" fill="currentColor">
      <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none">
      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InvolvementCard({ title, img, imgSet }: { title: string; img: string; imgSet: string }) {
  return (
    <a
      href="#"
      className="group relative flex overflow-hidden rounded-2xl text-[#fdf8f1] uppercase no-underline w-[20.75rem] h-[26.25rem] shrink-0"
    >
      <div className="absolute inset-0 z-[3] w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt={title}
          srcSet={imgSet}
          sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
          loading="lazy"
        />
      </div>
      <div
        className="relative z-[4] w-full h-full flex justify-between items-end py-6 pl-6 pr-[7.5rem]"
        style={{ backgroundImage: "linear-gradient(0deg, rgba(13,21,38,0.64), rgba(13,21,38,0) 50%)" }}
      >
        <div className="font-[family-name:var(--font-decalotype)] text-[2.75rem] leading-10 font-bold tracking-[-0.031rem] uppercase">
          {title}
        </div>
      </div>
      <div className="absolute z-10 right-6 bottom-6 flex items-center justify-center rounded-full backdrop-blur-md p-4 bg-[#0d152614] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="w-5 h-5">
          <ArrowIcon />
        </div>
      </div>
    </a>
  );
}

function InvolvementCardMobile({ title, img, imgSet }: { title: string; img: string; imgSet: string }) {
  return (
    <a
      href="#"
      className="group relative flex overflow-hidden rounded-2xl text-[#fdf8f1] uppercase no-underline w-[20.75rem] h-[22.5rem] shrink-0"
    >
      <div className="absolute inset-0 z-[3] w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt={title}
          srcSet={imgSet}
          sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
          loading="lazy"
        />
      </div>
      <div
        className="relative z-[4] w-full h-full flex justify-between items-end p-5 pr-20"
        style={{ backgroundImage: "linear-gradient(0deg, rgba(13,21,38,0.64), rgba(13,21,38,0) 50%)" }}
      >
        <div className="font-[family-name:var(--font-decalotype)] text-[2rem] leading-7 font-bold tracking-[-0.031rem] uppercase">
          {title}
        </div>
      </div>
      <div className="absolute z-10 right-5 bottom-5 flex items-center justify-center rounded-full backdrop-blur-md p-3 bg-[#0d152614] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="w-5 h-5">
          <ArrowIcon />
        </div>
      </div>
    </a>
  );
}

export function ServicesMarqueeSection() {
  const headlineRef = React.useRef<HTMLDivElement>(null);
  const [headlineVisible, setHeadlineVisible] = React.useState(false);

  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [sliderVisible, setSliderVisible] = React.useState(false);

  const bottomRef = React.useRef<HTMLDivElement>(null);
  const [bottomVisible, setBottomVisible] = React.useState(false);

  const [slide, setSlide] = React.useState(0);
  const totalSlides = involvementOptions.length;

  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const makeObs = (ref: React.RefObject<HTMLDivElement | null>, setter: (v: boolean) => void) => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setter(true);
            obs.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      obs.observe(el);
      observers.push(obs);
    };

    makeObs(headlineRef, setHeadlineVisible);
    makeObs(sliderRef, setSliderVisible);
    makeObs(bottomRef, setBottomVisible);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handlePrev = () => setSlide((s) => Math.max(0, s - 1));
  const handleNext = () => setSlide((s) => Math.min(totalSlides - 1, s + 1));

  return (
    <>
      <style>{`
        @keyframes marquee-services {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-services {
          animation: marquee-services 45s linear infinite;
        }
        .animate-marquee-services:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="overflow-hidden py-20 max-[767px]:py-16">
        <div className="px-8 max-[767px]:px-4">
          <div className="z-[2] w-full max-w-[112.5rem] mx-auto">
            <div
              ref={headlineRef}
              className={`
                flex flex-col justify-start items-start mb-8 gap-8 max-w-[42.5rem]
                max-[767px]:mb-6 max-[767px]:gap-6
                transition-all duration-700 ease-out
                ${headlineVisible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-[12px] translate-y-5"}
              `}
            >
              <div className="flex items-center justify-center text-center backdrop-blur-md px-2 py-1 rounded-2xl bg-[#f2ece5] text-[#0d1526]">
                <div className="font-[family-name:var(--font-bricolage)] text-xs leading-4 font-bold tracking-[0.047rem] uppercase">
                  Community volunteers welcome
                </div>
              </div>

              <h2 className="m-0 font-[family-name:var(--font-decalotype)] text-[5rem] leading-[4rem] font-bold tracking-[-0.125rem] text-puget-night max-[767px]:text-[3rem] max-[767px]:leading-10 max-[767px]:tracking-[-0.094rem]">
                Ways to get involved
              </h2>
            </div>

            <div className="w-full max-[767px]:hidden">
              <div className="overflow-hidden w-full">
                <div className="flex items-center gap-4 w-max animate-marquee-services">
                  {involvementOptions.map((option, i) => (
                    <div key={`a-${i}`} className="shrink-0">
                      <InvolvementCard title={option.title} img={option.img} imgSet={option.imgSet} />
                    </div>
                  ))}
                  {involvementOptions.map((option, i) => (
                    <div key={`b-${i}`} className="shrink-0">
                      <InvolvementCard title={option.title} img={option.img} imgSet={option.imgSet} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              ref={sliderRef}
              className={`
                hidden max-[767px]:block
                transition-all duration-700 ease-out
                ${sliderVisible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-[12px] translate-y-5"}
              `}
            >
              <div className="overflow-hidden mb-8 max-w-[20.75rem]">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${(slide * 100) / totalSlides}%)`,
                    width: `${totalSlides * 100}%`,
                  }}
                >
                  {involvementOptions.map((option, i) => (
                    <div
                      key={i}
                      className="shrink-0 box-border pr-3 last:pr-0"
                      style={{ width: `${100 / totalSlides}%` }}
                    >
                      <InvolvementCardMobile title={option.title} img={option.img} imgSet={option.imgSet} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={slide === 0}
                  className="group flex items-center justify-center cursor-pointer border border-transparent rounded-full backdrop-blur-md transition-colors duration-300 disabled:opacity-40 p-3 bg-[#0d152614] text-[#0d1526] hover:bg-[#0d1526] hover:text-[#fdf8f1]"
                >
                  <div className="w-5 h-5 rotate-180">
                    <ArrowIcon />
                  </div>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={slide === totalSlides - 1}
                  className="group flex items-center justify-center cursor-pointer border border-transparent rounded-full backdrop-blur-md transition-colors duration-300 disabled:opacity-40 p-3 bg-[#0d152614] text-[#0d1526] hover:bg-[#0d1526] hover:text-[#fdf8f1]"
                >
                  <div className="w-5 h-5">
                    <ArrowIcon />
                  </div>
                </button>
              </div>
            </div>

            <div
              ref={bottomRef}
              className={`
                flex flex-col justify-start items-start max-w-[28rem] mt-16 gap-4
                max-[767px]:mt-10 max-[767px]:gap-3
                transition-all duration-700 ease-out delay-200
                ${bottomVisible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-[12px] translate-y-5"}
              `}
            >
              <p className="m-0 font-[family-name:var(--font-bricolage)] text-base leading-6 font-normal text-[#0d1526]">
                There&apos;s a place for everyone at MLCC. Join a committee that matches your interests, or reach out and we&apos;ll help you find the right fit.
              </p>
              <a
                href="#"
                className="flex justify-start items-center gap-1 no-underline uppercase transition-colors duration-[350ms] font-[family-name:var(--font-decalotype)] text-lg leading-4 font-bold text-[#0d1526] hover:text-[#0d1526e0]"
              >
                <span>See all opportunities</span>
                <span className="flex items-center justify-center shrink-0 w-4 h-4">
                  <ChevronRightIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesMarqueeSection;
