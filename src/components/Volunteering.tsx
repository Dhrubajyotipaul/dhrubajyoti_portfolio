import { FileText, Users, Lightbulb, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Volunteering = () => {
  const rtiImpacts = [
    {
      title: 'Jal Jeevan Mission Salary Disbursement',
      description: 'Ensured timely salary disbursement for workers under the national water mission',
      impact: 'Direct financial relief for workers',
      icon: CheckCircle,
      status: 'Resolved'
    },
    {
      title: 'Dairy Development Office Renovation',
      location: 'Silchar',
      description: 'Facilitated renovation and improvement of office infrastructure',
      impact: 'Enhanced service delivery capacity',
      icon: TrendingUp,
      status: 'Completed'
    },
    {
      title: 'Mahadevpur Veterinary Hospital Services',
      description: 'Restored and improved veterinary services for rural communities',
      impact: 'Better animal healthcare access',
      icon: CheckCircle,
      status: 'Operational'
    },
    {
      title: 'Government Office Accountability',
      description: 'Improved transparency and accountability across multiple departments',
      impact: 'Systemic governance improvements',
      icon: AlertCircle,
      status: 'Ongoing'
    }
  ];

  const rtiStats = [
    { number: '150+', label: 'RTIs Filed & Resolved', icon: FileText },
    { number: '140+', label: 'Government Offices', icon: Users },
    { number: '5+', label: 'Major Impact Cases', icon: TrendingUp },
    { number: '1', label: 'Years of Activism', icon: Lightbulb }
  ];

  const impactAreas = [
    {
      area: 'Rural Development',
      description: 'Focus on improving services in rural and underserved areas',
      cases: 45
    },
    {
      area: 'Public Health',
      description: 'Ensuring healthcare services and facility improvements',
      cases: 38
    },
    {
      area: 'Administrative Transparency',
      description: 'Promoting accountability in government operations',
      cases: 42
    },
    {
      area: 'Infrastructure Development',
      description: 'Facilitating office renovations and service improvements',
      cases: 25
    }
  ];

  return (
    <section id="volunteering" className="section-professional">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-section">Social Impact & RTI Activism</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Using the Right to Information Act as a tool for positive change, promoting transparency 
            and accountability in government services across multiple departments and communities.
          </p>
        </div>

        {/* RTI Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {rtiStats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center card-professional group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Major Impact Cases */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Key Impact Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rtiImpacts.map((impact, index) => (
              <div key={index} className="card-professional group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <impact.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">{impact.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        impact.status === 'Resolved' || impact.status === 'Completed' || impact.status === 'Operational'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {impact.status}
                      </span>
                    </div>
                    {impact.location && (
                      <p className="text-sm text-primary font-medium mb-2">{impact.location}</p>
                    )}
                    <p className="text-muted-foreground text-sm mb-3">{impact.description}</p>
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                      <p className="text-sm font-medium text-accent-foreground">
                        Impact: {impact.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Areas of Focus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <div key={index} className="card-professional text-center">
                <div className="text-2xl font-bold text-primary mb-2">{area.cases}</div>
                <h4 className="font-semibold text-foreground mb-2">{area.area}</h4>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Driving Change Through Information Transparency
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            My RTI activism demonstrates that individual initiative, combined with the right tools and 
            persistence, can create meaningful change in government services. Each resolved case 
            represents real people receiving better services and more accountable governance.
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <div>🏛️ Government Transparency</div>
            <div>🤝 Community Service</div>
            <div>📊 Data-Driven Advocacy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;