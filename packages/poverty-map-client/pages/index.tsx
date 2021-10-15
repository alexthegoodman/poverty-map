import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TestViz from "../components/TestViz/TestViz";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <TestViz />
    </div>
  );
};

export default Home;
