import { HeroSection } from './components/HeroSection';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { TestimonialSection } from './components/TestimonialSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051A24] overflow-x-hidden">
      <HeroSection />
      <InfiniteMarquee />
      <TestimonialSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
