import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              Activities & Interests: Volunteering, Surfing, Cooking, Traveling
            </p>
            <p className="mt-2">Languages: English, Hindi</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by Shivani Gulati</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
