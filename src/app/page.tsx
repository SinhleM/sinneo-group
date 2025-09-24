// File: app/page.tsx
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
      <Hero backgroundImage="/bg3.jpg" />
      <About />
      <Divisions />
      <Impact />
      <Contact />
    </>
  );
}
