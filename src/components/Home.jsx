import React, { useState, useEffect } from "react";
import { CCarousel, CCarouselItem, CImage, CCarouselCaption, CRow, CCol } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Container, List, ListItem } from "@mui/material";

// Placeholder image URLs
const ProductionImg1 = "https://via.placeholder.com/1200x500?text=Thermal+Production+Line";
const ProductionImg2 = "https://via.placeholder.com/1200x500?text=Quality+Control+Process";
const ProductionImg3 = "https://via.placeholder.com/1200x500?text=Advanced+Manufacturing";
const placeholder = "https://via.placeholder.com/1200x500?text=Placeholder"
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
              description: "Cutting-edge thermal manufacturing technology" 
            },
            { 
              img: ProductionImg2, 
              label: "Quality Assurance", 
              description: "Rigorous quality control and testing processes" 
            },
            { 
              img: ProductionImg3, 
              label: "Innovation Driven", 
              description: "Pioneering thermal solutions for industry leaders" 
            }
          ].map((slide, index) => (
            <CCarouselItem key={index}>
              <CImage className="d-block w-full" src={slide.img} alt={`slide ${index + 1}`} />
              {showCaption && (
                <CCarouselCaption className="d-none d-md-block bg-black bg-opacity-50 p-4">
                  <h5 className="text-xl font-semibold text-white">{slide.label}</h5>
                  <p className="text-gray-200">{slide.description}</p>
                </CCarouselCaption>
              )}
            </CCarouselItem>
          ))}
        </CCarousel>
      </Container>

      {/* Key Advantages Section */}
      <div className=" py-12 px-4">
        <div className="border mr-96"></div>
        <br />
        <h1 className="font-extrabold">Why Choose Us?</h1>
        <CRow>
          <CCol>
            <List>
              <ListItem>Advanced Technology</ListItem>
              <ListItem>Custom Mades can be taken</ListItem>
            </List>
          </CCol>
          <CCol>
            <CImage className="d-block w-full" src={placeholder} alt={"place holder"} />

          </CCol>
        </CRow>
      </div>

      {/* Product Showcase */}
      <Container className="mt-12 mb-12">
        <hr />
          <br />
        <h2 className="text-5xl text-center font-extrabold mb-8">
          Our Thermocol Processing Solutions
        </h2>
        
        <CRow className="md:flex-col flex-row">
          <h3 className="border-2 border-slate-900 rounded-lg p-2 flex justify-center items-center">Boxes</h3>
          {[
            { 
              img: "Images/30L box/box_face.png", 
              title: "Industrial Thermal Units", 
              description: "High-capacity thermal processing equipment" 
            },
            { 
              img: "Images/30L box/box_face2.png", 
              title: "Precision Thermal Chambers", 
              description: "Advanced temperature control systems" 
            },
            { 
              img: "Images/30L box/box_face3.png", 
              title: "Specialized Thermal Modules", 
              description: "Customizable thermal solution platforms" 
            }
          ].map((product, index) => (
            <CCol xs={4} key={index} className="text-center">
              <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="mx-auto mb-4 max-h-48 object-contain"
                />
                <h3 className="text-xl font-semibold text-industrial-blue">
                  {product.title}
                </h3>
                <p className="text-industrial-dark mt-2">{product.description}</p>
              </div>
            </CCol>
          ))}
        </CRow>
        <br />
        <CRow>
          <h3 className="border-2 border-slate-900 rounded-lg p-2 flex justify-center items-center">Boxes</h3>
          {[
            { 
              img: "Images/30L box/box_face.png", 
              title: "Industrial Thermal Units", 
              description: "High-capacity thermal processing equipment" 
            },
            { 
              img: "Images/30L box/box_face2.png", 
              title: "Precision Thermal Chambers", 
              description: "Advanced temperature control systems" 
            },
            { 
              img: "Images/30L box/box_face3.png", 
              title: "Specialized Thermal Modules", 
              description: "Customizable thermal solution platforms" 
            }
          ].map((product, index) => (
            <CCol xs={4} key={index} className="text-center">
              <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="mx-auto mb-4 max-h-48 object-contain"
                />
                <h3 className="text-xl font-semibold text-industrial-blue">
                  {product.title}
                </h3>
                <p className="text-industrial-dark mt-2">{product.description}</p>
              </div>
            </CCol>
          ))}
        </CRow>
        <br />
        <CRow>
          <h3 className="border-2 border-slate-900 rounded-lg p-2 flex justify-center items-center">Boxes</h3>
          {[
            { 
              img: "Images/30L box/box_face.png", 
              title: "Industrial Thermal Units", 
              description: "High-capacity thermal processing equipment" 
            },
            { 
              img: "Images/30L box/box_face2.png", 
              title: "Precision Thermal Chambers", 
              description: "Advanced temperature control systems" 
            },
            { 
              img: "Images/30L box/box_face3.png", 
              title: "Specialized Thermal Modules", 
              description: "Customizable thermal solution platforms" 
            }
          ].map((product, index) => (
            <CCol xs={4} key={index} className="text-center">
              <div className="bg-industrial-gray-light p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="mx-auto mb-4 max-h-48 object-contain"
                />
                <h3 className="text-xl font-semibold text-industrial-blue">
                  {product.title}
                </h3>
                <p className="text-industrial-dark mt-2">{product.description}</p>
              </div>
            </CCol>
          ))}
        </CRow>
      </Container>

      {/* Call to Action */}
      <div className="border-2 rounded-md  py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Optimize Your Thermal Processing?
        </h2>
        <p className="mb-8 text-xl">
          Contact our experts for tailored thermal manufacturing solutions.
        </p>
        <button className="bg-industrial-orange text-white px-8 py-3 rounded-lg hover:bg-industrial-orange-dark transition-colors font-semibold">
          Get a Consultation
        </button>
      </div>

      
    </div>
  );
};

export default Home;