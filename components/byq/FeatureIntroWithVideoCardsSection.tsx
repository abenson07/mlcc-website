"use client";

import * as React from "react";

export function FeatureIntroWithVideoCardsSection() {
  const featuresRef = React.useRef<HTMLDivElement>(null);
  const [featuresVisible, setFeaturesVisible] = React.useState(false);

  React.useEffect(() => {
    const el = featuresRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturesVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const features = [
    {
      label: "Bone Frame",
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="m19 5 3-3" />
          <path d="m2 22 3-3" />
          <path d="M6.3 20.3a2.4 2.4 0 0 1-3.4-3.4l13.8-13.8a2.4 2.4 0 0 1 3.4 3.4Z" />
          <path d="M7.5 13.5 10 11" />
          <path d="M10.5 16.5 13 14" />
          <path d="M17.5 6.5 15 9" />
        </svg>
      ),
    },
    {
      label: "Hollow Shell",
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 5V2l-5.89 5.89" />
          <circle cx="16.6" cy="15.89" r="3" />
          <circle cx="8.11" cy="7.4" r="3" />
          <circle cx="12.35" cy="11.65" r="3" />
          <circle cx="13.91" cy="5.85" r="3" />
          <circle cx="18.15" cy="10.09" r="3" />
          <circle cx="6.56" cy="13.2" r="3" />
          <circle cx="10.8" cy="17.44" r="3" />
          <circle cx="5" cy="19" r="3" />
        </svg>
      ),
    },
    {
      label: "Silent Spine",
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
          <path d="M12 19v3" />
        </svg>
      ),
    },
    {
      label: "Empty Rib",
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
    {
      label: "Open Lattice",
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" />
        </svg>
      ),
    },
    {
      label: "Dry Timber",
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M8 7h8M8 11h6" />
        </svg>
      ),
    },
  ];

  const cardIconBubbles = (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 5V2l-5.89 5.89" />
      <circle cx="16.6" cy="15.89" r="3" />
      <circle cx="8.11" cy="7.4" r="3" />
      <circle cx="12.35" cy="11.65" r="3" />
      <circle cx="13.91" cy="5.85" r="3" />
      <circle cx="18.15" cy="10.09" r="3" />
      <circle cx="6.56" cy="13.2" r="3" />
      <circle cx="10.8" cy="17.44" r="3" />
      <circle cx="5" cy="19" r="3" />
    </svg>
  );

  const cardIconSpine = (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      <path d="M12 19v3" />
    </svg>
  );

  return (
    <div className="w-full">
      <section className="bg-sparkles-cream pt-[7.5rem] pb-20 max-[767px]:pt-20 max-[767px]:pb-12">
        <div className="px-8 max-[767px]:px-4">
          <div className="z-[2] w-full max-w-[1800px] mx-auto">
            <div className="flex flex-col items-center gap-16 max-[767px]:gap-12">
              <div className="max-w-[57rem] w-full mx-auto flex flex-col items-center gap-6 max-[767px]:gap-5">
                <div className="flex items-center gap-2 px-3 py-2 rounded-[2rem] border border-sparkles-muted bg-white/50">
                  <span className="font-body text-[0.625rem] leading-3 font-bold uppercase tracking-[0.0625rem] text-sparkles-navy">
                    Mission
                  </span>
                </div>

                <div className="text-center">
                  <h2 className="m-0 text-puget-night font-display text-[3rem] leading-[3.25rem] font-bold tracking-[-0.125rem] max-[767px]:text-[2rem] max-[767px]:leading-7 max-[767px]:tracking-[-0.031rem]">
                    Connecting neighbors to the people and things that matter most.
                  </h2>
                </div>
              </div>

              <div
                ref={featuresRef}
                className="grid w-full max-w-[57rem] grid-cols-3 gap-x-8 gap-y-10 max-[767px]:grid-cols-2 max-[479px]:flex max-[479px]:flex-col max-[479px]:gap-6 justify-center items-center mx-auto"
              >
                {features.map((feature, i) => (
                  <div
                    key={feature.label}
                    className={`flex flex-col items-center text-center gap-4 max-w-[10.25rem] transition-all duration-700 ease-out ${
                      featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    <div className="flex items-center justify-center flex-none w-8 h-8 text-sparkles-navy opacity-50">
                      {feature.icon}
                    </div>
                    <div className="font-body text-xl leading-7 font-semibold text-sparkles-navy">
                      {feature.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sparkles-cream pt-0 pb-[7.5rem] max-[767px]:pb-20">
        <div className="px-8 max-[767px]:px-4">
          <div className="z-[2] w-full max-w-[1800px] mx-auto">
            <div className="flex gap-4 items-stretch justify-center max-[767px]:gap-3 max-[479px]:flex-col">
              <div
                className="relative z-[1] rounded-3xl overflow-hidden text-sparkles-cream w-full max-w-[28rem] h-[35rem] max-[767px]:h-[25rem] max-[479px]:h-[18.75rem] max-[767px]:rounded-[1.25rem]"
                style={{
                  backgroundColor: "#0d1526",
                  backgroundImage:
                    'url("https://cdn.prod.website-files.com/68a8bac34ba5bc8cee4c21c1%2F695016cbee4099a70a798b6c_Freckled%20Portrait%20Close-Up_poster.0000000.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 flex items-end justify-between p-6 gap-8">
                  <div className="max-w-[14rem] pl-4 border-l border-sparkles-cream/30">
                    <div className="font-body text-xs leading-4 font-bold uppercase tracking-[0.0625rem] text-sparkles-cream">
                      Skeleton media placeholder description
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-none w-8 h-8 text-sparkles-cream">
                    {cardIconBubbles}
                  </div>
                </div>
              </div>

              <div className="relative z-[1] rounded-3xl overflow-hidden text-sparkles-navy w-full max-w-[28rem] h-[35rem] max-[767px]:h-[25rem] max-[479px]:h-[18.75rem] mt-[4.75rem] max-[479px]:mt-0 max-[767px]:rounded-[1.25rem]">
                <img
                  src="https://byqsupply-components.netlify.app/skeletons/intro-text/images/pattern-vertical-new.svg"
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover z-[1]"
                />
                <div className="absolute inset-0 flex items-end justify-between p-6 gap-8 z-[2]">
                  <div className="max-w-[14rem] pl-4 border-l border-sparkles-navy/30">
                    <div className="font-body text-xs leading-4 font-bold uppercase tracking-[0.0625rem] text-sparkles-navy">
                      Skeleton media placeholder description
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-none w-8 h-8 text-sparkles-navy">
                    {cardIconSpine}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeatureIntroWithVideoCardsSection;
