// import { useContext } from "react"
// import { MyContext } from "./Home"



// export const Check = () => {
//     const aayush = useContext(MyContext);
//     return(
//         <>
//         <h1 className="bg-red">{aayush}</h1>
//         </>
//     )
// }

import { createContext } from "react";
export const MyContext = createContext();

export const Check = ({children}) => {
    const aayush = "21";
    return(
        <>
        <MyContext.Provider value={aayush}>
            {children}
        </MyContext.Provider>
        </>
    )
}