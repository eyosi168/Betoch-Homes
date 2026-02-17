import React, { useState } from 'react'
import './slider.scss'

function Slider({images}) {
    const[imageIndex,setImageIndex]=useState(null)
  return (
    <div className='slider'>
       {imageIndex!==null&&( <div className="fullSlider">
            <div className="arrow">
                <img src="/arrow.png" alt="" />
            </div>
            <div className="imagecontainer">
                <img src={images[imageIndex]} alt="" />
            </div>
            <div className="arrow">
            <img src="/arrow.png" alt="" className='right' />

            </div>
            <div className="close" onClick={()=>setImageIndex(null)}>X</div>
        </div>)}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={()=>setImageIndex(0)}/>
      </div>
      <div className="smallImage">
        {images.slice(1).map((image,index)=>(
            <img src={image} alt=""  key={index} onClick={()=>setImageIndex(index+1)}/>
        ))}
      </div>
    </div>
  )
}

export default Slider
