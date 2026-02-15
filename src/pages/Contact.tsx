import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import siteConfig from "@/site-config";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const { contact, seo } = siteConfig;

  return (
    <>
      <Helmet>
        <title>{seo.titleTemplate.replace("%s", "Kontakt")}</title>
        <meta
          name="description"
          content="Kontakta oss för att boka en tid eller få mer information om våra tjänster."
        />
      </Helmet>

      <section className="section-padding bg-gray-900/30">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Kontakta Oss</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Har du frågor eller vill boka en tid? Hör av dig till oss!
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Hitta Oss</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Adress</h3>
                    <p className="text-sm text-gray-400">{contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefon</h3>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-sm text-gray-400 hover:text-accent transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">E-post</h3>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm text-gray-400 hover:text-accent transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Öppettider</h3>
                    <ul className="text-sm text-gray-400">
                      {contact.hours.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 md:p-8">
              <h2 className="mb-6 text-2xl font-bold">Skicka ett meddelande</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
