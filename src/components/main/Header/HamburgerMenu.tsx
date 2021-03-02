import React from "react";
import { GrClose } from "react-icons/gr";
import * as S from "./style";
import UserProfile from "./UserProfile";
import MenuList from "./MenuList";
import BottomButton from "./BottomButton";
import MainButton from "./MainButton";

interface MenuProps {
  menuOpen: boolean;
  closeMenu: () => void;
}

function HamburgerMenu({ menuOpen, closeMenu }: MenuProps) {
  const menuVariants = {
    open: {
      transform: "translateX(3%)",
    },
    closed: {
      transform: "translateX(103%)",
    },
  };
  const menuTransition = {
    type: "spring",
    duration: 1,
    stiffness: 33,
    delay: 0.1,
  };
  return (
    <S.HamburgerContainer
      initial={false}
      animate={menuOpen ? "open" : "closed"}
      variants={menuVariants}
      transition={menuTransition}
    >
      <GrClose onClick={closeMenu} cursor="pointer" />
      <S.MenuContent>
        <UserProfile />
        <MainButton />
        <MenuList />
        <BottomButton />
      </S.MenuContent>
    </S.HamburgerContainer>
  );
}

export default HamburgerMenu;
