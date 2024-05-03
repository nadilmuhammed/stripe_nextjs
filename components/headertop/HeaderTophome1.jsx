
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Navbar from "../NavbarMobile";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { product } from "../../public/data/phoneNumber";

const HeaderTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountryCode] = useState(process.env.NEXT_PUBLIC_COUNTRY_CODE);
  const [ scrolled, setScrolled ] = useState(false);
  const path = usePathname();

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 60){
        setScrolled(true);
      }else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll',handleScroll)

    return() =>{
    window.addEventListener('scroll',handleScroll)

    }
  },[])

  const toggleOffCanvas = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <>
      {product.map((items,key) => {
        return (
          <div
            className={`${scrolled && "bg-blue-950 transition ease-in-out duration-500"} bg-[var(--bg-1)] fixed lg:sticky top-0 left-0 right-0 shadow z-[52]`}
            key={key}
          >
            <div className="container flex justify-between items-center  py-1 lg:py-2  gap-2 lg:gap-1  xl:gap-20 sm:gap-[3.5rem] mx-auto">
              <Link href="/" className="flex items-center">
                <Image
                  src="/img/Icon512.png"
                  className="self-center max-[375px]:w-12 max-[375px]:ml-4 max-[425px]:ml-6 max-[425px]:w-14 max-[768px]:ml-6"
                  width={70}
                  height={30}
                  alt="logo"
                  priority
                />
              </Link>
              <div className="flex flex-col justify-center items-center gap-1">

                <span className={`${scrolled && "text-white"} hidden text-center text-[10px] text-gray-700 max-[425px]:ml-[2.2rem] max-[768px]:block max-[768px]:ml-[2rem] `} style={{fontSize:"8.4px"}}>
                  Do you need urgent support?
                  </span>

                <div className={`${scrolled && "text-white"} flex justify-evenly gap-10 divide-x-[2px] text-gray-700 max-[425px]:gap-4 max-[425px]:ml-[2rem]`}>
                  <span className="text-xs flex flex-col justify-center items-start border-r p-2 border-gray-400 max-[1024px]:hidden">
                    <span>Do you need urgent support?</span>
                    <span className="">Contact Us Now:</span>
                  </span>

                  <div className="flex items-center gap-3 border-none sm:px-4">
                    <div className="flex flex-col gap-1 justify-center items-center md:flex-col lg:flex-row">
                      <Link
                        className="text-base"
                        href={`tel:${selectedCountryCode} ${items.iconlink1}`}
                        target="_blank"
                      >
                        <LuPhone className="bg-blue-700 text-white text-[2.5rem] rounded-full px-2 max-[320px]:text-[2rem] max-[375px]:text-[2.2rem]" />
                        {/* <i className="las la-phone-volume bg-primary text-white text-2xl p-2 rounded-full max-[375px]:text-lg"></i> */}
                      </Link>
                    </div>
                    <div className="flex-col hidden lg:block">
                      <div>
                        <Link
                          className="text-base"
                          href={`tel:${selectedCountryCode} ${items.iconlink1}`}
                          target="_blank"
                        >
                          <span className="text-[14px]">{items.number1}</span>
                        </Link>
                        {` `}
                      </div>
                      <Link
                        href={`tel:${selectedCountryCode} ${items.iconlink2}`}
                        className="text-base"
                        target="_blank"
                      >
                        <span className="text-[14px]">{items.number2}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center border-none ">
                    <Link
                      href={`mailto: ${items.mail}`}
                      className="text-base"
                      target="_blank"
                    >
                      <MdOutlineEmail className="bg-red-500 text-white text-[2.5rem] rounded-full p-2 max-[320px]:text-[2rem] max-[375px]:text-[2.2rem]  " />
                      {/* <i className="las la-envelope-open bg-red-500 text-white text-2xl p-2 rounded-full max-[375px]:text-lg"></i> */}
                    </Link>
                  </div>
                  <div className="flex items-center border-none">
                    <Link
                      href={`https://api.whatsapp.com/send?phone=${selectedCountryCode} ${items.whatsapp}`}
                      className="text-base"
                      target="_blank"
                    >
                      <FaWhatsapp className="bg-green-500 text-white text-[2.5rem] rounded-full p-2 max-[320px]:text-[2rem] max-[375px]:text-[2.2rem]  " />
                      {/* <i className="lab la-whatsapp bg-[var(--secondary)] text-[var(--neutral-700)] text-white text-2xl p-2 rounded-full max-[320px]:text-sm max-[375px]:text-lg"></i> */}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-2 xl:px-2 sm:hidden lg:flex">
                <button className="btn-primary px-6 hidden  md:block rounded-[10px] h-[45px] transition active:transform active:bg-gray-500 ">
                  <Link href="/packages" className="flex items-center">
                    Get Quote
                    <FaArrowRight className="ml-2 text-sm" />
                  </Link>
                </button>
              </div>
              <div className="lg:hidden p-3">
                <button
                  onClick={toggleOffCanvas}
                  className={`flex flex-col items-center gap-1 py-2 px-3 rounded-md max-[375px]:p-0`}
                >
                  <Bars3Icon className={`${scrolled && "text-white"} w-10 h-10 text-gray-700`} />
                </button>
                <div
                  className={`fixed top-0 left-0 h-screen w-full bg-white shadow-lg z-50 transform transition-transform ease-in-out duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <button
                    onClick={toggleOffCanvas}
                    className="p-3 rounded-full absolute top-1 right-1"
                  >
                    <XMarkIcon className="w-6 h-6 text-black" />
                  </button>
                  <div className="max-w-[150px] p-2">
                    <Link href="/" className="flex items-center mt-5">
                      <Image
                        src="/img/Icon512.png"
                        className="self-center"
                        width={50}
                        height={30}
                        alt="logo"
                        priority
                      />
                    </Link>
                  </div>
                  <Navbar />
                  {/* <div className="border-b my-2"></div> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HeaderTop;
