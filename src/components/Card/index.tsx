import { ReactNode } from "react";

import * as C from "./styles";

interface CardProps extends ContainerProps {
  children: ReactNode;
}

export const Card = ({ children, ...rest }: CardProps) => {
  return <C.Container {...rest}>{children}</C.Container>;
};
