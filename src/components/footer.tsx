import React from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ Import Link
import logo from "../../public/images/7242a710-3055-4f90-acd8-738e65364450.png";

function Footer() {
  return (
    <footer className="px-4 md:px-36 dark:bg-gray-900 text-gray-700 bg-zinc-200/30 backdrop-blur-sm py-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Kartavya Logo" width={32} height={32} />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Kartavya</h3>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            AI calculates a company’s intrinsic value using the DCF method—
            projecting and discounting future free cash flows to support
            informed, data-backed investment and business decisions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/generate" className="hover:underline">Generate</Link>
            </li>
            <li>
              <Link href="/docs" className="hover:underline">Documentation</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-md font-semibold mb-2">Follow Us</h4>
          <ul className="flex gap-4 text-sm">
            <li>
              <a href="#" className="hover:text-blue-500">Twitter</a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">Instagram</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} AIVidify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
