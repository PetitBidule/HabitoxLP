import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.habitox.android&hl=fr";
const SUPPORT_EMAIL = "habitoxts@gmail.com";

type FooterLink = { label: string; to?: string; href?: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Download app", href: PLAY_STORE_URL },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help", to: "/help" },
      { label: "Contact us", href: `mailto:${SUPPORT_EMAIL}` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/habitoxts/",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z",
  },
  {
    label: "X",
    href: "https://x.com/Habitox_TS",
    path: "M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.48 3.24H4.3l13.31 17.41z",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@habitox0",
    path: "M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
];

const linkClassName = "text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors";

export const Footer = () => (
  <footer className="bg-background mt-auto">
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo_launcher_habitox_android.png"
                alt="HabitoX logo"
                className="w-7 h-7 rounded-md object-contain"
              />
              <span className="text-xl font-medium text-foreground">HabitoX</span>
            </Link>
            <p className="mt-1 text-xs font-medium text-muted-foreground">
              © HabitoX {new Date().getFullYear()}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-16">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-medium text-muted-foreground mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.to ? (
                        <Link to={link.to} className={linkClassName}>
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className={linkClassName}
                          {...(link.href?.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex items-center gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d={social.path} />
              </svg>
            </a>
          ))}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            aria-label="Email"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
