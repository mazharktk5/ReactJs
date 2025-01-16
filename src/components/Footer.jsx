import React from "react";
import { Link} from "react-router-dom";

const Footer = ()=>{
    return (
        <>
        <div className="footer flex flex-row bg-black text-white justify-around p-4  ">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold">Mazhar Electronics</h1>
                <p>Subscribe</p>
                <p>Get !0% off on your <br />
                first order</p>
                <input className="p-1" type="text" placeholder="order now" />
            </div>
            <div  className="flex flex-col gap-2">
                <h1 className="font-bold">Support</h1>
                <p>Main board bazar </p>
                <p>mazharahmad1@gmail.com</p>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold">Acount</h1>
                <p>My Account</p>
                <Link to="/login" className="text-white-500 hover:underline">LogIn</Link>
                <Link to="/SignUp" className="text-white-500 hover:underline">Register</Link>
                
            </div >
            <div className="flex flex-col gap-2">
                <h1 className="font-bold">Quick Links</h1>
                <p>About</p>
                <p>Privacy Policy</p>
                <p>FAQs</p>
            </div>
         
        </div>
       
       </> 
    )
}

export default Footer;