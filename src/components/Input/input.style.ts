import styled from "styled-components";
import { COLORS } from "../../utils/colors";
// export const InputStyled = styled.input`
//   flex: 2;
//   border: none;
//   font-size: 0.875rem !important;
//   color: ${COLORS.purple} !important;
//   height: 100%;
//   outline: none;
//   border: none;
// `;

export const InputWrapper = styled.div`
  display: flex;
  border: 0px none;
  height: 50px;
  max-width: 663px;
  width: 100%;
  border-radius: 10px;
  align-items: center;
  //padding-right: 6px;
  background-color: ${COLORS.white};
`;
export const StyledInput = styled.input`
  background-color: ${COLORS.white};
  border-radius: 10px;
  //max-width: 400px;
  width: 100%;
  height: 50px;
  //left: 10px; // should be 0!
  //position: fixed;
  top: 0;

  outline: none;
  border: none;
  padding: 0px;
`;

export const StyledSearchIcon = styled.img`
  padding-right: 14px;
  padding-left: 15px;
  //border-right: 1px solid ${COLORS.secondary};
`;

// export const StyledSearchIcon = styled(SearchIcon)`
//   //position: absolute;
//   //left: 10px
//   margin-right: 14px;
//   margin-left: 15px;
// `;
