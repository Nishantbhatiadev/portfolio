import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";
import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                        <div>
                            <p>Kiran Path Jaipur. </p>
                            <p>Rajasthan</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                        <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
                        7014276244
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                        <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
                        nishantbhatiajas@gmail.com
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About the company</h4>
                    <p>This is me Nishant Bhatia. React developer. I enjoy discussing new projects and design challenges</p>
                    <div className="social">
                    <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} />
                    <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}} />
                    <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
