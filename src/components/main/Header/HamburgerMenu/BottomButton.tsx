import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccessActionCreator } from "../../../../lib/redux/User/UserSlice";
import * as S from "./style";
import { RootState } from "../../../../lib/redux/store";

interface MenuProps {
  closeMenu: () => void;
}

function BottomButton({ closeMenu }: MenuProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.token);

  const onLogout = useCallback(() => {
    dispatch(logoutSuccessActionCreator());
    if (localStorage.getItem("loginUser")) {
      window.localStorage.removeItem("loginUser");
    }
    if (sessionStorage.getItem("loginUser")) {
      window.sessionStorage.removeItem("loginUser");
    }
    closeMenu();
  }, []);

  return (
    <S.BottomButtonContainer>
      {user ? (
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
