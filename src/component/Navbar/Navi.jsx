import { FaHome } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";


 export  function Navi(){
    return(
        <>
        <ul className="name">
            <li id="item"><FaHome/><a href="#home">Home</a></li>
            <li id="item"><MdCastForEducation /><a href="#edu">Education</a></li>
            <li id="item"><FaProjectDiagram /><a href="#project">Project</a></li>
            <li id="item"><SiHyperskill /><a href="#skill">skills</a></li>
            
        </ul>
       
        </>
    )
}