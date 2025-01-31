import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactBar = () => {
  return (
    <div className="bg-black text-white py-2 px-3 md:px-4 shadow-md">
      {/* Main Container - Stack on mobile, row on desktop */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Images/logo.png"
            alt="Logo"
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
          />
        </div>

        {/* Contact Info Container */}
        <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-0 md:flex-row md:space-x-6">
          {/* Phone Numbers - Wrap on very small screens */}
          <div className="flex items-center space-x-2">
            <PhoneIcon fontSize="small" className="hidden sm:block" />
            <span className="text-sm sm:text-base md:text-lg text-center md:text-left whitespace-normal sm:whitespace-nowrap">
              +91 9440058318,
              <span className="sm:hidden"> </span>
              <br className="hidden xs:block sm:hidden" />
              <span className="sm:ml-1">+91 9704023786</span>
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5 text-white hidden sm:block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm sm:text-base md:text-lg break-all sm:break-normal">
              lotusindustries97@gmail.com
            </span>
          </div>
        </div>

        {/* Spacer for larger screens */}
        <div className="hidden md:block w-10 md:w-12"></div>
      </div>
    </div>
  );
};

export default ContactBar;