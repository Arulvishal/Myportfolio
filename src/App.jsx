import Head from "./component/Navbar/Head"
import {Ititle} from "./component/Introduction/Ititles"
import { Education } from "./component/education/Educa"
import Pro from "./component/project/Projects"
import { Skill } from "./component/skill-details/Skill.jsx"
import { Contact } from "./component/contact/contact.jsx"
import Color from "./component/Theme/Theme.jsx"

export default function App(){

  return (
  
  <>
  <Color>
   <Head />
   <Ititle/>
   <Education/>
   <Pro/>
   <Skill/>
   <Contact/>
   </Color>
 
  
  </>

)
}