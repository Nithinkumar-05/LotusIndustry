const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-lg font-semibold">LotusIndustry</p>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} LotusIndustry. All rights reserved.</p>
        <p className="text-sm mt-2">
          Contact us: <a href="mailto:info@lotusindustry.com" className="text-indigo-400 hover:underline">info@lotusindustry.com</a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  