import React from "react";
import { CForm, CFormLabel, CFormInput, CFormTextarea, CRow, CCol } from "@coreui/react";
import { Button } from "@mui/material";

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

        <hr />

        {/* Additional Contact Info */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">Get in Touch</h2>
          <CRow className="gap-6 items-start">
            {/* Address */}
            <CCol>
              <p className="text-gray-600 text-lg">
                <strong>Phone:</strong>{" "}
                <a href="tel:+1234567890" className="text-indigo-600 hover:underline">
                  9440058318, 9704023786
                </a>
              </p>
              <p className="text-gray-600 text-lg">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@example.com" className="text-indigo-600 hover:underline">
                  Lotusindustries97@gmail.com
                </a>
              </p>
              <p className="text-gray-600 text-lg">
                <strong>Address:</strong>
                <br />
                Factory Survey No. 6 & 16, Near Venkateswara Swami Temple,
                <br />
                Injapur Village, Hayathnagar
                <br />
                Telangana 500070
              </p>
            </CCol>

            {/* Google Map */}
            <CCol>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4483.06817020991!2d78.59284804700515!3d17.306102579209234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba133ca8480d5%3A0x42a9d665bca3c5d6!2sLotus%20Industries!5e0!3m2!1sen!2sin!4v1735030055748!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lotus Industries Location"
              ></iframe>
            </CCol>
          </CRow>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
