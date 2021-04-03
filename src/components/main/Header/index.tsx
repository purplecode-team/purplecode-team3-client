import React from "react";
import * as S from "./style";
import Index from "./Logo";
import HeaderIcon from "./HeaderIcon";

function Header(): JSX.Element {
  return (
    <S.Container>
      <S.HeaderContents>
        <Index />
        <HeaderIcon />
      </S.HeaderContents>
    </S.Container>
  );
}

export default Header;
