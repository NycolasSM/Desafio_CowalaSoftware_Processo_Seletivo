import styled from "styled-components";

export const FieldsFormUser = styled.div`

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 4px;
  font-weight: 500;
  font-size: 18px;
  font-family: 'RobotoBold';

  input {
    height: 44px;
    border: none;
    padding: 0px 14px;
    font-size: 18px;
  }
  input:focus{
    outline: 1px black solid;
  }
`