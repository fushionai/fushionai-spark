import { useLanguage } from '@/hooks/useLanguage';
import LangToggle from './LangToggle';

const Header = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Fushion AI
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('products')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.products')}
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.vision')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </button>
            <LangToggle />
          </nav>

          <div className="flex md:hidden">
            <LangToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
