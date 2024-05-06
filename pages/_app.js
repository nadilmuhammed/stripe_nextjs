import Footer from "@/components/footer/Footer";
import CommonHeader from "@/components/CommonHeader";
import HeaderTop from "@/components/headertop/HeaderTophome1";
import "@/styles/globals.css";
import "../public/styles/line-awesome.min.css";
import "../public/styles/styles.scss";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isPackagePage = router.pathname === "/packages";

  return (
    <div>
      {/* {!isPackagePage && (
        <>
          <HeaderTop />
          <CommonHeader />
        </>
      )} */}
      <div className="mt-[70px] lg:mt-0">
        <Component {...pageProps} />
      </div>
      <Toaster />
      <Footer />
    </div>
  );
}
