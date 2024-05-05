import MenuButton from "./MenuButton";

const HeaderMenu = () => {
    return (
        <div className="text-white flex-grow">
            <div className="hidden md:flex justify-end">
                <div className="flex py-1 font-medium text-sm">
                    <MenuButton text="Home" href='/'/>
                    <MenuButton text="People" href='/people'/>
                    <MenuButton text="Projects" href='/projects'/>
                    <MenuButton text="Publications" href='/publications'/>
                    <MenuButton text="Lectures" href='/lectures'/>
                    <MenuButton text="전공동아리" href='/chic'/>
                </div>
            </div>
        </div>
    );
  };
  
  export default HeaderMenu;