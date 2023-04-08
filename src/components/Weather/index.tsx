import { Card } from "../Card";
import { Location } from "../Location";
import { Temperatures } from "../Temperatures";

import * as C from "./styles";

const Weather = () => {
  return (
    <Card padding="sm" gridArea="now">
      <C.Container>
        <Location />
        <C.ContainerTemp>
          <span>18</span>
          <Temperatures min={22} max={16} />
        </C.ContainerTemp>
      </C.Container>
    </Card>
  );
};

export default Weather;
