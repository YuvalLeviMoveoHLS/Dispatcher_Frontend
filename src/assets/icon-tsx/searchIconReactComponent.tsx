import React from "react";

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.9601 20C17.0259 20 21.1326 15.9706 21.1326 11C21.1326 6.02944 17.0259 2 11.9601 2C6.89422 2 2.78754 6.02944 2.78754 11C2.78754 15.9706 6.89422 20 11.9601 20Z"
      stroke="#5A5A89"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.1709 22L19.0943 18"
      stroke="#5A5A89"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SearchIcon;
