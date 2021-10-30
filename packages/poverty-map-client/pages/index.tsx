import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import * as faker from "faker";

import TestMap from "../components/TestMap/TestMap";
import TestTable from "../components/TestTable/TestTable";
import TestViz from "../components/TestViz/TestViz";
import styles from "../styles/Home.module.scss";
import { MetricOptions, MapTestData, MapAnalyticsData } from "./index.d";

const Home: NextPage<any> = ({ testData = null, analysisData = null }) => {
  console.info("index browser", testData, analysisData);

  return (
    <section className={styles.container}>
      <section>
        <h1>Poverty Map 2021</h1>
      </section>
      <section className={styles.topView}>
        <div className={`${styles.panel} ${styles.mapPanel}`}>
          <TestMap data={testData} />
        </div>
        <div className={`${styles.panel} ${styles.vizPanel}`}>
          <TestViz data={testData} analysisData={analysisData} />
        </div>
      </section>
      <section className={styles.bottomView}>
        <TestTable data={testData} />
      </section>
    </section>
  );
};

export const enumToArray = (enumObj: any) => {
  let arr: string[] = [];
  Object.keys(enumObj).forEach((prop: any) => {
    if (typeof enumObj[prop] === "string") {
      arr[prop] = enumObj[prop];
    }
  });
  return arr;
};

export const getTotals = (
  data: MapTestData[],
  property: string,
  value: string
) => {
  const total = data.reduce(
    (acc: number, curr: any) => (curr[property] === value ? acc + 1 : acc),
    0
  );
  return total;
};

export async function getStaticProps() {
  const issueOptions = [
    faker.random.words(),
    faker.random.words(),
    faker.random.words(),
    faker.random.words(),
  ];

  // TODO: Immutable
  const testData: MapTestData[] = [...new Array(10)].map(() => {
    const randomPick1 = faker.datatype.number({ min: 0, max: 3 });
    const randomPick2 = faker.datatype.number({ min: 0, max: 3 });
    return {
      date: faker.date.past().toISOString(),
      issue: issueOptions[randomPick1],
      details: faker.lorem.paragraph(),
      metricA: faker.datatype.number(),
      metricB: MetricOptions[randomPick2],
      coords: {
        lat: parseFloat(faker.address.latitude(-30, 30)),
        lng: parseFloat(faker.address.longitude(-30, 30)),
      },
    };
  });

  const analysisData: MapAnalyticsData = {
    issue: { totals: [] },
    metricB: { totals: [] },
  };

  // derive issue totals
  issueOptions.forEach((issue: string) => {
    const issueTotal = getTotals(testData, "issue", issue);
    analysisData.issue.totals.push({ name: issue, value: issueTotal });
  });

  // derive metricB totals
  enumToArray(MetricOptions).forEach((metric) => {
    const metricTotal = getTotals(testData, "metricB", metric as string);
    analysisData.metricB.totals.push({
      name: metric as string,
      value: metricTotal,
    });
  });

  console.info("index data", testData, analysisData);

  return {
    props: {
      testData,
      analysisData,
    },
    revalidate: 10, // Re-gen every 10 seconds max
  };
}

export default Home;
