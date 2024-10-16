import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Work from '@/components/Work';
import Contact from '@/components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Journey />
      <Work />
      <Contact />
      {/* {temporary div} */}
      <div className="h-[3000px]"></div>
    </div>
  );
};

export default Home;
