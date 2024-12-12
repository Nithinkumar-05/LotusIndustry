import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
const ContactBar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 shadow-md flex justify-center items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        {/* Contact Information */}
        <div className="flex items-center space-x-4">
          {/* Phone Icon */}
          <div className="flex items-center space-x-2">
            <PhoneIcon fontSize='small'/>
            <span className="text-sm">+91 9394826067, +91 9032161817</span>
          </div>

          {/* Email Icon */}
          <div className="flex items-center space-x-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-white" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm">lotusindustries95@gmail.com</span>
          </div>
        </div>

        </div>
    </div>
  );
};

export default ContactBar;