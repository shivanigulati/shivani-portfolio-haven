import { Mail, Phone, Linkedin } from "lucide-react";
import heroImage from "@/assets/image.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-primary/20" />
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-4xl w-full text-center space-y-6 py-12 px-6"
      >
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-foreground tracking-tight"
        >
          Shivani Gulati
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed font-sans font-medium"
        >
          Software Engineer specializing in AI & Machine Learning with 3+ years of experience 
          developing innovative solutions for high-volume businesses
        </motion.p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2 font-sans"
        >
          <a 
            href="mailto:gulati.shivani1097@gmail.com" 
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
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
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm md:text-base">LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
