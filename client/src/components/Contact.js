import React from 'react'
import Helmet from 'react-helmet'

const Contact = () => {
    return (
        <>
           <Helmet bodyAttributes={{style: ' background-image: linear-gradient(45deg, #5bbdce 50%, rgb(197, 57, 57) 50%);'}}/>
            <div className="contact_info">
                <div className="container-fluid">
                 <div className="row">
                    <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                        {/* phone number */}
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                          <img src="https://img.icons8.com/material-two-tone/96/000000/phone--v1.png" alt="phone"/>
                           <div className="contact_info_content">
                           <div className="contact_info_title">
                              phone
                           </div>
                           <div className="contact_info_text">
                              +91 XXXX XX XXXX
                           </div>
                           </div>
                        </div>
                          {/* email number */}
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                          <img src="https://img.icons8.com/pastel-glyph/64/000000/email.png" alt="phone"/>
                           <div className="contact_info_content">
                           <div className="contact_info_title">
                              Email
                           </div>
                           <div className="contact_info_text">
                              khan1429ariz@gmail.com
                           </div>
                           </div>
                        </div>
                          {/* adressphone number */}
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                          <img src="https://img.icons8.com/material-sharp/96/000000/address.png" alt="phone"/>
                           <div className="contact_info_content">
                           <div className="contact_info_title">
                              Address
                           </div>
                           <div className="contact_info_text">
                              India
                           </div>
                           </div>
                        </div>

                    </div>
                </div>
              </div>
            </div>

            {/* contact form */}
            <div className="contact_form">
                <div className="container">
                 <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="contact_form_container py-5">
                           <div className="contact_form_title">
                               Get in Touch
                           </div>
                           <form id="contact_form">
                               <div className="contact_form_name d-flex justify-content-between align-items-between">
                                   <input type="text" id="contact_form_name"
                                   className="contact_form_name input_field"
                                       placeholder="Your name" required="true"/>

                                   <input type="email" id="contact_form_email"
                                   className="contact_form_email input_field"
                                       placeholder="Your Email" required="true"/>

                                   <input type="number" id="contact_form_phone"
                                   className="contact_form_phone input_field"
                                       placeholder="Your Phone number" required="true"/>
                               </div>

                               <div className="contact_form_text mt-4">
                                   <textarea className="text_field contact_form_message" 
                                   placeholder="Message" cols="30" rows="10"></textarea> 
                               </div>
                               
                               <div className="contact_form_button">
                                   <button type="submit" className="button contact_submit_button">Send Message</button>
                               </div>

                           </form>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
        </>
    )
}

export default Contact
 