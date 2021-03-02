import React, { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiBell, BiPurchaseTagAlt } from "react-icons/bi";
import HamburgerMenu from "./HamburgerMenu";
import * as S from "./style";

function HeaderIcon(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const onToggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = () => setMenuOpen(false);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, setMenuOpen]);

  return (
    <div>
      <S.IconContainer>
        <Link to="/alarm">
          <BiBell color="white"  size="22"/>
        </Link>
        <Link to="/basket">
          <BiPurchaseTagAlt color="white"  size="22" style={{paddingLeft: "4px"}}/>
        </Link>
        <GiHamburgerMenu
          color="white"
          onClick={onToggleMenu}
          cursor="pointer"
          size="22"
          style={{paddingLeft: "4px"}}
        />
      </S.IconContainer>
      <HamburgerMenu menuOpen={menuOpen} closeMenu={closeMenu}  />
    </div>
  );
}

export default HeaderIcon;
