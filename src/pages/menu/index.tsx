import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="flex gap-2 items-center mt-4 justify-center ">
        {/* <div className="px-2  border bg-[#A31D1D] text-white rounded-full">2</div> */}
        <h1 className="text-center font-medium text-xl bg-[#A31D1D] px-4 py-2 text-white rounded-lg">Menu</h1>
      </div>

      <div className=" md:flex gap-2 w-full text-center mt-5 mb-8 ">
        <Link to="/tentang" className="w-full">
          <div className="border border-[#A31D1D] px-7 py-2 w-full rounded-lg text-[#A31D1D] hover:bg-[#A31D1D] hover:text-white">Tentang</div>
        </Link>

        <Link to="/visimisi" className="w-full ">
          <div className="border border-[#A31D1D] px-7 py-2 w-full rounded-lg text-[#A31D1D] hover:bg-[#A31D1D] hover:text-white mt-3 md:mt-0">Visi Misi</div>
        </Link>

        <Link to="/program" className="w-full mt-3 md:mt-0">
          <div className="border border-[#A31D1D] px-7 py-2 w-full rounded-lg text-[#A31D1D] hover:bg-[#A31D1D] hover:text-white mt-3 md:mt-0">Program</div>
        </Link>
      </div>

      <hr />
    </>
  );
};

export default Menu;
