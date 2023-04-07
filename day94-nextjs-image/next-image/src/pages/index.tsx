import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/Button";
import FancyButton from "@/components/FancyButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <Image
        src="https://images.unsplash.com/photo-1680442794210-18aaefe1bc11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        alt="my pic"
        fill
        style={{ objectFit: "cover" }}
      /> */}
      <Button>Click ME</Button>
      <FancyButton>NEXT</FancyButton>
    </div>
  );
}
