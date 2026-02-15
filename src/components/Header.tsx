import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import siteConfig from "@/site-config";
import BookingButton from "./BookingButton";

const navLinks = [
  { to: "/", label: "Hem" },
  { to: "/tjanster", label: "Tjänster" },
  { to: "/galleri", label: "Galleri" },
  { to: "/om-oss", label: "Om Oss" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10/50 bg-black/95 backdrop-blur-md">
      <div className="container-max flex h-16 items-center justify-between px-4 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          {siteConfig.brand.logo ? (
            <img
              src={siteConfig.brand.logo}
              alt={siteConfig.brand.name}
              className="h-8 w-auto md:h-10"
            />
          ) : (
            <span className="rounded-md border border-gray-600 bg-gray-800 px-3 py-1 text-sm text-gray-400">
              Din Logga
            </span>
          )}
          {siteConfig.brand.name && (
            <span className="text-lg font-bold tracking-tight">
              {siteConfig.brand.name}
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 ${
                location.pathname === link.to
                  ? "text-accent"
                  : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4">
            <BookingButton size="default" />
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/10 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-black px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10 ${
                location.pathname === link.to
                  ? "text-accent"
                  : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 px-4">
            <BookingButton size="default" className="w-full" />
          </div>
        </nav>
      )}
    </header>
  );
}
