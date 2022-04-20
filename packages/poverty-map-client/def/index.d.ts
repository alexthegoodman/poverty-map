export enum MetricOptions {
  "AnswerA",
  "AnswerB",
  "AnswerC",
  "AnswerD",
}

export interface MapCoords {
  lat?: number;
  lng?: number;
}

export interface MapTestData {
  date: string;
  issue: string;
  details?: string;
  metricA?: number;
  metricB?: string;
  coords?: MapCoords;
}

export interface AnalyticsTotal {
  name: string;
  value: string | number;
}

export interface AnalyticsSummary {
  totals: AnalyticsTotal[];
}

export interface MapAnalyticsData {
  issue: AnalyticsSummary;
  metricB: AnalyticsSummary;
}
