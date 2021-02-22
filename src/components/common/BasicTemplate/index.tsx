import React from "react";
import * as S from './style';

interface Props {
  children: React.ReactNode
}

function BasicTemplate({ children }: Props) {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

export default BasicTemplate;
