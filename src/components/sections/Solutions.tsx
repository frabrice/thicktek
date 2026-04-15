import { motion } from "framer-motion";
import { ArrowRight, Globe, Settings, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const solutions = [
  {
    num: "01",
    icon: Globe,
    label: "Website Transformation",
    problem: "Your website exists but does not convert. Visitors leave without acting.",
    solution: "We rebuild your web presence as a structured conversion system with clear messaging, strong calls-to-action, and tracked user flows.",
    outcome: "More inquiries, more qualified leads, measurable ROI from every visit.",
    accent: "blue",
  },
  {
    num: "02",
    icon: Settings,
    label: "Business Systems",
    problem: "Your operations run on spreadsheets, WhatsApp, and manual processes.",
    solution: "We build the digital backbone of your business — booking systems, CRMs, dashboards, and automation — designed around how you actually work.",
    outcome: "Fewer errors, faster operations, a business that scales without adding headcount.",
    accent: "emerald",
  },
  {
    num: "03",
    icon: TrendingUp,
    label: "Growth Optimization",
    problem: "You have traffic and tools, but no clear picture of what is working.",
    solution: "We set up analytics, conversion tracking, and continuous improvement cycles so every decision is grounded in real data.",
    outcome: "Month-over-month improvement in conversion, engagement, and revenue.",
    accent: "amber",
  },
];

const accentMap: Record<string, { border: string; bg: string; icon: string; num: string; tag: string }> = {
  blue: {
    border: "border-blue-500/15 hover:border-blue-500/30",
    bg: "bg-blue-500/[0.04]",
    icon: "text-blue-400 bg-blue-500/10",
    num: "text-blue-500/30",
    tag: "text-blue-400",
  },
  emerald: {
    border: "border-emerald-500/15 hover:border-emerald-500/30",
    bg: "bg-emerald-500/[0.04]",
    icon: "text-emerald-400 bg-emerald-500/10",
    num: "text-emerald-500/30",
    tag: "text-emerald-400",
  },
  amber: {
    border: "border-amber-500/15 hover:border-amber-500/30",
    bg: "bg-amber-500/[0.04]",
    icon: "text-amber-400 bg-amber-500/10",
    num: "text-amber-500/30",
    tag: "text-amber-400",
  },
};

export default function Solutions() {
  const navigate = useNavigate();

  return (
    <section id="solutions" className="py-16 border-t border-border/40">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 font-mono">// What We Build</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight">
            Three ways we transform<br />
            how your business operates online.
          </h2>
          <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
            Every engagement is scoped around one of these capabilities. Often, all three.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            const c = accentMap[s.accent];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg border ${c.border} ${c.bg} p-5 flex flex-col relative overflow-hidden transition-colors duration-200`}
              >
                <div className={`absolute top-4 right-4 text-2xl font-bold font-mono ${c.num} leading-none`}>{s.num}</div>

                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${c.icon}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${c.tag}`}>{s.label}</p>

                <div className="space-y-3.5 flex-1">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider mb-1.5 font-mono">problem</p>
                    <p className="text-xs text-muted-foreground/70 leading-relaxed">{s.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider mb-1.5 font-mono">solution</p>
                    <p className="text-xs text-muted-foreground/70 leading-relaxed">{s.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider mb-1.5 font-mono">outcome</p>
                    <p className="text-xs text-foreground/80 font-medium leading-relaxed">{s.outcome}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Button
            size="sm"
            className="h-9 text-xs bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => { window.scrollTo(0, 0); navigate("/solutions"); }}
          >
            Explore All Solutions
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="h-9 text-xs border border-border hover:border-border/80 text-muted-foreground hover:text-foreground"
            onClick={() => { window.scrollTo(0, 0); navigate("/case-studies"); }}
          >
            See Case Studies
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
