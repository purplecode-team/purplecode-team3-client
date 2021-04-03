import React from "react";
import moment from "moment";
import * as S from "./style";

interface ProductItemProps {
  title: string;
  description: string;
  startPrice: number;
  startDate?: string;
  thumbnail: string;
}

function ProductItem ({
  title,
  description,
  startPrice,
  startDate,
  thumbnail,
}: ProductItemProps) {
  const now = moment(new Date());
  const duration = startDate
    ? moment.duration(moment(startDate).diff(now))
    : "";

  const remainingDay = duration && duration.days();
  const remainingHours = duration && duration.hours();

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <img src={thumbnail} alt={title} />
      </S.ImageWrapper>
      <S.Description>
      <h3> {title} </h3>
        <span>{description} </span>
        시작가  {startPrice}원
      {startDate && (
        <S.StartTimeLabel>
          {remainingDay}일 {remainingHours}시간 남음
        </S.StartTimeLabel>

      )}
      </S.Description>

    </S.Wrapper>
  );
};

ProductItem.defaultProps = {
  startDate: "",
};

export default ProductItem;
