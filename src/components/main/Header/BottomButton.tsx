import React from "react";
import dummy from "./dummyUser.json";
import * as S from "./style";

function BottomButton()  {
  return (
    <S.BottomButtonContainer>
      {dummy.user ? (
        <div>로그아웃</div>
      ) : (
        <S.SignUpButton to="/signup">회원가입</S.SignUpButton>
      )}
    </S.BottomButtonContainer>
  );
}

export default BottomButton;