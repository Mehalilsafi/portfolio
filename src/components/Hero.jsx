import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="p-4 min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className={`relative z-10 flex flex-col justify-center items-center gap-6 max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Greeting with staggered animation */}
        <div className="text-center space-y-2">
          <h1 className={`text-5xl md:text-6xl font-bold text-slate-50 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            hi, <span className="text-primary relative inline-block">
              safi
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
            </span> here.
          </h1>
          <h2 className={`text-2xl md:text-3xl font-semibold text-gray-300 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            I create stuff sometimes
          </h2>
        </div>

        {/* Description with fade-in */}
        <p className={`font-normal text-base md:text-lg text-gray-400 text-center leading-relaxed transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          I'm a passionate full-stack developer with expertise in both front-end and back-end. 
          I thrive on creating responsive, high-performance websites that provide seamless user experiences. 
          Let's build something amazing together!
        </p>

        {/* CTA Button with hover effect */}
        <div className={`transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <a href="mailto:safiou102003@gmail.com" className="group relative inline-block">
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:bg-primary/30 transition-all duration-300"></div>
            <div className="relative flex items-center gap-3 border-2 border-primary rounded-lg px-8 py-4 bg-bgSecondary/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary text-xl group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-bold text-lg">Say hi!</span>
            </div>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`mt-12 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;