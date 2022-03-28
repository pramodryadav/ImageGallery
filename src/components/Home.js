import React from 'react'
import img from './images/img.jpg'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'

function Home() {
  return (
    <div className='container'>
      <div className='homeImg'>
      <img src={img} alt="" />
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
     
      </div>
     


    </div>
  )
}

export default Home