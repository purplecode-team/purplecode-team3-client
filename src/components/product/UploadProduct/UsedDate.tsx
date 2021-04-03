import React from "react";
import * as S from "./style";

interface UsedDateProps {
  usedDate: number;
  onChangeUsedDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function UsedDate({ usedDate, onChangeUsedDate }: UsedDateProps) {
  return (
    <S.PeriodContainer>
      <S.Label>사용기간</S.Label>
      <S.PeriodNumberContainer>
        약
        <S.PeriodNumberInput
          type="number"
          value={usedDate}
          onChange={onChangeUsedDate}
        />
        개월
      </S.PeriodNumberContainer>
    </S.PeriodContainer>
  );
}

export default UsedDate;
