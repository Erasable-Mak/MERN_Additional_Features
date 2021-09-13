/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Helmet from 'react-helmet'
import mernpic from '../images/mern.jpeg'

const About = () => {
    return (
        <>
            <Helmet bodyAttributes={{style: ' background-image: linear-gradient(45deg, #5bbdce 50%, rgb(197, 57, 57) 50%);'}}/>
            <div className="tot">
            <div className="container emp-profile">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                           <img src={mernpic} alt="mern"/>
                        </div>

                        <div className="col-md-6">
                           <div className="profile-head">
                               <h5>Mohammad Ariz Khan</h5>
                               <h6>Full-Stack Web Developer, Mobile Application & Software Developer, Computer Networking</h6>
                               <p className="profile-rating mt-3 mb-5">RANKINGS <span>1/10</span></p>
                               
                               <ul className="nav nav-tabs" role="tablist">
                               <li className="nav-item">
                              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                               </li>
                               <li className="nav-item">
                               <a className="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                               </li>
                              </ul>

                           </div>
                        </div>
                             <div className="col-md-2">
                                 <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                             </div>
                    </div>

                    <div className="row">
                         {/* left side url */}
                        <div className="col-md-4"> 
                         <div className="profile-work">
                             <h1>WORK LINK</h1><br/>
                             <a href="https://www.linkedin.com/in/mohammad-ariz-khan-ehnacsapp">LinkedIn</a><br/>
                             <a href="https://github.com/Erasable-Mak">Github</a><br/>
                             <a href=" https://erasable-mak.github.io/pokelive/ ">Pokelive Website</a><br/>
                            {/* <a href="https://www.youtube.com/user/Mozilla/featured">WebsiteGitHubMERN Dev</a><br/>
                             <a href="https://www.youtube.com/watch?v=wQZQ3QUjwG4">Facebook</a><br/>
                             <a href="https://www.youtube.com/user/Mozilla/featured">Web/Sof Engineer</a><br/> */}
                         </div>
                    </div>
                      {/* right side data toggle */}

                      <div className="col-md-8 pl-5 about-info">
                         <div className="tab-content profile-tab" id="myTabContent">
                             <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Github User ID</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>Unknown</p>
                                     </div>
                                 </div>

                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Name</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>Erasable-MAK</p>
                                     </div>
                                 </div>

                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Email</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>khan1429ariz@gmail.com</p>
                                     </div>
                                 </div>

                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Phone</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>+91 XXXX XX XXXX</p>
                                     </div>
                                 </div>

                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Profession</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>Developer</p>
                                     </div>
                                 </div>
                             </div>
                              
                             <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Experience</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>Beginner</p>
                                     </div>
                                 </div>

                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Salary</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>Nil/-</p>
                                     </div>
                                 </div>

                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Total projects</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>11-12</p>
                                     </div>
                                 </div>

                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>English level</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>Mid</p>
                                     </div>
                                 </div>

                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Availiability</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>yes</p>
                                     </div>
                                 </div>
                                 </div>

                         </div>
                      </div>
                  </div>
                </form>
            </div>
          </div> 
        </>
    )
}


export default About