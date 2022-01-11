import React from "react";
import { ButtonStyled } from "./Button.style";

const Button: React.FC<{ content: string }> = ({ content }) => {
  return <ButtonStyled>{content}</ButtonStyled>;
};

export default Button;
