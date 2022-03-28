import React, {useState}from 'react'
import img from './images/img.jpg'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'

function Navbar() {

  let imgArray=[img,img1,img2,img3];
  const [srrc,setSrrc]=useState();
  return (
    <>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div className="carousel-item active ShowImage'">
     
      {imgArray.map((src)=><img src={src} class="d-block w-100" alt="img"  onClick={(e)=>setSrrc(e.target.src)}/>)}
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  
  )
}

export default Navbar



