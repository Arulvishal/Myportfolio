import edu from "./EduDetails";

export  function Education() {
    
    return (
      <>
     
     
      <h1 id="edu" className="text-center border-2  bg-fuchsia-400 text-2xl mt-8" >EDUCATION</h1>
       <div className="m-5 grid grid-rows-3 font-semibold">
        <h3 > HLC :{edu.HLC}</h3>
        <h3> SSLC: {edu.SSLC} </h3>
        <h3>Post Graduate(Bachelor of Technology) :{edu.CLG}</h3>
        </div>
        <h4 className="w-fit rounded-3xl  border-2 p-1.5 m-auto bg-cyan-400 ">Additional Coursework: MERN Stack Development (Ongoing)</h4>
  
      
        
      
  
      </>
    );
  }
  