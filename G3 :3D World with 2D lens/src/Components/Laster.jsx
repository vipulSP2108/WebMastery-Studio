
import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faArrowUp, faArrowRight } from '@fortawesome/fontawesome-free-solid'
import {motion} from "framer-motion";


export default function Laster() {
    return(
        // sticky top-0
        <div id='Laster' className='sticky top-0 z-[0] flex justify-between h-[70vh] pt-28 pb-10 px-14 text-5xl bg-lime-400 rounded-tl-lg rounded-tr-lg w-full text-zinc-700'>
            <div className='w-[45vw] rounded-xl h-full bg-emerald-700'></div>
            <div className='w-[22vw] rounded-xl h-full bg-neutral-200'></div>
            <div className='w-[22vw] rounded-xl h-full bg-neutral-200'></div>
        </div>
    )
}