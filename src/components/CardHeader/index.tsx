import { ReactNode } from "react";

import * as C from "./styles";

interface CardHeaderProps {
  icon: ReactNode;
  title: string;
}

const CardHeader = ({ icon, title }: CardHeaderProps) => {
  return (
    <C.Container>
      {icon}
      <span>{title}</span>
    </C.Container>
  );
};

export default CardHeader;
