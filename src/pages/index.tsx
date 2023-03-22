import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "2/components/navbar";

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
      </main>
    </>
  );
}
