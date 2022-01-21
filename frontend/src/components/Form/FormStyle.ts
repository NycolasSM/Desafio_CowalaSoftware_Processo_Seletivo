import styled from "styled-components";

interface Props {
  height?: string,
  width?: string,
  margin?: string,
  alignitems?: string,
  justifycontent?: string,
}

export const Form = styled.form<Props>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: #EDEDED;
  margin: 1.5vw auto;
  padding: 0px 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`