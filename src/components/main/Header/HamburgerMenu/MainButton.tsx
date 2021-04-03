import React from "react";
import { useSelector } from "react-redux";
import * as S from "./style";
import { RootState } from "../../../../lib/redux/store";

function MainButton() {
  const user = useSelector((state: RootState) => state.user.token);
  return (
    <S.MainButton>
      {user ? (
        <S.StyleLink to="/myaution">나의 경매 바로가기</S.StyleLink>
      ) : (
        <S.StyleLink to="/login">로그인 하러 가기</S.StyleLink>
      )}
    </S.MainButton>
  );
}

export default MainButton;
