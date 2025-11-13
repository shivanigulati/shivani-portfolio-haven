import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "M.Tech (CSE - Artificial Intelligence)",
      year: "2019-2021",
      institution: "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
    },
    {
      degree: "B.Tech (CSE)",
      year: "2015-2019",
      institution: "SRM University",
    },
  ];

  return (
    <section className="py-16 px-6 border-t-2 border-b-2 border-primary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-primary" />
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Education</h2>
          <GraduationCap className="w-8 h-8 text-primary" />
          <div className="h-px w-16 bg-primary" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ x: index === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 bg-card border-2 border-primary shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-primary rounded-lg border-2 border-primary">
                  <GraduationCap className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-sm font-semibold text-black mb-2">{edu.year}</p>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
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

export default Education;
