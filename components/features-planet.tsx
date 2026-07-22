import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  const methodology = [
    {
      letter: "S",
      title: "Scope & Audit",
      description: "Conducting a comprehensive technology and security assessment to identify critical vulnerabilities and performance bottlenecks across departments."
    },
    {
      letter: "Y",
      title: "Yield Blueprint",
      description: "Designing a unified digital operating architecture engineered specifically to maximize operational efficiency and tangible ROI on technology investments."
    },
    {
      letter: "N",
      title: "Next-Gen Deploy",
      description: "Executing enterprise software deployment, database clustering, and cloud migration upgrades with near-zero operational disruption."
    },
    {
      letter: "E",
      title: "Embed Security",
      description: "Fortifying all infrastructure layers using advanced Zero-Trust framework protocols, firewalls, and data access policies."
    },
    {
      letter: "R",
      title: "Real-Time NOC",
      description: "Monitoring network traffic, endpoint security, and server health 24/7/365 from our dedicated Network Operations Center (NOC)."
    },
    {
      letter: "G",
      title: "Growth Optimize",
      description: "Continuously tuning system speed, scaling server capacities, and rolling out microservices upgrades aligned with your business growth."
    }
  ];

  return (
    <section id="methodology" className="relative before:absolute before:inset-0 before:-z-20 before:bg-[#0a1128] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-100 md:text-4xl">
              Engineering Methodology (S.Y.N.E.R.G.Y Framework)
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Our proprietary, structured approach to audit, deploy, secure, and continuously optimize enterprise digital operations.
            </p>
          </div>

          {/* Planet Graphic */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900/60"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt="Tag 01"
                    />
                    <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={241}
                      height={56}
                      alt="Tag 02"
                    />
                    <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={243}
                      height={56}
                      alt="Tag 03"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={251}
                      height={56}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Steps */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-blue-950 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-blue-950 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10 border-t border-b border-blue-950">
            {methodology.map((step, index) => (
              <article key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                <h3 className="mb-3 flex items-center space-x-3 font-semibold text-gray-200">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 font-extrabold text-sm border border-blue-500/30">
                    {step.letter}
                  </span>
                  <span className="text-lg">{step.title}</span>
                </h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
