import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useMutation } from "@apollo/client";
import useInput from "../../hooks/useInput";
import * as S from "./style";
import { loginSuccessActionCreator } from "../../lib/redux/User/UserSlice";
import { LOGIN_USER } from "../../lib/graphql/user";
import { RootState } from "../../lib/redux/store";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const [checked, onChangeChecked] = useInput(false);
  const user = useSelector((state: RootState) => state.user.token);
  const [loginMutation] = useMutation(LOGIN_USER, {
    variables: {
      email,
      password,
    },
  });

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const { data: loginUser } = await loginMutation();
      if (loginUser) {
        alert("로그인 되었습니다.");
        dispatch(loginSuccessActionCreator(loginUser));
        history.push("/");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      alert("로그인에 실패했습니다.");
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (checked && user) {
      try {
        window.localStorage.setItem("loginUser", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
    if (!checked && user) {
      try {
        window.sessionStorage.setItem("loginUser", JSON.stringify(user));
      } catch (e) {
        console.log("sessionStorage is not working");
      }
    }
  }, [checked, user]);

  return (
    <div>
      <S.Title>로그인</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.InputContainer>
          <S.Label>이메일</S.Label>
          <S.Input
            type="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일을 입력하세요"
            required
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.Label>비밀번호</S.Label>
          <S.Input
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호를 입력하세요"
            required
          />
        </S.InputContainer>
        <S.TextContainer>
          <S.StyledLink to="/">이메일/비밀번호 찾기</S.StyledLink>
          <S.StyledLink to="/signup">회원가입</S.StyledLink>
        </S.TextContainer>
        <S.LoginButton type="submit" disabled={!email || !password}>
          로그인
        </S.LoginButton>
        <S.CheckBoxLabel>
          <S.CheckBox
            type="checkbox"
            checked={checked}
            onChange={onChangeChecked}
          />
          로그인 상태 유지
        </S.CheckBoxLabel>
      </S.Form>
    </div>
  );
}

export default Login;
