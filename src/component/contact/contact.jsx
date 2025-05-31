import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { SiGmail } from "react-icons/si";


export function Contact(){
    return(
        <>

<div className="border-2 p-1 mt-6 flex justify-between border-2 bg-green-300 flex-wrap ">
    

<p><FaInstagram />peace_dude_vishal</p>
<p><CiPhone />9345417074</p>
<p><SiGmail />arulvishalr@gmail.com</p>
<p><FaGithub />github</p>


</div>
</>
    )
}