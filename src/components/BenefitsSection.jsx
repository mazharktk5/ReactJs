import React from 'react';

const Benefit = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-6">
      
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        {icon}
      </div>
     
      <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
      
      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
       
        <Benefit 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0" />
            </svg>
          }
          title="Free and Fast Delivery"
          description="Free delivery for all orders over $140"
        />
        
        <Benefit 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l7.5-7.5 3.394 3.394-7.5 7.5-3.394-3.394z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          }
          title="24/7 Customer Service"
          description="Friendly 24/7 customer support"
        />
        
        <Benefit 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 0a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
          }
          title="Money Back Guarantee"
          description="We return money within 30 days"
        />
      </div>
    </div>
  );
};

export default BenefitsSection;