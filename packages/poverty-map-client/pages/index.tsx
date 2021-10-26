import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import * as faker from "faker";

import TestMap from "../components/TestMap/TestMap";
import TestTable from "../components/TestTable/TestTable";
import TestViz from "../components/TestViz/TestViz";
import styles from "../styles/Home.module.scss";

export enum MetricOptions {
  "AnswerA",
  "AnswerB",
  "AnswerC",
  "AnswerD",
}

const issueOptions = [
  faker.random.words(),
  faker.random.words(),
  faker.random.words(),
  faker.random.words(),
];

const Home: NextPage = () => {
  const testData = [...new Array(10)].map(() => {
    const randomPick = faker.datatype.number({ min: 0, max: 3 });
    return {
      date: faker.date.past().toISOString(),
      issue: issueOptions[randomPick],
      details: faker.lorem.paragraph(),
      metricA: faker.datatype.number(),
      metricB: MetricOptions[randomPick],
      coords: {
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
      },
    };
  });

  console.info("testData", testData);

  return (
    <section className={styles.container}>
      <section className={styles.topView}>
        <div className={`${styles.panel} ${styles.mapPanel}`}>
          <TestMap data={testData} />
        </div>
        <div className={`${styles.panel} ${styles.vizPanel}`}>
          <TestViz data={testData} />
        </div>
      </section>
      <section className={styles.bottomView}>
        <TestTable data={testData} />
      </section>
    </section>
  );
};

export default Home;
