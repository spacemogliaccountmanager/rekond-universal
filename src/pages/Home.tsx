import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Shield, Star, Truck, Clock, Quote, Car, Users, Award } from "lucide-react";
import siteConfig from "@/site-config";
import { Button } from "@/components/ui/Button";
import BookingButton from "@/components/BookingButton";
import { Card, CardImage, CardContent } from "@/components/ui/Card";

const usps = [
  {
    icon: Shield,
    title: "Nöjd-kund-garanti",
    text: "Vi står bakom vårt arbete med fullständig garanti.",
  },
  {
    icon: Star,
    title: "Premiumkvalitet",
    text: "Enbart professionella produkter och verktyg.",
  },
  {
    icon: Truck,
    title: "Hämta & Lämna",
    text: "Vi hämtar och lämnar din bil kostnadsfritt.",
  },
  {
    icon: Clock,
    title: "Snabb service",
    text: "De flesta behandlingar klara samma dag.",
  },
];

export default function Home() {
  const { hero, services, seo } = siteConfig;

  return (
    <>
      <Helmet>
        <title>{seo.defaultTitle}</title>
        <meta name="description" content={seo.description} />
      </Helmet>

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-0 md:pt-0 -mt-8 md:mt-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="relative z-10 -mt-24 px-4 text-center md:mt-0">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <BookingButton size="xl" />
            <Button variant="outline" size="xl" asChild>
              <Link to="/tjanster">Våra Tjänster</Link>
            </Button>
          </div>
          {/* Stats inline */}
          <div className="mt-10 flex flex-row items-center justify-center gap-5 sm:gap-12 lg:gap-20">
            {[
              { icon: Clock, value: "5+", label: "Års erfarenhet" },
              { icon: Car, value: "2000+", label: "Bilar rekondade" },
              { icon: Users, value: "1500+", label: "Nöjda kunder" },
              { icon: Award, value: "100%", label: "Nöjd-kund-garanti" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-1 h-5 w-5 text-accent sm:h-7 sm:w-7" />
                <p className="text-xl font-extrabold sm:text-3xl">{stat.value}</p>
                <p className="mt-0.5 text-[10px] text-gray-300 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recensioner */}
      <section className="section-padding bg-neutral-950">
        <div className="container-max">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Vad Våra Kunder Säger
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
            Vi är stolta över vårt arbete och våra kunders upplevelser.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.reviews.map((review, i) => (
              <div
                key={i}
                className="flex flex-col rounded-xl border border-white/10 bg-neutral-900/50 p-6"
              >
                <Quote className="mb-4 h-6 w-6 text-accent opacity-50" />
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-300">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{review.name}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-3 w-3 fill-accent text-accent"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="section-padding bg-black">
        <div className="container-max">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {usps.map((usp) => (
              <div
                key={usp.title}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-neutral-900/50 p-6 text-center"
              >
                <div className="mb-4 rounded-full bg-accent/10 p-3">
                  <usp.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{usp.title}</h3>
                <p className="text-sm text-gray-400">{usp.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="section-padding bg-neutral-950">
        <div className="container-max">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Våra Tjänster
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
            Vi erbjuder ett brett utbud av rekondtjänster för alla typer av
            fordon.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Card key={service.id}>
                <CardImage src={service.image} alt={service.title} />
                <CardContent>
                  <h3 className="mb-2 text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="mb-3 text-sm text-gray-400">
                    {service.description}
                  </p>
                  {service.price && (
                    <span className="text-sm font-semibold text-accent">
                      {service.price}
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/tjanster">Se Alla Tjänster</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Redo att ge din bil en ny glans?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-200">
            Boka en tid idag och låt oss ta hand om din bil.
          </p>
          <div className="mt-8">
            <BookingButton
              size="xl"
              variant="accent"
              label="Boka Din Tid Nu"
            />
          </div>
        </div>
      </section>
    </>
  );
}
