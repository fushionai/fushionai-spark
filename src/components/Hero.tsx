import { useLanguage } from '@/hooks/useLanguage';
import { Button } from './ui/button';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-brand-lighter to-background py-20 sm:py-32">
      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('products')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
              >
                {t('hero.cta_primary')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-primary/20 hover:bg-primary/5"
              >
                {t('hero.cta_secondary')}
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full h-96">
              {/* Abstract SVG illustration */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'hsl(217 91% 60%)', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: 'hsl(217 91% 60%)', stopOpacity: 0.1 }} />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="150" fill="url(#grad1)" className="animate-pulse" />
                <circle cx="200" cy="200" r="100" fill="url(#grad1)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <circle cx="200" cy="200" r="50" fill="hsl(217 91% 60% / 0.5)" className="animate-pulse" style={{ animationDelay: '1s' }} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
