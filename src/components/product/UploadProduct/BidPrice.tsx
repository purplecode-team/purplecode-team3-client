import React from "react";
import NumberFormat from "react-number-format";
import * as S from "./style";

interface BidPriceProps {
  bidPrice: number;
  onChangeBidPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function BidPrice({ bidPrice, onChangeBidPrice }: BidPriceProps) {
  return (
    <div>
      <S.Label>호가</S.Label>
      <NumberFormat
        thousandSeparator
        prefix="₩"
        value={bidPrice}
        onChange={onChangeBidPrice}
        style={{
          border: "1px solid #C2C2C2",
          backgroundColor: "rgba(194, 194, 194, 0.5)",
          width: "130px",
          height: "28px",
          outline: "none",
          color: "#838383",
          fontSize: "0.8rem",
        }}
      />
    </div>
  );
}

export default BidPrice;
