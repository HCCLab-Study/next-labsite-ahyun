import React from 'react';
import HeaderLogo from './HeaderLogo';
import HamburgerMenu from './HamburgerMenu';
import HeaderMenu from './HeaderMenu';
import Search from './Search';

const Header = () => {
  return (
    <header className='flex justify-between items-center px-5 py-1.5'>
      <HamburgerMenu />
      <HeaderLogo />
      <HeaderMenu />
      <Search />
    </header>
  );
};

export default Header;

