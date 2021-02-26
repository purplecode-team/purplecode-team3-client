import React from "react";
import { GrClose } from "react-icons/gr";
import * as S from "./style";
import dummy from "./dummyUser.json";
import { MenuCategory } from "./interface";

interface MenuProps {
  menuOpen: boolean;
  closeMenu: () => void;
}

export interface User {
  id: number;
  nickname: string;
  profilePath: string;
}

export interface Menu {
  link: string;
  text: string;
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
        {dummy.user &&
          dummy.user.map(({ id, nickname, profilePath }: User) => (
            <S.ProfileContainer>
              <S.UserImg src={profilePath} alt={id.toString(10)} />
              <S.NickName>{nickname} 님</S.NickName>
            </S.ProfileContainer>
          ))}
        {dummy.user ? (
          <S.OrangeButton>
            <S.StyleLink to="/myaution">나의 경매 바로가기</S.StyleLink>
          </S.OrangeButton>
        ) : (
          <S.OrangeButton>
            <S.StyleLink to="/login">로그인 하러 가기</S.StyleLink>
          </S.OrangeButton>
        )}
        <S.MenuTextContainer>
          {MenuCategory.map(({ link, text }: Menu) => (
            <S.MenuText to={link}>{text}</S.MenuText>
          ))}
        </S.MenuTextContainer>
        <S.BottomButtonContainer>
          {dummy.user ? (
            <div>로그아웃</div>
          ) : (
            <S.SignUpButton to="/signup">회원가입</S.SignUpButton>
          )}
        </S.BottomButtonContainer>
      </S.MenuContent>
    </S.HamburgerContainer>
  );
}

export default HamburgerMenu;
