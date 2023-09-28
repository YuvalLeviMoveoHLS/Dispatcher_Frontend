import React from "react";
import { COLORS } from "../../utils/constants/Colors";
const ArrowDownIconDissable: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.9263 1.51841L7.96316 8.48159L0.999989 1.51841"
      stroke={COLORS.disable}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowDownIconDissable;
