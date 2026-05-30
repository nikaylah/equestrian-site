import { Link } from "wouter";
import { Mail, MapPin } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";
import logo from "../assets/crescent-stables-logo.png";

const footerLinks = [
  { href: "/experiences", label: "Experiences" },
  { href: "/safety", label: "Before You Come" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#5C7A5C] bg-[#5C7A5C]">
      <div className="mx-auto max-w-7xl px-[var(--space-sm)] py-[var(--space-xl)] sm:px-[var(--space-md)]">
        <div className="grid grid-cols-1 gap-[var(--space-lg)] sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-[var(--space-sm)] sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex" data-testid="link-footer-logo">
              <img
                src={logo}
                alt="Crescent Stables"
                className="h-12 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="max-w-sm text-[#F0EBE0]">
              A women led space where you can slow down, connect and feel completely at home.
            </p>
          </div>

          <div>
            <h3 className="mb-[var(--space-sm)] text-sm font-semibold uppercase tracking-wider text-[#F0EBE0]">
              Quick Links
            </h3>
            <ul className="space-y-[var(--space-sm)]">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#F0EBE0] transition-colors hover:text-[#F0EBE0]"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-[var(--space-sm)] text-sm font-semibold uppercase tracking-wider text-[#F0EBE0]">
              Get in Touch
            </h3>
            <div className="space-y-[var(--space-sm)] text-[#F0EBE0]">
              <div className="flex items-center gap-[var(--space-xs)]" data-testid="text-footer-email">
                <Mail className="h-4 w-4 text-[#F0EBE0]" />
                <span>hello@crescentstables.com</span>
              </div>
              <div className="flex items-center gap-[var(--space-xs)]" data-testid="text-footer-location">
                <MapPin className="h-4 w-4 text-[#F0EBE0]" />
                <span>Minnesota</span>
              </div>
            </div>
            <div className="mt-[var(--space-md)]">
              <p className="mb-[var(--space-sm)] text-sm font-medium text-[#F0EBE0]">Follow Along</p>
              <div className="flex gap-[var(--space-sm)]">
                <a 
                  href="#" 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8BAF8B]/20 text-[#8BAF8B] transition-colors hover:bg-[#F0EBE0] hover:text-[#5C7A5C]"
                  aria-label="Instagram"
                  data-testid="link-footer-instagram"
                >
                  <SiInstagram className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8BAF8B]/20 text-[#8BAF8B] transition-colors hover:bg-[#F0EBE0] hover:text-[#5C7A5C]"
                  aria-label="Facebook"
                  data-testid="link-footer-facebook"
                >
                  <SiFacebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[var(--space-lg)] border-t border-[#8BAF8B]/30 pt-[var(--space-md)]">
          <p className="text-center text-sm text-[#8BAF8B]">
            &copy; {new Date().getFullYear()} Crescent Stables. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
