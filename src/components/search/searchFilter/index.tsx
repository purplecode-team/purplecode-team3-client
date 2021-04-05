import React, { useState } from "react";
import { registerLocale } from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import * as S from "./style";
import "react-datepicker/dist/react-datepicker.css";

function Filter() {
  const [startPrice, setStartPrice] = useState("");
  const [endPrice, setEndPrice] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(startDate);
  const [readOnly, setReadOnly] = useState(true);

  registerLocale("ko", ko);


  const onFilter = () => {
    console.log(`[price] : ${startPrice} ~ ${endPrice}`);
    console.log(`[date] : ${startDate} ~ ${endDate}`);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const selectedPrice = value;

    if (selectedPrice === "inputPrice") {
      setReadOnly(false);
    } else {
      setReadOnly(true);
    }
    console.log(selectedPrice);
  };

  const validInput = (value: string) => {
    value.replace(/[^\d]+/g, "");
    const regexp = /^[0-9]*$/;
    if (!regexp.test(value)) {
      alert("숫자만 입력 가능합니다!");
      setStartPrice("0");
      setEndPrice("0");
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    validInput(value);
    if (name === "minPrice") {
      setStartPrice(value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    } else {
      setEndPrice(value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
  };

  return (
    <S.FilterWrapper
    >
      <S.FilterHeader>
        <S.CancelIcon />
        <S.Title>필 터</S.Title>
      </S.FilterHeader>

      <S.SubTitle>경매 시작가</S.SubTitle>
      <S.Hr />

      <div>
        <S.RadioBtnBox>
          <S.RadioBtn
            type="radio"
            name="startPrice"
            onChange={onChange}
            value="all"
          />
          <S.RadioLabel>전체</S.RadioLabel>
        </S.RadioBtnBox>

        <S.RadioBtnBox>
          <S.RadioBtn
            type="radio"
            name="startPrice"
            onChange={onChange}
            value="3to5"
          />
          <S.RadioLabel>3만원 ~ 5만원</S.RadioLabel>
        </S.RadioBtnBox>

        <S.RadioBtnBox>
          <S.RadioBtn
            type="radio"
            name="startPrice"
            onChange={onChange}
            value="6to12"
          />
          <S.RadioLabel>6만원 ~ 12만원</S.RadioLabel>
        </S.RadioBtnBox>

        <S.RadioBtnBox>
          <S.RadioBtn
            type="radio"
            name="startPrice"
            onChange={onChange}
            value="inputPrice"
          />
          <S.RadioLabel>직접입력</S.RadioLabel>

          <S.FilterInputBox>
            <S.FilterInput
              type="text"
              name="minPrice"
              placeholder="경매 시작 최저가 "
              value={startPrice}
              readOnly={readOnly}
              onChange={onChangeInput}
            />
            <S.RadioLabel>~</S.RadioLabel>
            <S.FilterInput
              type="text"
              name="maxPrice"
              placeholder="경매 시작 최대가 "
              value={endPrice}
              readOnly={readOnly}
              onChange={onChangeInput}
            />
            <S.RadioLabel>원</S.RadioLabel>
          </S.FilterInputBox>
        </S.RadioBtnBox>
      </div>

      <S.SubTitle>경매 시작 일자</S.SubTitle>
      <S.Hr />

      <div>
        <S.RadioBtnBox>
          <S.RadioBtn type="radio" name="startDate" />
          <S.RadioLabel>전체</S.RadioLabel>
        </S.RadioBtnBox>

        <S.RadioBtnBox>
          <S.RadioBtn type="radio" name="startDate" />
          <S.RadioLabel>오늘</S.RadioLabel>
        </S.RadioBtnBox>

        <S.RadioBtnBox>
          <S.RadioBtn type="radio" name="startDate" />
          <S.RadioLabel>내일</S.RadioLabel>
        </S.RadioBtnBox>

        <S.RadioBtnBox>
          <S.RadioBtn type="radio" name="startDate" />
          <S.RadioLabel>직접입력</S.RadioLabel>

          <S.FilterInputBox>
            <S.AuctionDatePicker
              dateFormat="yyyy년 MM월 dd일"
              selected={startDate}
              locale="ko"
              className="input-datepicker"
              minDate={new Date()}
              closeOnScroll
              onChange={(date: Date) => date && setStartDate(date)}
            />
            <S.RadioLabel>~</S.RadioLabel>
            <S.AuctionDatePicker
              dateFormat="yyyy년 MM월 dd일"
              selected={endDate}
              locale="ko"
              className="input-datepicker"
              minDate={startDate}
              closeOnScroll
              onChange={(date: Date) => date && setEndDate(date)}
            />
          </S.FilterInputBox>
        </S.RadioBtnBox>
      </div>

      <S.FilterBtn onClick={onFilter}>필터 적용하기</S.FilterBtn>
    </S.FilterWrapper>
  );
}

export default Filter;
