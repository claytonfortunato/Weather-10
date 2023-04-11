import cloudy from "../../assets/icon/color-cloudy.svg";
import mostlyCloudy from "../../assets/icon/color-mostly-cloudy.svg";
import shower from "../../assets/icon/color-shower.svg";
import sunny from "../../assets/icon/color-sunny.svg";
import thunderstorm from "../../assets/icon/color-thunderstorm.svg";

import { Temperatures } from "../Temperatures";

import * as C from "./styles";

const WEATHER = {
  cloudy,
  mostlyCloudy,
  shower,
  sunny,
  thunderstorm,
} as const;

export interface WeatherForecastProps {
  day: string;
  weather: keyof typeof WEATHER;
  minTemperature: number;
  maxTemperature: number;
}

export const WeatherForecast = ({
  day,
  weather,
  minTemperature,
  maxTemperature,
}: WeatherForecastProps) => {
  return (
    <C.Container>
      <span>{day}</span>
      <img src={WEATHER[weather]} alt="" />
      <Temperatures min={minTemperature} max={maxTemperature} />
    </C.Container>
  );
};
