import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  // Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import Education from './components/Pages/Education/Education';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            {/* <Experience /> */}
            <Education></Education>
          </div>
        </div>
        <div style={{
        }} className="">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
