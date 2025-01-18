import React from 'react';

import Iconsmail from '../assets/images/Contact/Iconsmail.png';
import Iconsphone from '../assets/images/Contact/Iconsphone.png';
function Contact() {
  return (
         <>
        
      
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8 flex-col">
     
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-10">
        
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-red-500 text-3xl">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                <div className='flex gap-5 mb-3'>
                <img src={Iconsphone} alt="" />
                  <h2 className="text-xl font-semibold text-gray-800 mt-1">Call to Us</h2>
                  </div>
                  <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
                  <p className="text-gray-600">Phone: +92 123456789</p>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex items-start space-x-4">
                <div className="text-red-500 text-3xl">
                  <i className="fas fa-envelope"></i>
                </div>
                <div >
                  <div className='flex gap-5 mb-3'>
                <img src={Iconsmail} alt="" />
                  <h2 className="text-xl font-semibold text-gray-800 mt-1">Write To Us</h2>
                  </div>
                  <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
                  <p className="text-gray-600">Emails: customer@exclusive.com</p>
                  <p className="text-gray-600">Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name *" 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Your Email *" 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" 
                  required 
                />
                <input 
                  type="tel" 
                  placeholder="Your Phone *" 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500" 
                  required 
                />
              </div>
              <textarea 
                placeholder="Your Message" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 h-32" 
                required 
              ></textarea>
              <button 
                type="submit" 
                className="w-full p-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  
    </>
  );
}

export default Contact;
