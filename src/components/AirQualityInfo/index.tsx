import * as C from "./styles";

export interface AirQualityInfoProps {
  info: string;
  value: number;
}

export const AirQualityInfo = ({ info, value }: AirQualityInfoProps) => {
  return (
    <C.Container>
      <span>{value}</span>
      <span>{info}</span>
    </C.Container>
  );
};
