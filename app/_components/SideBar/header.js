import React from "react";

function Header({ click, setClick }) {
  return (
    <header className="sticky left-0 top-0 z-50 h-[85px]">
      <div className="border-b-4 h-full w-full border-[#1919190d]">
        <div className="flex justify-end items-center lg:justify-center p-4 bg-white shadow-md">
          {/* IND Money Logo */}
          <img
            alt="IND Money logo"
            src="https://indcdn.indmoney.com/cdn-cgi/image/quality=auto,format=auto,width=150/https://indcdn.indmoney.com/public/ind-marketing/indmoney-weblogo.png"
            className="mr-auto h-[50px] w-[50px] "
          />

          {/* Container for icons and button */}
          <div className="flex items-center justify-end lg:justify-center space-x-3">
            {/* Log In Button */}
            <div className="ml-4">
              <button className="px-2.5 py-1 text-brand-green-dark border rounded-full border-brand-green-dark transition-all duration-100 shadow-md">
                Log In
              </button>
            </div>

            {/* Customer Service Icon */}
            <div>
              <img
                src="/customerService.svg"
                width={24}
                height={24}
                alt="altImageText"
              />
            </div>

            {/* Search Icon */}
            <div>
              <img
                src="/searchIcon.svg"
                width={18}
                height={18}
                alt="altImageText"
              />
            </div>

            {/* Toggle Menu Icon */}
            <div onClick={() => setClick(!click)} className="cursor-pointer">
              {click ? (
                <div className="text-2xl text-brand-grey-base">✕</div>
              ) : (
                <img
                  src="/hamburger.svg"
                  width={20}
                  height={14}
                  alt="altImageText"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
