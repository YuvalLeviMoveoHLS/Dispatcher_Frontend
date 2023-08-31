import Stack from "@mui/material/Stack";
import { FC, ReactNode } from "react";
import arrowRight from "../../assets/svg/arrowRight.svg";
import { buttonSx } from "./StyledButton.style";
import { Button, SxProps } from "@mui/material";
console.log("styledButton");
// delete stack! no  needed
type StyledButtonProps = {
  children: ReactNode;
  sx?: SxProps;
  onClick?: () => void;
};

const StyledButton: FC<StyledButtonProps> = ({ children, sx, onClick }) => {
  return (
    <Button
      sx={{ ...buttonSx, ...sx }}
      endIcon={<img src={arrowRight} />}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default StyledButton;
