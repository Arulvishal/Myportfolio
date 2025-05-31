
import user from "./Idetails";

export  function Ititle() {
  return (
    <>
    <div id="home" className="flex   ">
    <div className=" grid  p-6 place-content-center gap-6">
      <h1  className="text-center mb-5 text- text-3xl font-serif"> {user.name}</h1>
      <h3 className="text-center pb-5 text-red-600 text-xl  font-serif"> {user.stu}</h3>
      <p >{user.description}</p>
    </div>


      <img src={user.Image} className="hidden md:block w-85 h-auto  "/>
      
      </div>
      <img src={user.Image} className="block md:hidden w-60 h-auto m-auto "/>
    

    </>
  );
}
