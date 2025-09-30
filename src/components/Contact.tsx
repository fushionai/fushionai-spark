import { useLanguage } from '@/hooks/useLanguage';
import { Button } from './ui/button';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      label: t('contact.email'),
      href: 'mailto:info@fushionai.com',
      color: 'hover:bg-primary/10 hover:text-primary',
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      href: 'https://wa.me/31610991835',
      color: 'hover:bg-green-500/10 hover:text-green-600',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      href: 'https://www.linkedin.com/company/105873625',
      color: 'hover:bg-blue-600/10 hover:text-blue-600',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {contactMethods.map((method, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className={`flex flex-col items-center gap-2 h-auto py-6 transition-all ${method.color}`}
                asChild
              >
                <a href={method.href} target="_blank" rel="noopener noreferrer">
                  <method.icon className="w-6 h-6" />
                  <span className="font-medium">{method.label}</span>
                </a>
              </Button>
            ))}
          </div>

          <div className="pt-8 border-t space-y-2 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">{t('contact.details')}</p>
            <p>{t('contact.company')}</p>
            <p>
              <a href="mailto:info@fushionai.com" className="hover:text-primary transition-colors">
                info@fushionai.com
              </a>
            </p>
            <p>{t('contact.phone')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
