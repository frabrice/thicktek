import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface ImpactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
  gradient: string;
}

export function ImpactCard({ icon: Icon, title, description, stats, gradient }: ImpactCardProps) {
  return (
    <Card className="relative overflow-hidden group h-full hover:shadow-lg transition-all duration-300">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-100 group-hover:opacity-80 transition-opacity duration-300`} />
      <div className="relative p-6 space-y-4">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-background/60 backdrop-blur-sm">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="pt-2">
          <span className="text-lg font-semibold text-primary">{stats}</span>
        </div>
      </div>
    </Card>
  );
}