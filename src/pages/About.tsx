import { Helmet } from "react-helmet-async";
import {
  CheckCircle,
  Clock,
  Leaf,
  Truck,
  Shield,
  Sparkles,
  Car,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import siteConfig from "@/site-config";
import BookingButton from "@/components/BookingButton";

const reasons = [
  {
    icon: CheckCircle,
    title: "Enkelt & Smidigt",
    description:
      "Vi sköter allt från bokning till leverans. Du behöver bara luta dig tillbaka medan vi tar hand om din bil.",
  },
  {
    icon: Clock,
    title: "Spara tid & pengar",
    description:
      "Effektiva metoder och flexibla tider gör att du slipper vänta. Vi kommer till dig eller hämtar bilen.",
  },
  {
    icon: Leaf,
    title: "Miljövänligt",
    description:
      "Vi använder miljövänliga produkter och vattensnåla metoder som sparar upp till 90% vatten jämfört med traditionell biltvätt.",
  },
  {
    icon: Shield,
    title: "Nöjd-kund-garanti",
    description:
      "Vi står bakom vårt arbete. Är du inte helt nöjd åtgärdar vi det utan extra kostnad.",
  },
  {
    icon: Sparkles,
    title: "Premiumproduker",
    description:
      "Enbart de bästa produkterna och verktygen används för att säkerställa ett resultat i toppklass.",
  },
  {
    icon: Truck,
    title: "Hämta & Lämna",
    description:
      "Vi erbjuder hämta och lämna-tjänst så att du slipper krångla med logistiken.",
  },
];

const stats = [
  { icon: Clock, value: "5+", label: "Års erfarenhet" },
  { icon: Car, value: "2000+", label: "Bilar rekondade" },
  { icon: Users, value: "1500+", label: "Nöjda kunder" },
  { icon: Award, value: "100%", label: "Nöjd-kund-garanti" },
];

const steps = [
  { step: "01", title: "Boka online", description: "Välj tjänst och tid som passar dig." },
  { step: "02", title: "Vi hämtar bilen", description: "Vi kommer till dig eller så lämnar du hos oss." },
  { step: "03", title: "Professionell rekond", description: "Våra specialister ger din bil den bästa behandlingen." },
  { step: "04", title: "Redo att hämtas", description: "Din bil levereras skinande ren och fräsch." },
];

export default function About() {
  const { about, seo } = siteConfig;

  return (
    <>
      <Helmet>
        <title>{seo.titleTemplate.replace("%s", "Om Oss")}</title>
        <meta name="description" content={about.description.slice(0, 160)} />
      </Helmet>

      {/* Hero – full-width image with overlay text */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <img
          src={about.image}
          alt="Om oss"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

        <div className="container-max relative w-full pb-16 pt-40 md:pb-20">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur-sm">
            Om Oss
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Passion för{" "}
            <span className="bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">
              perfektion
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-300">
            {about.description}
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative border-y border-white/5 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
        <div className="container-max relative">
          <div className="grid grid-cols-2 divide-x divide-white/5 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-10 text-center md:px-8">
                <stat.icon className="mx-auto mb-3 h-6 w-6 text-accent" />
                <p className="text-3xl font-extrabold md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons – clean two-column layout */}
      <section className="section-padding bg-neutral-950">
        <div className="container-max">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Fördelar
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Varför välja oss?
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-accent" />
          </div>

          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <div key={item.title} className="group flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works – process steps */}
      <section className="section-padding bg-black">
        <div className="container-max">
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              Process
            </span>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl lg:text-5xl">
              Så funkar det
            </h2>
          </div>

          <div className="relative grid gap-8 md:grid-cols-4">
            {/* Connecting line */}
            <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent md:block" />

            {steps.map((item, i) => (
              <div key={item.step} className="relative text-center">
                {/* Step number */}
                <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-accent/20 bg-neutral-900" />
                  <span className="relative text-2xl font-extrabold text-accent">
                    {item.step}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-10 hidden h-5 w-5 text-accent/40 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden section-padding bg-neutral-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
        </div>
        <div className="container-max relative text-center">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Redo att ge din bil en{" "}
            <span className="text-accent">ny glans?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
            Boka din tid idag och upplev skillnaden med en professionell
            bilrekond.
          </p>
          <div className="mt-8">
            <BookingButton size="lg" label="Boka Din Tid" />
          </div>
        </div>
      </section>
    </>
  );
}
