import React, { useCallback, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import * as S from "./style";
import { CREATE_ACCOUNT } from "../../lib/graphql/user";
import useInput from "../../hooks/useInput";

function SignUp() {
  const history = useHistory();
  const [email, onChangeEmail, setEmail] = useInput("");
  const [nickname, onChangeNickname, setNickname] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const [
    confirmPassword,
    onChangeConfirmPassword,
    setConfirmPassword,
  ] = useInput("");
  const [bio, onChangeBio, setBio] = useInput("");
  const [pwCheck, setPwCheck] = useState(true);
  const [signUpMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email,
      nickname,
      password,
      bio,
    },
  });

  useEffect(() => {
    if (confirmPassword !== password) {
      setPwCheck(false);
    } else {
      setPwCheck(true);
    }
  }, [confirmPassword]);

  const onReset = useCallback(() => {
    setEmail("");
    setNickname("");
    setPassword("");
    setConfirmPassword("");
    setBio("");
  }, [setEmail, setNickname, setPassword, setConfirmPassword, setBio]);

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      if (email.length !== 0 && nickname.length !== 0 && pwCheck) {
        const { data: createAccount } = await signUpMutation();
        if (createAccount) {
          alert("정상적으로 가입되었습니다!");
          onReset();
          history.push("/");
        }
      } else {
        alert("입력란을 확인해주세요!");
      }
    } catch (error) {
      alert(error.toString().slice(7));
    }
  }, []);

  return (
    <S.SignUpForm onSubmit={onSubmit}>
      <S.Title> 회원가입 </S.Title>

      <S.Label>이메일</S.Label>
      <S.Input
        name="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
        placeholder="사용하실 이메일을 입력해주세요."
        required
      />

      <S.Label>닉네임</S.Label>
      <S.Input
        name="nickname"
        type="text"
        value={nickname}
        onChange={onChangeNickname}
        placeholder="사용하실 닉네임을 입력해주세요."
        required
      />

      <S.Label>비밀번호</S.Label>
      <S.Input
        name="password"
        type="password"
        value={password}
        onChange={onChangePassword}
        placeholder="사용하실 비밀번호를 입력해주세요."
        required
      />

      <S.Label>
        비밀번호 재확인
        {!pwCheck && <S.Message>비밀번호가 일치하지 않습니다.</S.Message>}
      </S.Label>

      <S.Input
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={onChangeConfirmPassword}
        placeholder="비밀번호를 다시 입력해주세요."
        required
      />

      <S.Label>바이오</S.Label>
      <S.Input
        name="bio"
        type="text"
        value={bio}
        onChange={onChangeBio}
        placeholder="사용하실 을 입력해주세요."
      />

      <S.SignUpButton type="submit">회원가입</S.SignUpButton>
    </S.SignUpForm>
  );
}
export default SignUp;
