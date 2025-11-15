"use client"
export default function Newsletter() {
  return <section className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-3)] py-12 md:py-20">
    <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
      <div className="bg-white backdrop-blur-sm rounded-3xl p-6 md:p-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          Never Miss an Update
        </h2>
        <p className="text-base md:text-xl mb-6 md:mb-10 max-w-2xl mx-auto">
          Join 10,000+ wellness professionals getting weekly insights, tips, and industry trends delivered to their inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-[#EFEFEF] flex-1 px-4 py-3 md:px-6 md:py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 outline-none text-base md:text-lg"
          />
          <button className="text-white bg-[var(--accent-1)] px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:opacity-80 transition-colors text-base md:text-lg">
            Subscribe
          </button>
        </div>
        <p className="text-white/70 text-xs md:text-sm mt-3 md:mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </div>
  </section>
}