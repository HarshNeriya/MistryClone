"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stories from 'react-insta-stories';




export default function Home() {
  
  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed:1000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    
  }
  const [showBannerClick, setShowBannerClick] = useState(false);
  const [modaldiv, setmodeldiv] = useState(false);
  const[truststate,settruststate]=useState(false);
  const[instastate,setinstastate]=useState(false)

  const toggleBannerClick = () => {
    setShowBannerClick(!showBannerClick);
  };
  const closeBannerClick = () => {
    setShowBannerClick(false); // Set showBannerClick to false to hide BannerClick
  };
  const togglemodal = () => {
    setmodeldiv(!modaldiv)
  }
  
  const closemodalClick = () => {
    setmodeldiv(!modaldiv)
  }
  const trustfunction=()=>{
    settruststate(!truststate)
  }
   const handleStoryImageClick = () => {
    setinstastate(!instastate); // Toggle instastate when story image is clicked
  };

  // const closeInsta = () => {
  //   setinstastate(false); // Close insta-backdrop when clicking anywhere on it
  // };
  return (
    <>
      <div>
        {showBannerClick ? <BannerClick props={closeBannerClick} /> : ''}
        {
          modaldiv ? <OfferDetails props={closemodalClick} /> : ""
        }
        {
          truststate ?<OtherTrust/> : ''
        }
{
  instastate ? <Insta/> : ""
}

        <section className='header-strip d-flex align-items-center justify-content-center py-3'>

          <div className='mx-4 text-center'>
            <div className='story-list-items rounded-circle mb-2 '>
              <div onClick={handleStoryImageClick} className='story-image rounded-circle'>
                <img src='Hardware+&+Tools+(2).png' className='w-100 h-100 rounded-circle' />
              </div>
            </div>
            <p class="fs-15 label-color-2 fw-600 m-0 line-clamp-2">Hardware &amp;<br /> Tools</p>
          </div>

          <div className='mx-4 text-center'>
            <div className='story-list-items rounded-circle mb-2 '>
              <div className='story-image rounded-circle'>
                <img src='Hardware+&+Tools+(2).png' className='w-100 h-100 rounded-circle' />
              </div>
            </div>
            <p class="fs-15 label-color-2 fw-600 m-0 line-clamp-2">Hardware &amp;<br /> Tools</p>
          </div>
          <div className='mx-4 text-center'>
            <div className='story-list-items rounded-circle mb-2 '>
              <div className='story-image rounded-circle'>
                <img src='Hardware+&+Tools+(2).png' className='w-100 h-100 rounded-circle' />
              </div>
            </div>
            <p class="fs-15 label-color-2 fw-600 m-0 line-clamp-2">Hardware &amp;<br /> Tools</p>
          </div>
          <div  className='mx-4 text-center'>
            <div className='story-list-items rounded-circle mb-2 '>
              <div  className='story-image rounded-circle'>
                <img src='Hardware+&+Tools+(2).png' className='w-100 h-100 rounded-circle' />
              </div>
            </div>
            <p class="fs-15 label-color-2 fw-600 m-0 line-clamp-2">Hardware &amp;<br /> Tools</p>
          </div>
          <div className='mx-4 text-center'>
            <div className='story-list-items rounded-circle mb-2 '>
              <div className='story-image rounded-circle'>
                <img src='Hardware+&+Tools+(2).png' className='w-100 h-100 rounded-circle' />
              </div>
            </div>
            <p class="fs-15 label-color-2 fw-600 m-0 line-clamp-2">Hardware &amp;<br /> Tools</p>
          </div>



        </section>
       
        
        <section className='mt-lg-4 mb-4 mb-lg-0'>

          <div className='container mb-4 '>
            <div className='row'>
              <div className='col-lg-12 '>
                <div className='border-partners-box bg-white'>
                  <h2 class="fs-16 fw-600 lh-24 label-color-2 mb-0 d-flex align-items-start"><span className='mb-3'>Explore Our Prices</span></h2>
                  <div>
                    <Slider {...settings}>
                   <FirstSlick/>
                   <FirstSlick/>
                   <FirstSlick/>
                   
                   <FirstSlick/>
                   <FirstSlick/>

                    </Slider>
                  </div>
                </div>
              </div>
            </div>

          </div>


        </section>
        <section className='bannerimg'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-4' onClick={toggleBannerClick}>  <Banner /></div>
              <div className='col-lg-4' onClick={toggleBannerClick}>  <Banner /></div>
              <div className='col-lg-4' onClick={toggleBannerClick}>  <Banner /></div>
            </div>
          </div>

        </section>
        <section className='pt-5 d-lg-block d-none'>
          <div className='container'>
            <div className='row justify-content-center'>  
              <div className='col-md-4 mb-4' onClick={togglemodal}>
                <div className='home-offer-card p-2 d-flex align-items-center cursor-pointer'>
                  <div class="offer-icon-home h-100"><img src="image+253.png" alt="Icon" class="img-fluid" /></div>
                  <div class="ms-2">
                    <h3 class="label-color-2 fs-16 fw-600">FREE DELIVERY</h3>
                    <h3 class="label-color-1 fs-12 fw-400 m-0 line-clamp-1">Subscribe to our delivery package to enjoy free shipping</h3>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-4' onClick={togglemodal}>
                <div className='home-offer-card p-2 d-flex align-items-center cursor-pointer'>
                  <div class="offer-icon-home h-100"><img src="image+253.png" alt="Icon" class="img-fluid" /></div>
                  <div class="ms-2">
                    <h3 class="label-color-2 fs-16 fw-600">FREE DELIVERY</h3>
                    <h3 class="label-color-1 fs-12 fw-400 m-0 line-clamp-1">Subscribe to our delivery package to enjoy free shipping</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section class="home-marquee mb-4 mt-5 p-3"><div class="marquee-tag"><div class="inner-marquee"><div class="d-inline-block align-middle me-4 me-lg-5 pe-lg-5 fs-15 fw-600 color-primary"><img src="currency-rupee.svg" alt="Icon" class="img-fluid me-2 me-lg-3" /><p class="m-0 d-inline-block">Always Low Prices</p></div>
          <div class="d-inline-block align-middle me-4 me-lg-5 pe-lg-5 fs-15 fw-600 color-primary"><img src="currency-rupee.svg"
            class="img-fluid me-2 me-lg-3" /><p class="m-0 d-inline-block">Dedicated Relationship manager</p></div>
          <div class="d-inline-block align-middle me-4 me-lg-5 pe-lg-5 fs-15 fw-600 color-primary"><img src="currency-rupee.svg"
            class="img-fluid me-2 me-lg-3" /><p class="m-0 d-inline-block">Dedicated Relationship manager</p></div>
          <div class="d-inline-block align-middle me-4 me-lg-5 pe-lg-5 fs-15 fw-600 color-primary"><img src="currency-rupee.svg"
            class="img-fluid me-2 me-lg-3" /><p class="m-0 d-inline-block">Dedicated Relationship manager</p></div>
        </div></div>
        </section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='requirements-box mt-4 mb-5'>
                <div className='row'>
                  <div className='col-6 text-center d-flex align-items-center d-lg-block'>
                    <img src="engineer.png" className='img-fluid' />
                  </div>
                  <div class="col-6 d-flex align-items-center justify-content-lg-start justify-content-end"><div class="d-flex align-items-center flex-column justify-content-end pe-3 pe-lg-0 py-lg-0 py-3"><p class="label-color-1 fs-28 fw-500 text-end mb-4 ms-auto"><span class="color-primary fw-600">Share your requirements</span> &amp; <br /> get your Estimate<br />within<span class="color-primary fw-600"> 4 hrs</span></p><button class="primary-button ms-auto fs-14 fw-600 px-5">Order Now</button></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='building-section p-60 d-none d-lg-block works-mistry-section'>
          <div className='container position-relative'>
            <div class="mb-lg-5 py-3 mb-lg-4 mb-2 mt-4 mt-lg-0 text-start"><h6 class="label-color-2 fs-40 fw-400 m-0">Here’s how Mistry.Store works</h6><p class="fs-20 fw-400 m-0">All your home building materials, just a few steps away!</p></div>
            <div className='row'>
              <div className='col-lg-5 mt-4 mt-lg-0 '>
                <div className='d-flex align-items-start mb-lg-5 mb-md-4 mb-2 how-works-box'>
                  <div className='px-2 me-md-3 me-1'>
                    <img src="send-req-home.svg" width={64} />
                  </div>
                  <div class=""><h5 class="fw-600 label-color-2">Search &amp; send your requirements</h5><p class="fs-17 fw-400 label-color-1">Send your product requirements by sharing images, adding items from our master list, call your RM or Whatsapp</p></div>
                </div>
                <div className='d-flex align-items-start mb-lg-5 mb-md-4 mb-2 how-works-box'>
                  <div className='px-2 me-md-3 me-1'>
                    <img src="send-req-home.svg" width={64} />
                  </div>
                  <div class=""><h5 class="fw-600 label-color-2">Search &amp; send your requirements</h5><p class="fs-17 fw-400 label-color-1">Send your product requirements by sharing images, adding items from our master list, call your RM or Whatsapp</p></div>
                </div>
                <div className='d-flex align-items-start mb-lg-5 mb-md-4 mb-2 how-works-box'>
                  <div className='px-2 me-md-3 me-1'>
                    <img src="send-req-home.svg" width={64} />
                  </div>
                  <div class=""><h5 class="fw-600 label-color-2">Search &amp; send your requirements</h5><p class="fs-17 fw-400 label-color-1">Send your product requirements by sharing images, adding items from our master list, call your RM or Whatsapp</p></div>
                </div>
              </div>
              <div className='col-lg-7 video-section mb-3 mb-lg-0'>
                <div className='m-auto video-box position-realtive'>
                  <div class="d-flex align-items-start justify-content-between p-lg-4 p-3"><h3 class="text-white fs-20 line-clamp-1"><img src="mystry-red-logo.jpg" alt="icon" class="img-fluid rounded-circle me-2" width="40" />Mistry.Store | One-stop Shop for All Building Material ...</h3><a class="cursor-pointer text-decoration-none text-nowrap text-center copy-link"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="copy" class="svg-inline--fa fa-copy fa-w-14 text-white fs-28" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="28"><path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path></svg><p class="text-white mt-2 fs-16 fw-600">Copy Link</p></a></div>
                  <button class="bg-transparent border-0 shadow-none outline-none position-absolute start-0 end-0 m-auto yt-play-video" title="Play"><img src="yt-play-btn.svg" alt="Youtube Play" class="img-fluid" width="90" /></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='container py-4'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='requirements-box mt-4 mb-5'>
                <div className='row'>
                  <div className='col-6 text-center d-flex align-items-center d-lg-block'>
                    <img src="three-painters.png" className='img-fluid' />
                  </div>
                  <div class="col-6 d-flex align-items-center justify-content-lg-start justify-content-end"><div class="d-flex align-items-center flex-column justify-content-end pe-3 pe-lg-0 py-lg-0 py-3"><p class="label-color-1 fs-28 fw-500 text-end mb-4 ms-auto"><span class="color-primary fw-600">Refer Fellow Professionals</span> &amp; <br />& Earn Referral Benefits<br /></p><button class="primary-button ms-auto fs-14 fw-600 px-5">Refer Now</button></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='p-60 register-section d-none d-lg-block'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 pt-3 pt-lg-0 d-flex align-items-center'>
                <div class="text-center text-lg-start"><h6 class="fs-36 fw-700 text-white">Register with us and get access to a world of exclusive <span class="color-primary">PRO Benefits</span></h6><img src="underline.png" alt="" class="img-fluid d-none d-lg-inline" /><div class="mt-lg-5 mt-2 pt-lg-3"><button class="primary-button px-lg-5 px-4 py-2 py-lg-3 h-auto fw-500" fdprocessedid="gjx5g5">Register with us</button></div></div>
              </div>
              <div className='col-lg-6 pt-lg-0 pt-4 red-dot-bg'>
                <div className='row benifites-row ms-lg-auto mx-auto'>
                  <div className='col-6 mb-4'>
                    <div className='pro-benefits-box case-back p-3 d-flex justify-content-center align-items-center flex-column'>
                      <div className='me-auto'>
                        <img src="excl-network.svg" />
                      </div>
                      <h4 class="label-color-2 fs-13 mb-2 fw-600 mt-auto me-auto">Networking Event Invites</h4>
                      <p class="fs-11 label-color-1 fw-400 mb-0 me-auto">Exclusive Access to Premier Industry Events</p>
                    </div>
                  </div>
                  <div className='col-6 mb-4'>
                    <div className='pro-benefits-box case-back p-3 d-flex justify-content-center align-items-center flex-column'>
                      <div className='me-auto'>
                        <img src="excl-network.svg" />
                      </div>
                      <h4 class="label-color-2 fs-13 mb-2 fw-600 mt-auto me-auto">Networking Event Invites</h4>
                      <p class="fs-11 label-color-1 fw-400 mb-0 me-auto">Exclusive Access to Premier Industry Events</p>
                    </div>
                  </div>
                  <div className='col-6 mb-4'>
                    <div className='pro-benefits-box case-back p-3 d-flex justify-content-center align-items-center flex-column'>
                      <div className='me-auto'>
                        <img src="excl-network.svg" />
                      </div>
                      <h4 class="label-color-2 fs-13 mb-2 fw-600 mt-auto me-auto">Networking Event Invites</h4>
                      <p class="fs-11 label-color-1 fw-400 mb-0 me-auto">Exclusive Access to Premier Industry Events</p>
                    </div>
                  </div>
                  <div className='col-6 mb-4'>
                    <div className='pro-benefits-box case-back p-3 d-flex justify-content-center align-items-center flex-column'>
                      <div className='me-auto'>
                        <img src="excl-network.svg" />
                      </div>
                      <h4 class="label-color-2 fs-13 mb-2 fw-600 mt-auto me-auto">Networking Event Invites</h4>
                      <p class="fs-11 label-color-1 fw-400 mb-0 me-auto">Exclusive Access to Premier Industry Events</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='p-60 pt-5 trusted-box'>
          <div className='container'>
            <div className='trusted-brands-container p-lg-4'>
              <div class="d-flex align-items-center justify-content-between mb-lg-4 mb-4"><span class="label-color-2 fs-40 fw-500">Trusted by <span class="fw-600 color-primary">75+ Brands</span></span></div>
              <div className='trusted-nav'>
                <ul className='list-unstyled d-flex mb-0 pb-2 pb-lg-0'>
                  <li class="me-2 me-lg-3"><a class="cursor-pointer text-decoration-none fs-16 color-medium">Electricals</a></li>
                  <li onClick={trustfunction} class="me-2 me-lg-3"><a class="cursor-pointer text-decoration-none fs-16">Paints</a></li>
                  <li class="me-2 me-lg-3"><a class="cursor-pointer text-decoration-none fs-16">Wood Materials</a></li><li class="me-2 me-lg-3"><a class="cursor-pointer text-decoration-none fs-16">Hardware & Plumbing</a></li>

                </ul>
              </div>
              <div className='d-flex flex-wrap justify-content-center justify-content-lg-start'>
                <Trustedbrand />
                <Trustedbrand />
                <Trustedbrand />
                <Trustedbrand />
                <Trustedbrand />
                <Trustedbrand />
                <Trustedbrand />
                <Trustedbrand />

              </div>
              
            </div>
          </div>
        </section>
        <section className='flash-deals-box building-section p-60 pt-0 pt-lg-4 d-none d-lg-block'>
          <div className='container'>
            <div className='row  platform-row'>
              <div className='col-lg-6 building-content mb-3 mb-lg-0'>
                <div class="mb-lg-0 mb-3 position-relative"><h6 class="label-color-2 fs-40 fw-300 m-0">Exclusive platform for all</h6><p class="fs-40 fw-700 m-0">Home Building Professionals</p><img src="bg-gray-block-left-72.png" alt="" class="position-absolute gray-bg d-lg-block d-none" /></div>
                <p class="fw-400 fs-18 label-color-2 pe-lg-4">Introducing Mistry.Store, India's first organized platform that simplifies building material purchases for home-building professionals like Architects, Interior Decorators, Contractors &amp; Skilled workers.</p>
                <p class="fw-400 fs-18 label-color-2 pe-lg-4">A comprehensive platform dealing in over 100+ brands across Plywood &amp; Boards, Hardware &amp; Tools, Electricals &amp; Lights, Paints &amp; Chemicals, Sanitary &amp; Plumbing.</p>
              </div>
              <div className='col-lg-6 d-flex flex-wrap justify-content-end'>
                <div class="mb-3 building-box p-4 text-center d-flex flex-column mx-2"><img src="currency-rupee (1).svg" alt="Icon" class="img-fluid mb-3" /><h6 class="fs-16 label-color-2 fw-600 mb-2 mt-auto">Always Low Prices</h6><p class="fs-14 fw-400 label-color-1 m-0">We offer low prices everyday on quality and original products</p></div>
                <div class="mb-3 building-box p-4 text-center d-flex flex-column mx-2"><img src="currency-rupee (1).svg" alt="Icon" class="img-fluid mb-3" /><h6 class="fs-16 label-color-2 fw-600 mb-2 mt-auto">Always Low Prices</h6><p class="fs-14 fw-400 label-color-1 m-0">We offer low prices everyday on quality and original products</p></div>
                <div class="mb-3 building-box p-4 text-center d-flex flex-column mx-2"><img src="currency-rupee (1).svg" alt="Icon" class="img-fluid mb-3" /><h6 class="fs-16 label-color-2 fw-600 mb-2 mt-auto">Always Low Prices</h6><p class="fs-14 fw-400 label-color-1 m-0">We offer low prices everyday on quality and original products</p></div>
                <div class="mb-3 building-box p-4 text-center d-flex flex-column mx-2"><img src="currency-rupee (1).svg" alt="Icon" class="img-fluid mb-3" /><h6 class="fs-16 label-color-2 fw-600 mb-2 mt-auto">Always Low Prices</h6><p class="fs-14 fw-400 label-color-1 m-0">We offer low prices everyday on quality and original products</p></div>
              </div>



            </div>
          </div>
        </section>
        <section className='p-60 d-none d-lg-block'>
          <div className='container growing-community-section'>
            <div class="mb-md-5 mb-3"><h6 class="fs-40 label-color-2 text-center fw-400">Be a part of <span class="fw-600">Mistry’s Growing Community</span></h6></div>


            <div className='professionals-row mx-auto d-flex flex-wrap'>
              <div className='text-center'>
                <div className='overflow-hidden proffesion-img m-3 text-center'>
                  <img src="architect.png" className='img fluid' />

                </div>
                <h3 class="color-dark py-lg-3 py-2 m-0 fs-20">Architects</h3>
              </div>
              <div className='text-center'>
                <div className='overflow-hidden proffesion-img m-3 text-center'>
                  <img src="architect.png" className='img fluid' />

                </div>
                <h3 class="color-dark py-lg-3 py-2 m-0 fs-20">Architects</h3>
              </div>
              <div className='text-center'>
                <div className='overflow-hidden proffesion-img m-3 text-center'>
                  <img src="architect.png" className='img fluid' />

                </div>
                <h3 class="color-dark py-lg-3 py-2 m-0 fs-20">Architects</h3>
              </div>
              <div className='text-center'>
                <div className='overflow-hidden proffesion-img m-3 text-center'>
                  <img src="architect.png" className='img fluid' />

                </div>
                <h3 class="color-dark py-lg-3 py-2 m-0 fs-20">Architects</h3>
              </div>
              <div className='text-center'>
                <div className='overflow-hidden proffesion-img m-3 text-center'>
                  <img src="architect.png" className='img fluid' />

                </div>
                <h3 class="color-dark py-lg-3 py-2 m-0 fs-20">Architects</h3>
              </div>
              <div className='text-center'>
                <div className='overflow-hidden proffesion-img m-3 text-center'>
                  <img src="architect.png" className='img fluid' />

                </div>
                <h3 class="color-dark py-lg-3 py-2 m-0 fs-20">Architects</h3>
              </div>
              <div className='text-center'>
                <div className='overflow-hidden proffesion-img m-3 text-center'>
                  <img src="architect.png" className='img fluid' />

                </div>
                <h3 class="color-dark py-lg-3 py-2 m-0 fs-20">Architects</h3>
              </div>
              <div className='text-center'>
                <div className='overflow-hidden proffesion-img m-3 text-center'>
                  <img src="architect.png" className='img fluid' />

                </div>
                <h3 class="color-dark py-lg-3 py-2 m-0 fs-20">Architects</h3>
              </div>



            </div>
          </div>
        </section>
        <section className='py-4 py-lg-5 download-section'>
          <div className='container'>
            <div className='row align-items-center '>
              <div className='col-lg-7'>
                <div className='text-center text-lg-start'>
                  <h6 class="fs-40 fw-600 mb-lg-4 mb-3">Mistry.Store Download the App Now!</h6>
                </div>
                <div class="d-flex align-items-center justify-content-center justify-content-lg-start"><div class="px-2 px-xl-0"><a href="https://play.google.com/store/apps/details?id=com.mistrystore.app" target="blank"><img src="google-play.png" alt="" class="me-0 me-lg-3 img-fluid" /></a></div><div class="px-2 px-xl-0"><a href="https://apps.apple.com/in/app/mistry-store/id1670617517" target="blank"><img src="/app-store.png" alt="" class="img-fluid" /></a></div></div>
              </div>
              <div className='col-lg-5 text-center'>
                <img src="mobile-img.png" />
              </div>
            </div>
          </div>
        </section>
        <section className='p-60 professional-section'>
          <div className='container'>
            <div className='d-flex justify-content-between align-items-center mb-4'>
              <h6 class=" color-light-white fs-40 m-0 d-none d-lg-block">What our Professionals say about us!</h6>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='px-3 prowidth'>
                <div class="card border-0 pb-2 h-100 p-3">
                  <div className='play-image-box position-relative'>
                    <img class="card-img-top rounded" src="Tanu+Gupta+Thumbnail+(2)+1.png" />
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"><img src="play-circle-outline.svg" alt="" class="cursor-pointer" /></div>
                  </div>
                  <div class="card-body px-0 pb-0">
                    <div>
                      <div className='d-flex align-items-center mb-2'>
                        <div class=""><img src="avatar.png" alt="" /></div>
                        <div class="ms-2"><h6 class="fs-14 p-0 fw-600 m-0 label-color-2 line-clamp-1">Tanu Gupta</h6><p class="fs-10 fw-400 label-color-2 m-0">Interior Designer </p></div>
                      </div>
                    </div>
                    <p class="fs-12 fw-400 label-colo-2 line-clamp-4">Mistry.Store is offering all building material under one roof which makes my life easier. I recommend them to all people I know. I hope they keep up with the good work and keep providing us with good service.</p>
                  </div>
                </div>
              </div>
              <div className='px-3 prowidth'>
                <div class="card border-0 pb-2 h-100 p-3">
                  <div className='play-image-box position-relative'>
                    <img class="card-img-top rounded" src="Tanu+Gupta+Thumbnail+(2)+1.png" />
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"><img src="play-circle-outline.svg" alt="" class="cursor-pointer" /></div>
                  </div>
                  <div class="card-body px-0 pb-0">
                    <div>
                      <div className='d-flex align-items-center mb-2'>
                        <div class=""><img src="avatar.png" alt="" /></div>
                        <div class="ms-2"><h6 class="fs-14 p-0 fw-600 m-0 label-color-2 line-clamp-1">Tanu Gupta</h6><p class="fs-10 fw-400 label-color-2 m-0">Interior Designer </p></div>
                      </div>
                    </div>
                    <p class="fs-12 fw-400 label-colo-2 line-clamp-4">Mistry.Store is offering all building material under one roof which makes my life easier. I recommend them to all people I know. I hope they keep up with the good work and keep providing us with good service.</p>
                  </div>
                </div>
              </div>
              <div className='px-3 prowidth'>
                <div class="card border-0 pb-2 h-100 p-3">
                  <div className='play-image-box position-relative'>
                    <img class="card-img-top rounded" src="Tanu+Gupta+Thumbnail+(2)+1.png" />
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"><img src="play-circle-outline.svg" alt="" class="cursor-pointer" /></div>
                  </div>
                  <div class="card-body px-0 pb-0">
                    <div>
                      <div className='d-flex align-items-center mb-2'>
                        <div class=""><img src="avatar.png" alt="" /></div>
                        <div class="ms-2"><h6 class="fs-14 p-0 fw-600 m-0 label-color-2 line-clamp-1">Tanu Gupta</h6><p class="fs-10 fw-400 label-color-2 m-0">Interior Designer </p></div>
                      </div>
                    </div>
                    <p class="fs-12 fw-400 label-colo-2 line-clamp-4">Mistry.Store is offering all building material under one roof which makes my life easier. I recommend them to all people I know. I hope they keep up with the good work and keep providing us with good service.</p>
                  </div>
                </div>
              </div>
              <div className='px-3 prowidth'>
                <div class="card border-0 pb-2 h-100 p-3">
                  <div className='play-image-box position-relative'>
                    <img class="card-img-top rounded" src="Tanu+Gupta+Thumbnail+(2)+1.png" />
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"><img src="play-circle-outline.svg" alt="" class="cursor-pointer" /></div>
                  </div>
                  <div class="card-body px-0 pb-0">
                    <div>
                      <div className='d-flex align-items-center mb-2'>
                        <div class=""><img src="avatar.png" alt="" /></div>
                        <div class="ms-2"><h6 class="fs-14 p-0 fw-600 m-0 label-color-2 line-clamp-1">Tanu Gupta</h6><p class="fs-10 fw-400 label-color-2 m-0">Interior Designer </p></div>
                      </div>
                    </div>
                    <p class="fs-12 fw-400 label-colo-2 line-clamp-4">Mistry.Store is offering all building material under one roof which makes my life easier. I recommend them to all people I know. I hope they keep up with the good work and keep providing us with good service.</p>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </section>
        <section className='p-60 pb-0 industry-section mistry-news-section bg-grey'>
          <div className='container position-relative'>
            <div class="d-flex align-items-center justify-content-between mb-4"><span class="label-color-2 fs-40"><span class="label-color-2 fs-40 fw-400"><span class="fw-700">Mistry.Store</span> in News</span></span></div>
            <div className='row'>
              <div class="col-lg-3 col-md-6 col-6 mb-lg-4 mb-4"><div class="border-0 h-100 card"><img class="card-img-top img-fluid inds-news-img" src="Untitled-design-168.jpeg" /><div class="card-body"><div class="fs-18 fw-600 mb-2"><p class="m-0 block-ellipsis m-0 line-clamp-4">Mistry.Store Launches Indias First Building Material Sampling Van </p></div><a class="color-primary fs-14 fw-600 cursor-pointer text-decoration-none download-color news-read-more" target="blank" href="https://helloentrepreneurs.com/startup-news/mistry-store-launches-indias-first-building-material-sampling-van-for-professionals-18208/">Read more<img src="arrow-01.svg" alt="" class="ms-1" /></a></div></div></div>
              <div class="col-lg-3 col-md-6 col-6 mb-lg-4 mb-4"><div class="border-0 h-100 card"><img class="card-img-top img-fluid inds-news-img" src="Untitled-design-168.jpeg" /><div class="card-body"><div class="fs-18 fw-600 mb-2"><p class="m-0 block-ellipsis m-0 line-clamp-4">Mistry.Store Launches Indias First Building Material Sampling Van </p></div><a class="color-primary fs-14 fw-600 cursor-pointer text-decoration-none download-color news-read-more" target="blank" href="https://helloentrepreneurs.com/startup-news/mistry-store-launches-indias-first-building-material-sampling-van-for-professionals-18208/">Read more<img src="arrow-01.svg" alt="" class="ms-1" /></a></div></div></div>
              <div class="col-lg-3 col-md-6 col-6 mb-lg-4 mb-4"><div class="border-0 h-100 card"><img class="card-img-top img-fluid inds-news-img" src="Untitled-design-168.jpeg" /><div class="card-body"><div class="fs-18 fw-600 mb-2"><p class="m-0 block-ellipsis m-0 line-clamp-4">Mistry.Store Launches Indias First Building Material Sampling Van </p></div><a class="color-primary fs-14 fw-600 cursor-pointer text-decoration-none download-color news-read-more" target="blank" href="https://helloentrepreneurs.com/startup-news/mistry-store-launches-indias-first-building-material-sampling-van-for-professionals-18208/">Read more<img src="arrow-01.svg" alt="" class="ms-1" /></a></div></div></div>
            </div>
          </div>
        </section>
        <section className='p-60 pb-0 industry-section mistry-news-section bg-grey'>
          <div className='container position-relative'>
            <div class="d-flex align-items-center justify-content-between mb-4"><span class="label-color-2 fs-40"><span class="label-color-2 fs-40 fw-400"><span class="fw-700">Mistry.Store</span> in Blogs</span></span></div>
            <div className='row'>
              <div class="col-lg-3 col-md-6 col-6 mb-lg-4 mb-4"><div class="border-0 h-100 card"><img class="card-img-top img-fluid inds-news-img" src="d64c34_7b5f3945050c4419b690b8966f93e795~mv2.webp" /><div class="card-body"><div class="fs-18 fw-600 mb-2"><p class="m-0 block-ellipsis m-0 line-clamp-4">How ‘Select my Designer’ simplifies your search for an ideal interior designer? </p></div><a class="color-primary fs-14 fw-600 cursor-pointer text-decoration-none download-color news-read-more" target="blank" href="https://helloentrepreneurs.com/startup-news/mistry-store-launches-indias-first-building-material-sampling-van-for-professionals-18208/">Read more<img src="arrow-01.svg" alt="" class="ms-1" /></a></div></div></div>
              <div class="col-lg-3 col-md-6 col-6 mb-lg-4 mb-4"><div class="border-0 h-100 card"><img class="card-img-top img-fluid inds-news-img" src="d64c34_7b5f3945050c4419b690b8966f93e795~mv2.webp" /><div class="card-body"><div class="fs-18 fw-600 mb-2"><p class="m-0 block-ellipsis m-0 line-clamp-4">How ‘Select my Designer’ simplifies your search for an ideal interior designer? </p></div><a class="color-primary fs-14 fw-600 cursor-pointer text-decoration-none download-color news-read-more" target="blank" href="https://helloentrepreneurs.com/startup-news/mistry-store-launches-indias-first-building-material-sampling-van-for-professionals-18208/">Read more<img src="arrow-01.svg" alt="" class="ms-1" /></a></div></div></div>
              <div class="col-lg-3 col-md-6 col-6 mb-lg-4 mb-4"><div class="border-0 h-100 card"><img class="card-img-top img-fluid inds-news-img" src="d64c34_7b5f3945050c4419b690b8966f93e795~mv2.webp" /><div class="card-body"><div class="fs-18 fw-600 mb-2"><p class="m-0 block-ellipsis m-0 line-clamp-4">How ‘Select my Designer’ simplifies your search for an ideal interior designer? </p></div><a class="color-primary fs-14 fw-600 cursor-pointer text-decoration-none download-color news-read-more" target="blank" href="https://helloentrepreneurs.com/startup-news/mistry-store-launches-indias-first-building-material-sampling-van-for-professionals-18208/">Read more<img src="arrow-01.svg" alt="" class="ms-1" /></a></div></div></div>
            </div>
            <div class="row d-none d-lg-flex align-items-center justify-content-between m-auto bg-dark-blue text-white footer-contact-box mb-lg-5 mb-4 position-absolute w-100"><div class="col-md-6"><h4 class="m-0">Find Building Material for your next construction project!</h4></div><div class="col-md-6 mt-3 mt-md-0 text-center text-md-end"><a class="primary-button text-decoration-none px-lg-5 px-4 py-lg-3 py-2 fw-500 fs-16" href="/contact-us">Contact Us</a></div></div>
          </div>
        </section>

      </div>
    </>

  )
}
let Banner = () => {
  return (
    <img src="deliveryPackageBanner.jpg" className='w-100' />
  )
}
let BannerClick = ({ props }) => {
  return (
    <div className='image-preview'>
      <button onClick={props} class="border-0 p-3 bg-transparent outline-none posibt"><img src="close-icon.svg" class="img-fluid modal-close" alt="Logo" width="40" /></button>
      <div className='p-4 d-flex align-items-center '>
        <img src="deliveryPackageDetails.png" className='img-fluid' />
      </div>
    </div>
  )
}
let OfferDetails = ({ props }) => {
  return (
    <>
      <div className='blur-backdrop'>
        <div className='modal-desgin p-2 bg-white'>
          <div className='modal-box p-3 border-bottom'>
            <h5 class="label-color-2 fs-16 fw-600 m-0">Offer Details</h5>
            <button onClick={props} className=' modalclose m-0 p-0'><img src='close-black-circle.svg' className='img-fluid' width={26} /></button>
          </div>
          <div className='px-3'>
            <div className='py-3 border-bottom'>
              <img src="image+253.png" className='img-fluid mb-3' />
              <h6 class="label-color-2 fs-13 fw-500 m-0">Subscribe to our delivery package and get your orders delivered with no extra delivery charges. You can subscribe to our delivery packages based on your order frequency. We offer 3 packages for 1,999 Rs, 3,799 Rs and 6,999 Rs providing 5, 10 and 20 deliveries respectively.</h6>
            </div>
          </div>
          <div className='p-3'>
            <h6 class="label-color-2 fs-14 fw-600 mb-3">T&amp;Cs</h6>
            <ul className='p-0 '>
              <li className='label-color-1 fs-11 fw-400 mb-2 d-flex align-items-center'><FontAwesomeIcon icon={faCheck} className='modalfont' />
                <span>Prices mentioned are exclusive of gst</span></li>
              <li className='label-color-1 fs-11 fw-400 mb-2 d-flex align-items-center'><FontAwesomeIcon icon={faCheck} className='modalfont' />
                <span>Prices mentioned are exclusive of gst</span></li>
              <li className='label-color-1 fs-11 fw-400 mb-2 d-flex align-items-center'><FontAwesomeIcon icon={faCheck} className='modalfont' />
                <span>Prices mentioned are exclusive of gst</span></li>

            </ul>
          </div>
        </div>
      </div>



    </>
  )
}
let Trustedbrand = () => {
  return (
    <>
      <div className='pt-lg-5 pb-3 pb-lg-0 pt-4'>
        <div className='d-flex flex-wrap justify-content-center justify-content-lg-start'>
          <div class="text-center trusted-brand-item me-3 mb-lg-4 mb-3 d-flex align-items-center justify-content-center"><img src="elctricals1.svg" alt="Icon" class="img-fluid m-auto" /></div>
        </div>
      </div>
    </>
  )
}

let OtherTrust=()=>{
  return (
    <>
      <div className='pt-lg-5 pb-3 pb-lg-0 pt-4'>
        <div className='d-flex flex-wrap justify-content-center justify-content-lg-start'>
          <div class="text-center trusted-brand-item me-3 mb-lg-4 mb-3 d-flex align-items-center justify-content-center"><img src="elctricals1.svg" alt="Icon" class="img-fluid m-auto" />
          <h1>harsh</h1></div>
        </div>
      </div>
    </>
  )
}
let FirstSlick=()=>{
  return(
    <>
    <div className='brand-partner px-3 py-lg-4 py-3 mb-3 text-center'>
      <div className='b-image mb-3'>
        <img src="greenpanel.png" className='img-fluid m-auto'/>
      </div>
      <h3 class="fs-15 label-color-2 fw-600 mb-2 line-clamp-1">17mm HDWR</h3>
      <p class="fs-14 label-color-1 fw-500 mb-2 text-capitalize">Starting From</p>
      <div><p class="fs-24 color-primary fw-700 mb-0">₹77/-</p><span class="fs-12 label-color-2 fw-600">per sqft</span></div>
    </div>
    </>
  )
}
let Insta=()=>{
  const stories = [
    'https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Electrical+wires.jpeg',
    'https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Electrical+wires.jpeg'
    
    ];

  return( <div className='insta-backdrop'> 
  <div>
 
  <Stories
		  stories={stories}
			defaultInterval={2000}
			width={350}
			height={700}
		/>
  </div>
</div>)
}

