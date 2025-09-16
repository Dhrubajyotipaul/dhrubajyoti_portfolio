import { Award, Trophy, Users, Lightbulb, Calendar, MapPin } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Prime Minister of India Appreciation Certificates',
      years: '2023 & 2024',
      description: 'Recognized for active participation in Pariksha Pe Charcha initiatives',
      icon: Trophy,
      category: 'National Recognition',
      highlight: true
    },
    {
      title: 'Game Development Workshop',
      organization: 'IIT Guwahati',
      year: '2019',
      description: 'Built live games using Unity engine, demonstrating technical creativity',
      icon: Lightbulb,
      category: 'Technical Workshop'
    },
    {
      title: 'Data Analytics Workshop',
      organization: 'IIT Delhi',
      year: '2025',
      description: 'Real-time business data analysis and visualization techniques',
      icon: Award,
      category: 'Analytics'
    },
    {
      title: 'ICAI Commerce Olympiad',
      year: '2023',
      description: 'Recognition for analytical reasoning skills and commercial knowledge',
      icon: Trophy,
      category: 'Academic Excellence'
    },
    {
      title: 'School Leadership Role',
      organization: 'Ideal English School',
      year: '2025',
      description: 'Led Arts & Crafts event organization, demonstrating leadership capabilities',
      icon: Users,
      category: 'Leadership'
    },
    {
      title: 'TEDxBIT Noida Committee Member',
      year: '2025',
      description: 'Finance & Budgeting committee member for prestigious TEDx event',
      icon: Users,
      category: 'Event Management'
    }
  ];

  const workshops = [
    {
      title: 'A–Z Microsoft Excel with ChatGPT & AI Tools',
      instructor: 'IIT Madras alumnus',
      focus: 'AI-integrated Excel solutions and automation'
    },
    {
      title: 'Be10x AI & Productivity Workshop',
      focus: 'Advanced data visualization and automation techniques'
    },
    {
      title: 'Tabla Diploma & Certifications',
      focus: 'Musical accomplishments demonstrating dedication and discipline'
    }
  ];

  const recognitions = [
    { type: 'MyGov Engagements', count: '50+', description: 'Policy suggestions, essays, and quizzes' },
    { type: 'Workshop Completions', count: '10+', description: 'Technical and soft skills development' },
    { type: 'Leadership Roles', count: '5+', description: 'School and college level responsibilities' },
    { type: 'Awards & Contests', count: '15+', description: 'Yoga, art, and talent competitions' }
  ];

  return (
    <section id="achievements" className="section-professional bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-section">Achievements & Recognition</h2>
          <p className="text-lg text-muted-foreground">
            A track record of excellence in academics, leadership, and community engagement
          </p>
        </div>

        {/* Major Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`${
                achievement.highlight ? 'card-achievement' : 'card-professional'
              } group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                  achievement.highlight 
                    ? 'bg-accent text-accent-foreground' 
                    : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                } transition-colors`}>
                  <achievement.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md mb-2">
                    {achievement.category}
                  </span>
                  <h3 className="heading-card">{achievement.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    {achievement.organization && (
                      <>
                        <MapPin className="h-3 w-3" />
                        <span>{achievement.organization}</span>
                      </>
                    )}
                    <Calendar className="h-3 w-3" />
                    <span>{achievement.year || achievement.years}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workshops Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Professional Development Workshops
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <div key={index} className="card-professional">
                <h4 className="font-semibold text-foreground mb-2">{workshop.title}</h4>
                {workshop.instructor && (
                  <p className="text-primary font-medium text-sm mb-2">{workshop.instructor}</p>
                )}
                <p className="text-muted-foreground text-sm">{workshop.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Statistics */}
        <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Recognition by Numbers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recognitions.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{item.count}</div>
                <div className="font-semibold text-foreground mb-1">{item.type}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;