import Link from 'next/link';


const HeaderLogo = () => {
    return(
        <Link href="/" className='flex'>
            <img className="h-[2.7em]" src="/assets/image/idea-lab-logo.jpg" alt="idea-lab-logo"/>
            <div className='py-2 pl-3 text-[1.2em] font-semibold text-white'>IDEA-Lab</div>
        </Link>
    );
};
  
export default HeaderLogo;