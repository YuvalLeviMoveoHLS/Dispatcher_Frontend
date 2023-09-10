import React, { useState } from "react";
import {
  DatePickerAndButtonWrapper,
  StyledArrowDownIcon,
  StyledDatePickerWrapper,
  StyledDateText,
  StyledDatepickerButton,
} from "./DatePickerComponent.style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../../assets/svg/calendarIcon.svg";
interface DatePickerComponentProps {
  dateRange: [Date | null, Date | null];
  setDateRange: React.Dispatch<
    React.SetStateAction<[Date | null, Date | null]>
  >;
}
const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  dateRange,
  setDateRange,
}) => {
  const [startDate, endDate] = dateRange;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateRangeDisplayText =
    startDate && endDate
      ? `${startDate.getDate()}/${
          startDate.getMonth() + 1
        } - ${endDate.getDate()}/${endDate.getMonth() + 1}`
      : "Dates";
  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setDateRange([start, end]);
  };

  return (
    <DatePickerAndButtonWrapper>
      <StyledDatepickerButton
        onClick={() => setShowDatePicker((prev) => !prev)}
      >
        <StyledDateText>{dateRangeDisplayText}</StyledDateText>
        <StyledArrowDownIcon src={CalendarIcon} />
      </StyledDatepickerButton>

      {showDatePicker && (
        <StyledDatePickerWrapper>
          <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
            selectsRange
            inline
            isClearable
            //onClickOutside={() => setShowDatePicker(false)}
          />
        </StyledDatePickerWrapper>
      )}
    </DatePickerAndButtonWrapper>
  );
};

export default DatePickerComponent;
