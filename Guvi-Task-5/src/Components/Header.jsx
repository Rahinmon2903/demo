import React from 'react';

const Header = ({setOpen}) => {

    return (
        <>
        

<nav className="backdrop-blur-md bg-white/70 dark:bg-gray-900/60 
                border-b border-gray-200 dark:border-gray-700 shadow-sm">
  <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=7280216011204538001&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9075260&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="./src/assets/Amazon-Logo-2000.png" className="h-12 w-20" alt="Amazon Logo" />
     
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
       <button
        onClick={() => setOpen(true)}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>
   
  </div>
</nav>

            
        </>
    );
};

export default Header;