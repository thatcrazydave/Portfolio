
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-portfolio-navy/90 backdrop-blur shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="text-portfolio-teal text-2xl font-semibold">
          <span className="font-mono">{'<'}</span>
          <span>Ogheneovo Segba</span>
          <span className="font-mono">{' />'}</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="nav-link">
                  <span className="text-portfolio-teal mr-1 font-mono text-sm">0{index + 1}.</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="outline" className="btn-primary">
            Resume
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <button 
          className="md:hidden text-portfolio-teal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-portfolio-lightNavy/95 z-50 flex flex-col justify-center items-center md:hidden">
          <button 
            className="absolute top-5 right-5 text-portfolio-teal"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <ul className="flex flex-col space-y-6 text-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="text-portfolio-lightest text-xl hover:text-portfolio-teal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="text-portfolio-teal font-mono mb-1">0{index + 1}.</div> 
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            variant="outline" 
            className="btn-primary mt-10"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
