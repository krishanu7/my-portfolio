import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border z-10  border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
          <span className="text-slate-200 hover:text-rose-400">{currentYear}. Portfolio</span>
          <p className="text-slate-200 hover:text-rose-400">All rights reserved.</p>
          <p className="text-slate-200 hover:text-rose-400">Privacy Policy</p>
          <p className="text-slate-200 hover:text-rose-400">Terms of Use</p>
      </div>
    </footer>
  );
};

export default Footer;
