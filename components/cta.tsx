"use client";

import { useState } from "react";

export default function Cta() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", company: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="consultation" className="relative py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#f8fbfd]/60 rounded-2xl border border-gray-200/60 p-6 md:p-10 shadow-sm" data-aos="fade-right">
            <h2 className="text-2xl font-bold text-primary mb-2 md:text-3xl">
              Book Your Technical Consultation or Request a Free Security Audit
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-8">
              Connect with our engineering team to assess your current digital infrastructure and define a custom modernization roadmap for your enterprise.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center animate-pulse">
                <svg className="w-10 h-10 text-emerald-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-bold">Request Submitted!</h3>
                <p className="text-sm text-emerald-700 mt-1">Our engineering team will contact you in under 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Enterprise Inc."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="j.doe@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Infrastructure or Security Needs
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current systems and modernization or security targets..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-sm hover:shadow transition duration-150 cursor-pointer"
                >
                  Submit Consultation Request
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8 lg:pt-8" data-aos="fade-left">
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                Operational Synergy
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                EDS Eco
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Connect with our engineers directly or reach out to our Network Operations Center (NOC) for emergency system interventions.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Sales & Consultation
                  </div>
                  <a href="mailto:sales@eds-eco.com" className="text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                    sales@eds-eco.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Support & NOC Center (24/7)
                  </div>
                  <a href="mailto:support@eds-eco.com" className="text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                    support@eds-eco.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#f8fbfd] border border-blue-500/10 p-5 space-y-3">
              <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L0 4v6c0 5.25 3.42 10.12 8 11 4.58-.88 8-5.75 8-11V4L8 0Zm0 2.18L14 5v4.58c0 4.19-2.58 8.02-6 8.78-3.42-.76-6-4.59-6-8.78V5l6-2.82Z" />
                </svg>
                Zero-Trust Guarantee
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                All communications and request metrics are protected under advanced end-to-end zero-trust architecture parameters, ensuring complete operational privacy.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
