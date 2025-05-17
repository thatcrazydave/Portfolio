
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-32">
      <div className="container">
        <p className="text-portfolio-teal font-mono mb-5 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
          Hi, my name i
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-portfolio-lightest mb-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
          Ogheneovo Segba
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-portfolio-slate mb-6 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
          I build things for the web.
        </h2>
        <div className="max-w-xl mb-12 animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
          <p className="text-lg">
            I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>
        </div>
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '500ms' }}>
          <Button asChild variant="outline" className="btn-primary">
            <a href="#projects">Check out my work</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
