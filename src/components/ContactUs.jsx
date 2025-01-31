import React, { useState } from "react";
import { CForm, CFormLabel, CFormInput, CFormTextarea, CRow, CCol } from "@coreui/react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    to_name: "Lotus Industries",
    from_name: "",
    message: "",
    from: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .send(
        "service_efpzl2a",  // Replace with your EmailJS Service ID
        "template_e1o34gx", // Replace with your EmailJS Template ID
        formData,
        "bY49Yzbzcu6zceVsf"       // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          alert("Message Sent Successfully!");
          setFormData({ to_name: "Lotus Industries", from_name: "", message: "", from: "" });
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">Have questions? Fill out the form below, and we'll get back to you.</p>

        <CForm onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <CFormLabel htmlFor="from_name">Full Name</CFormLabel>
              <CFormInput
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <CFormLabel htmlFor="from">Email Address</CFormLabel>
              <CFormInput
                type="email"
                id="from"
                name="from"
                value={formData.from}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <CFormLabel htmlFor="message">Message</CFormLabel>
            <CFormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Write your message here..."
              required
            ></CFormTextarea>
          </div>

          <div className="mt-8 text-center">
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-3xl">
              Send Message
            </button>
          </div>
        </CForm>

        <hr />

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">Get in Touch</h2>
          <CRow className="gap-6 items-start">
            <CCol>
              <p className="text-gray-600 text-lg"><strong>Phone:</strong> <a href="tel:+1234567890" className="text-indigo-600 hover:underline no-underline">+91 9440058318,+91 9704023786</a></p>
              <p className="text-gray-600 text-lg"><strong>Email:</strong> <a href="mailto:Lotusindustries97@gmail.com" className="text-indigo-600 hover:underline no-underline">lotusindustries97@gmail.com</a></p>
              <p className="text-gray-600 text-lg">
                <strong>Address:</strong><br />
                Factory Survey No. 6 & 16, Near Venkateswara Swami Temple,<br />
                Injapur Village, Hayathnagar, Telangana 500070
              </p>
            </CCol>

            <CCol xs="12" md="6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4483.06817020991!2d78.59284804700515!3d17.306102579209234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba133ca8480d5%3A0x42a9d665bca3c5d6!2sLotus%20Industries!5e0!3m2!1sen!2sin!4v1735030055748!5m2!1sen!2sin"
                width="100%"
                height="400"
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
