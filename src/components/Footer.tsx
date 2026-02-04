import { Github, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  social: [
    { name: "GitHub", href: "https://github.com/doughmination-systems", icon: Github },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "Discord", href: "https://discord.gg", icon: null, label: "Discord" },
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

// Discord icon component since lucide doesn't have a Discord icon
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

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="https://github.com/doughmination-systems"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://x.com/doughmination_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          >
            <Twitter className="w-5 h-5" />
            <span>Twitter</span>
          </a>
          <a
            href="https://discord.gg/RQDRzK3VBe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          >
            <DiscordIcon className="w-5 h-5" />
            <span>Discord</span>
          </a>
          <a
            href="mailto:admin@doughmination.win"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>

        {/* Legal Links by Platform */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Minecraft */}
          <div>
            <h4 className="font-semibold text-minecraft mb-3">Minecraft</h4>
            <ul className="space-y-2">
              {footerLinks.legal.minecraft.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hytale */}
          <div>
            <h4 className="font-semibold text-hytale mb-3">Hytale</h4>
            <ul className="space-y-2">
              {footerLinks.legal.hytale.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Doughmination Modding (this site) */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Doughmination Modding</h4>
            <ul className="space-y-2">
              {footerLinks.legal.doughminationModding.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Doughmination Plural */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Doughmination Plural</h4>
            <ul className="space-y-2">
              {footerLinks.legal.doughminationPlural.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* License */}
        <div className="text-center mb-6">
          <Link
            to="/legal/license"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            License
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-sm">
          <p>© 2026 Doughmination Modding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
