import { motion } from 'framer-motion';
import { FileText, Download, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DocItem {
  id: string;
  title: string;
  description: string;
  meta: string;
  status: 'available' | 'coming-soon';
  href?: string;
  filename?: string;
}

const docs: DocItem[] = [
  {
    id: 'company-profile',
    title: 'Company Profile',
    description:
      'A complete overview of ThickTek — who we are, what we build, selected projects, our engagement process, and contact information.',
    meta: 'HTML · 1 document',
    status: 'available',
    href: '/docs/company-profile.html',
    filename: 'ThickTek-Company-Profile.html',
  },
  {
    id: 'pricing',
    title: 'Pricing Guide',
    description:
      'Detailed pricing for our core service offerings, project tiers, and engagement models. Helps you understand investment ranges before reaching out.',
    meta: 'PDF · Coming soon',
    status: 'coming-soon',
  },
];

export default function DocsPage() {
  return (
    <main className="pt-[52px] pb-24 min-h-screen">
      <div className="container py-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl pt-16 pb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] mb-6">
            <BookOpen className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
            Documents &amp;<br />
            <span className="text-primary">Downloads</span>
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Official ThickTek documents — company information, service guides, and resources
            to help you understand who we are and how we work before getting in touch.
          </p>
        </motion.div>

        <div className="max-w-3xl space-y-4">
          {docs.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="rounded-xl border border-border/60 bg-card overflow-hidden"
            >
              <div className="h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
              <div className="p-6 flex items-start gap-5">
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileText className="w-5 h-5 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="text-base font-semibold text-foreground mb-1">{doc.title}</h2>
                      <p className="text-xs text-muted-foreground/60 mb-3">{doc.meta}</p>
                    </div>
                    {doc.status === 'available' ? (
                      <a
                        href={doc.href}
                        download={doc.filename}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="h-8 text-xs gap-1.5 flex-shrink-0">
                          <Download className="w-3.5 h-3.5" />
                          Download
                        </Button>
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/60 bg-muted/30 flex-shrink-0">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground font-medium">Coming Soon</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{doc.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mt-16 rounded-xl border border-border/60 bg-card overflow-hidden"
        >
          <div className="p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-base mb-1">Need something specific?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                If you need a custom proposal, NDA, or any other documentation for your engagement, reach out and we will prepare it for you.
              </p>
            </div>
            <a href="/contact">
              <Button variant="outline" size="sm" className="h-9 text-xs whitespace-nowrap">
                Contact Us
              </Button>
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
