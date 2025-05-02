
import user from "./Idetails";

export  function Ititle() {
  return (
    <>
    <div id="home" className="home">
    <div className="user">
      <h1  id= "style"> {user.name}</h1>
      <h3 id="style"> {user.stu}</h3>
      <p>{user.description}</p>
    </div>


      <img src={user.Image} id="photo"/>
      </div>
    

    </>
  );
}
