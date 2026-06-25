import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero.jpg";
import reflectionImg from "@/assets/reflection.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Shine Detailing — Premium Auto Detailing" },
      {
        name: "description",
        content:
          "Elite automotive detailing by Brooks Bryan & Landon Howald. Ceramic coatings, paint correction, and deep interior service. Free quotes within 24 hours.",
      },
      { property: "og:title", content: "Prime Shine Detailing" },
      {
        property: "og:description",
        content: "Premium auto detailing by Brooks Bryan & Landon Howald.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  {
    n: "01",
    title: "Deep Interior",
    desc: "A thorough vacuum, wipe-down, and conditioning of all surfaces — seats, dash, and panels — leaving your interior clean, fresh, and like new.",
    bullets: [],
  },
  {
    n: "02",
    title: "Paint Correction",
    desc: "A complete hand wash, wheel cleaning, glass polish, and protective wax to leave your car's exterior clean, smooth, and glossy.",
    bullets: [],
  },
  {
    n: "03",
    title: "Tire wash",
    desc: "A deep clean for your tires and wheels, lifting brake dust, grime, and road buildup, then finished with a protective dressing for a clean, rich shine.\n\n\ue056\n\ue03b\n\ue0c1\n\ue0fb\n\ue0f9\n\ue11d",
    bullets: [],
  },
  {
    n: "04",
    title: "The Prime Full",
    desc: "The ultimate reset. Every square inch addressed, protected, and perfected.",
    bullets: [],
  },
];

function Index() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Quote request received", {
        description: "Brooks or Landon will reach out within 24 hours.",
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-prime-bg text-prime-fg font-sans selection:bg-prime-accent selection:text-prime-bg">
      <Toaster theme="dark" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-prime-border bg-prime-bg/80 backdrop-blur-md">
        <div className="flex flex-col min-w-0">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-prime-accent">
            Bryan & Howald
          </span>
          <span className="text-xl font-display italic tracking-tight">Prime Shine</span>
        </div>
        <div className="flex gap-3 sm:gap-8 items-center text-[11px] font-mono uppercase tracking-widest shrink-0">
          <a href="#services" className="hidden sm:inline hover:text-prime-accent transition-colors">
            Services
          </a>
          <a href="#about" className="hidden sm:inline hover:text-prime-accent transition-colors">
            Founders
          </a>
          <a
            href="#quote"
            className="px-4 py-2 border border-prime-accent text-prime-accent hover:bg-prime-accent hover:text-prime-bg transition-all"
          >
            Free Quote
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[88vh] flex flex-col justify-end p-6 md:p-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Water beading off a freshly detailed car hood"
            width={1920}
            height={1280}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-prime-bg via-prime-bg/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display italic leading-[1.05] text-balance mb-6">
            Reflecting <span className="text-prime-accent">Perfection</span> in Every Surface.
          </h1>
          <p className="max-w-xl text-prime-muted text-base md:text-lg mb-8 leading-relaxed">
            Lite Automotive Preservation by Brooks Bryan & Landon Howald — we use water-repelling coatings and careful, hands-on detailing to keep your car looking clean, smooth, and shiny, made for drivers who want nothing less than perfect.
          </p>
          <a
            href="#quote"
            className="inline-flex items-center gap-4 bg-prime-fg text-prime-bg px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-prime-accent transition-colors group"
          >
            Start Your Free Quote
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-24 md:px-12 border-t border-prime-border">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl font-display italic">The Detail Menu</h2>
          <span className="font-mono text-[10px] uppercase tracking-widest text-prime-muted">
            [ Precision Grade 01–04 ]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-prime-border border border-prime-border">
          {services.map((s) => (
            <div
              key={s.n}
              className="bg-prime-bg p-8 hover:bg-prime-bg/40 transition-colors group"
            >
              <span className="font-mono text-xs text-prime-accent mb-6 block">{s.n}</span>
              <h3 className="text-2xl font-display italic mb-4">{s.title}</h3>
              <p className="text-prime-muted text-sm leading-relaxed mb-8">{s.desc}</p>
              <ul className="text-[10px] font-mono uppercase tracking-wider text-prime-muted space-y-2">
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section
        id="quote"
        className="grid grid-cols-1 lg:grid-cols-2 border-y border-prime-border"
      >
        <div className="p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-prime-border flex flex-col justify-center">
          <div className="max-w-md mx-auto lg:mx-0 w-full">
            <h2 className="text-4xl md:text-5xl font-display italic mb-6">Secure Your Slot</h2>
            <p className="text-prime-muted mb-8">
              Our schedule fills quickly. Share your vehicle details and we'll send a custom
              estimate within 24 hours — completely free.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Field label="01 Full Name" name="name" placeholder="Jane Doe" required />
              <Field
                label="02 Phone Number"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                required
              />
              <Field
                label="03 Vehicle Year / Make / Model"
                name="vehicle"
                placeholder="2023 Porsche 911"
                required
              />
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-prime-accent">
                  04 Service Required
                </label>
                <select
                  name="service"
                  required
                  className="bg-transparent border-b border-prime-border py-2 focus:border-prime-accent outline-none transition-colors"
                >
                  <option className="bg-prime-bg">The Prime Full</option>
                  <option className="bg-prime-bg">Ceramic Shield</option>
                  <option className="bg-prime-bg">Paint Correction</option>
                  <option className="bg-prime-bg">Deep Interior</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-prime-accent">
                  05 Notes
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Anything we should know?"
                  className="bg-transparent border-b border-prime-border py-2 focus:border-prime-accent outline-none transition-colors resize-none placeholder:text-prime-muted/50"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 mt-4 bg-prime-accent text-prime-bg font-mono text-xs uppercase tracking-widest font-bold hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Request Free Quote"}
              </button>
            </form>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
          <img
            src={reflectionImg}
            alt="Polished sports car in a detailing garage"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display italic mb-4">
              The Hands Behind the Shine
            </h2>
            <p className="text-prime-muted text-sm leading-relaxed mb-6">
              Brooks Bryan and Landon Howald founded Prime Shine with a singular obsession:
              perfection isn't an option, it's the standard. Every vehicle gets treated like it's
              ours.
            </p>
            <a
              href="https://instagram.com/prime_shine_ad"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-prime-accent hover:underline"
            >
              Follow @prime_shine_ad →
            </a>
          </div>

          <FounderCard initials="BB" name="Brooks Bryan" role="Correction Specialist" />
          <FounderCard initials="LH" name="Landon Howald" role="Coating Technician" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-prime-border p-6 md:p-12">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-display italic">Prime Shine Detailing</h2>
            <p className="font-mono text-[10px] text-prime-muted uppercase leading-relaxed tracking-widest">
              Automotive Detailing & Surface Preservation
              <br />
              Founded by Brooks Bryan & Landon Howald
            </p>
            <a
              href="https://instagram.com/prime_shine_ad"
              target="_blank"
              rel="noreferrer"
              className="inline-block font-mono text-[11px] uppercase tracking-widest text-prime-accent hover:underline"
            >
              @prime_shine_ad
            </a>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <span className="font-mono text-[10px] text-prime-muted uppercase tracking-widest">
              © {new Date().getFullYear()} Prime Shine Detailing
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10px] uppercase tracking-widest text-prime-accent">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="bg-transparent border-b border-prime-border py-2 focus:border-prime-accent outline-none transition-colors placeholder:text-prime-muted/50"
      />
    </div>
  );
}

function FounderCard({
  initials,
  name,
  role,
}: {
  initials: string;
  name: string;
  role: string;
}) {
  return (
    <div className="border border-prime-border p-8">
      <div className="aspect-square bg-gradient-to-br from-prime-bg to-prime-accent/10 mb-6 grid place-items-center border border-prime-border">
        <span className="font-display italic text-6xl text-prime-accent">{initials}</span>
      </div>
      <h4 className="font-display italic text-xl">{name}</h4>
      <span className="font-mono text-[10px] text-prime-muted uppercase tracking-widest">
        {role}
      </span>
    </div>
  );
}
