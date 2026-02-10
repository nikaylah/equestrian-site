import { Link } from "wouter";
import { Mail, MapPin } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";

const footerLinks = [
  { href: "/experiences", label: "Experiences" },
  { href: "/safety", label: "Safety" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2" data-testid="link-footer-logo">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="font-serif text-lg font-bold text-primary-foreground">C</span>
              </div>
              <span className="font-serif text-xl font-bold text-foreground">Crescent Stables</span>
            </Link>
            <p className="max-w-sm text-muted-foreground">
              A gentle, supportive space for women to connect with horses at their own pace. Hosted through trusted partner barns in Minnesota.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2" data-testid="text-footer-email">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@crescentstables.com</span>
              </div>
              <div className="flex items-center gap-2" data-testid="text-footer-location">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Minnesota</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-foreground">Follow Along</p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/25 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Instagram"
                  data-testid="link-footer-instagram"
                >
                  <SiInstagram className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/25 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Facebook"
                  data-testid="link-footer-facebook"
                >
                  <SiFacebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-accent/20 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Crescent Stables. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
