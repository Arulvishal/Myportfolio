import SkillImage from "./Skill"

export function Skill(){
  
  return(
      <>
        <h1 id="skill" className="skill_heading">SKILL</h1>
        <div className="skill_image">
        {SkillImage.map((Skill,index) => (
          <img src={Skill.img} className="skill-size"  key={index}  />
      
      
      ))}
      </div>
      

      </>
  )
}