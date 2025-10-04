import Link from "next/link";
import { Instagram, Linkedin, Twitter, Youtube, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Block */}
          <div className="space-y-4">
            <div className="space-y-2">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-800 to-blue-600"></div>
                <span className="text-xl font-bold text-foreground">
                  US Drop
                </span>
              </div>
              {/* Tagline */}
              <p className="text-sm text-muted-foreground">
                Your Dropshipping Empire Starts Here
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-2 text-sm">
              <address className="not-italic text-muted-foreground">
                <div>123 Commerce Street</div>
                <div>San Francisco, CA 94105</div>
                <div>United States</div>
              </address>

              <div className="space-y-1">
                <a
                  href="mailto:hello@usdrop.com"
                  className={cn(
                    "flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                  )}
                >
                  <Mail className="h-4 w-4" />
                  <span>hello@usdrop.com</span>
                </a>
                <a
                  href="tel:+1-555-123-4567"
                  className={cn(
                    "flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                  )}
                >
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-primary"
                  )}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-primary"
                  )}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-primary"
                  )}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-primary"
                  )}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-primary"
                  )}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-primary"
                  )}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-primary"
                  )}
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-primary"
                  )}
                >
                  Support Center
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className={cn(
                    "text-muted-foreground transition-colors hover:text-primary"
                  )}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/usdrop"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hover-scale text-muted-foreground transition-all hover:text-primary",
                  "rounded-lg bg-muted/50 p-2 hover:bg-muted"
                )}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/usdrop"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hover-scale text-muted-foreground transition-all hover:text-primary",
                  "rounded-lg bg-muted/50 p-2 hover:bg-muted"
                )}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/usdrop"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hover-scale text-muted-foreground transition-all hover:text-primary",
                  "rounded-lg bg-muted/50 p-2 hover:bg-muted"
                )}
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/usdrop"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hover-scale text-muted-foreground transition-all hover:text-primary",
                  "rounded-lg bg-muted/50 p-2 hover:bg-muted"
                )}
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            {/* Newsletter Signup (Optional) */}
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={cn(
                    "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm",
                    "ring-offset-background placeholder:text-muted-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "disabled:cursor-not-allowed disabled:opacity-50"
                  )}
                />
                <button
                  className={cn(
                    "inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
                    "ring-offset-background transition-colors hover:bg-primary/90",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    "disabled:pointer-events-none disabled:opacity-50"
                  )}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-4 max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>
              © {currentYear} US Drop. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/sitemap"
                className="transition-colors hover:text-primary"
              >
                Sitemap
              </Link>
              <Link
                href="/cookies"
                className="transition-colors hover:text-primary"
              >
                Cookie Policy
              </Link>
              <Link
                href="/accessibility"
                className="transition-colors hover:text-primary"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

