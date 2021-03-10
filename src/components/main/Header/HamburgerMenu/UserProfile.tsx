import React from "react";
import dummy from "../dummyUser.json";
import * as S from "./style";

export interface User {
  id: number;
  nickname: string;
  profilePath: string;
}

function UserProfile() {
  return (
    <div>
      {dummy.user &&
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
