import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import siteConfig from "@/site-config";

const iconMap: Record<string, typeof Facebook> = {
  facebook: Facebook,
  instagram: Instagram,
};

export default function Footer() {
  const { contact, footer, brand } = siteConfig;

  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="container-max px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={brand.logo} alt={brand.name} className="h-8 w-auto" />
              <span className="text-lg font-bold">{brand.name}</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Professionell bilrekond med fokus på kvalitet och kundnöjdhet.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Snabblänkar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tjanster" className="text-gray-300 hover:text-accent transition-colors">
                  Tjänster
                </Link>
              </li>
              <li>
                <Link to="/galleri" className="text-gray-300 hover:text-accent transition-colors">
                  Galleri
                </Link>
              </li>
              <li>
                <Link to="/om-oss" className="text-gray-300 hover:text-accent transition-colors">
                  Om Oss
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-300 hover:text-accent transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{contact.address}</li>
              <li>
                <a href={`tel:${contact.phone}`} className="hover:text-accent transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-accent transition-colors">
                  {contact.email}
                </a>
              </li>
            </ul>
            {/* Socials */}
            <div className="mt-4 flex gap-3">
              {footer.socials.map((social) => {
                const Icon = iconMap[social.icon];
                return Icon ? (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-accent"
                    aria-label={social.platform}
                  >
                    <Icon size={20} />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          {footer.text}
        </div>
      </div>
    </footer>
  );
}
