'use client'
import React from 'react'
import Image from 'next/image';
import Background from '../../public/images/2.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const word = 'INEFABLE';
export default function Intro() {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

    return (
        <div className='h-screen overflow-hidden' id='intro'>
            <motion.div style={{ y }} className='relative h-full'>
                <motion.h1 style={{ y }} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl lg:text-[9.5vw] font-bold z-10'>
                    {word}
                </motion.h1>
                <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />
            </motion.div>
        </div>
    )
}