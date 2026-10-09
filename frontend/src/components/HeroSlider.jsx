import React, { useState, useEffect } from "react";

const luxurySlides = [
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80",
    title: "World's Finest Luxury Palaces",
    subtitle: "Experience royal Indian hospitality with breath-taking views."
  },
  {
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80",
    title: "Serene Riverside & Lake Resorts",
    subtitle: "Unwind at tranquil waterfront retreats designed for ultimate comfort."
  },
  {
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80",
    title: "Majestic Himalayan Stays",
    subtitle: "Escape to snow-capped luxury in the lap of nature."
  },
  {
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80",
    title: "Exotic Oceanfront Villas",
    subtitle: "Private beach access, infinity pools, and world-class fine dining."
  }
];

const HeroSlider = () => {
  const [currentIndex,setCurrentIndex]=useState(0);

  useEffect(()=>{
    const timer=setInterval(()=>handleNext(),4000)

//     return ()=>learInterval(timer)//Kya hoga: Yahan aap clearInterval ko chala (execute kar) nahi rahe hain, balki React ko ek remind/instruction function de rahe hain.

// Result: React is function ko apne paas save karke rakh leta hai. Jab currentIndex change hota hai ya component unmount hota hai, tab React is callback function ko call karta hai aur timer clear hota hai.
  return ()=>clearInterval(timer)
},
  
  [currentIndex])

  const handleNext=()=>{
    setCurrentIndex((prevIndex)=>
        prevIndex===luxurySlides.length-1? 0:prevIndex+1);


  };
  const handlePrev=()=>
    setCurrentIndex((prevIndex)=>
        prevIndex===0? luxurySlides.length-1:prevIndex-1    );

  




  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl my-6">
      {/* Background Image Slides */}
      {luxurySlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
          } transition-transform duration-[4000ms]`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Luxury aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Floating Content / Text */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-white max-w-4xl z-10">
        <span className="text-amber-400 font-semibold tracking-widest uppercase text-xs md:text-sm mb-2">
          Featured Collection
        </span>
        <h1 className="text-3xl md:text-5xl font-bold font-serif leading-tight drop-shadow-md">
          {luxurySlides[currentIndex].title}
        </h1>
        <p className="text-gray-200 text-sm md:text-lg mt-3 max-w-xl font-light">
          {luxurySlides[currentIndex].subtitle}
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
        aria-label="Next Slide"
      >
        ❯
      </button>

      {/* Bottom Indicator Dots */}
      <div className="absolute bottom-6 right-8 flex space-x-2 z-20">
        {luxurySlides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setCurrentIndex(dotIndex)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              dotIndex === currentIndex
                ? "w-8 bg-amber-400"
                : "w-2.5 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};


export default HeroSlider;