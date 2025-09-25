'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Divisions from '@/components/sections/Divisions';
import Impact from '@/components/sections/Impact';
import News from '@/components/sections/News';
import Leadership from '@/components/sections/Leadership';
import Contact from '@/components/sections/Contact';

export default function LandingPage() {
  return (
    <>
      <Hero backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80" />
      <About />
      <Divisions />
      <Impact />
      <Contact />
    </>
  );
}
