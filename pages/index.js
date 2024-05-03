
import { Inter } from "next/font/google";
import Stripe from "./Stripe";
import Hero from "@/components/hero/Hero";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter();
  const isBookingPage = router.pathname === "/booking";

  return (
    <div>
      <Hero/>
    </div>
  );
}
