import React, { useState } from 'react'
import img from './images/img.jpg'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
function Image() {
  let imgArray=[img,img1,img2,img3];
  const [srrc,setSrrc]=useState(img);
  
  return (
    <>
      <div className='ShowImage'>
        <img src={srrc} alt="img"/>
      </div>
      <div className='imgContainer'>
      {imgArray.map((src,index)=><img key={index} src={src} alt="img"  onClick={(e)=>setSrrc(e.target.src)}/>)}
      </div>
    </>

  )
}

export default Image;