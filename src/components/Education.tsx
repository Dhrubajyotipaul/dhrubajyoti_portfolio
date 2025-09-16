import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Com Hons. – Financial Analytics',
      institution: 'Birla Institute of Technology, Mesra – Noida Off-Campus',
      period: 'Present',
      status: 'Currently Pursuing',
      description: 'Specializing in financial data analysis, market research, and quantitative methods for business decision-making.',
      highlight: true
    },
    {
      degree: 'Senior Secondary – CBSE Board',
      institution: 'Academic Excellence',
      period: '2025',
      status: '60.0%',
      description: 'Completed with focus on commerce and analytical subjects, building foundation for financial studies.'
    },
    {
      degree: 'Secondary – CBSE Board',
      institution: 'Academic Foundation',
      period: '2023',
      status: '55.0%',
      description: 'Established strong academic base with emphasis on mathematics and analytical thinking.'
    }
  ];

  return (
    <section id="education" className="section-professional">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-section">Education Journey</h2>
          <p className="text-lg text-muted-foreground">
            Building expertise in financial analytics through structured learning and practical application
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className={`${item.highlight ? 'card-achievement' : 'card-professional'}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="heading-card">{item.degree}</h3>
                        <p className="text-primary font-medium mb-2">{item.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {item.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {item.status}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Academic Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Years of Academic Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Specialized Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Workshops Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;