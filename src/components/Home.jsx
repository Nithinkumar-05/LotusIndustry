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
import { motion } from "framer-motion";

// Placeholder image URLs
const ProductionImg1 ="Images/factory_1.png";
const ProductionImg2 ="Images/factory_2.png";
const ProductionImg3 ="Images/factory_3.png";
const placeholder = "Images/factory_4.jpg";

const Home = () => {
  const [showCaption, setShowCaption] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCaption(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      {/* Carousel */}
      <Container className="max-w-full p-0">
        <div className="relative w-full">
          <CCarousel controls indicators dark className="w-full">
            {[
              {
                img: ProductionImg1,
                label: "Precision Production",
                description: "Cutting-edge thermacol manufacturing technology",
              },
              {
                img: ProductionImg2,
                label: "Quality Assurance",
                description: "Rigorous quality control and testing processes",
              },
              {
                img: ProductionImg3,
                label: "Innovation Driven",
                description: "Pioneering thermacol solutions for industry leaders",
              },
            ].map((slide, index) => (
              <CCarouselItem key={index} className="relative">
                <div className="w-full h-[600px] overflow-hidden">
                  <CImage
                    className="w-full h-full object-cover object-center"
                    src={slide.img}
                    alt={`slide ${index + 1}`}
                  />
                </div>
                {showCaption && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-75 p-8 rounded-lg text-center max-w-2xl mx-4">
                      <h5 className="text-3xl font-bold text-white mb-4">
                        {slide.label}
                      </h5>
                      <p className="text-xl text-white">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                )}
              </CCarouselItem>
            ))}
          </CCarousel>
        </div>
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
          <CCol className="hidden md:block">
            <CImage
              className="rounded-lg shadow-md w-full"
              src={placeholder}
              alt="Factory Image"
            />
          </CCol>
        </CRow>
      </div>

      {/* Product Showcase */}
  <Container className="mt-0 mb-12 px-3">
    <hr />
    <br />
    <h2 className="text-5xl text-center font-extrabold mb-8">
      Our Thermocol Processing Solutions
    </h2>

    {/* Row 1 */}
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={scrollVariants}
        className="mb-8"
      >

    
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
    
    </motion.div>        
  {/* Row 2 */}
  <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={scrollVariants}
        className="mb-8"
      >

    <h3 className="border-2 border-slate-900 rounded-lg p-2 text-center mb-4">
      Fantray
    </h3>
    <CRow className="row-cols-1 row-cols-md-3 g-4 mb-2">
      <CCol>
        <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src="Images/Fantray/double kaan/kaan_face1.png"
            alt="High-Density Sheets"
            className="mx-auto mb-4 max-h-48 object-contain"
          />
          <h3 className="text-xl font-semibold text-industrial-blue">
            Aura
          </h3>
          <p className="text-industrial-dark mt-2">
            Durable sheets for insulation and packaging
          </p>
        </div>
      </CCol>
      <CCol>
        <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src="Images/Fantray/Regular/regular.png"
            alt="Customizable Sheets"
            className="mx-auto mb-4 max-h-48 object-contain"
          />
          <h3 className="text-xl font-semibold text-industrial-blue">
            Regular
          </h3>
          <p className="text-industrial-dark mt-2">
            Tailored to meet specific industrial need which is used very frequently
          </p>
        </div>
      </CCol>
      <CCol>
        <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src="Images/Fantray/205mm/205mm.png"
            alt="Eco-Friendly Sheets"
            className="mx-auto mb-4 max-h-48 object-contain"
          />
          <h3 className="text-xl font-semibold text-industrial-blue">
            205mm
          </h3>
          <p className="text-industrial-dark mt-2">
            Sustainable thermocol sheet solutions
          </p>
        </div>
      </CCol>
    </CRow>
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
            src="Images/Fantray/superstar/superstar.png"
            alt="Industrial Packaging"
            className="mx-auto mb-4 max-h-48 object-contain"
          />
          <h3 className="text-xl font-semibold text-industrial-blue">
            Super Star
          </h3>
          <p className="text-industrial-dark mt-2">
            Robust solutions for industrial-grade safety
          </p>
        </div>
      </CCol>
      <CCol>
        <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src="Images/Fantray/46mm/46mm.png"
            alt="Lightweight Packaging"
            className="mx-auto mb-4 max-h-48 object-contain"
          />
          <h3 className="text-xl font-semibold text-industrial-blue">
            46mm
          </h3>
          <p className="text-industrial-dark mt-2">
            Lightweight yet durable packaging options
          </p>
        </div>
      </CCol>
      
    </CRow>
    <br />
    <CRow className="row-cols-1 row-cols-md-3 g-4 flex justify-center">
    <CCol >
        <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src="Images/Fantray/table fan/tablefan.png"
            alt="Lightweight Packaging"
            className="mx-auto mb-4 max-h-48 object-contain"
          />
          <h3 className="text-xl font-semibold text-industrial-blue">
            46mm
          </h3>
          <p className="text-industrial-dark mt-2">
            Lightweight yet durable packaging options
          </p>
        </div>
      </CCol>
    </CRow>
  </motion.div>

  <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={scrollVariants}
        className="mb-8"
      >

      <h3 className="border-2 border-slate-900 rounded-lg p-2 text-center mb-4">
        Pipes and Sheets
      </h3>
      <CRow className="row-cols-1 row-cols-md-3 g-4">
        <CCol>
          <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img
              src="Images/pipe section and sheet/sheets.png"
              alt="Industrial Thermal Units"
              className="mx-auto mb-4 max-h-48 object-contain"
            />
            <h3 className="text-xl font-semibold text-industrial-blue">
              Thermocol Sheets
            </h3>
            <p className="text-industrial-dark mt-2">
              High-capacity thermocol processing sheet
            </p>
          </div>
        </CCol>
        <CCol>
          <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img
              src="Images/pipe section and sheet/pipe.png"
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

      </CRow>
    </motion.div>
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={scrollVariants}
        className="mb-8"
      >

      <h3 className="border-2 border-slate-900 rounded-lg p-2 text-center mb-4">
        Thermocol balls
      </h3>
      <CRow className="row-cols-1 row-cols-md-3 g-4">
        <CCol>
          <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img
              src="Images/Thermacol balls/thermacolballs.png"
              alt="Industrial Thermal Units"
              className="mx-auto mb-4 max-h-48 object-contain"
            />
            <h3 className="text-xl font-semibold text-industrial-blue">
              Thermocol Balls
            </h3>
            <p className="text-industrial-dark mt-2">
              High-capacity thermocol processing sheet
            </p>
          </div>
        </CCol>
        

      </CRow>
    </motion.div>
    
</Container>

      {/* Call to Action */}
      <div className="border-2 rounded-md py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Order Our EPS Solutions?
        </h2>
        <p className="mb-8 text-xl">
          Contact our experts for tailored thermocol manufacturing solutions.
        </p>
        <Link
          to="/contact"
          className="bg-industrial-orange text-white px-6 py-3 rounded-lg hover:bg-industrial-orange-dark transition-all no-underline"
        >
          Get a Quote
        </Link>
      </div>

    </div>
  );
};

export default Home;
