import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Code2, Database, Globe, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const techLogos = {
    "Python": "🐍",
    "JavaScript": "JS",
    "Java": "☕",
    "C++": "C++",
    "Angular": "🅰️",
    "React": "⚛️",
    "NodeJS": "🟢",
    "TensorFlow": "🧠",
    "PyTorch": "🔥",
    "Docker": "🐳",
    "AWS": "☁️",
    "Kafka": "📨"
  };
  const skills = [
    {
      category: "Web-based Technology",
      items: "HTML, CSS, JavaScript, Angular, NodeJS, Paper JS, TypeScript",
    },
    {
      category: "Programming/Framework",
      items: "Java, Python, AI/ML, NLP, DL (TensorFlow, PyTorch), C++",
    },
    {
      category: "Services",
      items: "Rest API, Web Socket, JBoss, Kafka",
    },
    {
      category: "Cloud & DevOps",
      items: "AWS, Docker",
    },
    {
      category: "Code Review/Coverage Tools",
      items: "SonarQube, Karma, Black Duck, Polaris",
    },
    {
      category: "Unit Testing",
      items: "Jasmine and Angular",
    },
    {
      category: "Command Line",
      items: "Linux Commands, Vim, VI Editor",
    },
    {
      category: "Build Tool",
      items: "Maven",
    },
    {
      category: "Database",
      items: "Oracle SQL Developer (Relational Database), Versant (Object Oriented Database)",
    },
    {
      category: "Extra",
      items: "Confluence, XWiki, GitLab, Source Tree, Azure DevOps, Rally, MobaXterm, ALM, Git",
    },
    {
      category: "General",
      items: "Communication, Self-Quick-Learner, Leadership, Teamwork, Problem Solving",
    },
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-primary" />
          <Code2 className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Tech Stack</h2>
          <Code2 className="w-8 h-8 text-primary" />
          <div className="h-px w-16 bg-primary" />
        </div>
        
        {/* Tech Logos Section */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-6 bg-card rounded-lg border-2 border-primary"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            Core Technologies
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(techLogos).map(([tech, icon], index) => (
              <motion.div 
                key={tech}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center gap-2 p-3 bg-secondary rounded-lg border border-border hover:border-primary transition-colors"
              >
                <span className="text-3xl">{icon}</span>
                <span className="text-xs font-medium text-foreground">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <Card className="bg-card border-2 border-primary shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary">
                <TableHead className="font-semibold text-foreground w-1/3 flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Component
                </TableHead>
                <TableHead className="font-semibold text-foreground flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Skills/Tools
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {skills.map((skill, index) => (
                <motion.tr
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="hover:bg-secondary transition-colors border-l-2 border-transparent hover:border-l-primary border-b"
                >
                  <TableCell className="font-medium text-foreground align-top py-4 border-r-2 border-border">
                    {skill.category}
                  </TableCell>
                  <TableCell className="text-foreground py-4">{skill.items}</TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
