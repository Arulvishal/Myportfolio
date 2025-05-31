import Logo from "./Logo"
import { Navi } from "./Navi"

export default function Head(){
    return(
        <> 
        <div className="flex sticky top-0 justify-between  sm:flex-wrap">
       
            <Logo/>
            <Navi/>
            </div>

            </> 
        
    )
}