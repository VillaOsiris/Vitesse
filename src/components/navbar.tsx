import Image from "next/image";
import Link from "next/link";
import { Timmana } from "next/font/google";
import logo from "@/assets/logo/vitesse_logo_v2.png";
import { RiLoginCircleLine } from "react-icons/ri";

const timmana = Timmana({
  subsets: ["latin"],
  weight: ["400"],
});

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="fixed top-0 z-10 w-full h-24 bg-sky-900">
      <div className="absolute bottom-[-8px] z-20 rounded-lg w-1/5 h-20 bg-blue-100 mx-5">
        <Image
          src={logo}
          alt="vitesse main logo"
          className="mt-[-25px] w-[96%]"
        />
      </div>
      <div className="absolute bottom-[-8px] rounded-lg w-4/5 h-10 bg-blue-100 mx-5 flex items-center ">
        <ul
          className={`${timmana.className} flex justify-evenly items-center text-lg pt-2 w-4/5 ml-auto`}
        >
          <Link href={"/"}>home</Link>
          <Link href={"/"}>models</Link>
          <Link href={"/"}>lifestyle</Link>
          <Link href={"/"}>Universe</Link>
          <Link href={"/"}>contacts</Link>
        </ul>
      </div>
      <div className="absolute right-0 bottom-[-8px] rounded-lg w-1/12 h-10 mx-16 font-extrabold flex gap-2 text-blue-100 tracking-wider">
        <p>VitPilot</p>
        <button className="flex">
          <RiLoginCircleLine className="w-6 h-6 align-middle" />
        </button>
      </div>
    </div>
  );
}
