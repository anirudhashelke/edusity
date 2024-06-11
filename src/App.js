
// import Counter from './component/Counter';
import { useState } from 'react';
import About from './component/About/About';
import Campus from './component/Campus/Campus';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import Program from './component/Program/Program';
import Testimonia from './component/Testimonia/Testimonia';
import VideoPlayer from './component/VideoPlayer/VideoPlayer';

function App() {

  const [play,setPlay]=useState(false)
  return (
   <>
   <Navbar />
   <Hero />
   <Program />
   <About  setPlay={setPlay}/>
   <Campus />
   <Testimonia /> 
   <Contact />
   <Footer />
   <VideoPlayer play={play} setPlay={setPlay} />
   {/* <Counter /> */}
   </>
  );
}

export default App;
