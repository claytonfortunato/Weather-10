import { Card } from "../Card";
import CardHeader from "../CardHeader";

import sunclock from "../../assets/icon/sun-clock.svg";
import suntimeCarft from "../../assets/icon/suntime-chart-draft.png";

import * as C from "./styles";

const Suntime = () => {
  return (
    <Card gridArea="suntime">
      <C.Container>
        <CardHeader title="Suntime" icon={<img src={sunclock} />} />
        <img src={suntimeCarft} alt="" />
      </C.Container>
    </Card>
  );
};

export default Suntime;
