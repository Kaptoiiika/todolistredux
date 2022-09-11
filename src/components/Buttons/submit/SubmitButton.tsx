import styled from "styled-components";

export const SubmitButton = styled.button`
  background: ${(props) => props.theme.colorPrimary};
  color: ${(props) => props.theme.fontPrimary};

  padding: 10px;
  min-width: 215px;
  margin-top: 25px;
  border: 0;
  border-radius: 10px;

  font-size: 24px;
  line-height: 24px;
  font-weight: 800;

  cursor: pointer;
`;
