
const Footer = () => {
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
              <li><a href="#features" className="hover:text-foreground transition-colors duration-200">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors duration-200">How it works</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-200">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-200">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-200">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
