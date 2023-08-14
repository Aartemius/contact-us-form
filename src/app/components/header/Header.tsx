"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import NavMenuToggler from './NavMenuToggler';
import HeaderNavMenu from './HeaderNavMenu';
import { useScreenSize } from '@/app/utils/common';
import './Header.scss';

const Header: React.FC = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const { isMobile } = useScreenSize();
  const toggleMobileNavMenu = () => setIsMobileNavVisible(!isMobileNavVisible);

  return (
    <header className={ `header ${ isMobile ? 'header-mobile' : 'header-desktop' }` }>
      <div className="header-wrap flex">
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Logo Here
        </Link>
        <HeaderNavMenu
          isMobileNavVisible={isMobileNavVisible}
          onCloseClick={toggleMobileNavMenu}
        />
        <NavMenuToggler onClick={toggleMobileNavMenu} />
      </div>
    </header>
  );
};

export default Header;
