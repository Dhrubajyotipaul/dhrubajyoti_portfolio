import { Download, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const handleDownloadResume = () => {
    // This would link to an actual resume PDF
    console.log('Downloading resume...');
  };

  return (
    <section id="home" className="section-hero min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="heading-hero mb-6">
                Dhrubajyoti Paul
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                Financial Analytics | Data Enthusiast | Social Impact Advocate
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                B.Com (Hons) Financial Analytics student at Birla Institute of Technology, Mesra. 
                Passionate about data-driven decision making and creating meaningful social impact through 
                RTI activism and community engagement.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleDownloadResume}
                className="btn-hero"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-hero"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href="tel:+919864270454" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                +91 98642 70454
              </a>
              <a 
                href="https://linkedin.com/in/dhrubajyoti-paul" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-30"></div>
              <img
                src={profilePhoto}
                alt="Dhrubajyoti Paul - Professional headshot"
                className="relative w-80 h-80 rounded-full object-cover shadow-glow border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;