import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">

            <h1
              className="mb-6 border-y text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] py-4 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Engineering Your Integrated <br className="max-lg:hidden" />
              Enterprise Digital Ecosystem
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Harmonizing high performance, robust cybersecurity, and operational automation powered by advanced cloud technologies and AI.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto cursor-pointer"
                    href="#consultation"
                  >
                    <span className="relative inline-flex items-center">
                      Book a Free Tech Consultation{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto cursor-pointer border border-gray-200"
                    href="#services"
                  >
                    Explore Our Services Portfolio
                  </a>
                </div>
              </div>
            </div>

            {/* Trust metrics bar */}
            <div 
              className="mt-12 grid grid-cols-2 gap-4 border-t border-b border-gray-200/80 py-6 md:grid-cols-4 md:gap-8 max-w-4xl mx-auto"
              data-aos="zoom-y-out"
              data-aos-delay={550}
            >
              <div className="text-center">
                <div className="text-2xl font-extrabold text-blue-600 md:text-3xl">99.99%</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Uptime SLA (Tier-4)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-blue-600 md:text-3xl">&lt; 15 Mins</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-blue-600 md:text-3xl">Zero Trust</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Cyber Security</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-blue-600 md:text-3xl">24/7/365</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">NOC Support</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
