import Stack from "@mui/material/Stack";
import { FC, ReactNode } from "react";
import arrowRight from "../../assets/svg/arrowRight.svg";
import { buttonSx } from "./styledButton.style";
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
    <Stack spacing={2} direction="row">
      <Button
        sx={{ ...buttonSx, ...sx }}
        endIcon={
          <img src={arrowRight} onClick={() => console.log("Clicked")} />
        }
        onClick={onClick}
      >
        {children}
      </Button>
    </Stack>
  );
};
export default StyledButton;
