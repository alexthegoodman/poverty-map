import type { NextPage } from "next";

import * as faker from "faker";

import { MetricOptions, MapTestData, MapAnalyticsData } from "../def/index.d";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import { enumToArray, getTotals } from "../utils/arrays";

const Home: NextPage<any> = ({ testData = null, analysisData = null }) => {
  console.info("index browser", testData, analysisData);

  return <ContentContainer testData={testData} analysisData={analysisData} />;
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
