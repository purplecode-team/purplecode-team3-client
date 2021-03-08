import React from "react";
import * as S from "./style";
import { MenuCategory } from "./interface";


export interface Menu {
  link: string;
  text: string;
}

function MenuList() {
  return (
    <S.MenuTextContainer>
      {MenuCategory.map(({ link, text }: Menu) => (
        <S.MenuText key={text}><S.MenuTextLink to={link}>{text}</S.MenuTextLink></S.MenuText>
      ))}
    </S.MenuTextContainer>
  );
}

export default MenuList;