export default function Home() {
  const metrics = [
    { label: "Winning products sourced monthly", value: "12+" },
    { label: "Average gross margin", value: "38%" },
    { label: "Creative variants tested", value: "48" },
  ];

  const features = [
    {
      title: "AI-Guided Product Lab",
      description:
        "Scrape marketplaces, trend reports, and social chatter in real time. Our AI scouts filter by margin, shipping velocity, and cultural relevance.",
      highlight: "Product intel updates every 4 hours so you never miss the wave.",
    },
    {
      title: "Conversion-Ready Funnels",
      description:
        "Deploy high-impact landing pages, video scripts, and upsell flows with one-click templates optimized for mobile-first shoppers.",
      highlight: "Auto-personalized hooks adapt to creative fatigue signals.",
    },
    {
      title: "Global Ops Automation",
      description:
        "Sync suppliers, fulfillment, and support workflows into a single cockpit. Predictive alerts trigger before delays ever hit customers.",
      highlight: "Dynamic routing slashes delivery times by up to 32%.",
    },
  ];

  const launchSteps = [
    {
      title: "Curate momentum products",
      copy: "Plug in your niche, price point, and desired margins. The Nova Engine ranks niches by audience heat and fulfillment feasibility.",
    },
    {
      title: "Spin up branded storefronts",
      copy: "Generate bespoke storefronts, email drips, and TikTok ads styled to your brand DNA. Integrations with Shopify, WooCommerce, and Vercel Commerce.",
    },
    {
      title: "Autopilot growth loops",
      copy: "Performance dashboards blend attribution, LTV cohorts, and supplier SLAs. Push winning creatives to ads while retargeting high-value shoppers.",
    },
  ];

  const automations = [
    {
      title: "Predictive Fulfillment",
      detail:
        "Smart batching pairs supplier SLAs with buyer geography to anticipate stockouts days in advance.",
    },
    {
      title: "Cinematic Creative Studio",
      detail:
        "Generate scroll-stopping UGC scripts, B-roll shot lists, and AI voiceovers tailored for TikTok, Reels, and Shorts.",
    },
    {
      title: "Profit Guardian",
      detail:
        "Realtime margin coach monitors ad spend, COGS, and refund velocity to protect contribution profit with automated alerts.",
    },
    {
      title: "Support Copilot",
      detail:
        "Multilingual AI agents resolve 70% of customer inquiries on autopilot with empathetic tone mirroring your brand voice.",
    },
  ];

  const testimonials = [
    {
      quote:
        "We went from zero to a six-figure monthly run rate in 62 days. The AI product scouting and pre-built funnels gave us a category-crushing edge.",
      name: "Mila Chen",
      role: "Founder, HyperDrops",
    },
    {
      quote:
        "Nova Dropship feels like a full-stack growth team in a box. Creative fatigue alerts alone paid for the platform in our first week.",
      name: "Jordan Blake",
      role: "CMO, Nova North Studios",
    },
  ];

  const faqs = [
    {
      question: "How fast can I launch a storefront?",
      answer:
        "Most founders ship their first branded funnel within 24 hours. We provide prebuilt templates, AI copywriting, and supplier matchmaking.",
    },
    {
      question: "Do you integrate with my existing tech stack?",
      answer:
        "Yes. Nova Dropship connects with Shopify, WooCommerce, Klaviyo, Meta Ads, TikTok Ads, and more through secure API tokens.",
    },
    {
      question: "Is fulfillment actually automated?",
      answer:
        "Our predictive fulfillment engine consolidates supplier updates, purchase orders, and shipping labels into a single workflow with exception handling.",
    },
    {
      question: "What support do I receive?",
      answer:
        "Every plan includes growth strategists, onboarding engineers, and community roundtables so you can pressure-test offers weekly.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-80 right-0 h-[36rem] w-[36rem] rounded-full bg-sky-500/30 blur-[12rem]" />
        <div className="absolute top-40 left-[-12rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-[10rem]" />
        <div className="absolute bottom-[-12rem] right-[-12rem] h-[30rem] w-[30rem] rounded-full bg-blue-500/20 blur-[10rem]" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-32 px-6 pb-32 pt-24 sm:px-10">
        <header className="flex flex-col items-center gap-10 text-center sm:items-start sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200 shadow-[0_0_40px_rgba(14,165,233,0.35)]">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            Mindblowing Dropshipping Engine
          </span>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Build a frictionless dropshipping empire with AI at the core.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300 sm:mx-0 sm:text-xl">
              Nova Dropship gives you the complete growth operating system to
              discover breakout products, craft irresistible funnels, automate
              fulfillment, and scale profitably—all from one luminous command
              center.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#launch"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-3 text-base font-semibold text-slate-950 shadow-[0_20px_60px_rgba(14,165,233,0.35)] transition hover:bg-sky-400"
            >
              Launch your brand
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5 transition group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-500/40 px-7 py-3 text-base font-semibold text-slate-200 transition hover:bg-sky-500/10"
            >
              Watch the platform tour
            </a>
          </div>

          <div className="grid w-full gap-6 rounded-3xl border border-white/5 bg-slate-900/60 px-6 py-8 backdrop-blur-md sm:grid-cols-3 sm:px-10">
            {metrics.map((metric) => (
              <div key={metric.label} className="space-y-2">
                <p className="text-3xl font-semibold text-sky-200">
                  {metric.value}
                </p>
                <p className="text-sm text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </header>

        <section className="space-y-12">
          <div className="flex flex-col items-start gap-4">
            <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-sky-300">
              Product Intelligence
            </span>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              The lab that spots breakout winners before they trend.
            </h2>
            <p className="max-w-3xl text-lg text-slate-300">
              Our signal engine synthesizes purchase velocity, audience
              sentiment, and competitive gaps to surface products with massive
              upside. You get daily insights, done-for-you creatives, and
              compelling stories ready to deploy.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex flex-col gap-4 rounded-3xl border border-white/5 bg-slate-900/60 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:border-sky-500/50 hover:bg-slate-900/80"
              >
                <h3 className="text-xl font-semibold text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-slate-300">
                  {feature.description}
                </p>
                <p className="text-sm font-medium text-sky-300">
                  {feature.highlight}
                </p>
                <div className="mt-auto h-0.5 w-16 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>

        <section
          id="launch"
          className="grid gap-10 rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/70 via-slate-900/30 to-slate-900/70 px-8 py-16 shadow-[0_40px_120px_rgba(14,165,233,0.25)] backdrop-blur-xl lg:grid-cols-[1.1fr_1fr]"
        >
          <div className="space-y-6">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
              Launch Blueprint
            </span>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              A guided launch sequence built for velocity.
            </h2>
            <p className="text-lg leading-relaxed text-slate-200">
              Instead of duct-taping tools, Nova orchestrates your entire
              lifecycle—product discovery, creative iteration, fulfillment, and
              retention—so you can scale fast with clarity.
            </p>
            <div className="space-y-4">
              {launchSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-500/40 bg-sky-500/10 text-sm font-semibold text-sky-200">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-300">{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
              <h3 className="text-lg font-semibold text-slate-100">
                Launch Control Dashboard
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Monitor funnel performance, blended ROAS, and supplier health in
                real time. Adaptive recommendations tighten margins automatically.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {["Funnel ROAS 4.6x", "AOV $82", "Refund Rate 1.3%", "LTV 3.4x"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/5 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-200"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
            <a
              id="demo"
              href="https://cal.com"
              className="mt-6 inline-flex items-center justify-center rounded-2xl border border-sky-500/40 bg-sky-500/20 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-100 transition hover:bg-sky-500/30"
            >
              Book a strategy session
            </a>
          </div>
        </section>

        <section className="space-y-12">
          <div className="flex flex-col items-start gap-4">
            <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-sky-300">
              Autopilot Suite
            </span>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Automations that compound profit while you sleep.
            </h2>
            <p className="max-w-3xl text-lg text-slate-300">
              Go beyond basic order routing. Nova synchronizes your supply chain,
              paid media, and retention strategy with intelligent workflows that
              execute instantly when metrics move.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {automations.map((automation) => (
              <div
                key={automation.title}
                className="rounded-3xl border border-white/5 bg-slate-900/60 p-8 shadow-[0_20px_60px_rgba(8,47,73,0.35)] transition hover:border-sky-500/40 hover:bg-slate-900/80"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />
                  <h3 className="text-lg font-semibold text-slate-100">
                    {automation.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-slate-300">{automation.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/5 bg-slate-900/60 p-10 backdrop-blur-md lg:grid-cols-3">
          <div className="space-y-4">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.25em] text-white/70">
              Proof
            </span>
            <h2 className="text-3xl font-semibold text-white">
              Brands scaling past seven figures trust Nova.
            </h2>
            <p className="text-sm text-slate-300">
              Founders plug in their stack, deploy viral-ready funnels, and watch
              the Nova intelligence core boost margins every week.
            </p>
          </div>
          <div className="space-y-6 lg:col-span-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 text-slate-200 shadow-[0_18px_50px_rgba(14,165,233,0.18)]"
              >
                <p className="text-lg leading-relaxed text-slate-100">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-6 text-sm text-slate-400">
                  {testimonial.name} · {testimonial.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col items-start gap-4">
            <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-sky-300">
              FAQs
            </span>
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
              Everything you need to know before you scale.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/5 bg-slate-900/60 p-6 transition hover:border-sky-500/30 hover:bg-slate-900/80"
              >
                <h3 className="text-lg font-semibold text-slate-100">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="rounded-3xl border border-white/5 bg-slate-900/60 px-8 py-12 text-center backdrop-blur-md sm:text-left">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="space-y-2 text-center sm:text-left">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-300">
                Ready to build?
              </p>
              <h2 className="text-2xl font-semibold text-white">
                Join the founders rewriting dropshipping.
              </h2>
              <p className="text-sm text-slate-300">
                Secure your invite to Nova Dropship Alpha and unlock the growth
                stack built for 2025.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://notionforms.io/forms"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_40px_rgba(56,189,248,0.35)] transition hover:bg-sky-400"
              >
                Apply for access
              </a>
              <a
                href="mailto:hello@novadropship.com"
                className="inline-flex items-center justify-center rounded-full border border-sky-500/40 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-sky-500/10"
              >
                Talk to a strategist
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Nova Dropship. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-sky-300">
                Privacy
              </a>
              <a href="#" className="hover:text-sky-300">
                Terms
              </a>
              <a href="#" className="hover:text-sky-300">
                Investor Deck
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
