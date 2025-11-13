import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Skills = () => {
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
      items: "Rest API, Web Socket, JBoss",
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
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Skills & Tools</h2>
        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-accent/50">
                <TableHead className="font-semibold text-foreground w-1/3">Component</TableHead>
                <TableHead className="font-semibold text-foreground">Skills/Tools</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {skills.map((skill, index) => (
                <TableRow key={index} className="hover:bg-accent/20 transition-colors">
                  <TableCell className="font-medium text-foreground align-top py-4">
                    {skill.category}
                  </TableCell>
                  <TableCell className="text-muted-foreground py-4">{skill.items}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
