import React from "react";
import { CForm, CFormLabel, CFormInput, CFormTextarea, CButton } from "@coreui/react";
import { TextField, Button } from "@mui/material";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">
          Have questions or need assistance? Fill out the form below, and we'll get back to you as soon as possible.
        </p>

        <CForm>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <CFormLabel htmlFor="name">Full Name</CFormLabel>
              <CFormInput
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="border-gray-300"
              />
            </div>

            {/* Email Input */}
            <div>
              <CFormLabel htmlFor="email">Email Address</CFormLabel>
              <CFormInput
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border-gray-300"
              />
            </div>
          </div>

          {/* Subject Input */}
          <div className="mt-6">
            <CFormLabel htmlFor="subject">Subject</CFormLabel>
            <CFormInput
              type="text"
              id="subject"
              placeholder="Enter the subject of your message"
              className="border-gray-300"
            />
          </div>

          {/* Message Input */}
          <div className="mt-6">
            <CFormLabel htmlFor="message">Message</CFormLabel>
            <CFormTextarea
              id="message"
              rows="6"
              placeholder="Write your message here..."
              className="border-gray-300"
            ></CFormTextarea>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <Button
              variant="contained"
              color="primary"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
            >
              Send Message
            </Button>
          </div>
        </CForm>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Phone: <a href="tel:+1234567890" className="text-indigo-600 hover:underline">+1 (234) 567-890</a>
          </p>
          <p className="text-gray-600">
            Email: <a href="mailto:info@example.com" className="text-indigo-600 hover:underline">info@example.com</a>
          </p>
          <p className="text-gray-600">
            Address: 123 Main Street, Anytown, USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
