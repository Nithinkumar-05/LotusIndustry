import React, { useState, useEffect } from "react";
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
  CRow,
  CCol,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

// Placeholder image URLs
const ProductionImg1 =
  "https://via.placeholder.com/1200x500?text=Thermal+Production+Line";
const ProductionImg2 =
  "https://via.placeholder.com/1200x500?text=Quality+Control+Process";
const ProductionImg3 =
  "https://via.placeholder.com/1200x500?text=Advanced+Manufacturing";
const placeholder = "https://via.placeholder.com/1200x500?text=Placeholder";

const Home = () => {
  const [showCaption, setShowCaption] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCaption(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Carousel */}
      <Container className="max-w-full flex flex-col">
        <CCarousel controls indicators dark className="w-full mt-2">
          {[
            {
              img: ProductionImg1,
              label: "Precision Production",
              description: "Cutting-edge thermal manufacturing technology",
            },
            {
              img: ProductionImg2,
              label: "Quality Assurance",
              description: "Rigorous quality control and testing processes",
            },
            {
              img: ProductionImg3,
              label: "Innovation Driven",
              description: "Pioneering thermal solutions for industry leaders",
            },
          ].map((slide, index) => (
            <CCarouselItem key={index} className="flex justify-center items-center">
              <CImage
                className="d-block w-full"
                src={slide.img}
                alt={`slide ${index + 1}`}
              />
              {showCaption && (
                <CCarouselCaption className="d-none d-md-block bg-black bg-opacity-50 p-4">
                  <h5 className="text-xl font-semibold text-white">
                    {slide.label}
                  </h5>
                  <p className="text-gray-200">{slide.description}</p>  
                </CCarouselCaption>
              )}
            </CCarouselItem>
          ))}
        </CCarousel>
      </Container>

      {/* Key Advantages Section */}
      <div className="bg-gray-100 py-12 px-8 rounded-lg shadow-lg">
        <div className="border-t-4 border-gray-600 w-1/4 mb-6 mx-auto"></div>
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Why Choose Us?</h1>
        <CRow className="gap-6 items-center">
          <CCol className="text-gray-700 space-y-4">
            <ul className="list-disc list-inside">
              <li className="text-lg font-medium">Advanced Manufacturing Technology</li>
              <li className="text-lg font-medium">Customized Solutions Tailored to Your Needs</li>
              <li className="text-lg font-medium">Eco-Friendly and Sustainable Practices</li>
              <li className="text-lg font-medium">Fast and Reliable Delivery Services</li>
              <li className="text-lg font-medium">Competitive Pricing Without Compromising Quality</li>
            </ul>
          </CCol>
          <CCol>
            <CImage
              className="rounded-lg shadow-md w-full"
              src={placeholder}
              alt="Factory Image"
            />
          </CCol>
        </CRow>
      </div>

      {/* Product Showcase */}
  <Container className="mt-0 mb-12 shadow-lg">
    <hr />
    <br />
    <h2 className="text-5xl text-center font-extrabold mb-8">
      Our Thermocol Processing Solutions
    </h2>

    {/* Row 1 */}
    <div className="mb-8">
      <h3 className="border-2 border-slate-900 rounded-lg p-2 text-center mb-4">
        Boxes
      </h3>
      <CRow className="row-cols-1 row-cols-md-3 g-4">
        <CCol>
          <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img
              src="Images/Fish Box/30L box/box_face.png"
              alt="Industrial Thermal Units"
              className="mx-auto mb-4 max-h-48 object-contain"
            />
            <h3 className="text-xl font-semibold text-industrial-blue">
              Industrial Thermal Units
            </h3>
            <p className="text-industrial-dark mt-2">
              High-capacity thermal processing equipment
            </p>
          </div>
        </CCol>
        <CCol>
          <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img
              src="Images/Fish Box/30L box/box_face2.png"
              alt="Precision Thermal Chambers"
              className="mx-auto mb-4 max-h-48 object-contain"
            />
            <h3 className="text-xl font-semibold text-industrial-blue">
              Precision Thermal Chambers
            </h3>
            <p className="text-industrial-dark mt-2">
              Advanced temperature control systems
            </p>
          </div>
        </CCol>
        <CCol>
          <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img
              src="Images/Fish Box/30L box/box_face3.png"
              alt="Specialized Thermal Modules"
              className="mx-auto mb-4 max-h-48 object-contain"
            />
            <h3 className="text-xl font-semibold text-industrial-blue">
              Specialized Thermal Modules
            </h3>
            <p className="text-industrial-dark mt-2">
              Customizable thermal solution platforms
            </p>
          </div>
        </CCol>
      </CRow>
    </div>

  {/* Row 2 */}
  <div className="mb-8">
    <h3 className="border-2 border-slate-900 rounded-lg p-2 text-center mb-4">
      Fantray
    </h3>
    <CRow className="row-cols-1 row-cols-md-3 g-4">
      <CCol>
        <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src="Images/Fantray/double kaan/kaan_face1.png"
            alt="High-Density Sheets"
            className="mx-auto mb-4 max-h-48 object-contain"
          />
          <h3 className="text-xl font-semibold text-industrial-blue">
            High-Density Sheets
          </h3>
          <p className="text-industrial-dark mt-2">
            Durable sheets for insulation and packaging
          </p>
        </div>
      </CCol>
      <CCol>
        <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src="Images/Fantray/double kaan/kaan_face2.png"
            alt="Customizable Sheets"
            className="mx-auto mb-4 max-h-48 object-contain"
          />
          <h3 className="text-xl font-semibold text-industrial-blue">
            Customizable Sheets
          </h3>
          <p className="text-industrial-dark mt-2">
            Tailored to meet specific industrial needs
          </p>
        </div>
      </CCol>
      <CCol>
        <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src="Images/Fantray/double kaan/kaan_face3.png"
            alt="Eco-Friendly Sheets"
            className="mx-auto mb-4 max-h-48 object-contain"
          />
          <h3 className="text-xl font-semibold text-industrial-blue">
            Eco-Friendly Sheets
          </h3>
          <p className="text-industrial-dark mt-2">
            Sustainable thermocol sheet solutions
          </p>
        </div>
      </CCol>
    </CRow>
  </div>

    <CRow className="row-cols-1 row-cols-md-3 g-4">
      <CCol>
        <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src="Images/Fantray/aura/aura_1.png"
            alt="Compact Packaging Solutions"
            className="mx-auto mb-4 max-h-48 object-contain"
          />
          <h3 className="text-xl font-semibold text-industrial-blue">
            Compact Packaging Solutions
          </h3>
          <p className="text-industrial-dark mt-2">
            Efficient and reliable thermal packaging
          </p>
        </div>
      </CCol>
      <CCol>
        <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src="Images/Fantray/aura/aura_2.png"
            alt="Industrial Packaging"
            className="mx-auto mb-4 max-h-48 object-contain"
          />
          <h3 className="text-xl font-semibold text-industrial-blue">
            Industrial Packaging
          </h3>
          <p className="text-industrial-dark mt-2">
            Robust solutions for industrial-grade safety
          </p>
        </div>
      </CCol>
      <CCol>
        <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src="Images/Fantray/aura/aura_3.png"
            alt="Lightweight Packaging"
            className="mx-auto mb-4 max-h-48 object-contain"
          />
          <h3 className="text-xl font-semibold text-industrial-blue">
            Lightweight Packaging
          </h3>
          <p className="text-industrial-dark mt-2">
            Lightweight yet durable packaging options
          </p>
        </div>
      </CCol>
    </CRow>

</Container>

      {/* Call to Action */}
      <div className="border-2 rounded-md py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Order Our Thermocol Sheets?
        </h2>
        <p className="mb-8 text-xl">
          Contact our experts for tailored thermocol manufacturing solutions.
        </p>
        <button className="bg-industrial-orange text-white px-8 py-3 rounded-lg hover:bg-industrial-orange-dark transition-colors font-semibold">
          Get a Quote
        </button>
      </div>
      <div className="bg-blue-50 py-12 px-6 text-center rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have questions or need assistance? Contact us, and we’ll be happy to
          help!
        </p>
        <Link
          to="/contact"
          className="bg-industrial-orange text-white px-6 py-3 rounded-lg hover:bg-industrial-orange-dark transition-all no-underline"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Home;
