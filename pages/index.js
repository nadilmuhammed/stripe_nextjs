
import { Inter } from "next/font/google";
import Login from "./login";
import { useRouter } from "next/router";
import Hero from "./hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <div>
      {/* <Login /> */}
      <Hero/>
    </div>
  );
}
