
import { Inter } from "next/font/google";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth } from "@/firebase/firebase.config";
import Hero from "@/components/hero/Hero";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  // const GoogleSignIn = async ()=>{
  //   const provider = new GoogleAuthProvider();

  //   const authorization = auth;

  //   const result = await signInWithPopup(authorization,provider);
  //   console.log(result);
  // }

  const router = useRouter();
  const isBookingPage = router.pathname === "/booking";

  return (
    <div>
      {/* <button onClick={() => GoogleSignIn()}> Log in with google</button> */}
      <Hero/>
    </div>
  );
}
