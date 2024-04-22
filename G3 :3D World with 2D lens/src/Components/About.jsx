import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faArrowUp, faArrowRight } from '@fortawesome/fontawesome-free-solid'
import Group from '/Users/aai/Desktop/Developer/new_web/src/assets/Group.png'

export default function About() {
    return (

        <div id='About' className='font-["Neue_Montreal"] pt-28 pb-10 px-14 text-5xl bg-lime-400 rounded-tl-lg rounded-tr-lg w-full text-zinc-700'>
            <h1> WE are go-to partner for businesses</h1>
            <h1> on the rise, wanted to create precise<span className=' underline'> 3D models</span></h1>
            <h1> Using <span className=' underline'>drone technology</span>, and <span className=' underline'>RTK</span>.</h1>
            <hr className=' mt-20 w-full' />
            <div className=' h-80 flex justify-between text-base py-4'>
                <div className='w-1/3'>What you can expect:</div>
                <div className='w-1/2 flex'>
                    <div className='mr-28'>
                        <div>We harness cutting-edge drone technology paired with RTK precision to craft comprehensive 3D models of any subject matter.</div>
                        <div className=' mt-7'>We guarantee precise detail in capturing intricate landscapes and structures, creating immersive 3D experiences from aerial data. Empowering clients to visualize and analyze spaces with unprecedented clarity.</div>
                    </div>
                    <div className=' mr-16'>
                        <h1>S: </h1>
                        <h1 className=' mt-5 underline'>Instagram</h1>
                        <h1 className=' underline'>Behance</h1>
                        <h1 className=' underline'>Facebook</h1>
                        <h1 className=' underline'>Linkedin</h1>
                    </div>
                </div>
            </div>
            <hr className='mt-7 text-zinc-900' />
            <div className='my-6 flex justify-between'>
                <div>
                    <h1>Our Group:</h1>
                    <div className=' text-white mt-4 flex text-xl bg-slate-950 w-48 rounded-full justify-center items-center'>
                        <div className='p-3'>
                            READ MORE
                        </div>
                        <div className='border-2 w-10 h-10 font-thin border-white flex justify-center items-center rounded-full'>
                            <FontAwesomeIcon icon={faArrowRight} className='-rotate-45' />
                        </div>
                    </div>
                </div>
                {/*  h-96 */}
                {/* <div className=' bg-amber-500  rounded-xl'> */}
                <img className=' w-2/5 rounded-xl border-2 border-slate-950' src={Group} alt="logo" />
                    {/* <img src="/Users/aai/Desktop/Developer/new_web/src/assets/Screenshot 2024-04-18 at 11.47.45 AM.png"/> */}
                {/* </div> */}
            </div>
        </div>
  
    )
}
