import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import * as S from "./style";

interface ProductItemProps {
  title: string;
  description: string;
  startPrice: number;
  startDate?: string;
  thumbnail: string;
  idCategory : number;
  id: number;
}

function ProductItem ({
  title,
  description,
  startPrice,
  startDate,
  thumbnail,
  idCategory,
  id
}: ProductItemProps) {
  const now = moment(new Date());
  const start = startDate? new Date(+startDate):"";

  const duration = moment.duration(moment(start).diff(now));

  const remainingDay = duration && duration.days();
  const remainingHours = duration && duration.hours();

  return (
    <S.Wrapper >
      <S.ImageWrapper>
        <img src={thumbnail} alt={title} />
      </S.ImageWrapper>
      <S.Description>
        <Link to={`/product/${idCategory}/${id}`}
              style={{ color: 'inherit', textDecoration: 'inherit'} }>
          <h3> {title} </h3></Link>
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
