export interface IndexedReductionChart {
  kind: "indexed-reduction";
  baseline: number;
  result: number;
  baselineLabel: string;
  resultLabel: string;
  explanation: string;
}

export interface MetricPairChart {
  kind: "metric-pair";
  title: string;
  metrics: { label: string; value: string }[];
  note?: string;
}

export interface BeforeAfterChart {
  kind: "before-after";
  title: string;
  metrics: { label: string; before: string; after: string }[];
  note?: string;
}

export interface MetricSetChart {
  kind: "metric-set";
  title: string;
  metrics: { label: string; value: string }[];
  note?: string;
}

export interface ProviderListChart {
  kind: "provider-list";
  providers: string[];
}

export type ImpactVisualization =
  | IndexedReductionChart
  | MetricPairChart
  | BeforeAfterChart
  | MetricSetChart
  | ProviderListChart;

export interface ImpactMetric {
  id: number | string;
  slug: string;
  value: string;
  label: string;
  context: string;
  project: string;
  company: string;
  measurement: string;
  detail: string;
  href: string;
  featured: boolean;
  visualization: ImpactVisualization;
}
