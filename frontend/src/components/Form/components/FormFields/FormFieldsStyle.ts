import styled from "styled-components";

export const FieldsFormUser = styled.div`

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 4px;
  font-weight: 500;
  max-width: 100%;
  font-size: 18px;
  font-family: 'RobotoBold';

  input {
    height: 44px;
    width: 100%;
    border: none;
    padding: 0px 14px;
    font-size: 18px;
    background-color: white;
    flex-wrap: wrap;
  }
  input:focus{
    outline: 1px black solid;
  }

  //618px
`