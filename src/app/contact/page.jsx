import React from 'react'

export default function Contact() {
  return (
   <>
   <section className='community-section partner'>
    <div className="container">
      <div className="row">
        <div className="col-md-7">
        <div class="text-center"><h1 class="color-cms fs-35">Got Questions?</h1><h2 class="fs-14 color-primary fw-normal">Fill in the details and we'll get in touch with you shortly!</h2><div class="mt-5 pt-lg-5 mb-5 mb-md-0"><img src="contact-banner.png" alt="contact-banner" class="img-fluid"/></div></div>
        </div>
        <div className="col-md-5">
        <div>
          <form className='formdesgin'>
            <div className='mb-4'>
            <h3 class="color-light fs-14 fw-500">I Want To <span class="color-primary">*</span></h3>
            <div className='d-flex align-items-center '>
            <div class="form-check radio-item">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Join Our Supplier Base
  </label>
</div>
<div class="form-check radio-items">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
  Become a Partner
  </label>  
</div>
<div class="form-check radio-items">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
  Other Queries
  </label>  
</div>
            </div>
            </div>
            <div class="input-group mb-5">

  <input type="text" class="form-control border-0 shadow-none text-dark rounded-0 ps-1" placeholder="Name" id="name"aria-label="Username" aria-describedby="basic-addon1" />
  
</div>

<div class="input-group mb-5">
<input type="text" class="form-control border-0 shadow-none text-dark rounded-0 ps-1" placeholder="Phone" id="name"aria-label="Username" aria-describedby="basic-addon1" />
</div>
<div class="input-group mb-5">
<input type="text" class="form-control border-0 shadow-none text-dark rounded-0 ps-1" placeholder="Email" id="name"aria-label="Username" aria-describedby="basic-addon1" />
</div>
<div className='mb-5'>
<textarea className='w-100 textpara shadow-none p-2'>Messeage</textarea>
</div>
<button class="primary-button outline-none" type="submit">Send Message</button>
          </form>
        </div>
        </div>
      </div>
    </div>
   </section>
   </>
  )
}
