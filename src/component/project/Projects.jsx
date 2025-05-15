import projects from "./Prodetails";

export default function Pro(){
    return(
        <>
        <h1 id="heading">{projects.heading}</h1>
    <div className="total_project">
     <div className="proj">
       <img id="project" src={projects.image}/>
       <h3 id="item-1">Title:{projects.Title}</h3>
       {/* <h3 id="item-2">{projects.technologies}</h3> */}
       <h3 id="it">{projects.description.a}</h3>
       <h3 id="it">{projects.description.b}</h3>
       <h3 id="it">{projects.description.c}</h3>
       <h3 id="it">{projects.description.d}</h3>
       <h3 id="it">{projects.description.e}</h3>
       <h3 id="it">{projects.description.f}</h3>
       <div className="proskill">
       {projects.technology.map((projecttech,index)=>(
        <h3  key={index}>{projecttech.la}  </h3>
      
        

       )
       
    
    )
    }
    </div>
        

      </div>
       <h2 className="proj2">coming soon....</h2>
    </div>
     </>
    )
}