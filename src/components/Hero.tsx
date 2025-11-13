import { Mail, Phone, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-background via-accent/30 to-secondary/40 py-16 px-6">
      <div className="max-w-4xl w-full text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
          Shivani Gulati
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Software Engineer specializing in AI & Machine Learning with 3+ years of experience 
          developing innovative solutions for high-volume businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
          <a 
            href="mailto:gulati.shivani1097@gmail.com" 
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm md:text-base">gulati.shivani1097@gmail.com</span>
          </a>
          <a 
            href="tel:8076219433" 
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm md:text-base">8076219433</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/gulatishivani/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm md:text-base">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
