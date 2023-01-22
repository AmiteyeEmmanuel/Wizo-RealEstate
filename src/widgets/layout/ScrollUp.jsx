import React, { useState } from 'react';
import styled from 'styled-components';
import {ArrowLongUpIcon } from "@heroicons/react/24/solid";


function ScrollUp() {
  const [showScroll, setShowScroll] = useState(false);
  window.addEventListener('scroll', () => {
    window.pageYOffset > 100 ? setShowScroll(true) : setShowScroll(false);
  })
  return (
    <Div>
      <a href="#" className={`${showScroll ?  "block" : "none"}`} >
      <div className="mb-2 inline-flex h-10 w-10 items-center rounded-xl bg-black p-3 text-center shadow-lg">
     <ArrowLongUpIcon className="h-6 w-6"/>
   </div>
      </a>
    
    </Div>
  )
}

const Div = styled.div`
max-width: 100vw;
.none{
  opacity: none;
  visibility:hidden;
}
a{
  position: fixed;
  bottom: 10px;
  right: 40px;
  padding: 0.5rem;
  border-radius: 30%;
  display:flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: 0.5s ease-in-out;
  svg{
    color: #fff;
    font-size: 0.8rem;
  }
}

`
export default ScrollUp;