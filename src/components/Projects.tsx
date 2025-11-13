import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Object Detection in Adverse Weather Conditions",
      tech: ["ImageAI", "Deep Learning"],
      description:
        "Created a model that detects objects in various weather conditions. Implemented and fine-tuned deep learning models for improved accuracy.",
    },
    {
      title: "Model for Text Classification",
      tech: ["Python", "Deep Learning", "NLP"],
      description:
        "Implementation of existing word embedding techniques such as TF-IDF, GloVe, BERT and Word2Vec. Proposed a new model for text classification.",
    },
    {
      title: "Gamedome & Music Player",
      tech: ["Python", "Tkinter", "Pygame"],
      description:
        "Developed using tkinter for the basic user interface, mutagen.id3 for fetching metadata, and pygame to load and play music.",
    },
    {
      title: "School Management System",
      tech: ["Core Java", "MySQL", "Swing"],
      description:
        "Complete management system made using Java Swings for the front-end part and MySQL for the back-end part of the project.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-card border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-accent/50 rounded-lg">
                  <Code2 className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground flex-1">{project.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
