import { useState, useEffect } from 'react';
import { menuItems, MenuItem } from '../constants/menuItems';

const useResponsiveMenu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleMenuItems = (): MenuItem[] => {
    if (windowWidth <= 850) return menuItems.slice(0, menuItems.length - 4);
    if (windowWidth <= 900) return menuItems.slice(0, menuItems.length - 2);
    return menuItems;
  };

  const getMoreMenuItems = (): MenuItem[] => {
    if (windowWidth <= 850) return menuItems.slice(menuItems.length - 4);
    if (windowWidth <= 900) return menuItems.slice(menuItems.length - 2);
    return [];
  };

  const visibleMenuItems = getVisibleMenuItems();
  const moreMenuItems = getMoreMenuItems();

  return { visibleMenuItems, moreMenuItems };
};

export default useResponsiveMenu;
