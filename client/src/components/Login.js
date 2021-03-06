import React, {useState} from 'react';
import { NavLink, useHistory  } from 'react-router-dom';
import loginpic from "../images/sp.png";
import Helmet from 'react-helmet';

const Login = () => {
    
    const history = useHistory();
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
               email, password
            })
        });
        const data = res.json();
        if(res.status === 400 || !data){
            window.alert("INVALID Credentials");
            console.log("INVALID Credentials");
        }else{
            window.alert("Login successfull");
            console.log("Login successfull");

            history.push("/");
          }
    }

    return (
        <>
            <Helmet bodyAttributes={{style: ' background-image: linear-gradient(45deg, #5bbdce 50%, rgb(197, 57, 57) 50%);'}}/>
            <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">

                    <div className="signin-image">
                               <figure>
                                   <img src={loginpic} alt="Login pic" />
                               </figure>
                               <NavLink to="/signup" className="signup-image-link">Create an account</NavLink> 
                           </div>


                        <div className="signin-form">
                          <h4 className="form-title">Sign in</h4>
                            <form method="POST" className="register-form" id="register-form">


                              <div className="form-group">
                                <label htmlFor="email">
                                    <i class="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                 <input type="email" name="email" id="email" autoComplete="off"
                                    value = {email}
                                    onChange = {(e) => setEmail(e.target.value)}
                                    placeholder="your Email"
                                 />
                              </div>                             
                             
                              <div className="form-group">
                                <label htmlFor="password">
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                 <input type="password" name="password" id="password" autoComplete="off"
                                    value = {password}
                                    onChange = {(e) => setPassword(e.target.value)}
                                    placeholder="your Password"
                                 />
                              </div>

                             

                              <div className="form-group form-button">
                                  <input type="submit" name="signin" id="signin" className="form-submit"
                                       value="Log In" onClick={loginUser }
                                  />
                              </div>

                          </form>
                        </div>
                           
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
