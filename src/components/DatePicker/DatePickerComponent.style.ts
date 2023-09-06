import styled from "styled-components";
import { COLORS } from "../../utils/constants/Colors";

export const StyledDatepickerButton = styled.button`
  max-width: 175px;
  width: 100%;
  height: 47px;
  border-radius: 10px;
  border: none;
  background-color: ${COLORS.white};
  gap: 10px;
  color: ${COLORS.purple};
  font-size: 14px;
  display: flex;
  padding: 15px;
  font-feature-settings: clig;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.25px;
  justify-content: space-between;
  &:focus-visible {
    outline: none;
    border: none;
  }
`;

export const StyledArrowDownIcon = styled.img`
  margin-top: -4px;
`;
export const StyledDateText = styled.span``;
export const DatePickerAndButtonWrapper = styled.div`
  max-width: 175px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const StyledDatePickerWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
`;
