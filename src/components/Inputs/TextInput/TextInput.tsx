import React from "react";
import styled from "styled-components";
import { device } from "../../../constans/device";

const TextInputContainer = styled.div`
  display: grid;
  grid-template-columns: 135px 1fr;
  align-items: center;

  @media (max-width: ${device.mobile}) {
    grid-template-columns: none;
    gap: 6px;
  }
`;

const Input = styled.input`
  background: #d9d9d9;
  color: ${(props) => props.theme.fontPrimary};
  margin: 0;
  padding: 0 8px;
  overflow: auto;

  border: ${(props) => props.theme.colorSecondary} 4px solid;
  border-radius: 10px;
  font-size: 24px;
  line-height: 36px;

  @media (max-width: ${device.mobile}) {
    line-height: 32px;
  }
`;

const Label = styled.label`
  color: ${(props) => props.theme.fontPrimary};
  margin: 0;
  padding: 0;

  font-size: 24px;
  line-height: 44px;
  font-weight: 800;
  text-align: left;

  @media (max-width: ${device.mobile}) {
    line-height: 40px;
  }
`;

type Props = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = (props: Props) => {
  const { label, ...inputProps } = props;
  return (
    <TextInputContainer>
      <Label>{label}</Label>
      <Input {...inputProps} />
    </TextInputContainer>
  );
};
