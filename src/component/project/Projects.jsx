import projects from "./Prodetails";

export default function Pro(){
    return(
        <>
        <h1 id="heading" className="text-center border-2  bg-fuchsia-400 text-2xl mt-8 mb-9" >{projects.heading}</h1>
    <div className="total_project">
     <div className="w-90 rounded-4xl border-2 p-2 m-auto bg-rose-300">
       <img id="project" className="w-90 rounded-3xl" src={projects.image}/>
       <h3 id="item-1">Title:{projects.Title}</h3>
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
       <h2 className="w-90 h-20 rounded-3xl border-2 p-5 m-auto mt-8  bg-rose-300 text-center ">coming soon....</h2>
    </div>
     </>
    )
}