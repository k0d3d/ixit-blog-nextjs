import React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

import Head from "next/head";
import Header from "../header";
import Footer from "../footer";

export default function DefaultPageLayout(props: {
  title?: string;
  children: React.ReactNode;
}): JSX.Element {
  const defaultTitle =
    props.title || "The coolest NFT, Blockchain, Crypto blog updates.";
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>iXit - {defaultTitle}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Header />
        {props.children}
        <Footer />
      </QueryClientProvider>
    </>
  );
}
