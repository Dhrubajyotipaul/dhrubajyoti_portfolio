import { useState, useEffect, useRef } from 'react';
import { Code, Database, TrendingUp, Monitor, Award, CheckCircle } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const technicalSkills = [
    { name: 'Python Programming', level: 75, category: 'Programming' },
    { name: 'MySQL Database', level: 80, category: 'Database' },
    { name: 'Technical Analysis (Equity)', level: 85, category: 'Finance' },
    { name: 'Tableau', level: 70, category: 'Analytics' },
    { name: 'MS Excel Advanced', level: 90, category: 'Tools' },
    { name: 'PowerPoint Presentations', level: 85, category: 'Tools' }
  ];

  const certifications = [
    {
      title: 'SEBI – Investor Certification Examination',
      issuer: 'Securities and Exchange Board of India',
      icon: TrendingUp
    },
    {
      title: 'Human Resource Management',
      issuer: 'UniAthena',
      icon: Award
    },
    {
      title: 'Certified Cyber Cadet',
      issuer: 'Ministry of Electronics & IT (MeitY)',
      icon: Monitor
    },
    {
      title: 'Product Management Foundation',
      issuer: 'LinkedIn Learning',
      icon: CheckCircle
    },
    {
      title: 'Introduction to Gen AI & Prompting',
      issuer: 'LetsUpgrade - MS Excel',
      icon: Code
    },
    {
      title: 'Social Media Marketing',
      issuer: 'Udemy',
      icon: TrendingUp
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-professional" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-section">Skills & Certifications</h2>
          <p className="text-lg text-muted-foreground">
            Technical expertise and professional certifications driving analytical excellence
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className={`skill-progress ${isVisible ? 'w-full' : 'w-0'}`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="card-professional text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-4 group-hover:bg-accent/20 transition-colors">
                  <cert.icon className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Database className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">Data Analytics</div>
              <div className="text-muted-foreground">Core Expertise</div>
            </div>
            <div>
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">Financial Analysis</div>
              <div className="text-muted-foreground">Market Focus</div>
            </div>
            <div>
              <Code className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">Programming</div>
              <div className="text-muted-foreground">Technical Skills</div>
            </div>
            <div>
              <Award className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">Certified</div>
              <div className="text-muted-foreground">Professional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;