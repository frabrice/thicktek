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
          <h3 className="text-sm sm:text-base font-semibold mb-3">{section.title}</h3>
          <ul className="space-y-1 sm:space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}