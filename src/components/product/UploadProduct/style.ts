import styled from "styled-components";
import DatePicker from "react-datepicker";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-weight: bold;
  font-size: 1rem;
  color: #838383;
  line-height: 28px;
`;
export const StartPriceLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #838383;
  line-height: 28px;
  @media (max-width: 376px) {
    font-size: 0.8rem;
  }
`;
export const Input = styled.input`
  border: none;
  :: placeholder {
    color: #c2c2c2;
    font-size: 0.8rem;
  }
  :focus {
    outline: none;
  }
  width: 100%;
`;

export const Line = styled.div`
  border-top: 1px solid #c4c4c4;
  margin: 13px 0;
`;
export const PeriodContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
export const PeriodNumberContainer = styled.div`
  font-weight: bold;
  font-size: 1rem;
  color: #838383;
  line-height: 28px;
`;
export const PeriodNumberInput = styled.input`
  border: 1px solid #c2c2c2;
  background: rgba(194, 194, 194, 0.5);
  :focus {
    outline: none;
  }
  color: #838383;
  font-size: 0.8rem;
  text-align: center;
  width: 37px;
  height: 28px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin: 0 10px;
`;
export const PriceContainer = styled.div`
  display: flex;
  margin: 17px 0 20px 0;
  justify-content: space-between;
`;
export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  :: placeholder {
    color: #c2c2c2;
    font-size: 0.8rem;
  }
  :focus {
    outline: none;
  }
`;
export const SubmitButton = styled.input`
  background: #ff8a00;
  opacity: 0.8;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  height: 45px;
  line-height: 45px;
  border: none;
  :hover {
    opacity: 1;
  }
`;
export const StyledDatePicker = styled(DatePicker)`
  border: 1px solid #c2c2c2;
  background: rgba(194, 194, 194, 0.5);
  :focus {
    outline: none;
  }
  color: #838383;
  font-size: 0.8rem;
  height: 28px;
  width: 168px;
`;
export const StartPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 54%;
`;
export const BidPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 43%;
`;
export const StartDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
