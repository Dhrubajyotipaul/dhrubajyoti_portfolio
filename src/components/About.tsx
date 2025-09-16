import { TrendingUp, Users, Target, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: 'Data-Driven Mindset',
      description: 'Passionate about using analytics for informed financial decisions and market insights'
    },
    {
      icon: Users,
      title: 'Community Leadership',
      description: 'Active in social causes with 150+ RTIs filed and resolved across government offices'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on building expertise in financial analytics and creating meaningful impact'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Prime Minister appreciation certificates and multiple workshop completions'
    }
  ];

  return (
    <section id="about" className="section-professional">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-section">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A motivated B.Com (Hons) Financial Analytics student with a passion for data analysis, 
            social impact, and continuous learning. Combining academic excellence with real-world 
            problem-solving through RTI activism and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="card-professional text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="heading-card">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-professional">
            <blockquote className="text-center">
              <p className="text-xl italic text-foreground mb-4">
                "Data-driven insights for impactful change."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey combines the analytical rigor of financial studies with a deep commitment 
                to social responsibility. Through my work in RTI activism, I've learned that data and 
                transparency are powerful tools for creating positive change. I bring this same 
                analytical approach to my academic pursuits and professional aspirations, always 
                seeking to understand the 'why' behind the numbers and how insights can drive 
                meaningful outcomes.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;