import React, { useState } from "react";
import {
  DatePickerAndButtonWrapper,
  StyledCalendarIcon,
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
  disabled: boolean;
}
const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  dateRange,
  setDateRange,
  disabled,
}) => {
  const [startDate, endDate] = dateRange;
  const [showCalendar, setShowCalendar] = useState(false);
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
        disabled={disabled}
        onClick={() => !disabled && setShowCalendar((prev) => !prev)}
      >
        <StyledDateText>{dateRangeDisplayText}</StyledDateText>
        <StyledCalendarIcon src={CalendarIcon} disabled={disabled} />
      </StyledDatepickerButton>

      {showCalendar && !disabled && (
        <StyledDatePickerWrapper>
          <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
            selectsRange
            inline
            isClearable
            disabled={false}
            // TODO: onClickOutside={() => setShowCalendar(false)}
          />
        </StyledDatePickerWrapper>
      )}
    </DatePickerAndButtonWrapper>
  );
};

export default DatePickerComponent;
