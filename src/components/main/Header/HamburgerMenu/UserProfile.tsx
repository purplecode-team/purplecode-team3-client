import React from "react";
import { useSelector } from "react-redux";
import dummy from "../dummyUser.json";
import * as S from "./style";
import { RootState } from "../../../../lib/redux/store";

export interface User {
  id: number;
  nickname: string;
  profilePath: string;
}

function UserProfile() {
  const user = useSelector((state: RootState) => state.user.token);

  return (
    <div>
      {user &&
        dummy.user.map(({ id, nickname, profilePath }: User) => (
          <S.ProfileContainer key={id.toString(10)}>
            <S.UserImg src={profilePath} alt={id.toString(10)} />
            <S.NickName>{nickname} 님</S.NickName>
          </S.ProfileContainer>
        ))}
    </div>
  );
}

export default UserProfile;
