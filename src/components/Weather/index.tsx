import { Card } from "../Card";
import { Location } from "../Location";

import * as C from "./styles";

const Weather = () => {
  return (
    <Card padding="sm" gridArea="now">
      <C.Container>
        <Location />
      </C.Container>
    </Card>
  );
};

export default Weather;
