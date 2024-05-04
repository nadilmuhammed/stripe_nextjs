import Link from "next/link";
import { product } from "../../public/data/phoneNumber";
import { useRouter } from "next/router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import HeaderTop from "@/components/headertop/HeaderTophome1";
import CommonHeader from "@/components/CommonHeader";
import Footer from "@/components/footer/Footer";
import { auth } from "@/firebase/firebase.config";


const Hero = () => {
  const router = useRouter();
  const isPackagePage = router.pathname === "/packages";

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      //  else {
      //   router.push("/login");
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <>
       {!isPackagePage && (
        <>
          <HeaderTop/>
          <CommonHeader />
        </>
      )}
    <section className="relative bg-[var(--bg-1)] border-t lg:border-t-0">
      <div className="pt-[70px] sm:pt-[100px] md:pt-[150px] xl:pt-[120px] pb-16 h-full px-3">
        <div className="container">
          <div className="text-center z-30">
            <h1 className="text-[40px] lg:text-[56px] leading-[68px] text-[var(--neutral-700)] font-semibold">
              Teky, Professional IT Support and
              Repair Services
            </h1>
            <p className="text-xl mx-auto max-w-[600px] text-gray-500 mt-4 md:mt-9">
              Trust Teky, your reliable IT support and repair partner for over 12 years!
            </p>
            <div className="flex flex-col items-center md:flex-row md:justify-center pt-[37px] space-y-5 md:space-y-0 md:gap-5">

              <div className="flex items-center gap-5">
                <button className="bg-primary text-white rounded-lg transition-all ease-in-out active:bg-gray-500 w-[190px] h-[50px]">
                  <Link  href={user? "/packages": "/login"}  >
                  Get Quote <i className="las la-arrow-right"></i>
                  </Link>
                </button>
              </div>
              
              {/* {product.map((items,key)=>{
                return(
                  <div className="flex items-center gap-5" key={key}>
                    <button className="bg-transparant hover:bg-gray-300 border border-gray-400 text-black rounded-lg transition-all ease-in-out active:bg-gray-500 w-[190px] h-[50px]">
                      <Link
                        href={items.trackLink}>
                        Track Service <i className="las la-arrow-right"></i>
                      </Link>
                    </button>
                  </div>
                )
              })} */}

            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>

  );
};

export default Hero;
