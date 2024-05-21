export interface MenuItem {
    name: string;
    href: string;
    value: string;
  }
  
  export const menuItems: MenuItem[] = [
    { name: 'Home', href: '/', value: 'Home' },
    { name: 'People', href: '/people', value: 'People' },
    { name: 'Projects', href: '/projects', value: 'Projects' },
    { name: 'Publications', href: '/publications', value: 'Publications' },
    { name: 'Lectures', href: '/lectures', value: 'Lectures' },
    { name: 'club', href: '/chic', value: '전공동아리' },
  ];