import Link from "next/link"
import Image from "next/image"
import { Github, Mail, ExternalLink, Linkedin } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/domain", label: "Domain" },
  { href: "/milestones", label: "Milestones" },
  { href: "/documents", label: "Documents" },
]

const teamLinks = [
  { href: "/presentations", label: "Presentations" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black">
                <Image
                  src="/logo.png"
                  alt="CyraGuard logo"
                  width={40}
                  height={40}
                  className="h-9 w-9 object-contain"
                />
              </div>
              <span className="text-lg font-bold text-foreground">
                CyraGuard
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Multi-Modal Machine Learning Approach for Threat Detection in WhatsApp and Telegram. 
              A final year research project at SLIIT.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/cyraguard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:cyraguard.team@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Team Links */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary">
              Team
            </h3>
            <ul className="space-y-3">
              {teamLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-primary">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:cyraguard.team@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  cyraguard.team@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/cyraguard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4 text-primary" />
                  GitHub Repository
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} CyraGuard Research. Project ID: 24-25J-065
            </p>
            <p className="text-sm text-muted-foreground">
              Sri Lanka Institute of Information Technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
