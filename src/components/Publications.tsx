import { Card } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Publications = () => {
  const publications = [
    {
      title: "Deep Learning-Based Object Detection in Diverse Weather Conditions",
      type: "Research Paper",
      publisher: "IGI Global",
      link: "https://www.igi-global.com/article/deep-learning-based-object-detection-in-diverse-weather-conditions/296236",
    },
    {
      title: "Gamedome: Platform for multiple games",
      type: "Paper Presentation",
      publisher: "TIMES 2019 at SRM University Haryana",
      link: null,
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Publications & Presentations
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 bg-card border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <FileText className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-primary mb-1">{pub.type}</p>
                    <h3 className="text-base font-semibold text-foreground mb-2">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{pub.publisher}</p>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        View Publication
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
