import Props from "./FormButton"
import styled from "styled-components";

interface Props {
  label?: string,
  customization?: {
    backgroundColor?: string;
    textColor?: string;
    width?: string
  }
}

export const Content = styled.button<Props>`
  background-color: ${props => props.customization?.backgroundColor};
  color: ${props => props.customization?.textColor};
  width: ${props => props.customization?.width};
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  font-family: 'RobotoRegular';
  font-style: normal;
  font-size: 18px;
  line-height: 21px;

  transition: all ease 0.1s;

  :hover {
    cursor: pointer;
    filter: contrast(120%);
  }
`