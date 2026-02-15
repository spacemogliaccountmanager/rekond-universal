import { Helmet } from "react-helmet-async";
import siteConfig from "@/site-config";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import BookingButton from "@/components/BookingButton";

export default function Services() {
  const { services, seo } = siteConfig;

  return (
    <>
      <Helmet>
        <title>{seo.titleTemplate.replace("%s", "Tjänster")}</title>
        <meta
          name="description"
          content="Se vårt kompletta utbud av professionella rekondtjänster."
        />
      </Helmet>

      {/* Page header */}
      <section className="section-padding bg-neutral-950">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Våra Tjänster</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Från enkel handtvätt till komplett detailing – vi har tjänsten som
            passar din bil.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.id}
                className="flex flex-col transition-transform hover:-translate-y-1"
              >
                <CardImage src={service.image} alt={service.title} />
                <CardContent className="flex flex-1 flex-col">
                  <h2 className="mb-2 text-xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="mb-4 flex-1 text-sm text-gray-400">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    {service.price && (
                      <span className="text-lg font-bold text-accent">
                        {service.price}
                      </span>
                    )}
                    <BookingButton size="sm" label="Boka" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
