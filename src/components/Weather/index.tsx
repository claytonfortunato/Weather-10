import { Card } from "../Card";
import { Location } from "../Location";
import { Temperatures } from "../Temperatures";
import { WeatherStatistic, WeatherStatisticProps } from "../WeatherStatistic";

import * as C from "./styles";

const Weather = () => {
  const weatherStatistics: WeatherStatisticProps[] = [
    {
      type: "wind",
      value: 17,
    },
    {
      type: "humidity",
      value: 31,
    },
    {
      type: "rain",
      value: 10,
    },
  ];

  return (
    <Card padding="sm" gridArea="now">
      <C.Container>
        <Location />
        <C.ContainerTemp>
          <span>18</span>
          <Temperatures min={22} max={16} />
        </C.ContainerTemp>
        <C.StatisticsContainer>
          {weatherStatistics.map((statistic) => {
            return <WeatherStatistic {...statistic} key={statistic.type} />;
          })}
        </C.StatisticsContainer>
      </C.Container>
    </Card>
  );
};

export default Weather;
