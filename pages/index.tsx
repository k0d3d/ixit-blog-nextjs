import Head from "next/head";
import Header from "../components/header";
import FeaturedPost from '../components/homepage/featured-post'

export default function Home() {
  return (
    <div className="">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>iXit - The coolest NFT, Blockchain, Crypto blog updates.</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <FeaturedPost />
    </div>
  );
}
