import { events } from "@/data/events";
import { EventCard } from "@/components/byq/EventCard";

const [featuredEvent, ...moreEvents] = events;

export function CmsGrid12Section({ title }: { title: string }) {
  return (
    <div className="bg-sparkles-cream text-sparkles-navy">
      <section className="bg-sparkles-cream pb-20 pt-[10rem] max-[767px]:pb-12 max-[767px]:pt-20">
        <div className="px-8 max-[767px]:px-4">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="mb-16 flex flex-col items-start gap-6">
              <div className="rounded-[2rem] border border-sparkles-muted bg-white/50 px-3 py-2">
                <span className="font-body text-xs leading-4 font-bold uppercase tracking-[0.0625rem] text-sparkles-navy">
                  Community
                </span>
              </div>
              <h1 className="m-0 font-display text-[3.75rem] leading-16 font-bold tracking-[-0.15625rem] text-puget-night max-[767px]:text-[2.5rem] max-[767px]:leading-10 max-[767px]:tracking-[-0.0625rem]">
                {title}
              </h1>
            </div>

            {featuredEvent && (
              <a
                href={featuredEvent.href}
                className="grid w-full grid-cols-2 gap-4 text-sparkles-navy no-underline max-[479px]:grid-cols-1"
                {...(featuredEvent.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div className="relative h-[30rem] w-full overflow-hidden rounded-xl max-[767px]:h-[20rem] max-[479px]:h-[15rem]">
                  <img
                    loading="lazy"
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="absolute inset-0 z-[1] h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 z-[2] flex items-start justify-start p-4">
                    <div className="flex flex-wrap gap-2">
                      <div className="rounded-[2rem] bg-sparkles-navy/32 px-3 py-2">
                        <span className="font-body text-[0.625rem] leading-3 font-bold uppercase tracking-[0.0625rem] text-sparkles-cream">
                          {featuredEvent.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full flex-col items-start justify-between gap-12 rounded-xl bg-sparkles-warm p-6">
                  <div className="flex flex-col gap-4">
                    <div className="font-display text-[1.75rem] leading-8 font-bold tracking-[-0.0625rem] text-puget-night">
                      {featuredEvent.title}
                    </div>
                    <div className="font-body text-base leading-6 font-normal text-sparkles-navy">
                      {featuredEvent.shortDescription}
                    </div>
                  </div>
                  <div className="font-body text-xs leading-4 font-bold text-sparkles-navy">View event</div>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="bg-sparkles-cream pb-[10rem] pt-20 max-[767px]:pb-20 max-[767px]:pt-12">
        <div className="px-8 max-[767px]:px-4">
          <div className="mx-auto w-full max-w-[1800px]">
            <div className="mb-16 flex flex-col items-start gap-6">
              <div className="rounded-[2rem] border border-sparkles-muted bg-white/50 px-3 py-2">
                <span className="font-body text-[0.625rem] leading-3 font-bold uppercase tracking-[0.0625rem] text-sparkles-navy">
                  Upcoming
                </span>
              </div>
              <h2 className="m-0 font-display text-[3rem] leading-[3.25rem] font-bold tracking-[-0.125rem] text-puget-night max-[767px]:text-[2rem] max-[767px]:leading-7 max-[767px]:tracking-[-0.031rem]">
                More events
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-8 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1 max-[479px]:gap-6">
              {moreEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CmsGrid12Section;
