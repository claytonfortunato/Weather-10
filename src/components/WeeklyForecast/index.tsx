import { Card } from "../Card";
import { WeatherForecast, WeatherForecastProps } from "../WeatherForecast";

import * as C from "./styles";

export const WeeklyForecast = () => {
  const weeklyForecast: WeatherForecastProps[] = [
    {
      day: "Tomorrow",
      weather: "cloudy",
      minTemperature: 16,
      maxTemperature: 21,
    },
    {
      day: "Friday",
      weather: "sunny",
      minTemperature: 20,
      maxTemperature: 28,
    },
    {
      day: "Saturday",
      weather: "shower",
      minTemperature: 21,
      maxTemperature: 25,
    },
    {
      day: "Sunday",
      weather: "thunderstorm",
      minTemperature: 14,
      maxTemperature: 20,
    },
    {
      day: "Monday",
      weather: "mostlyCloudy",
      minTemperature: 24,
      maxTemperature: 18,
    },
  ];

  return (
    <Card padding="lg" gridArea="forecast">
      <C.Container>
        {weeklyForecast.map((forecast) => {
          return <WeatherForecast {...forecast} key={forecast.day} />;
        })}
      </C.Container>
    </Card>
  );
};
