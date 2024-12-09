import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-10 mt-5">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
        {/* Column 1 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">MORENT</h1>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">How it works</li>
            <li className="hover:underline cursor-pointer">Featured</li>
            <li className="hover:underline cursor-pointer">Partnership</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">MORENT</h1>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Business Relation</li>
            <li className="hover:underline cursor-pointer">Events</li>
            <li className="hover:underline cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">MORENT</h1>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Instagram</li>
            <li className="hover:underline cursor-pointer">Twitter</li>
            <li className="hover:underline cursor-pointer">Facebook</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">MORENT</h1>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Discord</li>
            <li className="hover:underline cursor-pointer">Invite a friend</li>
            <li className="hover:underline cursor-pointer">Podcast</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 text-sm text-gray-600">
        © {new Date().getFullYear()} MORENT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
