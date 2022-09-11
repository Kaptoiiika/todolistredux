import React from "react";
import styled from "styled-components";
import { device } from "../../constans/device";
import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { useAppSelector } from "../../hooks/redux/useAppSelector";
import { clientProfileSlice } from "../../store/clientProfile/clientProfile.slice";
import { LogoutButton } from "../Buttons/LogoutButton/LogoutButton";
import { LogoutIcon } from "../icons/LogoutIcon";
import { ContentLayout } from "../Layouts/ContentLayout";

const HeaderBackground = styled.header`
  background: ${(props) => props.theme.colorPrimary};
`;

const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colorPrimary};

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 118px;
`;

const Logo = styled.img`
  width: 281px;
  height: 71px;

  margin-top: 4px;
  margin-left: 15px;
  object-fit: none;
  object-position: left;

  @media (max-width: ${device.mobile}) {
    width: 71px;
  }
`;

const LoginInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const LoginInfoUsername = styled.span`
  max-width: 300px;
  text-overflow: ellipsis;
  margin-right: 34px;
  overflow: hidden;

  font-weight: 800;
  font-size: 24px;
  line-height: 56px;
  text-align: right;

  @media (max-width: ${device.laptop}) {
    display: none;
  }
`;

export const Header = () => {
  const { isAuth, profile } = useAppSelector((state) => state.clientProfile);
  const dispatch = useAppDispatch();

  const hundleLogout = () => {
    dispatch(clientProfileSlice.actions.logoutProfile());
  };

  return (
    <HeaderBackground>
      <ContentLayout>
        <HeaderContainer>
          <Logo src="/assets/images/logo.png" />
          {isAuth && (
            <LoginInfo>
              <LoginInfoUsername>{profile?.username}</LoginInfoUsername>
              <LogoutButton onClick={hundleLogout}>
                <LogoutIcon fill="rgba(39, 86, 156, 1)" />
              </LogoutButton>
            </LoginInfo>
          )}
        </HeaderContainer>
      </ContentLayout>
    </HeaderBackground>
  );
};
