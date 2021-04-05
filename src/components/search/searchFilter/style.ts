import styled from "styled-components";
import { BsX } from "react-icons/all";
import DatePicker from "react-datepicker";

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
`;

export const FilterHeader = styled.div`
  flex-direction: row;
`;

export const CancelIcon = styled(BsX)`
  cursor: pointer;
  display: inline;
  width: 32px;
  height: 32px;
  padding: 10px 0 0 20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
  padding: 20px 0 0 0;
`;

export const SubTitle = styled.h3`
  text-align: flex-start;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 40px 0 5px 25px;
`;

export const Hr = styled.hr`
  margin: 3px 20px 10px 20px;
`;

export const RadioBtnBox = styled.div`
  margin: 10px 20px 0 20px;
`;

export const RadioBtn = styled.input`
  font-size: 1rem;
`;

export const RadioLabel = styled.label`
  font-size: 1.2rem;
`;

export const FilterInputBox = styled.div`
  margin: 10px 20px 0 20px;
`;

export const FilterInput = styled.input`
  width: 120px;
  height: 1.5rem;
  font-size: 1.2rem;
  margin: 0 3px 0 3px;
`;

export const FilterBtn = styled.button`
  cursor: pointer;
  border: none;
  padding: 0 4.5rem 0 4.5rem;
  height: 55px;
  margin: 3rem 5rem 1rem 5rem;
  color: #ffffff;
  background: #faa23c;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  &:disabled {
    background: #eeeeee;
    color: #d2d2d2;
  }
`;

export const AuctionDatePicker = styled(DatePicker)`
  width: 120px;
  height: 1.5rem;
  font-size: 1rem;
  margin: 0 3px 0 3px;
`;
