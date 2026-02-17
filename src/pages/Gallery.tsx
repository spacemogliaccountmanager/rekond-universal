import { useState } from "react";
import { Helmet } from "react-helmet-async";
import siteConfig from "@/site-config";

export default function Gallery() {
  const { gallery, seo } = siteConfig;
  const [showAfter, setShowAfter] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setShowAfter((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      <Helmet>
        <title>{seo.titleTemplate.replace("%s", "Galleri")}</title>
        <meta
          name="description"
          content="Se resultaten av vårt arbete. Före- och efterbilder från riktiga kundbilar."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-neutral-950 py-20 md:py-28">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="container-max relative text-center">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            Före &amp; Efter
          </span>
          <h1 className="mt-5 text-4xl font-bold md:text-5xl lg:text-6xl">
            Våra <span className="text-accent">Resultat</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Klicka på bilderna för att växla mellan före och efter. Se skillnaden
            en professionell rekond gör.
          </p>

          {/* Decorative divider */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid gap-6 sm:grid-cols-2">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-neutral-900"
                onClick={() => toggle(item.id)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={
                      showAfter[item.id] ? item.after : item.before
                    }
                    alt={item.caption}
                    className="h-full w-full object-contain bg-black transition-all duration-500"
                  />
                  <div className="absolute left-3 top-3 rounded-md bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {showAfter[item.id] ? "Efter" : "Före"}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-gray-300">
                    {item.caption}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Klicka för att se {showAfter[item.id] ? "före" : "efter"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
