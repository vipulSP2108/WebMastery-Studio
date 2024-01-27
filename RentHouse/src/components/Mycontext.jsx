import MyContext from "./Home";

export const metadata = {
    title : 'react app',
    description : 'Genrated app',
}

export default function RootLayout( {children} ){
    return(
        <html lang='en'>
            <body suppressHydrationWarning>
                <MyContext>
                    {children}
                </MyContext>
            </body>
        </html>
    )
}