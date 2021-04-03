import React from "react";
import NumberFormat from "react-number-format";
import * as S from "./style";

interface StartPriceProps {
  startPrice: number;
  onChangeStartPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function StartPrice({ startPrice, onChangeStartPrice }: StartPriceProps) {
  return (
    <S.StartPriceContainer>
      <S.StartPriceLabel>판매시작가</S.StartPriceLabel>
      <NumberFormat
        id="startPrice"
        thousandSeparator
        prefix="₩"
        value={startPrice}
        onChange={onChangeStartPrice}
        style={{
          border: "1px solid #C2C2C2",
          backgroundColor: "rgba(194, 194, 194, 0.5)",
          width: "51.8%",
          height: "28px",
          outline: "none",
          color: "#838383",
          fontSize: "0.8rem",
        }}
      />
    </S.StartPriceContainer>
  );
}

export default StartPrice;
