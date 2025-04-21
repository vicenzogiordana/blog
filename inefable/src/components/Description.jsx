'use client'
import { React, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
const phrase = 'The paradoxical blog that explains with words what cannot be explained with words'
export default function Description() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    return (
        <div ref={container} className='flex justify-center my-40'>
            <p className='text-[5.5vw] uppercase text-center max-w-[50vw] leading-none'>
                {
                    phrase.split("").map((letter, i) => {
                        const sm = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25])
                        return <motion.span style={{ top: sm }} key={`l_${i}`} >{letter}</motion.span>
                    })
                }
            </p>
        </div>
    )
}