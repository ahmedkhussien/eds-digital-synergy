export default function LargeTestimonial() {
  return (
    <section className="bg-[#f8fbfd]/50 border-t border-b border-gray-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="py-16 md:py-24">
          <div className="space-y-6 text-center">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/8 text-primary text-xs font-extrabold uppercase tracking-wider border border-blue-500/20 shadow-xs">
              Our Strategic Approach
            </div>

            {/* Statement */}
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed max-w-4xl mx-auto">
              “In an era of rapid digital transformation, disconnected software and traditional maintenance are no longer enough for enterprise growth. At <span className="text-blue-600">EDS Echo</span>, we bridge all your digital assets—from cloud servers and ERP systems to AI tools, networks, and cybersecurity—into a single, unified ecosystem that operates with complete harmony and zero operational friction.”
            </p>

            {/* Divider decoration */}
            <div className="flex justify-center items-center gap-1.5 pt-4">
              <span className="w-10 h-px bg-gray-200"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500/25"></span>
              <span className="w-10 h-px bg-gray-200"></span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
