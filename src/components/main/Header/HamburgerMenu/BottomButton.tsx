import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutSuccessActionCreator } from "../../../../lib/redux/User/UserSlice";
import dummy from "../dummyUser.json";
import * as S from "./style";

interface MenuProps {
  closeMenu: () => void;
}

function BottomButton({ closeMenu }: MenuProps) {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutSuccessActionCreator());
    closeMenu();
  }, []);

  return (
    <S.BottomButtonContainer>
      {dummy.user ? (
        <S.LogoutButton type="button" onClick={onLogout}>
          로그아웃
        </S.LogoutButton>
      ) : (
        <S.SignUpButton to="/signup">회원가입</S.SignUpButton>
      )}
    </S.BottomButtonContainer>
  );
}

export default BottomButton;
