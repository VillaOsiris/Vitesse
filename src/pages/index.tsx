import Head from "next/head";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vitesse</title>
        <meta
          name="description"
          content="Vitesse high-performance sports cars website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
