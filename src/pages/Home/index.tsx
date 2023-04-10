import { AirQuality } from "../../components/AirQuality";
import Weather from "../../components/Weather";

import * as C from "./styles";

export const Home = () => {
  return (
    <C.Container>
      <Weather />
      <AirQuality />
    </C.Container>
  );
};
