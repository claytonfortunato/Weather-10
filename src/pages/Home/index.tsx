import { AirQuality } from "../../components/AirQuality";
import Suntime from "../../components/Suntime";
import Weather from "../../components/Weather";
import { WeeklyForecast } from "../../components/WeeklyForecast";

import * as C from "./styles";

export const Home = () => {
  return (
    <C.Container>
      <Weather />
      <AirQuality />
      <Suntime />
      <WeeklyForecast />
    </C.Container>
  );
};
