import React from "react";
import {Link} from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="container mx-auto min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to Lotus Industries</h1>

      <div className="mb-8">
        <p className="text-lg text-gray-700">
          Your trusted partner in innovative EPS (Expanded Polystyrene) product manufacturing. Established in 2010 by 
          <span className="font-semibold"> Abdul Jalil Ahmed</span> in the vibrant city of Hyderabad, we have grown to 
          become a leading name in the industry, delivering high-quality and sustainable EPS solutions tailored to diverse business needs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Left Section */}
        <div className="md:w-5/12">
          <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
          <p className="text-gray-600">
            At Lotus Industries, we are committed to excellence, offering lightweight, durable, and versatile EPS 
            products that cater to a wide range of applications, including:
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-600">
            <li>Packaging</li>
            <li>Construction</li>
            <li>Insulation</li>
          </ul>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block h-36 w-0.5 bg-gray-400"></div>

        {/* Right Section */}
        <div className="md:w-6/12">
          <h3 className="text-2xl font-semibold mb-4">Our Promise</h3>
          <p className="text-gray-600">
            Our state-of-the-art manufacturing processes and eco-friendly practices ensure that we provide products 
            of the highest quality while minimizing environmental impact. With over a decade of expertise and a 
            dedicated team, we pride ourselves on delivering customized solutions that drive efficiency and value.
          </p>
        </div>
      </div>

      <div className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Terms and Conditions</h2>

        <div className="space-y-6 text-gray-700">
          <div>
            <h4 className="text-xl font-semibold">1. Bulk Orders Only</h4>
            <p>We specialize in fulfilling bulk orders for all our products. Kindly note that individual or small-quantity orders are not accommodated.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">2. Payment Policy</h4>
            <ul className="list-disc list-inside">
              <li>All transactions are strictly on a <span className="font-semibold">Cash and Carry</span> basis.</li>
              <li>No credit terms are available; payment must be made in full at the time of order placement or collection.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold">3. Order Confirmation</h4>
            <ul className="list-disc list-inside">
              <li>Orders will be processed only upon receipt of full payment.</li>
              <li>Changes to orders after confirmation may not be entertained.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold">4. Collection and Delivery</h4>
            <p>Customers are responsible for arranging transportation for their orders unless otherwise specified.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">5. Cancellation and Refunds</h4>
            <ul className="list-disc list-inside">
              <li>Cancellations may be subject to charges, depending on the order’s production stage.</li>
              <li>Refunds, if applicable, will be processed in line with our refund policy.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <p>
            By placing an order with us, you acknowledge and agree to these terms and conditions. For any questions or 
            clarifications, please <Link to="/contact" className="text-blue-500 underline">contact our team</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
