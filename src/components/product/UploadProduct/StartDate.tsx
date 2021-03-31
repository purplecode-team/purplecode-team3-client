import React from "react";
import { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.min.css";
import { ko } from "date-fns/esm/locale";
import * as S from "./style";

interface Props extends Omit<ReactDatePickerProps, "onChange"> {
  onChangeStartDate(date: any): void;
  startDate: any;
}

function StartDate({ onChangeStartDate, startDate }: Props) {
  return (
    <S.StartDateContainer>
      <S.Label style={{ marginRight: "10px" }}>시작 시간</S.Label>
      <S.StyledDatePicker
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="yyyy.MM.dd aa h:mm "
        minDate={new Date()}
        placeholderText="시작 시간 선택"
        selected={startDate}
        onChange={(date) => onChangeStartDate(date)}
        locale={ko}
      />
    </S.StartDateContainer>
  );
}

export default StartDate;
