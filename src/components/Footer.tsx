
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="font-bold text-xl mb-4">
              <span className="gradient-text">Briefly</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              AI-powered daily digest that transforms inbox chaos into focused insights for busy professionals.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 Briefly. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link 
                  to="/" 
                  onClick={() => setTimeout(() => scrollToSection('features'), 100)}
                  className="hover:text-foreground transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  onClick={() => setTimeout(() => scrollToSection('how-it-works'), 100)}
                  className="hover:text-foreground transition-colors duration-200"
                >
                  How it works
                </Link>
              </li>
              <li><Link to="/pricing" className="hover:text-foreground transition-colors duration-200">Pricing</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-200">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors duration-200">About</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors duration-200">Blog</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground transition-colors duration-200">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors duration-200">Terms</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
