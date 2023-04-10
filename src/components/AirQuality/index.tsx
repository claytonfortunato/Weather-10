import leaf from "../../assets/icon/leaf.svg";

import { Card } from "../Card";
import CardHeader from "../CardHeader";
import { AirQualityInfo, AirQualityInfoProps } from "../AirQualityInfo";

import * as C from "./styles";

export const AirQuality = () => {
  const airInfos: AirQualityInfoProps[] = [
    {
      info: "PM2.5",
      value: 12.9,
    },
    {
      info: "PM10",
      value: 12.9,
    },
    {
      info: "SO2",
      value: 2.1,
    },
    {
      info: "NO2",
      value: 1.4,
    },
    {
      info: "O3",
      value: 21.2,
    },
    {
      info: "CO",
      value: 0.7,
    },
  ];

  return (
    <Card gridArea="air">
      <C.Container>
        <CardHeader title="Air Quality" icon={<img src={leaf} />} />
        <C.Index>
          <span>Good</span>
          <span>21</span>
        </C.Index>
        <C.Infos>
          {airInfos.map((info) => {
            return <AirQualityInfo {...info} key={info.info} />;
          })}
        </C.Infos>
      </C.Container>
    </Card>
  );
};
