import React, { useState } from 'react';
import "./imgcss1.css"



let images1 = [
  { src: require('./slideimage/black-dude-crying.gif'), alt: 'Your description here 1' },
  { src: require('./slideimage/crying-black-guy-meme 2.gif'), alt: 'Your description here 2' },
  { src: require('./slideimage/diplayimg1.webp'), alt: 'Your description here 1' },
]


let index = 0;
let n = images1.length;



export default function Slideimg() {

  const decfun1 = () => {
    index--;
    if (index < 0) {
      index = n - 1;
    }
    setcnt(index);
  }

  const incfun1 = () => {
    index++;
    if (index === n) {
      index = 0;
    }
    setcnt(index);
  }


  const [cnt, setcnt] = useState(0);
  return (
    <>
      <div className="imgcontain">
        <button id='btn1' onClick={decfun1}>PREV</button>
        <img src={images1[cnt].src} alt="" id='img1' />
        <button id='btn2' onClick={incfun1}>NEXT</button>
      </div>

    </>
  )
}
