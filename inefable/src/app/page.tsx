'use client';
import { useEffect } from 'react';
import Lenis from 'lenis'
import Intro from '@/components/Intro';
import Description from '@/components/Description';
import Section from '@/components/Section';
import TextParallax from '@/components/TextParallax';
import Title from '@/components/Title';
import ZoomParallax from '@/components/ZoomParallax';
import SmoothScrollParallax from '@/components/SmoothParallaxScroll';
import Lista from '@/components/Lista';
export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      {/* <Title /> */}
      <Intro />
      <Description />
      <Section />
      {/* <div className='h-screen'></div> */}
      <SmoothScrollParallax />
      <Lista />
      {/* <ZoomParallax />
      <TextParallax /> */}
      {/*text clip mask on scroll*/}
    </main>
  );
}