import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Just my test of Promise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to app. {data.myRes}.</h1>
      </main>

      <div>
        <Link href="/hello">Go to hello</Link>
      </div>
      <br />
      <br />

      <footer className={styles.footer}>Created by rwoj</footer>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  // const data = { name: "Radek" };
  const { data } = await axios.get("http://localhost:4000/api/hello");
  console.log("heja", data);
  return {
    props: {
      data,
    },
  };
}
