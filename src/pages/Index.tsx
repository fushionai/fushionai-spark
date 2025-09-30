import { LanguageProvider } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Vision from '@/components/Vision';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Products />
          <Vision />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
