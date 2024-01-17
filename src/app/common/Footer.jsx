import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
   <>
   <footer className='website-footer home-footer'>
    <div className='container position-relative'>
        <div className='row'>
            <div className='col-lg-3'>
                <div>
                    <img src="logo.svg" className='img-fluid footer-logo '/>
                </div>
            </div>
            <div className='col-lg-3 col-6'>
            <div><ul class="list-unstyled useful-links"><li class="mb-lg-4 mb-3"><a class="fs-14 text-decoration-none label-color-2 fw-500" href="/">Home</a></li><li class="mb-lg-4 mb-3"><a class="fs-14 text-decoration-none label-color-2 fw-500" href="/about-us">About Us</a></li><li class="mb-lg-4 mb-3"><a class="fs-14 text-decoration-none label-color-2 fw-500" href="/partner">Partner with Us</a></li><li class="mb-lg-4 mb-3"><a class="fs-14 text-decoration-none label-color-2 fw-500" href="/contact-us">Contact Us</a></li><li class="mb-lg-4 mb-3"><Link class="fs-14 text-decoration-none label-color-2 fw-500" href="/faq">FAQ's</Link></li><li class="mb-lg-4 mb-3"><a class="fs-14 text-decoration-none label-color-2 fw-500" href="/ei/expertinspection">Expert Inspection Services</a></li></ul></div>
            </div>
            <div class="col-lg-3 col-6"><div><ul class="list-unstyled useful-links"><li class="mb-lg-4 mb-3"><Link class="fs-14 text-decoration-none label-color-2 fw-500" href="/privacypolicy">Privacy </Link></li><li class="mb-lg-4 mb-3"><Link class="fs-14 text-decoration-none label-color-2 fw-500" href="/termcondition">Terms &amp; Conditions</Link></li><li class="mb-lg-4 mb-3"><Link class="fs-14 text-decoration-none label-color-2 fw-500" href="/returnpolicy">Returns Policy</Link></li><li class="mb-lg-4 mb-3"><Link class="fs-14 text-decoration-none label-color-2 fw-500" href="shiping">Shipping &amp; Delivery Policy</Link></li><li class="mb-lg-4 mb-3"><Link class="fs-14 text-decoration-none label-color-2 fw-500" href="/termoftrad">Terms of Trade</Link></li><li class="mb-lg-4 mb-3"><a class="fs-14 text-decoration-none label-color-2 fw-500" href="https://selectmydesigner.com/">Need Interior Designer for Your Home?</a></li></ul></div></div>
           <div className='col-lg-3'>
           <div class="footer-contact mt-3 mt-lg-0 text-center text-lg-start"><h4 class="label-color-2 fw-500 fs-22 fw-500 mb-4 d-none d-lg-block">Contact Us</h4><ul class="list-unstyled mb-4 d-none d-lg-block"><li class="mb-3"><a href="tel:+91 80708 80707" class="fs-14 text-decoration-none label-color-2 fw-500"><img src="call-calling.svg" alt="call" class="img-fluid me-2"/><span>+91 80708 80707</span></a></li><li class="mb-3 d-flex align-items-start"><img src="sms-edit.svg" alt="mail" class="img-fluid me-2"/><a href="mailto:marketing@mistry.store" class="fs-14 text-decoration-none label-color-2 fw-500 d-block"><span>Marketing: marketing@mistry.store</span></a></li><li class="mb-3 d-flex align-items-start"><img src="sms-edit.svg" alt="mail" class="img-fluid me-2"/><a href="mailto:sales@mistry.store" class="fs-14 text-decoration-none label-color-2 fw-500 d-block"><span>Sales: sales@mistry.store</span></a></li><li class="mb-3"><a class="fs-14 text-decoration-none label-color-2 fw-500 d-flex align-items-start"><img src="location.svg" alt="location" class="img-fluid me-2"/><span>Plot no 24, CRPF Road, Sector 61, Gurugram</span></a></li></ul></div>
           </div>
           <div className='col-lg-12'>
            <div className='row reverse-row'>
                <div className='col-lg-9 pt-lg-3 pb-3 pb-lg-0'>
                <p class="m-0 text-lg-start text-center">Copyright © 2023 Infraequity Technologies Private Limited</p>
                </div>
                <div className='col-lg-3'>
                    <ul className='list-unstyled d-flex align-items-center footer-social'>
                    <li class="me-2"><a href="https://www.youtube.com/channel/UCKMP5GMnalnv03efoW0My2w" target="blank" class="social-icon"><img src="youtube.svg" alt=""/></a></li>
                    <li class="me-2"><a href="https://www.youtube.com/channel/UCKMP5GMnalnv03efoW0My2w" target="blank" class="social-icon"><img src="facebook.svg" alt=""/></a></li>
                    <li class="me-2"><a href="https://www.youtube.com/channel/UCKMP5GMnalnv03efoW0My2w" target="blank" class="social-icon"><img src="whatsapp.svg" alt=""/></a></li>
                    <li class="me-2"><a href="https://www.youtube.com/channel/UCKMP5GMnalnv03efoW0My2w" target="blank" class="social-icon"><img src="instagram.svg" alt=""/></a></li>
                    <li class="me-2"><a href="https://www.youtube.com/channel/UCKMP5GMnalnv03efoW0My2w" target="blank" class="social-icon"><img src="linkedin.svg7777
                    " alt=""/></a></li>
                    </ul>
                </div>
            </div>
           </div>
           </div>
        </div>
   
   </footer>
   </>
  )
}
