
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-navbar">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl">
              <span className="gradient-text">Briefly</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              How it works
            </button>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Pricing
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              About
            </Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Sign in
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="gradient-text bg-transparent border border-border hover:bg-muted/50">
                Get started
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-foreground transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in glass-card rounded-lg mt-2 mx-4">
            <nav className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
              >
                How it works
              </button>
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Pricing
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                About
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Blog
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/auth">
                  <Button variant="ghost" className="justify-start">
                    Sign in
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button className="gradient-text bg-transparent border border-border hover:bg-muted/50 justify-start">
                    Get started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
