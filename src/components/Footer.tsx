import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  social: [
    { name: "GitHub", href: "https://github.com/doughmination-systems", icon: "github" },
    { name: "Twitter", href: "https://x.com/doughmination_", icon: "twitter" },
    { name: "Discord", href: "https://discord.gg/RQDRzK3VBe", icon: "discord" },
    { name: "Email", href: "mailto:admin@doughmination.win", icon: "mail" },
  ],
  legal: {
    minecraft: [
      { name: "Terms of Service", href: "/legal/minecraft/terms" },
      { name: "Privacy Policy", href: "/legal/minecraft/privacy" },
    ],
    hytale: [
      { name: "Terms of Service", href: "/legal/hytale/terms" },
      { name: "Privacy Policy", href: "/legal/hytale/privacy" },
    ],
    doughminationModding: [
      { name: "Terms of Service", href: "/legal/doughmination-modding/terms" },
      { name: "Privacy Policy", href: "/legal/doughmination-modding/privacy" },
    ],
    doughminationPlural: [
      { name: "Terms of Service", href: "/legal/doughmination-plural/terms" },
      { name: "Privacy Policy", href: "/legal/doughmination-plural/privacy" },
    ],
  },
};

// Icons
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z" />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
  </svg>
);

// Icon map
const iconMap = {
  github: GitHubIcon,
  twitter: TwitterIcon,
  discord: DiscordIcon,
  mail: MailIcon,
};

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid gap-8 md:gap-12">
          {/* Top Section: Branding & Social */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Branding */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <Link to="/" className="flex items-center gap-2">
                <img 
                  src="https://modding.doughmination.co.uk/favicon.png" 
                  alt="Doughmination Modding" 
                  className="w-8 h-8 rounded-lg"
                />
                <span className="font-bold text-lg">Doughmination Modding</span>
              </Link>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                Documentation for Minecraft & Hytale plugins
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-2">
              {footerLinks.social.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground text-sm"
                    title={social.name}
                    >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <Separator />

          {/* Legal Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Minecraft */}
            <div>
              <h4 className="font-semibold text-sm mb-3 text-minecraft">Minecraft</h4>
              <ul className="space-y-2">
                {footerLinks.legal.minecraft.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hytale */}
            <div>
              <h4 className="font-semibold text-sm mb-3 text-hytale">Hytale</h4>
              <ul className="space-y-2">
                {footerLinks.legal.hytale.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Doughmination Modding */}
            <div>
              <h4 className="font-semibold text-sm mb-3">Modding Site</h4>
              <ul className="space-y-2">
                {footerLinks.legal.doughminationModding.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Doughmination Plural */}
            <div>
              <h4 className="font-semibold text-sm mb-3">Plural</h4>
              <ul className="space-y-2">
                {footerLinks.legal.doughminationPlural.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator />

          {/* Bottom Section: License & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                to="/legal/license"
                className="hover:text-foreground transition-colors"
              >
                License
              </Link>
              <span className="hidden md:inline">•</span>
              <p>© 2026 Doughmination Modding</p>
            </div>
            <p className="text-center md:text-right">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};