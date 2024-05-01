
import { Inter } from "next/font/google";
import Stripe from "./Stripe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Stripe />
    </div>
  );
}
