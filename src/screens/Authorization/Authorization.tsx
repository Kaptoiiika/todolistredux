import React from "react";
import styled from "styled-components";
import { SubmitButton } from "../../components/Buttons/submit/SubmitButton";
import { TextInput } from "../../components/Inputs/TextInput/TextInput";
import { BoxContainer } from "../../components/Layouts/BoxContainer";
import { device } from "../../constans/device";
import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { useAppSelector } from "../../hooks/redux/useAppSelector";
import { clientLogin } from "../../store/clientProfile/clientProfile.slice";

const AuthorizationLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 480px;

  @media (max-width: ${device.mobile}) {
    position: inherit;
    display: flex;
    justify-content: center;
    align-items: center;

    transform: inherit;
  }
`;

const AuthorizationContainer = styled(BoxContainer)`
  display: flex;
  flex-direction: column;
  padding: 25px 20px;

  @media (max-width: ${device.mobile}) {
    padding: 4px 35px 25px 35px;
  }
`;

const Title = styled.span`
  color: ${(props) => props.theme.colorSecondary};

  font-size: 24px;
  line-height: 70px;
  text-align: center;
  font-weight: 800;
  margin: 0;

  @media (max-width: ${device.mobile}) {
    line-height: 45px;
  }
`;

const AuthorizationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${device.mobile}) {
    align-items: stretch;
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-top: 25px;

  @media (max-width: ${device.mobile}) {
    margin-top: 0;
    gap: 13px;
  }
`;

const ErrorText = styled.span`
  color: ${(props) => props.theme.errorText};

  font-size: 24px;
  text-align: center;
  font-weight: 800;
  margin-top: 25px;
`;

export const Authorization = () => {
  const { error } = useAppSelector((state) => state.clientProfile);
  const dispatch = useAppDispatch();

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const hundleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value);
  };

  const hundleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const hundleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(clientLogin(login, password));
  };

  return (
    <AuthorizationLayout>
      <AuthorizationContainer>
        <Title>Autorization</Title>
        <AuthorizationForm onSubmit={hundleSumbit}>
          <Inputs>
            <TextInput
              required
              type="text"
              onChange={hundleChangeLogin}
              label="login"
            />
            <TextInput
              required
              type="password"
              onChange={hundleChangePassword}
              label="password"
            />
          </Inputs>
          {error && <ErrorText>{error}</ErrorText>}
          <SubmitButton>Submit</SubmitButton>
        </AuthorizationForm>
      </AuthorizationContainer>
    </AuthorizationLayout>
  );
};
