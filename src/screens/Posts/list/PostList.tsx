import React from "react";
import styled from "styled-components";
import { ContentLayout } from "../../../components/Layouts/ContentLayout";
import { device } from "../../../constans/device";
import { useAppDispatch } from "../../../hooks/redux/useAppDispatch";
import { useAppSelector } from "../../../hooks/redux/useAppSelector";
import { fetchPosts } from "../../../store/posts/posts.slice";
import { fetchUserById } from "../../../store/users/users.slice";
import { PostComponent } from "./components/PostComponent";

const PostsListContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, fit-content(467px));
  padding: 20px 37px;
  gap: 20px 13px;

  @media (max-width: ${device.mobile}) {
    padding: 15px;
    grid-template-columns: 1fr;
  }
`;

export const PostList = () => {
  const { postList, initial } = useAppSelector((state) => state.post);
  const { users } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!initial) dispatch(fetchPosts());
  }, []);

  React.useEffect(() => {
    if (initial) {
      const allUsers = postList.map((post) => post.userId);
      const filteredUsers = [...new Set(allUsers)];
      filteredUsers.forEach((id) => {
        if (!users[id]) dispatch(fetchUserById(id));
      });
    }
  }, [initial]);

  return (
    <ContentLayout>
      <PostsListContainer>
        {postList?.map((post) => (
          <PostComponent key={post.id} post={post} user={users[post.userId]} />
        ))}
      </PostsListContainer>
    </ContentLayout>
  );
};
