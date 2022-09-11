import React from "react";
import styled from "styled-components";
import { BoxContainer } from "../../../../components/Layouts/BoxContainer";
import { device } from "../../../../constans/device";
import { IPost } from "../../../../types/Post";
import { IUser } from "../../../../types/User";

const PostContainer = styled(BoxContainer)`
  padding: 25px 20px;

  font-size: 16px;
  font-weight: 800;
  line-height: 19px;

  @media (max-width: ${device.mobile}) {
    padding: 17px 12px 17px 17px;
  }
`;

const PostInfo = styled.div`
  display: flex;
  margin: 0 0 11px 0;
  gap: 22px 30px;

  @media (max-width: ${device.laptop}) {
    flex-direction: column;
    margin: 0 0 8px 0;
  }

  @media (max-width: ${device.mobile}) {
    margin: 0 0 17px 0;
  }
`;

const PostAuthor = styled.div``;
const PostAuthorName = styled.div`
  min-height: 30px;
  margin: 0 0 11px 0;

  @media (max-width: ${device.laptop}) {
    margin: 0 0 8px 0;
  }

  @media (max-width: ${device.mobile}) {
    margin: 0 0 17px 0;
  }
`;

const PostAuthorCompany = styled.div`
  min-height: 30px;
`;

const PostImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;

  @media (max-width: ${device.mobile}) {
    display: none;
  }
`;

const PostTitle = styled.p`
  display: flex;
  align-items: center;
  margin: 0 0 24px 0;
  min-height: 62px;

  @media (max-width: ${device.laptop}) {
    margin: 0 0 8px 0;
  }

  @media (max-width: ${device.mobile}) {
    min-height: 77px;
    margin: 0;
    align-items: flex-start;
  }
`;

const PostBody = styled.span`
  @media (max-width: ${device.mobile}) {
    display: none;
  }
`;

type Props = {
  post: IPost;
  user?: IUser;
};

export const PostComponent = (props: Props) => {
  const { body, title } = props.post;
  const name = props.user?.name || "";
  const companyName = props.user?.company.name || "";

  return (
    <PostContainer>
      <PostInfo>
        <PostImage
        // idk what image need here
          src="https://via.placeholder.com/150/d32776"
          alt="someimage"
        />
        <PostAuthor>
          <PostAuthorName>Autor: {name}</PostAuthorName>
          <PostAuthorCompany>Company: {companyName}</PostAuthorCompany>
        </PostAuthor>
      </PostInfo>
      <PostTitle>Title: {title}</PostTitle>
      <PostBody>{body}</PostBody>
    </PostContainer>
  );
};
