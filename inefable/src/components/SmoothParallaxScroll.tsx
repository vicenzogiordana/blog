'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './stylesSmoothParallax.module.scss'
import Image from 'next/image';
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
  "81.jpg",
  "82.jpg",
  "83.jpg",
  "84.jpg",
  "85.jpg",
  "86.jpg",
  "87.jpg",
  "88.jpg",
  "89.jpg",
  "90.jpg",
  "91.jpg",
  "92.jpg",
]

export default function SmoothScrollParallax() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {


    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    // Removed the undefined 'raf' function call as it is not defined or used elsewhere.
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
      <div className={styles.spacer}></div>
    </main>
  )
}

interface ColumnProps {
  images: string[];
  y: any; // Replace 'any' with the appropriate type if known
}

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`/images/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}