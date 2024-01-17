"use client"
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
export default function Header() {
  let [fix,setFix]=useState(false)
 
  let setFixed=()=>{
    if(window.scrollY >=392)
    {
     setFix(true)
      console.log("yes")
    }
    else{
      setFix(false)
      console.log("no")
    }
  }
  
  useEffect(()=>{
    window.addEventListener("scroll",setFixed)
  },[fix])

  // 
  return (
   <>
   <section className='web-header bg-white '>
   <nav class={`navbar navbar-expand-lg ${fix ? 'fixed-top bg-white z-3 w-100 gx-0 fixed-head':''} `}  >
  <div class="container-fluid">
    <span class="navbar-brand me-4" >
        <img src="logo.svg" className='img-fluid'style={{width:220}}/>
    </span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" href="/about">About Us</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" href="/pdf">PDF Catelog</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" href="/contact">Contact Us</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" href="/blogs">Blogs</Link>
        </li>
      </ul>
      <div class="search-bar-box position-relative ms-auto me-2"><div class="d-flex justify-content-center catalogs-search"><div class="d-flex catalogs-search-input"><div class="position-relative w-100"><div class="radius-input input-search w-100 bg-white position-relative"><input type="search" class="bg-transparent outline-none fs-17 w-100 " placeholder="Search wires, plywood, paints..etc." value=""/></div></div></div></div></div>
      <div className='profile-dropdown language-dropdown d-flex align-items-cente dropdown'>
        <button type='button' className='p-0 bg-transparent fw-500 shadow-none border-0 text-center  btn btn-primary'>
            <img src="lang-switch.svg" className='img-fluid'width={32}/>
        </button>
      </div>
      <div class="position-relative d-lg-flex d-none align-items-center ms-3 cursor-pointer"><a href="tel:+91 80708 80707" class="fs-14 text-decoration-none label-color-2 fw-500"><img src="call-calling-mobile.svg" alt="icon" class="img-fluid" width="32"/></a></div>
      <div class="position-relative d-lg-flex d-none align-items-center ms-3 cursor-pointer"><img src="cart-icon.svg" class="img-fluid" width="32"/></div>
      <button class="primary-button ms-3">Login or Signup</button>
    </div>
  </div>
</nav>
   </section>
   </>
  )
}
