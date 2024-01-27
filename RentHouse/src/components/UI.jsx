import { atom, useAtom } from "jotai";

export const currentPageAtom = atom("intro");
export const storepartAtom = atom("storepartanimation");

export const UI = () => {
    const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
    const [storepart, setstorepart] = useAtom(storepartAtom);

    return (
      
      <div className={`fixed inset-0 pointer-events-none `}>
        <div className={`pointer-events-auto flex w-full h-15 justify-between duration-500 bg-[#020202] text-white font-bold ${currentPage === "store" ? "" : "opacity-0"}`}>
          <div className="h-15 w-4/12">

          </div>
          <div className={`h-15 w-7/12 pb-3 pt-3 pl-6 pr-6 flex justify-between `}>
            <button onClick={() => setstorepart("computer_table")} className={` border-2 border-[#37374d] w-28 h-7 bg-[#2c2c3e] hover:bg-[#37374d] rounded`}> Table </button>
            <button onClick={() => setstorepart("computer")} className={` border-2 border-[#37374d] w-28 h-7 bg-[#2c2c3e] hover:bg-[#37374d] rounded`}> Dextop </button>
            <button onClick={() => setstorepart("photo_frame")} className={` border-2 border-[#37374d] w-28 h-7 bg-[#2c2c3e] hover:bg-[#37374d] rounded`}> Frame </button>
            <button onClick={() => setstorepart("bed")} className={` border-2 border-[#37374d] w-28 h-7 bg-[#2c2c3e] hover:bg-[#37374d] rounded`}> Bed </button>
            <button onClick={() => setstorepart("trolly")} className={` border-2 border-[#37374d] w-28 h-7 bg-[#2c2c3e] hover:bg-[#37374d] rounded`}> Storage </button>
          </div>
        </div>
        <section
          className={`flex w-full h-full flex-col items-center justify-center 
        duration-500
        ${currentPage === "home" ? "" : "opacity-0"}`}
        >
          <div className="h-[66%]"></div>
          <button
            onClick={() => setCurrentPage("store")}
            className="pointer-events-auto py-4 px-6 bg-red-600 text-white font-black rounded-full hover:bg-red-700 cursor-pointer transition-colors duration-500 text-bold"
          >
          WEL COME
          </button>
        </section>
        {/* <section className={`flex w-full h-full flex-col items-center justify-center 
        duration-500`}>
          <div className="h-[66%]"></div>
          <button
            className="pointer-events-auto py-4 px-6 bg-red-600 text-white font-black rounded-full hover:bg-red-700 cursor-pointer transition-colors duration-500 text-bold">
          Hello
          </button>
        </section> */}
      </div>
      
    )
}

// import { atom, useAtom } from "jotai";

// export const currentPageAtom = atom("intro");
// // export const storepartAtom = atom("storepartanimation");

// export const UI = () => {
//     const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
//     // const [storepart, setstorepart] = useAtom(storepartAtom);

//     return (
//       <div className="fixed inset-0 pointer-events-none">
//         <div className={`pointer-events-auto flex w-full h-15 justify-between duration-500 bg-[#020202] text-white font-bold`}>
//           <div className="h-15 w-4/12">

//           </div>
//           <div className="h-15 w-7/12 pb-3 pt-3 pl-6 pr-6 flex justify-between">
//             <button
//             // onClick={() => setstorepart("computer")} 
//             className={` border-2 border-[#37374d] w-28 h-7 bg-[#2c2c3e] hover:bg-[#37374d] rounded`}> Hi </button>
//             <button onClick={() => setCurrentPage("store")}  className={` border-2 border-[#37374d] w-28 h-7 bg-[#2c2c3e] hover:bg-[#37374d] rounded`}> Hi </button>
//             <button onClick={() => setCurrentPage("store")}  className={` border-2 border-[#37374d] w-28 h-7 bg-[#2c2c3e] hover:bg-[#37374d] rounded`}> Hi </button>
//             <button onClick={() => setCurrentPage("store")}  className={` border-2 border-[#37374d] w-28 h-7 bg-[#2c2c3e] hover:bg-[#37374d] rounded`}> Hi </button>
//             <button onClick={() => setCurrentPage("store")}  className={` border-2 border-[#37374d] w-28 h-7 bg-[#2c2c3e] hover:bg-[#37374d] rounded`}> Hi </button>
//           </div>
//         </div>
//         <section
//           className={`flex w-full h-full flex-col items-center justify-center 
//         duration-500
//         ${currentPage === "home" ? "" : "opacity-0"}`}
//         >
//           <div className="h-[66%]"></div>
//           <button
//             onClick={() => setCurrentPage("store")}
//             className="pointer-events-auto py-4 px-6 bg-red-600 text-white font-black rounded-full hover:bg-red-700 cursor-pointer transition-colors duration-500 text-bold"
//           >
//           WEL COME
//           </button>
//         </section>
//         {/* <section className={`flex w-full h-full flex-col items-center justify-center 
//         duration-500`}>
//           <div className="h-[66%]"></div>
//           <button
//             className="pointer-events-auto py-4 px-6 bg-red-600 text-white font-black rounded-full hover:bg-red-700 cursor-pointer transition-colors duration-500 text-bold">
//           Hello
//           </button>
//         </section> */}
//       </div>
      
//     )
// }