import React from "react";
import * as S from "./style";
import Logo from "./logo";
import HeaderIcon from "./headerIcon";


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
