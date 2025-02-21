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
      title: "Solutions",
      links: [
        { label: "Cloud Services", href: "/solutions#cloud" },
        { label: "AI & Machine Learning", href: "/solutions#ai" },
        { label: "Web & Mobile Apps", href: "/solutions#apps" },
        { label: "Digital Infrastructure", href: "/solutions#infrastructure" },
        { label: "Data Analytics", href: "/solutions#analytics" },
        { label: "Cybersecurity", href: "/solutions#security" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about#team" },
        { label: "Careers", href: "/careers" },
        { label: "Publications", href: "/publications" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Security", href: "/security" },
        { label: "Compliance", href: "/compliance" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold mb-3">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
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