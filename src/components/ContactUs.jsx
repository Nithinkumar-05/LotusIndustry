import React, { useState } from "react";
import { CForm, CFormLabel, CFormInput, CFormTextarea, CRow, CCol } from "@coreui/react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    to_name: "Lotus Industries",
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_efpzl2a",
        "template_e1o34gx",
        formData,
        "bY49Yzbzcu6zceVsf"
      )
      .then(
        (response) => {
          alert("Message Sent Successfully!");
          setFormData({ to_name: "Lotus Industries", from_name: "", from_email: "", from_phone: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  const openWhatsApp = () => {
    const phoneNumber = "+919440058318";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello,%20I%20am%20interested%20in%20your%20EPS%20(Thermocol)%20manufacturing%20solutions.%20I%20would%20like%20to%20know%20more%20about%20your%20products%20and%20services.`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 relative">
      {/* Floating WhatsApp Icon */}
      <button
        onClick={openWhatsApp}
        className="fixed right-6 bottom-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Rest of the component remains the same */}
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
              <CFormLabel htmlFor="from_email">Email Address</CFormLabel>
              <CFormInput
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <CFormLabel htmlFor="from_phone">Phone Number</CFormLabel>
            <CFormInput
              type="tel"
              id="from_phone"
              name="from_phone"
              value={formData.from_phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
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
              <p className="text-gray-600 text-lg"><strong>Phone:</strong> <a href="tel:+919440058318" className="text-indigo-600 hover:underline no-underline">+91 9440058318</a>,<a href="tel:+919704023786" className="text-indigo-600 hover:underline no-underline">+91 9704023786</a></p>
              <p className="text-gray-600 text-lg"><strong>Email:</strong> <a href="mailto:Lotusindustries97@gmail.com" className="text-indigo-600 hover:underline no-underline">lotusindustries97@gmail.com</a></p>
              <p className="text-gray-600 text-lg">
                <strong>Address:</strong><br />
                Factory Survey No. 6 & 16, Near Venkateswara Swami Temple,<br/>
                Injapur Village, Hayathnagar,<br />Nagarjuna Sagar Road, Hyderabad, Telangana 500070
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