import Head from "./component/Navbar/Head"
import {Ititle} from "./component/Introduction/Ititles"
import { Education } from "./component/education/Educa"
import Pro from "./component/project/Projects"
import { Skill } from "./component/skill-details/Skill.jsx"
import { Contact } from "./component/contact/contact.jsx"

export default function App(){
  return (
  
  <>
   <Head/>
   <Ititle/>
   <Education/>
   <Pro/>
   <Skill/>
   <Contact/>
   
  </>
  )
}
