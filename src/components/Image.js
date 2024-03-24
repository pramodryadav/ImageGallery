import React, { useState, useRef } from 'react'
import img from './images/img.jpg'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
function Image() {
  let imgArray = [img, img1, img2, img3, img, img1, img2, img3,img, img1, img2, img3, img, img1, img2, img3];
  const [srrc, setSrrc] = useState(img);

  const imageContainerRef = useRef(null);

  const scrollLeft = () => {
    if (imageContainerRef.current) {
      console.log("imageContainerRef.current",imageContainerRef.current);
      imageContainerRef.current.scrollBy({
        left: -450, // Adjust this value to control the scrolling speed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({
        left: 450, // Adjust this value to control the scrolling speed
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className='ShowImage'>
        <img src={srrc} alt="img" />
      </div>
      <div className='imgContainer' >
        <button class="left scrollBtn" onClick={scrollLeft}>
          <i class="fas fa-angle-double-left">&lt;</i>
        </button>
        <div className='scroll-images' ref={imageContainerRef}>
          {imgArray.map((src, index) => <img
            key={index}
            className=''
            src={src}
            alt="img"
            onClick={(e) => setSrrc(e.target.src)}
          />)
          }
        </div>

        <button class="right scrollBtn" onClick={scrollRight}>
          <i class="fas fa-angle-double-right">&gt;</i>
        </button>
      </div>
    </>

  )
}

export default Image;