import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import BentoGrid from '../components/BentoGrid';
import Services from '../components/Services';
import WhyNeurac from '../components/WhyNeurac';
import Projects from '../components/Projects';
import Stats from '../components/Stats';
import Team from '../components/Team';

import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <BentoGrid />
      <Services />
      <WhyNeurac />
      <Projects />
      <Stats />
      <Team />

      <CTA />
      <Footer />
    </>
  );
};

export default Home;
