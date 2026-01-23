import React, { useState } from 'react'

const Card = ({ h1, img, cap1, cap2 }) => {
  const [val, setval] = useState()
  return (
    
    <div className=" flex flex-col justify-between relative h-[60vh] w-full bg-black rounded-xl my-5 text-white font-light text-center py-10 overflow-hidden scale-100 hover:scale-90 duration-300">

      {/* Heading */}
      <h6 className="text-[5vh] capitalize">{h1}</h6>

      {/* Image */}
      <img
        className="h-[25vh] w-[15vw] object-contain absolute left-1/2 top-[25%] -translate-x-1/2"
        src={img}
        alt={h1}
      />

      {/* Tags */}
      <div className="flex mt-[30vh] justify-between mx-[5vw]">

  {/* cap1 */}
  <span className="relative flex overflow-hidden group border-[2px] border-white rounded-full px-6 text-center cursor-pointer h-[6vh] text-center scale-100 hover:scale-120">

    {/* sliding bg */}
    <span className="absolute inset-0 bg-white 
                     -translate-y-full group-hover:translate-y-0
                     transition-transform duration-300 ease-out"></span>

    {/* text */}
    <span className="relative z-10 text-[3vh] text-white 
                     group-hover:text-black transition-colors duration-300
                     -translate-y-full group-hover:translate-y-0
                      ease-out">
      {cap1}
    </span>

  </span>

  {/* cap2 */}
  <span className=" flex relative overflow-hidden group border-[2px] border-white rounded-full px-6 text-center cursor-pointer h-[6vh]scale-100 hover:scale-120">

    {/* sliding bg */}
    <span className="absolute inset-0 bg-white 
                     -translate-y-full group-hover:translate-y-0
                     transition-transform duration-300 ease-out"></span>

    {/* text */}
    <span className="relative z-10 text-[3vh] text-white 
                     group-hover:text-black transition-colors duration-300
                     -translate-y-full group-hover:translate-y-0
                       ease-out">
      {cap2}
    </span>

  </span>

</div>
    </div>
  )
}

export default Card
