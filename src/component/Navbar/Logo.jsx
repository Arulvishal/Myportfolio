import { useContext } from "react";
import { FaAppStore } from "react-icons/fa";
import ThemeContext from "../Theme/themeContext";

 export default function Logo(){
    const {theme} = useContext(ThemeContext)

    
    return(
        <><div className="  flex-wrap py-4 px-5 bg-amber-100 border-1  ">
              <h2 className= {`logo ${theme ? "light-bg" : "dark-bg"}` }
              >VishalAVR<FaAppStore/></h2>
        </div>
        
        </>
    )
}