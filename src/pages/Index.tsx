import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Volunteering from '@/components/Volunteering';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Achievements />
        <Volunteering />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
