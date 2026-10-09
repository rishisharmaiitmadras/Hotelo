import React, { useState } from 'react'
import { Search, Sparkles, ArrowRight,Loader2 } from 'lucide-react';
import axios from 'axios';
import Searchbar from './../components/Searchbar.jsx';
import HeroSlider from '../components/HeroSlider.jsx';
import TrendingDestinations from '../components/TrendingDestinations.jsx';
import CategoryFilter from '../components/CategoryFilter.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Testimonials from '../components/Testimonials.jsx';
import AboutHotelo from '../components/AboutHotelo.jsx';


const Home = () => {
  

  return (
    <>
      
      <HeroSlider />
      <Searchbar />
      <CategoryFilter />
      <TrendingDestinations />
      <WhyChooseUs />
      <Testimonials />
      <AboutHotelo />

    </>
    
    
  )
}

export default Home