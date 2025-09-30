import { useLanguage } from '@/hooks/useLanguage';
import ProductCard from './ProductCard';
import projectsData from '../data/projects.json';

const Products = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-20 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('products.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project) => (
            <ProductCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
