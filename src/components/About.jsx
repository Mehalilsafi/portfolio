import { useState, useEffect } from "react";
import safi from "../assets/safi.svg";

function About() {
  const [isInView, setIsInView] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const technologies = [
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "shadcn/ui", category: "Frontend" },
    { name: "React.js", category: "Frontend" },
    { name: "Typescript", category: "Language" },
    { name: "Next.js", category: "Framework" },
    { name: "Supabase", category: "Backend" },
    { name: "Express js", category: "Backend" },
    { name: "docker", category: "DevOps" },
    { name: "socket.io", category: "Real-time" },
    { name: "MongoDb", category: "Database" },
    { name: "Postgresql", category: "Database" }
  ];

  return (
    <div className="mt-32 px-4">
      {/* Section Header with Animation */}
      <div className={`flex gap-5 items-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <h1 className="font-bold text-3xl md:text-4xl text-white relative whitespace-nowrap">
          <span className="text-primary">/</span> about me
          <span className="absolute -bottom-2 left-0 w-24 h-1 bg-primary rounded-full"></span>
        </h1>
        <div className="bg-gradient-to-r from-primary/50 via-primary/20 to-transparent h-[2px] flex-1 max-w-[500px]"></div>
      </div>

      <div className="grid grid-cols-4 gap-8 lg:gap-12">
        {/* Content Column */}
        <div className={`flex flex-col gap-8 col-span-4 md:col-span-2 lg:col-span-3 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Introduction Paragraph */}
          <div className="relative p-6 bg-gradient-to-br from-bgSecondary/50 to-bgSecondary/30 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-500 group">
            <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="relative text-base md:text-lg font-medium text-gray-300 leading-relaxed">
              I'm currently a{" "}
              <span className="inline-block text-primary font-bold text-lg px-3 py-1 bg-primary/10 rounded-md hover:bg-primary/20 transition-all duration-300 hover:scale-105">
                freelancer
              </span>
              . At the same time, I'm undertaking a part-time Master of Science
              in Software Engineering at University of{" "}
              <span className="inline-block text-primary font-bold text-lg px-3 py-1 bg-primary/10 rounded-md hover:bg-primary/20 transition-all duration-300 hover:scale-105">
                Hassiba Ben Bouali
              </span>
            </p>
          </div>

          {/* Technologies Section */}
          <div className="mt-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-lg md:text-xl font-bold text-white">
                Technologies I work with
              </h2>
            </div>
            
            {/* Technology Grid with Enhanced Hover */}
            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredTech(index)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className="relative group"
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-primary/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative flex items-center gap-3 p-3 rounded-lg bg-bgSecondary/30 border border-primary/10 hover:border-primary/40 hover:bg-bgSecondary/50 transition-all duration-300 group-hover:translate-x-2">
                    {/* Animated dot */}
                    <div className="relative">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                    </div>
                    
                    <div className="flex flex-col flex-1">
                      <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                        {tech.name}
                      </span>
                      <span className={`text-xs text-primary/70 transition-all duration-300 ${hoveredTech === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
                        {tech.category}
                      </span>
                    </div>

                    {/* Arrow indicator on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Interests Box */}
          <div className="mt-4 relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-6 bg-gradient-to-br from-bgSecondary/40 to-bgSecondary/20 backdrop-blur-sm border-2 border-primary/20 rounded-xl hover:border-primary/40 transition-all duration-500">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Beyond the Code</h3>
                  <p className="text-base font-medium text-gray-400 leading-relaxed">
                    Outside of work, I'm interested in following the developments of science. 
                    I also go to the gym a lot and make content.
                  </p>
                </div>
              </div>
              
              {/* Interest tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {['Science', 'Fitness', 'Content Creation'].map((interest, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Column with Enhanced Effects */}
        <div className={`md:col-span-2 lg:col-span-1 flex justify-center items-start transition-all duration-700 delay-400 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative group hidden md:block">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-2xl group-hover:bg-primary/30 transition-all duration-500 animate-pulse"></div>
            
            {/* Orbiting dots */}
            <div className="absolute inset-0 rounded-xl">
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-0 w-3 h-3 bg-primary rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* Main image container */}
            <div className="relative border-2 border-primary/30 h-[300px] w-[300px] rounded-xl overflow-hidden bg-gradient-to-br from-bgSecondary to-bgSecondary/50 shadow-2xl group-hover:border-primary/60 group-hover:scale-105 group-hover:rotate-2 transition-all duration-500">
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
              
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>

              {/* Image */}
              <img
                src={safi}
                alt="safi"
                className="relative w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-semibold text-sm">Safi Mehalil</p>
                <p className="text-primary text-xs">Full-Stack Developer</p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/50 rounded-tl-xl"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/50 rounded-br-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;