import React from 'react'
import { icons } from 'react-icons/lib';
//yeh class yahan nmagae hen lefnav say props kay through takay hum yahan use karsakaen
const LeftNavMenuitem = ({text,icon,className,action}) => {
  return (
    <div className={"text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " + className }
    onClick={action}
    >
      <span className='text-xl mr-5'>{icon}</span>
{text}

    </div>
  )
}

export default LeftNavMenuitem;