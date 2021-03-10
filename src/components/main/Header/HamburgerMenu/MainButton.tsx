import React from "react";
import dummy from "../dummyUser.json";
import * as S from "./style";

function MainButton() {
  return (
    <S.MainButton>
      {dummy.user ? (
        <S.StyleLink to="/myaution">나의 경매 바로가기</S.StyleLink>
      ) : (
        <S.StyleLink to="/login">로그인 하러 가기</S.StyleLink>
      )}
    </S.MainButton>
  );
}

export default MainButton;
