import React, { useEffect, useState } from 'react'

function Eyes() {

  const [rota, setrota] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouX = e.clientX;
      let mouY = e.clientY;
      console.log(mouX, mouY);

      let deltaX = mouX - window.innerWidth / 2;
      let deltaY = mouY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrota(angle - 180);
    })
  })

  return (
    <div  className=' w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-section data-scroll-speed="-0.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className=' absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>

          <div className='h-[30vh] w-[30vh] flex items-center justify-center bg-zinc-50 rounded-full'>
            <div className=' relative bg-zinc-900 w-3/5 h-3/5 rounded-full'>

              <div style={{ transform: `translate(-50%, -50%) rotate(${rota}deg)` }} className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-7 w-full' >
                <div className='h-7 w-7 bg-zinc-50 rounded-full'></div>
              </div>
            </div>
          </div>

          <div className='h-[30vh] w-[30vh] flex items-center justify-center bg-zinc-50 rounded-full'>
            <div className=' relative bg-zinc-900 w-3/5 h-3/5 rounded-full'>

              <div style={{ transform: `translate(-50%, -50%) rotate(${rota}deg)` }} className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-7 w-full' >
                <div className='h-7 w-7 bg-zinc-50 rounded-full'></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Eyes