import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

export function FooterSocial() {
  const socials = [
    { icon: Twitter, href: "https://twitter.com/thicktek", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/thicktek", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/thicktek", label: "GitHub" },
    { icon: Youtube, href: "https://youtube.com/thicktek", label: "YouTube" },
  ];

  return (
    <div className="flex items-center space-x-4">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label={social.label}
          >
            <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
        );
      })}
    </div>
  );
}