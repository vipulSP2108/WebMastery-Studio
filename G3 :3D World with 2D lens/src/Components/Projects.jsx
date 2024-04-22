import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faArrowUp, faArrowRight } from '@fortawesome/fontawesome-free-solid'
import NewAcad from '/Users/aai/Desktop/Developer/new_web/src/assets/NewAcad1.png'
import Research from '/Users/aai/Desktop/Developer/new_web/src/assets/Research1.png'
import { motion } from "framer-motion";
import { Power4 } from 'gsap';

export default function Projects() {

    const [Hover1, setHover1] = useState(0)
    const [Hover2, setHover2] = useState(0)
    return (
        <div id='Projects' className='font-["Neue_Montreal"] pt-28 pb-10 px-14 text-5xl rounded-tl-lg rounded-tr-lg w-full'>
            <div className='w-full my-6 flex justify-between'>
                <div className='w-full'>
                    <h1>Our Projects</h1>
                    <hr className='my-10' />
                    <div className='flex gap-5 justify-center'>
                        <div>
                            <h4 className=' text-base mb-4 uppercase'>  IIT Gandhinagar old Academic Area</h4>
                            <div
                                onMouseEnter={() => setHover1(true)}
                                onMouseLeave={() => setHover1(false)}
                            >
                                <h1 className='z-[998] absolute text-lime-400  left-1/2 -translate-x-1/2'>
                                    <h1 className='z-[998] absolute text-lime-400 font-bold flex right-full translate-x-1/2 overflow-hidden'>
                                        {"IIT_GANDHINAGAR_OLD_ACADEMIC_AREA".split("").map((item, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ y: "100%" }}
                                                animate={Hover1 ? { y: "0" } : { y: "100%" }}
                                                transition={{ ease: Power4.easeInOut, delay: index * 0.01 }}
                                                className='inline-block '

                                            >
                                                {item}
                                            </motion.span>
                                        ))}
                                    </h1>
                                </h1>
                                <div className='transform hover:scale-95 overflow-hidden  transition-transform duration-700 rounded-lg bg-zinc-600 w-[43vw] h-[69vh] relative'>
                                    <img className='w-full brightness-75' src={NewAcad} alt="logo" />
                                </div>
                            </div>

                            <div className='text-lg flex gap-2 mt-3'>
                                <div className=' border-2 px-3 rounded-full transition-all ease-in duration-500 hover:bg-slate-50 hover:text-black'>
                                    <a href='#'>AREA</a>
                                </div>
                                <div className=' border-2 px-3 rounded-full transition-all ease-in duration-500 hover:bg-slate-50 hover:text-black'>
                                    <a href='#'>OUTPUT</a>
                                </div>
                                <div className=' border-2 px-3 rounded-full transition-all ease-in duration-500 hover:bg-slate-50 hover:text-black'>
                                    <a href='#'>WHAT WE DO</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className=' text-base mb-4 uppercase'>Revealing Soon</h4>
                            <div
                                onMouseEnter={() => setHover2(true)}
                                onMouseLeave={() => setHover2(false)}
                            >
                                <h1 className='z-[998] absolute text-lime-400  left-1/2 -translate-x-1/2'>
                                    <h1 className='z-[998] absolute text-lime-400 font-bold flex right-full translate-x-1/2 content-center overflow-hidden'>
                                        {"IIT_G--DH-N--AR_R-S-A--CK_P-RK_A--A".split("").map((item, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ y: "100%" }}
                                                animate={Hover2 ? { y: "0" } : { y: "100%" }}
                                                transition={{ ease: Power4.easeInOut, delay: index * 0.01 }}
                                                className='inline-block'

                                            >
                                                {item}
                                            </motion.span>
                                        ))}
                                    </h1>
                                </h1>
                                <div className='transform hover:scale-95 overflow-hidden  transition-transform duration-700 rounded-lg bg-zinc-600 w-[43vw] h-[69vh] relative'>
                                    <img className='w-full blur brightness-75' src={Research} alt="logo" />
                                </div>
                            </div>

                            <div className='text-lg flex gap-2 mt-3'>
                            <div className=' border-2 px-3 rounded-full transition-all ease-in duration-500 hover:bg-slate-50 hover:text-black'>
                                    <a href='#'>AREA</a>
                                </div>
                                <div className=' border-2 px-3 rounded-full transition-all ease-in duration-500 hover:bg-slate-50 hover:text-black'>
                                    <a href='#'>OUTPUT</a>
                                </div>
                                <div className=' border-2 px-3 rounded-full transition-all ease-in duration-500 hover:bg-slate-50 hover:text-black'>
                                    <a href='#'>WHAT WE DO</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-center'>
                        <div className=' mt-14 text-slate-950 flex text-xl bg-white w-48 rounded-full justify-center items-center'>
                            <div className='p-3'>
                                READ MORE
                            </div>
                            <div className='border-2 w-10 h-10 font-thin border-slate-950 flex justify-center items-center rounded-full'>
                                <FontAwesomeIcon icon={faArrowRight} className='-rotate-45' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}