import React, { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiBell, BiPurchaseTagAlt } from "react-icons/bi";
import HamburgerMenu from "./hamburgerMenu";
import * as S from "./style";

function HeaderIcon(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const onToggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = () => setMenuOpen(false);

  const location = useLocation();

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <div>
      <S.IconContainer>
        <Link to="/alarm">
          <BiBell color="white" />
        </Link>
        <Link to="/basket">
          <BiPurchaseTagAlt color="white" />
        </Link>
        <GiHamburgerMenu
          color="white"
          onClick={onToggleMenu}
          cursor="pointer"
        />
      </S.IconContainer>
      <HamburgerMenu menuOpen={menuOpen} closeMenu={closeMenu} />
    </div>
  );
}

export default HeaderIcon;
