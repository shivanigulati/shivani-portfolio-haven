import { Card } from "@/components/ui/card";

const Profile = () => {
  return (
    <section className="py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Profile</h2>
        <Card className="p-8 bg-card border-border shadow-sm hover:shadow-md transition-shadow">
          <p className="text-foreground leading-relaxed text-center md:text-left">
            I am an academically qualified Artificial Intelligence student and an enthusiast deeply entrenched 
            in coding and developing great solutions. I can add great value to the company by helping the clients 
            with technological solutions. I have 3+ years of experience as a software engineer in developing code 
            for high-volume businesses and supporting Network Optimization for a client in the railway sector. 
            I have worked in all phases of software development, input gathering, code development, unit testing, 
            demoing, troubleshooting, and bug-fixing.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Profile;
