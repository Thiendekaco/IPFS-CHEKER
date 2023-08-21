import React, { Children } from "react";
import { Theme } from "../types";
import  { ThemeProvider } from "styled-components";



export interface ThemeProviderProps  {
    children : React.ReactNode
}
 const ThemeProviderStyled = ({children} : ThemeProviderProps) : React.ReactElement<ThemeProviderProps> =>{
     const themeStyle : Theme  = {
         background_colorContent : 'black',
         background_colorHeader : '#0c2f24',
         color: 'white',
         backgroundColorCollection : '#1f1d1d',
         fontFamily : 'Plus Jakarta Sans',
         borderColorCanAccess :  '#095609',
         borderColorCantAccess : '#5d1010'
     }


     return (
        <ThemeProvider theme={themeStyle}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeProviderStyled;