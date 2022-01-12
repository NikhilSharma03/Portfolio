import React from "react";
import { ContainerComponent } from "./Container.style";

const Container: React.FC<{ id: string }> = ({ children, id }) => {
  return <ContainerComponent id={id}>{children}</ContainerComponent>;
};

export default Container;
