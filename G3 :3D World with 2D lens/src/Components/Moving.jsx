import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faArrowUp, faArrowRight } from '@fortawesome/fontawesome-free-solid'
import {motion} from "framer-motion";

export default function Moving() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.2" className='z-5 h-[70vh] rounded-tl-lg rounded-tr-lg w-screen bg-emerald-700 flex flex-col justify-center items-center'>
            <hr className='h-1 w-full bg-zinc-900  tracking-tight'/>
                <div className='flex text-neutral-200 w-screen tracking-tight overflow-hidden whitespace-nowrap'>
                <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='pr-20 h-[50vh] tracking-tight font-bold text-[65vh] flex items-center font-["Founders_Grotesk_Condensed"]'>WE ARE G3</motion.h1>
                <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='pr-20 h-[50vh] tracking-tight font-bold text-[65vh] flex items-center font-["Founders_Grotesk_Condensed"]'> WE ARE G3</motion.h1>
                </div>
            <hr className='h-1 w-full bg-zinc-900 text-zinc-900'/>
        </div>
    )
}

