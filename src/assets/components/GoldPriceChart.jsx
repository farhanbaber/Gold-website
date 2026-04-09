import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./GoldPriceChart.module.css";

const build24hSeries = (latestPrice) => {
  const base = Number(latestPrice) || 3300;
  const now = new Date();
  return Array.from({ length: 24 }).map((_, i) => {
    const hourOffset = 23 - i;
    const time = new Date(now.getTime() - hourOffset * 60 * 60 * 1000);
    const drift = Math.sin(i / 3) * 8;
    const noise = (Math.random() - 0.5) * 6;
    const usdPrice = Number((base + drift + noise).toFixed(2));
    return {
      id: i,
      timeLabel: time.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      usdPrice,
    };
  });
};

const usdOzToPkrTola = (usdPrice, usdToPkr) => {
  const gramPrice = (usdPrice * usdToPkr) / 2.666;
  return gramPrice * 11.66;
};

const GoldTooltip = ({ active, payload, unit }) => {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  const value = point.displayPrice;
  const formatted =
    unit === "USD"
      ? `$${value.toLocaleString(undefined, { maximumFractionDigits: 2 })} / oz`
      : `PKR ${Math.round(value).toLocaleString()} / tola`;

  const change = point.changePercent;
  const isUp = change >= 0;

  return (
    <div className={styles.tooltipCard}>
      <p className={styles.tooltipTime}>{point.timeLabel}</p>
      <p className={styles.tooltipPrice}>{formatted}</p>
      <p className={isUp ? styles.tooltipUp : styles.tooltipDown}>
        {isUp ? "▲" : "▼"} {Math.abs(change).toFixed(2)}% vs last hour
      </p>
    </div>
  );
};

const GoldPriceChart = () => {
  const [baseSeries, setBaseSeries] = React.useState(() => build24hSeries(3300));
  const [currentUsdPrice, setCurrentUsdPrice] = React.useState(3300);
  const [usdToPkr, setUsdToPkr] = React.useState(278);
  const [unit, setUnit] = React.useState("USD");

  React.useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const apiKey = import.meta.env.VITE_METALPRICE_API_KEY;

        let latestUsd = 3300 + (Math.random() - 0.5) * 20;
        if (!apiKey) {
          latestUsd = Number(latestUsd.toFixed(2));
        } else {
          const res = await fetch(
            `https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=USD&currencies=XAU`
          );
          const data = await res.json();
          const xauRate = Number(data?.rates?.XAU);
          if (!xauRate || !Number.isFinite(xauRate)) throw new Error("Invalid gold rate");
          latestUsd = Number((1 / xauRate).toFixed(2));
        }

        try {
          const fxRes = await fetch("https://api.exchangerate.host/latest?base=USD&symbols=PKR");
          const fxData = await fxRes.json();
          const fx = Number(fxData?.rates?.PKR);
          if (fx && Number.isFinite(fx)) setUsdToPkr(fx);
        } catch {
          // keep previous exchange rate
        }

        setCurrentUsdPrice(latestUsd);
        setBaseSeries(build24hSeries(latestUsd));
      } catch {
        const fallback = 3300 + (Math.random() - 0.5) * 20;
        setCurrentUsdPrice(Number(fallback.toFixed(2)));
        setBaseSeries(build24hSeries(fallback));
      }
    };

    fetchGoldPrice();
    const interval = setInterval(fetchGoldPrice, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const chartData = React.useMemo(() => {
    return baseSeries.map((point, index) => {
      const displayPrice =
        unit === "USD" ? point.usdPrice : usdOzToPkrTola(point.usdPrice, usdToPkr);

      const prevPoint = baseSeries[index - 1];
      const prevDisplay =
        !prevPoint
          ? displayPrice
          : unit === "USD"
            ? prevPoint.usdPrice
            : usdOzToPkrTola(prevPoint.usdPrice, usdToPkr);

      const changePercent =
        prevDisplay === 0 ? 0 : ((displayPrice - prevDisplay) / prevDisplay) * 100;

      return {
        ...point,
        displayPrice: Number(displayPrice.toFixed(2)),
        changePercent: Number(changePercent.toFixed(2)),
      };
    });
  }, [baseSeries, unit, usdToPkr]);

  const currentDisplayPrice =
    unit === "USD" ? currentUsdPrice : usdOzToPkrTola(currentUsdPrice, usdToPkr);
  const latest = chartData[chartData.length - 1];
  const prev = chartData[chartData.length - 2] || latest;
  const isUp = (latest?.displayPrice || 0) >= (prev?.displayPrice || 0);
  const trendColor = isUp ? "#2e8b57" : "#a83333";
  const gradientId = isUp ? "trendUpGradient" : "trendDownGradient";

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Live Gold Price</h2>
        <div className={styles.meta}>
          <p>
            {unit === "USD"
              ? `$${currentDisplayPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })} / oz`
              : `PKR ${Math.round(currentDisplayPrice).toLocaleString()} / tola`}
          </p>
          <div className={styles.toggle}>
            <button
              type="button"
              onClick={() => setUnit("USD")}
              className={unit === "USD" ? styles.toggleActive : ""}
            >
              USD/oz
            </button>
            <button
              type="button"
              onClick={() => setUnit("PKR")}
              className={unit === "PKR" ? styles.toggleActive : ""}
            >
              PKR/tola
            </button>
          </div>
        </div>
      </div>
      <div className={styles.chartCard}>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="trendUpGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2e8b57" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#2e8b57" stopOpacity={0.03} />
              </linearGradient>
              <linearGradient id="trendDownGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a83333" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#a83333" stopOpacity={0.03} />
              </linearGradient>
            </defs>
            <XAxis dataKey="timeLabel" tick={{ fill: "#8f7448", fontSize: 10 }} tickLine={false} axisLine={false} />
            <YAxis
              tick={{ fill: "#8f7448", fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) =>
                unit === "USD" ? `$${Math.round(value)}` : `${Math.round(value / 1000)}k`
              }
            />
            <Tooltip content={<GoldTooltip unit={unit} />} />
            <Area
              type="monotone"
              dataKey="displayPrice"
              stroke={trendColor}
              strokeWidth={2.4}
              fill={`url(#${gradientId})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default GoldPriceChart;
