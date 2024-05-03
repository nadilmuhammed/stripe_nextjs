// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { LuPhone } from "react-icons/lu"
// const Footer = () => {
//   const [selectedCountryCode] = useState(process.env.NEXT_PUBLIC_COUNTRY_CODE);

//   return (
//     <footer className="bg-[#091E43]">
//       <div className="py-[60px] lg:py-[120px]">
//         <div className="container">
//           <div className="grid grid-cols-12 gap-6 text-white px-3 xl:px-0">
//             <div className="col-span-12 md:col-span-6 xl:col-span-3">
//               <Link href="/" className="inline-block mb-6">
//                 <Image
//                   priority
//                   src="/img/Icon512.png"
//                   width={70}
//                   height={30}
//                   alt="image"
//                 />
//               </Link>
//               <p className="clr-neutral-30 mb-6">
//                 The Teky Fast and Reliable IT Support and Repair Services - Get
//                 Expert Support 24/7 with Teky
//               </p>
//               <ul className="flex gap-3 flex-wrap">
//                 <li>
//                   <Link
//                     href="#"
//                     className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
//                   >
//                     <i className="lab la-facebook-f text-xl"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
//                   >
//                     <i className="lab la-twitter text-xl"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
//                   >
//                     <i className="lab la-linkedin-in text-xl"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
//                   >
//                     <i className="lab la-instagram text-xl"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
//                   >
//                     <i className="lab la-dribbble text-xl"></i>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-span-12 md:col-span-6 xl:col-span-3">
//               <h4 className="text-2xl font-semibold mb-6"> Quick Link </h4>
//               <ul className="flex flex-col gap-2">
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-[var(--secondary)] duration-300"
//                   >
//                     Help Center
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-[var(--secondary)] duration-300"
//                   >
//                     Offers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-[var(--secondary)] duration-300"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-[var(--secondary)] duration-300"
//                   >
//                     Terms & Conditions
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="hover:text-[var(--secondary)] duration-300"
//                   >
//                     Blog
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-span-12 md:col-span-6 xl:col-span-3">
//               <h4 className="text-2xl font-semibold mb-6"> Contact </h4>
//               <ul className="flex flex-col gap-4">
//                 <li>
//                   <div className="flex items-center gap-4">
//                     {/* <i className="las la-phone-volume bg-primary text-white text-xl p-2 rounded-full"></i> */}
//                     <div className="flex gap-1 justify-center items-center md:flex-col lg:flex-row">
//                       <Link
//                         className="text-base"
//                         href={`tel:${selectedCountryCode} 50 648 6992`}
//                         target="_blank"
//                       >
//                         <LuPhone className="bg-primary text-4xl p-2 rounded-full"/>

//                         {/* <i className="las la-phone-volume bg-primary text-white text-2xl p-2 rounded-full max-[375px]:text-lg"></i> */}
//                       </Link>
//                     </div>
//                     <div className="flex flex-col">
//                       <Link
//                         href={`tel:${selectedCountryCode} 4 355 3966`}
//                         className="text-base"
//                         target="_blank"
//                       >
//                         +971 4 355 3966
//                       </Link>
//                       <Link
//                         href={`tel:${selectedCountryCode} 50 648 6992`}
//                         className="text-base"
//                         target="_blank"
//                       >
//                         +971 50 648 6992
//                       </Link>
//                     </div>
//                   </div>
//                 </li>
//                 <li className="flex flex-col gap-5">
//                   <div className="flex items-center gap-4">
//                     <Link
//                       href="mailto: care@teky.ae"
//                       className="mb-0 clr-neutral-30"
//                       target="_blank"
//                     >
//                     <i className="las la-envelope-open bg-red-500 text-white text-[var(--neutral-700)] text-xl p-2 rounded-full"></i>
//                       <span className="ml-3">care@teky.ae</span>
//                     </Link>
//                   </div>
//                   <div className="flex items-center border-none gap-3">
//                     <Link
//                       href={`https://api.whatsapp.com/send?phone=${selectedCountryCode} 55 438 8521`}
//                       className="text-base"
//                       target="_blank"
//                       >
//                       <i className="lab la-whatsapp bg-[var(--secondary)] text-[var(--neutral-700)] text-white text-xl p-2 rounded-full"/>
//                         <span className="ml-3">+971 55 438 8521</span>
//                       </Link>
//                     </div>
//                   </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-span-12">
//             <div className="py-8 border-t border-[#3638bd] text-white">
//               <div className="grid grid-cols-12 gap-4 ">
//                 <div className="col-span-12 lg:col-span-6">
//                   <p className="m-0 text-center lg:text-start">
//                     Copyright &copy; {new Date().getFullYear()}
//                     <span className="text-[var(--tertiary)]">
//                       {" "}
//                       Cblu Digital
//                     </span>
//                   </p>
//                 </div>
//                 <div className="col-span-12 lg:col-span-6">
//                   <ul className="flex items-center flex-wrap gap-6 justify-center lg:justify-end">
//                     <li>
//                       <Link
//                         href="#"
//                         className="hover:text-[var(--secondary)] duration-300"
//                       >
//                         Sign in
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         href="#"
//                         className="hover:text-[var(--secondary)] duration-300"
//                       >
//                         Sign Up
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         href="#"
//                         className="hover:text-[var(--secondary)] duration-300"
//                       >
//                         FAQ
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md"
import { product } from "../../public/data/phoneNumber";

const Footer = () => {
  const [selectedCountryCode] = useState(process.env.NEXT_PUBLIC_COUNTRY_CODE);

  return (
    <>
    <footer className="bg-[#091E43]">
      <div className="py-[60px] lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6 text-white px-3 xl:px-0">
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <Link href="/" className="inline-block mb-6">
                <Image
                  priority
                  src="/img/Icon512.png"
                  width={70}
                  height={30}
                  alt="image"
                />
              </Link>
              <p className="clr-neutral-30 mb-6">
                The Teky Fast and Reliable IT Support and Repair Services - Get
                Expert Support 24/7 with Teky
              </p>
              <ul className="flex gap-3 flex-wrap">
                <li>
                  <Link
                    href="#"
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
                  >
                    <i className="lab la-facebook-f text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
                  >
                    <i className="lab la-twitter text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
                  >
                    <i className="lab la-linkedin-in text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
                  >
                    <i className="lab la-instagram text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
                  >
                    <i className="lab la-dribbble text-xl"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <h4 className="text-2xl font-semibold mb-6"> Quick Link </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[var(--secondary)] duration-300"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[var(--secondary)] duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[var(--secondary)] duration-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[var(--secondary)] duration-300"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <h4 className="text-2xl font-semibold mb-6"> Contact </h4>
              {product.map((items,key)=>{
                return(
                  <ul className="flex flex-col gap-4" key={key}>
                    <li>
                      <div className="flex items-center gap-4">
                        {/* <i className="las la-phone-volume bg-primary text-white text-xl p-2 rounded-full"></i> */}
                        <div className="flex gap-1 justify-center items-center md:flex-col lg:flex-row">
                          <Link
                            className="text-base"
                            href={`tel:${selectedCountryCode} ${items.iconlink1}`}
                            target="_blank"
                          >
                            <LuPhone className="bg-primary text-[2.3rem] rounded-full px-2"/>
                            {/* <i className="las la-phone-volume bg-primary text-white text-2xl p-2 rounded-full max-[375px]:text-lg"></i> */}
                          </Link>
                        </div>
                        <div className="flex flex-col">
                          <Link
                            href={`tel:${selectedCountryCode} ${items.iconlink1}`}
                            className="text-base"
                            target="_blank"
                          >
                            {items.number1}
                          </Link>
                          <Link
                            href={`tel:${selectedCountryCode} ${items.iconlink2}`}
                            className="text-base"
                            target="_blank"
                          >
                            {items.number2}
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="flex flex-col gap-5">
                      <div className="flex items-center gap-4">
                    <MdOutlineEmail className="bg-red-500 text-[2.3rem] rounded-full p-2"/>
                        {/* <i className="las la-envelope-open bg-[var(--secondary)] text-[var(--neutral-700)] text-xl p-2 rounded-full"></i> */}
                        <Link
                          href={`mailto: ${items.mail}`}
                          className="mb-0 clr-neutral-30"
                          target="_blank"
                        >
                          {items.mail}
                        </Link>
                      </div>
                      <div className="flex items-center border-none gap-4">
                        <i className="lab la-whatsapp bg-[var(--secondary)] text-[var(--neutral-700)] text-white text-xl p-2 rounded-full"></i>
                        <Link
                          href={`https://api.whatsapp.com/send?phone=${selectedCountryCode} ${items.whatsapp}`}
                          className="text-base"
                          target="_blank"
                        >
                          {items.whatsappNumber}
                        </Link>
                      </div>
                    </li>
                  </ul>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-span-12">
            <div className="py-8 border-t border-[#3638bd] text-white">
              <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-12 lg:col-span-6">
                  <p className="m-0 text-center lg:text-start">
                    Copyright &copy; {new Date().getFullYear()}
                    <span className="text-[var(--tertiary)]">
                      {" "}
                      Cblu Digital
                    </span>
                  </p>
                </div>
                {/* <div className="col-span-12 lg:col-span-6">
                  <ul className="flex items-center flex-wrap gap-6 justify-center lg:justify-end">
                    <li>
                      <Link
                        href="#"
                        className="hover:text-[var(--secondary)] duration-300"
                      >
                        Sign in
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-[var(--secondary)] duration-300"
                      >
                        Sign Up
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-[var(--secondary)] duration-300"
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
