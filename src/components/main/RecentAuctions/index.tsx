import React from "react";
import * as S from "../TrendingAuctions/style";
import dummy from "../TrendingAuctions/dummy.json";
import AuctionItem from "../AuctionItem";
import { Auction } from "../TrendingAuctions";

function RecentActions() {
  return (
    <S.Container>
      <S.Title>
        <span> NEW! </span> 방금 올라온 경매
      </S.Title>
      <S.AuctionsContainer>
        {dummy.data &&
          dummy.data.map(
            ({ id, title, description, startPrice, images }: Auction) => (
              <AuctionItem
                key={id}
                title={title}
                description={description}
                startPrice={startPrice}
                thumbnail={images[0].imagePath}
              />
            )
          )}
      </S.AuctionsContainer>
    </S.Container>
  );
}

export default RecentActions;
