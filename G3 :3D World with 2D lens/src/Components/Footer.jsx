
import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faArrowUp, faArrowRight } from '@fortawesome/fontawesome-free-solid'
import { motion } from "framer-motion";

// export default function Footer() {
//     return(

// <div className='relative z-20 w-full h-screen'>
//     <div className='top-0 z-[100] w-full h-screen bg-slate-950'>

//             </div>
//         </div>
//     )
// }


export default function Footer() {
    return (
        <div id='Footer' className="relative z-[100] flex w-full h-screen bg-zinc-900 p-20">
            <div className='w-1/2 h-full flex gap-x-72 justify-between'>
                <div className="heading">
                    < h1 className="text-[8vw] font-semibold uppercase -mb-10">
                        Eye -
                    </h1 >
                    <h1 className="text-[8vw]  font-semibold uppercase leading-none -mb-10">
                        Opining
                    </h1>
                </div>
                <div className="w-1/2">
                    <h1 className="text-[7vw] font-semibold uppercase leading-none -mb-10">Vision
                    </h1>
                    <div className="dets mt-20 font-['Neue_Montreal']">
                        <a className="block text-xl font-light" href="#">Facebook</a>
                        <a className="block text-xl font-light" href="#">Instagram</a>
                        <a className="block text-xl font-light" href="#">Twitter</a>
                        <a className="block text-xl font-light" href="#">Email</a>
                        <a className="block text-xl font-light" href="#">LinkedIn</a>
                    </div>
                    {/* <div className="dets mt-14 font-['Neue_Montreal']">
                        <a className="block text-xl font-light" href="#">LinkedIn</a>
                        <a className="block text-xl font-light" href="#">Email</a>
                        <a className="block text-xl font-light" href="#">Twitter</a>
                    </div> */}
                    <div className='flex gap-24'>
                        <div className="dets mt-14 font-['Neue_Montreal']">
                            <a className="block text-xl font-light" href="#">Indian Institute of Technology,</a>
                            <a className="block text-xl font-light" href="#">Palaj, Gandhinagar</a>
                            <a className="block text-xl font-light" href="#">Gujarat 382355</a>
                        </div>
                        <div className="dets mt-14 font-['Neue_Montreal']">
                        <a className="block text-xl font-light" href="#">Home
                            </a>
                            <a className="block text-xl font-light" href="#">Services
                            </a>
                            <a className="block text-xl font-light" href="#">Our Work
                            </a>
                            <a className="block text-xl font-light" href="#">About Us
                            </a>
                            <a className="block text-xl font-light" href="#">
                                Insights</a>
                        </div>
                    </div>

                </div>

            </div>
            <h1 className=' mt-[80vh] items-end animate-bounce'> Made with Love G3</h1>
        </div>

    )
}