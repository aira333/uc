
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const campuses = [
    "UC Berkeley",
    "UC Davis",
    "UC Los Angeles",
    "UC San Diego",
    "UC Santa Barbara",
    "UC Santa Cruz",
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold">UC</span>
              </div>
              <span className="font-bold text-xl text-primary">ORB</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              UC ORB is a tool that identifies and categorizes open-source projects within the UC system. It is a part of the UC Network of Open Source Program (OSPO).
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">UC Campuses</h3>
            <div className="grid grid-cols-2 gap-2">
              {campuses.map((campus) => (
                <span key={campus} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {campus}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/browse" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Browse Projects
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About UC ORB
              </Link>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} UC Network of Open Source Program (OSPO). All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
