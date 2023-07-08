import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";
import LeftNavMenuItem from "./LeftNavMenuitem";

const LeftNav = () => {
  const {selectedCategory,setSelectedCategory,mobileMenu} =useContext(Context);

  const navigate =useNavigate();
//jis category pay click ho uska data ajae
const clickHandler =(name,type)=>{
  switch(type){
    case "category":
    return setSelectedCategory(name);
    case "home":
    return setSelectedCategory(name);
    case "menu":
    return false;
    default:
      break;
  }
}
  // {/* //agar mobileMenu true he to yeah class add krdo other koi se bhe class add na ho */}
  return (
      <div
        className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
            mobileMenu ? "translate-x-0" : ""
        }`}
    >
<div className="flex px-5 flex-col">
  {categories?.map((item)=>{
    return(
      <React.Fragment  key={item.name}>
        <LeftNavMenuItem
        text={item.type === "home" ? "Home" : item.name}
        icon={item.icon}
        action={()=>{
          clickHandler(item.name,item.type);

          navigate("/");
        }}
        //if you click on selected category then selcted category have white
//jab bhe yeah dono eaqual hen to hamen ek class add karne he bg white warna empty string ajae means jis pay click hoa wa he uspay bg-white ke class lagaen gay
className={`${selectedCategory === item.name ? "bg-white/[0.15]" : ""}`} />

{/* //jab menue khatam hon to diver add hoaje  */}
{item?.divider && (
  <hr className="my-5 border-white/[0.2]"/>
)}
      </React.Fragment> 
    )
  })}
    <hr className="my-5 border-white/[0.2]"/>
<div className="text-white/[0.5] text-[12px]">
  Clone by: M.ikramah
</div>
</div>
    </div>)
}

export default LeftNav
