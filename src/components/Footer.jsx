import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-6 mt-auto">
      <div className="container mx-auto text-center px-4">
        <p className="mb-4">🐾 Follow MoonPug on Social Media:</p>
        <div className="flex justify-center space-x-4">
          <a href="https://x.com/moonpug__" className="text-yellow-500 hover:text-yellow-400">Twitter</a>
          <a href="https://t.me/moonpug_coin" className="text-yellow-500 hover:text-yellow-400">Telegram</a>
        </div>
        <p className="text-gray-400 mt-4">© 2025 MoonPug. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
