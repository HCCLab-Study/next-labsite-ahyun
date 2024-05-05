import Link from 'next/link';

interface Props {
  text: string;
  href: string;
}

const MenuButton = ({ text, href }: Props) => {
  return (
    <Link href={href}>
      <p className="px-3.5 py-2 hover:bg-[#578bb7] hover:text-white">{text}</p>
    </Link>
  );
};

export default MenuButton;
