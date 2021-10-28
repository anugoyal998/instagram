import Head from "next/head";
import Header from "../components/Header";
import Stories from "../components/Stories";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="grid grid-cols-3 px-48">
        <Stories/>
      </div>
    </div>
  );
}
