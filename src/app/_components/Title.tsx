const Title = () => {
  return (
      <div className="h-[350px] w-full px-10 flex flex-col justify-center items-center bg-[url('/assets/image/home-title.png')] bg-cover">
          <div className="h-[60px] w-full"></div>
          <h1 className="text-4xl font-semibold text-white h-fit pb-5 border-b-2">
            <span className="text-5xl font-extrabold text-[#71b2eb]">I</span>NTERACTIVE <span className="text-5xl font-extrabold text-[#71b2eb]">D</span>IGITAL <span className="text-5xl font-extrabold text-[#71b2eb]">E</span>XPERIENCE <span className="text-5xl font-extrabold text-[#71b2eb]">A</span>NALYTICS
            <br/>LABORATORY</h1>
      </div>
  );
};

export default Title;
