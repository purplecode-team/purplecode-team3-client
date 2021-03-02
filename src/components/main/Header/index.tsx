import React from "react";
import * as S from "./style";
import Logo from "./Logo";
import HeaderIcon from "./HeaderIcon"


function Header(): JSX.Element {
  return (
    <S.Container>
      <S.HeaderContents>
        <Logo />
        <HeaderIcon />
      </S.HeaderContents>
    </S.Container>);
}

export default Header;
