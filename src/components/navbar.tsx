import Image from "next/image";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="fixed top-0 w-full h-24 bg-blue-900">
      <div className="absolute bottom-[-8px] rounded-lg w-4/5 h-10 bg-blue-200 mx-5">
        <div className="absolute top-[-35px] rounded-lg w-1/5 h-12 bg-blue-200"></div>
      </div>
      <div></div>
    </div>
  );
}
