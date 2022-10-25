import styled from "styled-components"
import { IButtonProps } from "."

export const Container = styled.button<IButtonProps>`
  height: ${(props) => (props.size === "mid" ? "32px" : "48px")};

  padding: 0 20px;

  border-radius: 4px;
  border: none;

  color: #fff;

  cursor: pointer;

  background-color: ${(props) => `var(--${props.color})`};
`
