import { FaHome } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";
import { useContext } from "react";
import ThemeContext from "../Theme/themeContext";
import { CgDarkMode } from "react-icons/cg";
import { BiBrightness } from "react-icons/bi";




export function Navi() {
    const Color = useContext(ThemeContext)
    console.log(Color);
    const { theme, setTheme } = Color
    const liItems = [
        {
            name: "Home",
            icon: <FaHome />,
            url:'home'

        },
        {
            name: "Education",
            icon: <MdCastForEducation />,
            url:'edu'
        },
        {
            name: "Project",
            icon: <FaProjectDiagram />,
            url:"heading"
        
        },
        {
            name: "Skill",
            icon: <SiHyperskill />,
            url:"skill"
        },
    ]
    return (
        <div className= " flex-1 flex  justify-evenly items-center bg-gray-400  " >
            <ul className="flex flex-wrap font-bold md:flex items-center justify-items-center justify-between gap-2">
                {liItems.map((value, id) => (
                    <li className="flex items-center gap-1" key={id}>{value.icon} <a href={`#${value?.url}`}>{value.name}</a></li>
                ))}

                
            </ul>
                <div className=" cursor-pointer hover:bg-blue-600  rounded-2xl m-2 " onClick={() => setTheme(prev => !prev)}>
                    
                    {theme ? <BiBrightness/> : <CgDarkMode/>}
                </div>

        </div>
    )
}