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

      <section className="section-padding bg-neutral-950">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Galleri</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Klicka på bilderna för att se före och efter.
          </p>
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
