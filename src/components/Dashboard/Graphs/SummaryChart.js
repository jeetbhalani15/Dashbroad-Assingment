import { FunnelChart } from "@tremor/react";

const chartdata = [
  { name: "1. Add credit Card", value: 89 },
  { name: "2. Copy invite code", value: 6 },
  {
    name: "3. Send invite code",
    value: 5,
  },
];

export function SummaryChart() {
  return (
    <>
      <h3>Summary</h3>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Overall conversion
      </h3>
      <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        5.6%
      </p>
      <p className="mt-4 text-tremor-label text-tremor-content dark:text-dark-tremor-content">
        Uniques in specific order, who converted within 30 days.
      </p>
      <FunnelChart className="mt-4 h-60" data={chartdata} />
    </>
  );
}
