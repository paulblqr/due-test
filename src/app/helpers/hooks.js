import RedTrend from "@/app/icons/trendRed";
import GreenTrend from "@/app/icons/trendGreen";
import GrayTrend from "@/app/icons/trendGray";

export const useGraphTrend = (value) => {
  switch (value) {
    case "Positive":
      return <GreenTrend />;
    case "Negative":
      return <RedTrend />;
    case "Neutral":
      return <GrayTrend />;
    default:
      return null;
  }
};

export function useIntToString(value) {
  if (value === undefined || value === null || value === "") return null;
  if (value < 10000) return value;
  var suffixes = ["", "k", "m", "b", "t"];
  var suffixNum = Math.floor(("" + value).length / 3);
  var shortValue = parseFloat(
    (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
  );
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
}
