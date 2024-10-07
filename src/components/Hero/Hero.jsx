import { Parallax } from 'react-parallax';
import img1 from '../../assets/img1.jpg';

const Hero = () => {
  return (
    <Parallax bgImage={img1} strength={600}> 
      <section className="relative h-screen bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to TourDom</h1>
            <p className="text-lg md:text-2xl">Discover amazing places</p>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default Hero;
