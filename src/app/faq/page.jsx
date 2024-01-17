import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function faq() {
  return (
   <>
   <section>
    <div className="container">
        <div className="row">
            <div className="col-xl-3 d-none d-lg-block">
                <div className="row">
                    <div className="col-xl-12 col-lg-6">
                    <h1 class="color-black fs-20 fw-600 text-capitalize mb-3">Hi </h1>
                    <div className="user-point-box p-3 mb-3 mb-lg-4">
                    <h3 class="fs-16 color-black fw-600 mb-3"> Points</h3>
                    <button class="w-100 primary-button">View Activity</button>
                    </div>
                    </div>
                    <div className="col-xl-12 col-lg-6">
                        <div className='orders-more-options px-3 mb-lg-4 mb-3'>
                            <ul className='list-unstyled m-0'>
                                <li>
                                    <Link href="/myorder" className='cursor-pointor py-3 py-lg-4 d-flex align-items-cener justify-content-between border-bottom fs-16 fw-600 color-black text-decoration-none'>
                                        <span>
                                        <img src="tempo-black.svg"className='img-fluid me-2 tempo-black'/>
                                        <img src="tempo-red.svg"className='img-fluid me-2 tempo-red d-none'/>My Orders
                                        </span>
                                        <FontAwesomeIcon icon={faChevronRight} className='arrowright'/>
                                       
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/myorder" className='cursor-pointor py-3 py-lg-4 d-flex align-items-cener justify-content-between border-bottom fs-16 fw-600 color-black text-decoration-none'>
                                        <span>
                                        <img src="projects-black.svg"className='img-fluid me-2 tempo-black'/>
                                        <img src="projects-red.svg"className='img-fluid me-2 tempo-red d-none'/>My Projects
                                        </span>
                                        <FontAwesomeIcon icon={faChevronRight} className='arrowright'/>
                                       
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/myorder" className='cursor-pointor py-3 py-lg-4 d-flex align-items-cener justify-content-between border-bottom fs-16 fw-600 color-black text-decoration-none'>
                                        <span>
                                        <img src="earning-black.svg"className='img-fluid me-2 tempo-black'/>
                                        <img src="earning-red.svg"className='img-fluid me-2 tempo-red d-none'/>My Earnings
                                        </span>
                                        <FontAwesomeIcon icon={faChevronRight} className='arrowright'/>
                                       
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/myorder" className='cursor-pointor py-3 py-lg-4 d-flex align-items-cener justify-content-between border-bottom fs-16 fw-600 color-black text-decoration-none'>
                                        <span>
                                        <img src="referral-black.svg"className='img-fluid me-2 tempo-black'/> 
                                        <img src="referral-red.svg"className='img-fluid me-2 tempo-red d-none'/>Refer and Earn
                                        </span>
                                        <FontAwesomeIcon icon={faChevronRight} className='arrowright'/>
                                       
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-9">
               <div className="pt-3 pt-lg-0">
                <h2 className='color-black fs-20 fw-600 text-capitalize mb-3 ms-3 ms-lg-0'>
                <FontAwesomeIcon icon={faChevronLeft} style={{width:10}} className='me-2'/>FAQ's
                </h2>
                <div className='order-searchbar'>
                    <input type="search"placeholder="Search in FAQ's"className='w-100'/>
                </div>
               </div>
               <div className='mt-4 faq'>
                <div className="row">
                    <div className="col-lg-6">
                    <div class="accordion border-0" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      In what all languages is the Mistry.Store App available ?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Mistry.Store App is available in English and Hindi.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      In what all languages is the Mistry.Store App available ?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Mistry.Store App is available in English and Hindi.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      In what all languages is the Mistry.Store App available ?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Mistry.Store App is available in English and Hindi.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      In what all languages is the Mistry.Store App available ?
      </button>
    </h2>
    <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Mistry.Store App is available in English and Hindi.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
      In what all languages is the Mistry.Store App available ?
      </button>
    </h2>
    <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Mistry.Store App is available in English and Hindi.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
      In what all languages is the Mistry.Store App available ?
      </button>
    </h2>
    <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Mistry.Store App is available in English and Hindi.
      </div>
    </div>
  </div>
</div>
                    </div>
                    <div className="col-lg-6">
                    <div class="accordion border-0" id="faqid">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="true" aria-controls="collapseseven">
      In what all languages is the Mistry.Store App available ?
      </button>
    </h2>
    <div id="collapseseven" class="accordion-collapse collapse show" data-bs-parent="#faqid">
      <div class="accordion-body">
      Mistry.Store App is available in English and Hindi.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
      In what all languages is the Mistry.Store App available ?
      </button>
    </h2>
    <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#faqid">
      <div class="accordion-body">
      Mistry.Store App is available in English and Hindi.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
      In what all languages is the Mistry.Store App available ?
      </button>
    </h2>
    <div id="collapsenine" class="accordion-collapse collapse" data-bs-parent="#faqid">
      <div class="accordion-body">
      Mistry.Store App is available in English and Hindi.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
      In what all languages is the Mistry.Store App available ?
      </button>
    </h2>
    <div id="collapseten" class="accordion-collapse collapse" data-bs-parent="#faqid">
      <div class="accordion-body">
      Mistry.Store App is available in English and Hindi.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeleven" aria-expanded="false" aria-controls="collapseeleven">
      In what all languages is the Mistry.Store App available ?
      </button>
    </h2>
    <div id="collapseeleven" class="accordion-collapse collapse" data-bs-parent="#faqid">
      <div class="accordion-body">
      Mistry.Store App is available in English and Hindi.
      </div>
    </div>
  </div>
 
</div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </div>
   </section>
   </>
  )
}
