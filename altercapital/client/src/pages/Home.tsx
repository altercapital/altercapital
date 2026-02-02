import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail } from 'lucide-react';

/**
 * ALTER CAPITAL — INSTITUTIONAL WEBSITE
 * Design Philosophy: Minimalismo Japonês Corporativo (Ma philosophy)
 * 
 * Key principles:
 * - Espaço vazio como protagonista
 * - Elegância através de restrição
 * - Animações suaves e deliberadas
 * - Tipografia: Instrument Serif (display) + Inter (body)
 * - Paleta: Cinzas quentes + Azul-acinzentado + Terracota
 */

export default function Home() {
  const { t, i18n } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Create intersection observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.animation = 'slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    // Observe all stagger items
    const staggerItems = document.querySelectorAll('.stagger-item');
    staggerItems.forEach((item) => {
      observerRef.current?.observe(item);
    });

    return () => {
      staggerItems.forEach((item) => {
        observerRef.current?.unobserve(item);
      });
    };
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const observeSection = useCallback((id: string) => {
    setVisibleSections(prev => new Set(prev).add(id));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2 md:gap-3">
            <img src="/images/logo.png" alt="Alter Capital" className="h-8 md:h-10 w-auto" style={{ backgroundColor: 'transparent' }} />
          </div>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#about" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">{t('nav.about')}</a>
            <a href="#expertise" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">{t('nav.expertise')}</a>
            <a href="#how-we-work" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">{t('nav.howWeWork')}</a>
            <a href="#contact" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">{t('nav.contact')}</a>
            <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
              <button 
                onClick={() => changeLanguage('en')}
                className={`hover:text-primary transition-colors cursor-pointer ${i18n.language === 'en' ? 'text-primary font-semibold' : ''}`}
              >
                EN
              </button>
              <span className="text-border">/</span>
              <button 
                onClick={() => changeLanguage('pt')}
                className={`hover:text-primary transition-colors cursor-pointer ${i18n.language === 'pt' ? 'text-primary font-semibold' : ''}`}
              >
                PT
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.35,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/50 to-background z-1" />
        
        <div className="container relative z-10 max-w-4xl">
          <div className="animate-fade-in-blur space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              {t('hero.title')}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground max-w-2xl">
              {t('hero.subtitle')}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center pt-4">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover-lift text-sm md:text-base"
              >
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs md:text-sm text-muted-foreground">
                {t('hero.location')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <div className="separator-line" />

      {/* ABOUT / PHILOSOPHY SECTION */}
      <section id="about" className="py-20 md:py-32">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="stagger-item">
              <div 
                className="aspect-video rounded-lg overflow-hidden hover-lift"
                style={{
                  backgroundImage: 'url(/images/philosophy-visual.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
            
            <div className="stagger-item space-y-6">
              <div>
                <p className="text-sm font-medium text-accent mb-3 tracking-widest">{t('about.label')}</p>
                <h2 className="text-4xl font-light mb-6">
                  {t('about.title')}
                </h2>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('about.p1')}
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('about.p2')}
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('about.p3')}
              </p>
              
              <div className="pt-6 border-t border-border">
                <p className="italic text-lg text-muted-foreground">
                  "{t('about.quote')}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <div className="separator-line" />

      {/* EXPERTISE SECTION */}
      <section id="expertise" className="py-20 md:py-32">
        <div className="container max-w-5xl">
          <div className="mb-12 md:mb-20">
            <p className="text-xs md:text-sm font-medium text-accent mb-2 md:mb-3 tracking-widest">{t('expertise.label')}</p>
            <h2 className="text-3xl md:text-4xl font-light">
              {t('expertise.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* TRADE FINANCE: COMMODITIES & ENERGY */}
            <div className="stagger-item space-y-4 pb-8 border-b border-border md:border-b-0">
              <div 
                className="aspect-video md:aspect-square rounded-lg overflow-hidden mb-4 md:mb-6 hover-lift transition-transform"
                style={{
                  backgroundImage: 'url(/images/advisory-visual.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <h3 className="text-xl md:text-2xl font-light">
                {t('expertise.tradeFinance.title')}
              </h3>
              <p className="text-xs md:text-sm font-medium text-accent tracking-widest">{t('expertise.tradeFinance.focus')}</p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t('expertise.tradeFinance.description')}
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                {(t('expertise.tradeFinance.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BUSINESS EXPANSION & MARKET DEVELOPMENT */}
            <div className="stagger-item space-y-4 pb-8 border-b border-border md:border-b-0">
              <div 
                className="aspect-video md:aspect-square rounded-lg overflow-hidden mb-4 md:mb-6 hover-lift transition-transform"
                style={{
                  backgroundImage: 'url(/images/expansion-visual.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <h3 className="text-xl md:text-2xl font-light">
                {t('expertise.expansion.title')}
              </h3>
              <p className="text-xs md:text-sm font-medium text-accent tracking-widest">{t('expertise.expansion.focus')}</p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t('expertise.expansion.description')}
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                {(t('expertise.expansion.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* STRATEGIC INVESTMENTS */}
            <div className="stagger-item space-y-4">
              <div 
                className="aspect-video md:aspect-square rounded-lg overflow-hidden mb-4 md:mb-6 hover-lift"
                style={{
                  backgroundImage: 'url(/images/network-visual.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <h3 className="text-xl md:text-2xl font-light">
                {t('expertise.investments.title')}
              </h3>
              <p className="text-xs md:text-sm font-medium text-accent tracking-widest">{t('expertise.investments.focus')}</p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t('expertise.investments.description')}
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                {(t('expertise.investments.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <div className="separator-line" />

      {/* HOW WE WORK SECTION */}
      <section id="how-we-work" className="py-20 md:py-32">
        <div className="container max-w-4xl">
          <div className="mb-12 md:mb-16">
            <p className="text-xs md:text-sm font-medium text-accent mb-2 md:mb-3 tracking-widest">{t('howWeWork.label')}</p>
            <h2 className="text-3xl md:text-4xl font-light">
              {t('howWeWork.title')}
            </h2>
          </div>

          <div className="space-y-8 md:space-y-12">
            <div className="stagger-item space-y-4">
              <h3 className="text-xl md:text-2xl font-light">{t('howWeWork.flexible.title')}</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('howWeWork.flexible.p1')}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('howWeWork.flexible.p2')}
              </p>
            </div>

            <div className="stagger-item space-y-4">
              <h3 className="text-xl md:text-2xl font-light">{t('howWeWork.custom.title')}</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('howWeWork.custom.p1')}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('howWeWork.custom.p2')}
              </p>
            </div>

            <div className="stagger-item space-y-4 pt-8 border-t border-border">
              <h3 className="text-xl md:text-2xl font-light">{t('howWeWork.experience.title')}</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('howWeWork.experience.p1')}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('howWeWork.experience.p2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <div className="separator-line" />

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="stagger-item space-y-3 md:space-y-4">
              <h2 className="text-3xl md:text-4xl font-light">
                {t('contact.title')}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                {t('contact.description')}
              </p>
            </div>

            <div className="stagger-item">
              <a 
                href="mailto:contact@altercapital.com"
                className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover-lift text-sm md:text-base"
              >
                <Mail className="w-4 md:w-5 h-4 md:h-5" />
                {t('contact.cta')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 md:py-16 bg-secondary/20">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <img src="/images/logo.png" alt="Alter Capital" className="h-7 md:h-8 w-auto mb-4 md:mb-6" style={{ backgroundColor: 'transparent' }} />
              <p className="text-xs md:text-sm text-muted-foreground">
                {t('footer.tagline')}
              </p>
            </div>

            <div>
              <p className="text-xs md:text-sm font-medium mb-3 md:mb-4">{t('footer.location')}</p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {t('footer.locationText')}<br />
                {t('footer.locationActive')}
              </p>
            </div>

            <div>
              <p className="text-xs md:text-sm font-medium mb-3 md:mb-4">{t('footer.connect')}</p>
              <a href="mailto:contact@altercapital.com" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                contact@altercapital.com
              </a>
            </div>
          </div>

          <div className="separator-line mb-6 md:mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs text-muted-foreground">
            <p>{t('footer.copyright')}</p>
            <p>{t('footer.crafted')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
