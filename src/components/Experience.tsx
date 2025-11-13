import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  const experiences = [
    {
      title: "SOFTWARE ENGINEER IN AI PROJECT",
      period: "MARCH 2024 - CURRENT",
      company: "WABTEC CORPORATION",
      technologies: ["Python", "NLP", "BERT"],
      highlights: [
        "Formed and led an AI team to introduce AI capabilities into the product",
        "Developed a proof of concept to enhance user experience by implementing a voice command feature using the Hugging Face library, Transformers, PyTorch, and Google Colab notebooks",
        "Collaborated with developers to integrate the voice command feature, making the product more user-friendly",
        "Released version 1 of its Documentation",
      ],
    },
    {
      title: "SOFTWARE ENGINEER",
      period: "JUNE 2023 - CURRENT",
      company: "WABTEC CORPORATION",
      technologies: ["C++", "Java"],
      highlights: [
        "Creation of Train schedules, Authorities for the train, Trip Plan Information, Engine Consist, Bulletin Generation, etc. for Train Dispatcher UI",
        "Contributing to pushing back data to the database, creating/modifying the data, and then sending it to UI",
        "Hands-on with Oracle database programming and tuning of SQL queries",
        "Peer reviewer for the code ensuring code quality and adherence to best practices",
        "Managing the full software development lifecycle from requirement gathering to deployment & maintenance",
      ],
    },
    {
      title: "SOFTWARE ENGINEERING SPECIALIST",
      period: "JULY 2021 - JUNE 2023",
      company: "WABTEC CORPORATION",
      technologies: ["C++"],
      highlights: [
        "Analyzing requirements and Input Gathering",
        "Translating Requirements and Functional Designs into technical design in Confluence and XWIKI",
        "Coding, Unit Testing, and Documentation",
        "KT sessions for New Joiners",
        "Smooth Hanover to Quality Assurance Team",
      ],
    },
    {
      title: "INTERN - CSE DEVELOPER",
      period: "JAN 2021 - JULY 2021",
      company: "WABTEC CORPORATION",
      technologies: ["HTML", "CSS", "JavaScript", "Angular", "NodeJS", "Paper JS", "TypeScript"],
      highlights: [
        "Developed and enhanced Track Line Display (TLD) and implemented the functionality of real-time annotation and note creation",
        "Created a PaperJs Unit Testing framework and achieved over 95% code coverage with over 100-unit test cases",
        "Proficient in using SonarQube and Karma tools to identify and fix code smells, bugs, and vulnerabilities",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-muted/30 relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-primary" />
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Career Journey</h2>
          <Briefcase className="w-8 h-8 text-primary" />
          <div className="h-px w-16 bg-primary" />
        </div>
        
        {/* Career Progression Timeline */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-12 flex-wrap"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border-2 border-primary">
            <span className="text-sm font-semibold text-foreground">Intern</span>
          </div>
          <ArrowUp className="w-5 h-5 text-primary rotate-90" />
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border-2 border-primary">
            <span className="text-sm font-semibold text-foreground">Specialist</span>
          </div>
          <ArrowUp className="w-5 h-5 text-primary rotate-90" />
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border-2 border-primary">
            <span className="text-sm font-semibold text-foreground">Software Engineer</span>
          </div>
          <ArrowUp className="w-5 h-5 text-primary rotate-90" />
          <div className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg border-2 border-primary">
            <span className="text-sm font-semibold text-foreground">AI Engineer</span>
          </div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 bg-card border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm font-semibold text-black whitespace-nowrap">{exp.period}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="text-sm text-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
