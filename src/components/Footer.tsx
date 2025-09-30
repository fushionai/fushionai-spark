import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright').replace('{year}', currentYear.toString())}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
