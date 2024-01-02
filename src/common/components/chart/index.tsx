/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import Chart from "react-apexcharts";

type Props = {
  id: string | "bar-chart";
  series: any | undefined;
  type?: "bar" | any;
  colors?: Array<string>;
  className?: string;
  dropShadowColor?: string;
  strokeColor?: Array<string>;
  height?: number | string;
  width?: number | string;
  xaxisLabel?: boolean;
  stacked?: boolean;
  plotOptions?: boolean;
  showGrid?: boolean;
  categories?: Array<string>;
  label?: Array<string>;
};

export const CustomChart: FC<Props> = ({
  type,
  colors,
  id,
  series,
  className,
  height,
  xaxisLabel,
  showGrid,
  label,
}) => {
  const yaxisOptions = {
    show: true,
    labels: {
      show: false,
      style: {
        colors: "gray",
        fontSize: "13px",
        fontWeight: 300,
      },
    },

    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  };

  const options = {
    chart: {
      id: id,
      toolbar: {
        show: false,
      },
    },
    labels: label,
    xaxis: {
      categories: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ],
      labels: {
        show: xaxisLabel ?? true,
        style: {
          colors: "grey",
        },
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: yaxisOptions,
    fill: {
      colors: colors,
    },
    legend: {
      show: false,
    },
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    grid: {
      show: showGrid ?? true,
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
        labels: {
          show: true,
          style: {
            fontSize: "13px",
            fontWeight: 300,
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      theme: "dark",
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type={type}
      height={height ?? 300}
      className={className}
    />
  );
};
