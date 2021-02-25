import React from "react";
import * as S from "./style";
import dummy from "./dummy.json";
import AuctionItem from "../AuctionItem";

export interface Image {
  id: number;
  imagePath: string;
}

export interface Auction {
  id: number;
  title: string;
  description: string;
  startPrice: number;
  startDate: string;
  images: Image[];
}

const TrendingAuctions = () => (
  <S.Container>
    <S.Title>
      <span> HOT! </span> 곧 시작하는 경매
    </S.Title>
    <S.AuctionsContainer>
      {dummy.data &&
        dummy.data.map(
          ({
            id,
            title,
            description,
            startPrice,
            startDate,
            images,
          }: Auction) => (
            <AuctionItem
              key={id}
              title={title}
              description={description}
              startPrice={startPrice}
              startDate={startDate}
              thumbnail={images[0].imagePath}
            />
          )
        )}
    </S.AuctionsContainer>
  </S.Container>
);

export default TrendingAuctions;
