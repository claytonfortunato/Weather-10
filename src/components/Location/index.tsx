import locationPin from "../../assets/icon/location-pin.svg";
import * as C from "./styles";

export const Location = () => {
  return (
    <C.Container>
      <img src={locationPin} alt="" />
      <p>São Paulo, SP</p>
    </C.Container>
  );
};
