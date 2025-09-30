import { useLanguage } from '@/hooks/useLanguage';

const Vision = () => {
  const { t } = useLanguage();

  return (
    <section id="vision" className="py-20 sm:py-24 bg-gradient-to-br from-brand-lighter via-background to-brand-lighter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('vision.title')}
          </h2>
          
          <div className="space-y-4 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              {t('vision.paragraph1')}
            </p>
            <p className="leading-relaxed">
              {t('vision.paragraph2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
