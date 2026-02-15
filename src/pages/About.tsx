import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import siteConfig from "@/site-config";
import BookingButton from "@/components/BookingButton";

export default function About() {
  const { about, seo } = siteConfig;

  return (
    <>
      <Helmet>
        <title>{seo.titleTemplate.replace("%s", "Om Oss")}</title>
        <meta name="description" content={about.description.slice(0, 160)} />
      </Helmet>

      <section className="section-padding bg-gray-900/30">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold md:text-5xl">{about.title}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="overflow-hidden rounded-xl border border-gray-800">
              <img
                src={about.image}
                alt="Om oss"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                Varför välja oss?
              </h2>
              <p className="mb-8 text-gray-400 leading-relaxed">
                {about.description}
              </p>
              <ul className="mb-8 space-y-4">
                {about.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <BookingButton size="lg" label="Boka Din Tid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
