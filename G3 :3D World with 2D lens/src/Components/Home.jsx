import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faArrowUp, faArrowRight } from '@fortawesome/fontawesome-free-solid'
import { motion } from "framer-motion";

export default function Home() {
    const body = document.body;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll <= 0) {
            body.classList.remove("scroll-up");
        }

        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
        }

        if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
        }

        lastScroll = currentScroll;
    });

    return (
        // font-FoundersGroteskCondensed
        // <img className="w-full max-w-md " src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="Eye-Opening Presentation" />
        <div id='Home' data-scroll data-scroll-speed="-0.6" className="bg-zinc-900 h-screen justify-center items-center">

            <div className="h-4/5 flex justify-between">
                <div className='pt-32 px-10 font-bold font-["Founders_Grotesk_Condensed"]'>
                    <div className="text-white text-8xl tracking-tight">WE CREATE</div>
                    <div className="text-white object-center flex items-center  text-8xl leading-[8vh] tracking-tight gap-4">
                        <motion.div initial={{ width: 0 }} animate={{ width: "16%" }} transition={{ ease: [.79, 0, .24, 1], duration: 1 }} className=' mt-3 rounded-md bg-lime-400'>
                            <img className="w-[19vh] h-[11vh] rounded-md" />
                        </motion.div>
                        <div>A 3D WORLD </div>
                    </div>
                    <div className="text-white text-8xl tracking-tight">WITH 2D LENS</div>
                </div>
                <div className='mt-40 px-1 items-center bg-red-500 h-44 w-12 flex flex-col text-xl gap-3'>
                    <div className='font-extrabold text-3xl' style={{ writingMode: 'horizontal-tb', textOrientation: 'mixed' }}>W.</div>
                    <div className="flex-col gap-2">
                        <div className="font-thin gap-5" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>Site of the Day</div>
                    </div>
                </div>
            </div>


            <hr />
            <div className='font-["Neue_Montreal"] py-3 px-10 text-base flex justify-between'>
                <div className="w-1/3 font-thin">For public and private companies</div>
                <div className="w-1/2 flex font-thin justify-between">
                    <div>From the first pitch to IPO</div>
                    <div className='flex gap-1'>
                        <div className='border-2 px-2 flex justify-center items-center font-thin border-white rounded-full'>START THE PROJECT</div>
                        <div className='border-2 h-8 w-8 flex justify-center items-center font-thin border-white rounded-full'>
                            <FontAwesomeIcon icon={faArrowRight} className='-rotate-45' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='font-["Neue_Montreal"] flex justify-center mt-10 items-end animate-bounce'>
                Scroll Down
            </div>
        </div>
    )
}