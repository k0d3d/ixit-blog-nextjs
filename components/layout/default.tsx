import React from "react";
import Head from "next/head";
import Header from "../header";
import Footer from "../footer";


export default function DefaultPageLayout (props: {children: React.ReactNode}): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>iXit - The coolest NFT, Blockchain, Crypto blog updates.</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      {
        props.children
      }
      <Footer />
    </>
  );
}
