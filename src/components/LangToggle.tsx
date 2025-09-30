import { useLanguage } from '@/hooks/useLanguage';

const LangToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full bg-muted p-1">
      <button
        onClick={() => setLanguage('nl')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'nl'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        NL
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LangToggle;
