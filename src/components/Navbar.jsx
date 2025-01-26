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

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <CNavbar
      expand="lg"
      className="bg-black shadow-md fixed top-0 left-0 w-full z-50"
    >
      <CContainer fluid>
        <div className="flex items-center">
          <img 
            src="/Images/logo.png" 
            alt="Logo" 
            className="h-12 w-12 object-contain" 
          />
          <CNavbarBrand href="/" className="text-2xl font-semibold text-white ml-2">
            LOTUS INDUSTRIES
          </CNavbarBrand>
        </div>

        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
          className="text-white focus:outline-none"
        />

        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="ms-auto gap-6">
            {navItems.map((item, index) => (
              <CNavItem key={index}>
                <CNavLink
                  as={Link}
                  to={item.path}
                  className="block text-white hover:text-gray-300 font-medium py-2"
                  onClick={() => setVisible(false)}
                >
                  {item.label}
                </CNavLink>
              </CNavItem>
            ))}
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Navbar;