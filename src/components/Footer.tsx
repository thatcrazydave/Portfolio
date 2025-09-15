
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center text-portfolio-slate text-sm font-mono">
      <div className="container">
        <div className="mb-3">
          <a 
            href="#" 
            className="inline-flex items-center hover:text-portfolio-teal"
          >
            <span>Designed & Built by Ogheneovo Segba</span>
          </a>
        </div>
        <div>&copy; {currentYear} All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
