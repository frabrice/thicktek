import { Link } from 'react-router-dom';

interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export function FooterLinks() {
  const sections: FooterSection[] = [
    {
      title: "Services",
      links: [
        { label: "How It Works", href: "/how-it-works" },
        { label: "Solutions", href: "/solutions" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Website Audit", href: "/audit" },
        { label: "Schedule Consultation", href: "/schedule" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Insights",
      links: [
        { label: "Property Tech in Africa", href: "/articles/property-tech" },
        { label: "Data-Driven Decisions", href: "/articles/data-driven" },
        { label: "Website Design Strategy", href: "/articles/website-design" },
        { label: "Custom Software", href: "/articles/custom-software" },
        { label: "Mobile Apps", href: "/articles/mobile-apps" },
      ],
    },
    {
      title: "Docs",
      links: [
        { label: "Company Profile", href: "/docs" },
        { label: "Pricing Guide", href: "/docs" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-widest mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150 relative group inline-block"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/50 group-hover:w-full transition-all duration-200" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}