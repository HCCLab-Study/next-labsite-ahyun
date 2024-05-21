'use client';

import { useState } from 'react';
import SideMenu from "./SideMenu";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative flex md:hidden justify-between items-center z-20">
        {/* 햄버거 메뉴 아이콘 */}
        <button className="hamburger-icon pr-5" onClick={() => setIsOpen(!isOpen)}>
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </button>
        {/* 위의 버튼을 클릭한 후에, isOpen이 true이면 사이드바가 나타남 */}
        <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
};

export default HamburgerMenu;
