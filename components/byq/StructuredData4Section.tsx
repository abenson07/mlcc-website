const items = [
  { title: "Wireframe Architect", label: "Label placeholder", href: "/volunteer/template" },
  { title: "Pixel Skeleton", label: "Label placeholder", href: "/volunteer/template" },
  { title: "Layout Surgeon", label: "Label placeholder", href: "/volunteer/template" },
  { title: "Placeholder Hero", label: "Label placeholder", href: "/volunteer/template" },
];

export function StructuredData4Section({ title }: { title: string }) {
  return (
    <section className="bg-sparkles-cream">
      <div className="px-8 max-[767px]:px-4">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="py-40 max-[767px]:py-20">
            <div className="flex flex-col items-center justify-start gap-20 max-[767px]:gap-12">
              <div className="text-center">
                <h2 className="m-0 font-display text-[3rem] leading-[3.25rem] font-bold tracking-[-0.125rem] text-puget-night max-[767px]:text-[2rem] max-[767px]:leading-7 max-[767px]:tracking-[-0.031rem]">
                  {title}
                </h2>
              </div>

              <div className="relative w-full max-w-[49.75rem] max-[767px]:max-w-none">
                <div className="w-full border-t border-sparkles-navy/16">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between border-b border-sparkles-navy/16 py-8 max-[767px]:flex-wrap max-[767px]:gap-8 max-[479px]:flex-col"
                    >
                      <div className="flex flex-col items-start justify-start gap-4">
                        <div className="font-display text-[1.75rem] leading-8 font-bold tracking-[-0.0625rem] text-puget-night max-[767px]:text-[1.5rem] max-[767px]:leading-7">
                          {item.title}
                        </div>
                        <div className="font-body text-xs leading-4 font-bold uppercase tracking-[0.0625rem] text-sparkles-navy">
                          {item.label}
                        </div>
                      </div>

                      <a
                        href={item.href}
                        className="inline-flex shrink-0 items-center justify-center rounded-[2rem] border border-sparkles-navy bg-sparkles-navy px-4 py-3 font-display text-sm leading-5 font-bold text-sparkles-cream no-underline transition-all duration-300 hover:border-sparkles-navy/90 hover:bg-sparkles-navy/90"
                      >
                        Primary
                      </a>
                    </div>
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

export default StructuredData4Section;
