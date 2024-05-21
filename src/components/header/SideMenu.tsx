import MenuButton from './MenuButton';
import { menuItems } from '../../constants/menuItems';


type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
        <div className={`fixed top-0 left-0 h-screen w-60 py-2 bg-white shadow-xl z-20 font-medium transform transition-transform duration-300
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* X버튼 */}
            <button className="h-[60px] px-3.5 flex justify-center items-center" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            {/* 메뉴 리스트들 */}
            {menuItems.map((item) => (<MenuButton key={item.value} text={item.value} href={item.href} />))}
        </div>
      {/* 사이드바가 아닌, 다른 영역을 클릭하면 사이드바가 저절로 닫힘 */}
      {isOpen && (<div className="fixed inset-0 bg-black opacity-50 transition-opacity md:hidden" onClick={onClose}></div>)}
    </>
  );
};

export default SideMenu;
