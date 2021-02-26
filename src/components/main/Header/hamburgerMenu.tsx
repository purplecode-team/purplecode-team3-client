import React from "react";
import * as S from "./style";

interface MenuProps {
  menuOpen: boolean;
  closeMenu: () => void;
}

function HamburgerMenu({ menuOpen, closeMenu }: MenuProps) {
  return (
    <S.HamburgerContainer style={{ display: menuOpen ? "block" : "none" }}>
      <button type="button" onClick={closeMenu}>
        X
      </button>
      <div>hi</div>
    </S.HamburgerContainer>
  );
}

export default HamburgerMenu;
