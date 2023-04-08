import * as C from "./styles";

interface TemperaturesProps {
  min: number;
  max: number;
}

export const Temperatures = ({ min, max }: TemperaturesProps) => {
  return (
    <C.Container>
      {max}° <span>{min}°</span>
    </C.Container>
  );
};
