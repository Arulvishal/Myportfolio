import {  useState } from "react";
import ThemeContext from "./themeContext";

export default function Color({children}){

const [theme,setTheme]= useState(false);
let themecolor = theme? "darkTheme":"lightTheme";



return(

   < ThemeContext.Provider value={{theme,setTheme}}>
    <div className={themecolor}>
        {children}
    </div>
    </ThemeContext.Provider>
)


}