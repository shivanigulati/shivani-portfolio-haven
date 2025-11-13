import { Mail, Phone, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-keyboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/50 to-primary/30" />
      
      <div className="relative z-10 max-w-4xl w-full text-center space-y-6 py-16 px-6">
        <div className="border-t-4 border-primary w-24 mx-auto mb-6" />
        <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
          Shivani Gulati
        </h1>
        <div className="border-b-2 border-accent w-32 mx-auto" />
        <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed font-medium">
          Software Engineer specializing in AI & Machine Learning with 3+ years of experience 
          developing innovative solutions for high-volume businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
          <a 
            href="mailto:gulati.shivani1097@gmail.com" 
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors border-l-2 border-primary pl-3"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm md:text-base">gulati.shivani1097@gmail.com</span>
          </a>
          <div className="h-6 w-px bg-border hidden md:block" />
          <a 
            href="tel:8076219433" 
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm md:text-base">8076219433</span>
          </a>
          <div className="h-6 w-px bg-border hidden md:block" />
          <a 
            href="https://www.linkedin.com/in/gulatishivani/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors border-r-2 border-primary pr-3"
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
