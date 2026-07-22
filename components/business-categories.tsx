export default function BusinessCategories() {
  const services = [
    {
      title: "Advanced Cyber Defense (XDR & Enterprise SOC)",
      description: "Operating a Security Operations Center (SOC) to protect data assets, executing comprehensive penetration testing, and securing endpoints and firewalls with sub-15 minute response SLA.",
      techStack: ["Palo Alto", "SentinelOne", "SIEM/SOAR", "Cisco Secure", "Zero-Trust"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Cloud Architecture & DevOps Automation",
      description: "Designing and deploying distributed/hybrid cloud environments, executing zero-downtime data migrations, and automating production deployment pipelines.",
      techStack: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Enterprise AI & Process Automation (RPA)",
      description: "Implementing Robotic Process Automation (RPA) to handle manual repetitive processes and integrating enterprise AI models for predictive analytics and reporting.",
      techStack: ["Python", "OpenAI API", "UiPath", "Power BI", "LangChain"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Smart ERP Systems",
      description: "Deploying tailored ERP systems to interconnect sales, finance, operations, warehousing, and HR into a centralized control dashboard for precision execution.",
      techStack: ["SAP Enterprise", "Odoo Custom", "Oracle Cloud ERP"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "Data Center Ops & Disaster Recovery (DRP)",
      description: "Managing high-availability server infrastructures and storage networks, deploying virtualization platforms, and designing rapid DRP strategies.",
      techStack: ["VMware ESXi", "Nutanix", "Veeam Backup", "SAN/NAS"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: "Custom Enterprise Software",
      description: "Developing custom platforms and web applications backed by modern microservices architectures to ensure maximum speed, scaling, and operational security.",
      techStack: ["React", "Next.js", "Node.js", "GoLang", "PostgreSQL", "GraphQL"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="relative py-12 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-100 pt-12 md:pt-20">
          
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Core Enterprise Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              End-to-end operational stability, automated workflows, and robust security posture for modern large-scale corporations.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-between p-6 rounded-2xl border border-gray-200/80 bg-white shadow-sm transition duration-300 hover:shadow-md hover:-translate-y-1 hover:border-blue-500/40 cursor-pointer group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 mb-5 text-blue-600 group-hover:bg-blue-600 group-hover:text-[#0a1128] transition-colors duration-200">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {service.techStack.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-blue-500/5 text-primary border border-blue-500/10 tracking-wide uppercase transition-colors duration-150 group-hover:bg-blue-500/10 group-hover:border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
