import React from "react";
import { useState } from "react";
import { ClipboardCopyIcon, CheckIcon } from "@heroicons/react/outline"; // Optional: Use Heroicons or any icon library
import moonpug from "../assets/moonpug.webp";

const Home = () => {
  const [copied, setCopied] = useState(false);

  // Function to handle copying the token address
  const handleCopy = () => {
    navigator.clipboard.writeText("0x1234567890abcdef1234567890abcdef12345678");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      {/* Big Image Section */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl mb-6">
        <img
          src={moonpug}
          alt="MoonPug Coin"
          className="w-full object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Token Address Section */}
      <div className="text-center mb-4">
        <p className="text-lg sm:text-xl font-semibold mb-2">MoonPug Token Address</p>
        <div className="flex items-center justify-center space-x-3">
          <p className="text-yellow-400 text-sm sm:text-base break-all">
            0x1234567890abcdef1234567890abcdef12345678
          </p>
          <button
            onClick={handleCopy}
            className="flex items-center px-3 py-2 text-sm bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300"
          >
            {copied ? (
              <>
                <CheckIcon className="h-5 w-5 text-green-400" />
                <span className="ml-1">Copied</span>
              </>
            ) : (
              <>
                <ClipboardCopyIcon className="h-5 w-5 text-white" />
                <span className="ml-1">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Buy Button */}
      <div className="fixed bottom-4 right-4 md:relative md:bottom-0 md:right-0">
        <a
          href="#"
          className="px-6 py-3 text-lg sm:text-xl bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-lg transition-all duration-300 shadow-md"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Home;
