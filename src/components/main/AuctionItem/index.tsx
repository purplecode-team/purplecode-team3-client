import React from "react";
import moment from "moment";
import * as S from "./style";

interface AuctionItemProps {
  title: string;
  description: string;
  startPrice: number;
  startDate?: string;
  thumbnail: string;
}

const AuctionItem = ({
  title,
  description,
  startPrice,
  startDate,
  thumbnail,
}: AuctionItemProps) => {
  const now = moment(new Date());
  const duration = startDate
    ? moment.duration(moment(startDate).diff(now))
    : "";

  const remainingDay = duration && duration.days();
  const remainingHours = duration && duration.hours();

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <img src={thumbnail} alt={title} width={120} height={120} />
        <S.StartTimeLabel>
          {remainingDay}일 {remainingHours}시간 남음
        </S.StartTimeLabel>
      </S.ImageWrapper>
      <h3> {title} </h3>
      <S.PriceDescription>
        시작가 <span> {startPrice}~ </span>
      </S.PriceDescription>
      <p> {description} </p>
    </S.Wrapper>
  );
};

AuctionItem.defaultProps = {
  startDate: "",
};

export default AuctionItem;
