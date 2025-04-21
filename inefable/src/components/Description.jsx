'use client'
import { React, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import Paragraph from './TextOpacity'
const phrase = 'The paradoxical blog that explains with words what cannot be explained with words'
export default function Description() {

    return (
        <div className='flex justify-center my-40'>
            <p className='text-[5.5vw] uppercase text-left max-w-[50vw] leading-none'>
                <Paragraph paragraph={phrase} />
            </p>
        </div>
    )
}