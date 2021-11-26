import React from 'react';
import Link from 'next/dist/client/link';
const Navbar = () => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
        <Link href="/" passHref>
          <a>
            <span className="text-xl pl-2">
              <i className="em em-grinning">CRM</i>
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
