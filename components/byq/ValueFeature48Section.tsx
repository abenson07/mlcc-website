const cards = [
  {
    title: "Bone Frame",
    text: "This is skeleton filler text, written only to keep the shape alive. It simply marks the rhythm of where real words will go.",
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
        <path d="M15 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
        <path d="M7.5 7.5 16.5 16.5" />
        <path d="M16.5 7.5 7.5 16.5" />
        <path d="M3 15a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" />
        <path d="M15 3a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" />
      </svg>
    ),
    className: "",
  },
  {
    title: "Hollow Shell",
    text: "This is skeleton filler text, written only to keep the shape alive. It simply marks the rhythm of where real words will go.",
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.5a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 5.5v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2c1.5-1 3-3 3-5.5a7 7 0 0 0-7-7z" />
        <path d="M9 17.5h6" />
        <path d="M9.5 10.5 9 12" />
        <path d="M14.5 10.5 15 12" />
        <path d="M11 14.5h2" />
      </svg>
    ),
    className: "",
  },
  {
    title: "Silent Spine",
    text: "This is skeleton filler text, written only to keep the shape alive. It simply marks the rhythm of where real words will go.",
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M8 6c-2 0-4 1-4 3s2 3 4 3" />
        <path d="M16 6c2 0 4 1 4 3s-2 3-4 3" />
        <path d="M8 12c-2 0-4 1-4 3s2 3 4 3" />
        <path d="M16 12c2 0 4 1 4 3s-2 3-4 3" />
        <path d="M9 20c0-1.5 1.5-2 3-2s3 .5 3 2" />
      </svg>
    ),
    className: "max-[991px]:col-span-2 max-[767px]:col-span-1",
  },
];

export function ValueFeature48Section() {
  return (
    <section className="bg-sparkles-cream">
      <div className="px-8 max-[767px]:px-4">
        <div className="w-full max-w-[1800px] mx-auto">
          <div className="py-[7.5rem] max-[767px]:py-20">
            <div className="mb-20 max-[767px]:mb-12">
              <div className="text-center">
                <div className="mx-auto flex max-w-[42.5rem] flex-col items-center gap-6 max-[767px]:gap-5">
                  <div className="inline-block rounded-[2rem] border border-sparkles-muted bg-white/50 px-3 py-2">
                    <span className="font-body text-[0.625rem] leading-3 font-bold uppercase tracking-[0.0625rem] text-sparkles-navy">
                      Label placeholder
                    </span>
                  </div>
                  <h2 className="m-0 font-display text-[3rem] leading-[3.25rem] font-bold tracking-[-0.125rem] text-puget-night max-[767px]:text-[2rem] max-[767px]:leading-7 max-[767px]:tracking-[-0.031rem]">
                    Headline skeleton placeholder exists only to structure your layout
                  </h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 place-items-center gap-4 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className={`flex w-full flex-col items-center gap-12 rounded-2xl bg-sparkles-warm px-6 pb-6 pt-16 text-center ${card.className}`}
                >
                  <div className="mx-auto flex h-24 w-24 flex-none items-center justify-center text-sparkles-navy max-[991px]:h-16">
                    {card.icon}
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="font-display text-[2rem] leading-10 font-bold tracking-[-0.0625rem] text-puget-night max-[767px]:text-[1.75rem] max-[767px]:leading-8">
                      {card.title}
                    </div>
                    <div className="font-body text-base leading-6 font-normal text-sparkles-muted">
                      {card.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueFeature48Section;
