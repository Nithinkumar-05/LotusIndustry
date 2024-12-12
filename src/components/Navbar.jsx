import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { CNavbar, CContainer, CNavbarBrand, CNavbarNav, CNavItem, CNavLink, CNavbarToggler, CCollapse } from '@coreui/react';

const Navbar = () => {
  const [visible, setVisible] = useState(false); // State to toggle the mobile menu visibility
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <CNavbar expand="lg" className="bg-transparent shadow-md backdrop-blur-lg fixed top-0 left-0 w-full z-50">
        <CContainer fluid>
          {/* Brand Logo */}
          <CNavbarBrand href="#" className="text-2xl font-semibold text-gray-800">
            LOTUS INDUSTRIES
          </CNavbarBrand>

          {/* Navbar Toggler for mobile */}
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
            className="text-gray-800 focus:outline-none"
          />

          {/* Navbar Collapse for mobile */}
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="ml-auto right-2 space-x-6">
              {/* Navbar Items */}
              {navItems.map((item, index) => (
                <CNavItem key={index}>
                  <CNavLink
                    as={Link}
                    to={item.path}
                    className="block text-gray-800 hover:text-gray-600 transition-colors font-medium py-1"
                    onClick={() => setVisible(false)} // Close the menu when a link is clicked
                  >
                    {item.label}
                  </CNavLink>
                </CNavItem>
              ))}
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};

export default Navbar;
