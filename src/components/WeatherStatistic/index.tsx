import waterdrops from "../../assets/icon/white-waterdrops.svg";
import shower from "../../assets/icon/white-shower.svg";
import wind from "../../assets/icon/white-wind.svg";

import * as C from "./styles";

const STATISTICS = {
  wind: {
    icon: wind,
    unity: "km/h",
  },
  humidity: {
    icon: waterdrops,
    unity: "%",
  },
  rain: {
    icon: shower,
    unity: "%",
  },
} as const;

export interface WeatherStatisticProps {
  type: keyof typeof STATISTICS;
  value: number;
}

export const WeatherStatistic = ({ type, value }: WeatherStatisticProps) => {
  const { icon, unity } = STATISTICS[type];

  return (
    <C.Container>
      <img src={icon} alt="" />
      <p>{type}</p>
      <p>
        {value} <span>{unity}</span>
      </p>
    </C.Container>
  );
};
