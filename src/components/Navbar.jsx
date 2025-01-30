import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CNavbarToggler,
  CCollapse
} from '@coreui/react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <CNavbar expand="lg" className="bg-black shadow-md fixed top-0 left-0 w-full z-50 px-6 py-3">
      <CContainer fluid>
        {/* Logo & Brand Name */}
        <div className="flex items-center">
         
          <CNavbarBrand href="/" className="text-2xl font-semibold text-white ml-2">
            LOTUS INDUSTRIES
          </CNavbarBrand>
        </div>

        {/* Navbar Toggler for Mobile */}
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
          className="text-white focus:outline-none"
        />

        {/* Collapsible Nav Items */}
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="ms-auto flex items-center gap-6">
            
            <CNavItem>
              <CNavLink
                as={Link}
                to="/"
                className="text-white hover:text-gray-300 font-medium no-underline"
                onClick={() => setVisible(false)}
              >
                Home
              </CNavLink> 
            </CNavItem>

            <CNavItem>
              <CNavLink
                as={Link}
                to="/about"
                className="text-white hover:text-gray-300 font-medium no-underline"
                onClick={() => setVisible(false)}
              >
                About Us
              </CNavLink>
            </CNavItem>

            {/* Contact Us Button - No Underline & More Rounded */}
            <CNavItem>
              <Link
                to="/contact"
                className="bg-red-600 text-white px-6 py-2 rounded-2xl font-medium no-underline hover:bg-red-700 transition-all"
                onClick={() => setVisible(false)}
              >
                Contact Us
              </Link>
            </CNavItem>

          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Navbar;
