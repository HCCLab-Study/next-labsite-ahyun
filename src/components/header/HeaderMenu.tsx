'use client';

import MenuButton from './MenuButton';
import useResponsiveMenu from '../../hooks/useResponsiveMenu';  // 더보기에 들어가는 메뉴아이템의 개수는 훅으로 따로 빼내서 관리

const HeaderMenu: React.FC = () => {
  const { visibleMenuItems, moreMenuItems } = useResponsiveMenu();

  return (
    <div className="text-white flex-grow">
      <div className="hidden md:flex justify-end">
        <div className="flex py-1 font-medium text-sm">
          {visibleMenuItems.map((item) => (
            <MenuButton key={item.value} text={item.value} href={item.href} />
          ))}
          {moreMenuItems.length > 0 && (
            <div className="relative group">
              <button className="flex items-center px-4 py-2">
                더보기
                <svg
                  className="ml-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute right-0 hidden group-hover:block bg-white text-black shadow-lg">
                {moreMenuItems.map((item) => (
                  <MenuButton key={item.value} text={item.value} href={item.href} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
