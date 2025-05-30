import Head from "next/head";

// components
import UzbekNews from "../src/Components/UzbekNews/UzbekNews";
import WorldNews from "../src/Components/World-news/World_news";

export default function MediaNews() {
    return (
      <>
        <Head>
          <title>Nashiryot</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
   
      <UzbekNews/>
      <WorldNews/>
      </>
    );
}