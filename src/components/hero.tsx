import React from "react";
import Image from "next/image";

import img from "@/assets/images/car2.png";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="w-full h-[100vh] overflow-hidden">
      <Image
        src={img}
        alt="car with a foggy rock montain background"
        className="w-full"
      />
    </section>
  );
}
