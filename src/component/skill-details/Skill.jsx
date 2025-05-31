import SkillImage from "./Skill"

export function Skill(){
  
  return(
      <>
        <h1 id="skill" className="text-center border-2  bg-fuchsia-400 text-2xl mt-8 mb-9" >SKILL</h1>
        <div className="grid grid-cols-[repeat(4,_1fr)]">
        {SkillImage.map((Skill,index) => (
          <img src={Skill.img} className="w-23 h-auto p-2"  key={index}  />
      
      
      ))}
      </div>
      

      </>
  )
}