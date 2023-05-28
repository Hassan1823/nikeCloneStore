import Link from "next/link";
import React, { useState, useEffect } from "react";

//iocns imports
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

//local imports
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

const Header = () => {
  //useStates
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  //  useEffect
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center
       justify-between z-20 sticky top-0 transition-transform duration-300 
       ${show}`}>
      <Wrapper className='h-[60px] flex justify-between items-center'>
        <Link href='/'>
          <img src='/logo.svg' className='w-[40px] md:w-[60px]' />
        </Link>

        {/* Menu */}
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

        {/* Mobile Menu */}
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className='flex items-center gap-2 text-black'>
          {/* icon start */}

          <Link
            href='/'
            className='w-8 md:w-12 h-8 md:h-8 rounded-full flex
            justify-center items-center hover:bg-color/[0.05] cursor-pointer relative'>
            <IoMdHeartEmpty className='text-[19px] md:text-[24px]' />
            <div
              className='h-[14px] md:h-[18px] min-w-[14px] md:w-[18px]
              rounded-full bg-red-600/[0.9] absolute top-1 left-5
              md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center
              px-[2px] md:px-[5px]'>
              51
            </div>
          </Link>

          {/* icon start */}
          {/* icon start */}

          <Link
            href='/cart'
            className='w-8 md:w-12 h-8 md:h-8 rounded-full flex
            justify-center items-center hover:bg-color/[0.05] cursor-pointer relative'>
            <BsCart className='text-[15px] md:text-[20px]' />
            <div
              className='h-[14px] md:h-[18px] min-w-[14px] md:w-[18px]
              rounded-full bg-red-600/[0.9] absolute top-1 left-5
              md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center
              px-[2px] md:px-[5px]'>
              5
            </div>
          </Link>

          {/* icon start */}

          {/* mobile icon start */}

          <div
            className='w-8 md:w-12 h-8 md:h-8 rounded-full flex md:hidden
            justify-center items-center hover:bg-color/[0.05] cursor-pointer relative -mr-2'>
            {mobileMenu ? (
              <AiOutlineClose
                className='text-[16px]'
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className='text-[20px]'
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* mobile icon ends */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
