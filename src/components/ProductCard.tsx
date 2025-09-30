import { useLanguage } from '@/hooks/useLanguage';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, Mic, FileText, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  url: string;
  tagline_en: string;
  tagline_nl: string;
  bullets_en: string[];
  bullets_nl: string[];
  status: string;
  icon: string;
  note_en?: string;
  note_nl?: string;
}

interface ProductCardProps {
  project: Project;
}

const iconMap = {
  Calendar: Calendar,
  Mic: Mic,
  FileText: FileText,
};

const ProductCard = ({ project }: ProductCardProps) => {
  const { language, t } = useLanguage();
  
  const tagline = language === 'nl' ? project.tagline_nl : project.tagline_en;
  const bullets = language === 'nl' ? project.bullets_nl : project.bullets_en;
  const note = language === 'nl' ? project.note_nl : project.note_en;
  
  const IconComponent = iconMap[project.icon as keyof typeof iconMap] || Calendar;

  const handleOpenDemo = () => {
    const utmUrl = `${project.url}?utm_source=fushionai_site&utm_campaign=gallery`;
    window.open(utmUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group relative rounded-2xl border bg-card p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <IconComponent className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{project.name}</h3>
          </div>
        </div>
        {project.status === 'live' && (
          <Badge className="bg-primary/20 text-primary border-primary/40 hover:bg-primary/30">
            {t('products.badge_live')}
          </Badge>
        )}
      </div>

      <p className="text-muted-foreground mb-4">
        {tagline}
      </p>

      <ul className="space-y-2 mb-6">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="text-primary mt-0.5">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {note && (
        <p className="text-xs text-muted-foreground italic mb-4 bg-muted p-2 rounded">
          {note}
        </p>
      )}

      <Button
        onClick={handleOpenDemo}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {t('products.cta_demo')}
        <ExternalLink className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export default ProductCard;
