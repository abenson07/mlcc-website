const inputClassName =
  "mb-3 min-h-12 w-full rounded-lg border border-sparkles-warm bg-sparkles-cream px-4 py-2 font-body text-base leading-6 text-sparkles-navy/90 placeholder:text-sparkles-muted focus:border-sparkles-navy focus:outline-none";

const labelClassName =
  "mb-2 font-body text-xs leading-4 font-bold uppercase tracking-[0.0625rem] text-sparkles-navy";

export function ContactCtaPreFooterSection() {
  return (
    <section className="bg-sparkles-cream">
      <div className="px-8 max-[767px]:px-4">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="py-[7.5rem] max-[767px]:py-20">
            <div className="grid gap-16 rounded-2xl bg-sparkles-warm p-20 [grid-template-columns:1.5fr_1fr] max-[991px]:grid-cols-1 max-[479px]:p-12">
              <div>
                <div className="font-body text-xs leading-4 font-bold uppercase tracking-[0.0625rem] text-sparkles-navy">
                  Label placeholder
                </div>
                <div className="mb-8 mt-6 flex flex-col gap-6">
                  <div className="font-display text-[2.5rem] leading-[2.75rem] font-bold tracking-[-0.0625rem] text-puget-night max-[767px]:text-[2rem] max-[767px]:leading-7">
                    Headline skeleton placeholder
                  </div>
                  <div className="font-body text-xl leading-7 font-normal text-sparkles-navy max-[767px]:text-base max-[767px]:leading-6">
                    This is skeleton filler text, written only to keep the shape alive. It simply marks the rhythm of
                    where real words will go.
                  </div>
                </div>

                <form className="flex flex-col gap-0">
                  <div className="grid w-full grid-cols-2 gap-4 max-[479px]:grid-cols-1">
                    <div className="flex flex-col">
                      <label htmlFor="contact-first-name" className={labelClassName}>
                        Text Input
                      </label>
                      <input
                        className={inputClassName}
                        maxLength={256}
                        name="Input-Field"
                        placeholder="First Name"
                        type="text"
                        id="contact-first-name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="contact-last-name" className={labelClassName}>
                        Text Input
                      </label>
                      <input
                        className={inputClassName}
                        maxLength={256}
                        name="Input-Field"
                        placeholder="Last Name"
                        type="text"
                        id="contact-last-name"
                      />
                    </div>
                  </div>

                  <div className="grid w-full grid-cols-2 gap-4 max-[479px]:grid-cols-1">
                    <div className="flex flex-col">
                      <label htmlFor="contact-email" className={labelClassName}>
                        Text Input
                      </label>
                      <input
                        className={inputClassName}
                        maxLength={256}
                        name="Email"
                        placeholder="Email"
                        type="email"
                        id="contact-email"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="contact-phone" className={labelClassName}>
                        Text Input
                      </label>
                      <input
                        className={inputClassName}
                        maxLength={256}
                        name="Input-Field"
                        placeholder="Phone"
                        type="tel"
                        id="contact-phone"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="contact-message" className={labelClassName}>
                      Text Area
                    </label>
                    <textarea
                      id="contact-message"
                      name="Message"
                      maxLength={5000}
                      placeholder="Message"
                      className={`${inputClassName} min-h-20 resize-none pt-3`}
                    />
                  </div>

                  <div className="mb-3 flex flex-col">
                    <span className={labelClassName}>Checkbox field</span>
                    <label className="mb-2 flex cursor-pointer flex-row items-center pl-0">
                      <div className="mr-2 h-6 w-6 flex-none rounded-lg border border-sparkles-navy/16 bg-transparent" />
                      <input type="checkbox" name="Checkbox" id="contact-checkbox" className="absolute -z-10 opacity-0" />
                      <span className="mb-0 font-body text-base leading-6 font-normal text-sparkles-navy">Checkbox</span>
                    </label>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="cursor-pointer rounded-[2rem] border border-sparkles-navy bg-sparkles-navy px-4 py-3 font-display text-sm leading-5 font-bold text-sparkles-cream transition-all duration-300 hover:border-sparkles-navy/90 hover:bg-sparkles-navy/90"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>

              <div
                className="relative flex h-auto flex-col items-start justify-end overflow-clip rounded-lg p-6 text-sparkles-cream max-[991px]:h-[400px] max-[479px]:h-[300px]"
                style={{
                  backgroundImage:
                    "url('https://cdn.prod.website-files.com/6931c0eea92dec5b7ca905e9/6931c0eea92dec5b7ca907c5_patter-horizontal-new.svg')",
                  backgroundPosition: "50%",
                  backgroundSize: "cover",
                }}
              >
                <div className="relative z-[1] flex items-center gap-5">
                  <div className="h-[4.5rem] w-[4.5rem] flex-none overflow-hidden rounded-full max-[479px]:h-12 max-[479px]:w-12">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6931c0eea92dec5b7ca905e9/6931c0eea92dec5b7ca90809_User.svg"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-display text-2xl leading-7 font-bold tracking-[-0.03125rem] text-sparkles-cream">
                      Clara Holloway
                    </div>
                    <div className="font-body text-base leading-6 text-sparkles-cream/65">clara@byq.supply</div>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-[12.5rem]"
                  style={{
                    backgroundImage: "linear-gradient(rgba(13,21,38,0), rgba(13,21,38,0.64))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCtaPreFooterSection;
