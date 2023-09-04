import React from "react";
import { ISourceNameAndValue } from "../../models/SourceNameAndValueInterface";
import {
  StyledDot,
  StyledList,
  StyledListItem,
  StyledSpan,
} from "./PieGraphList.style";
interface PieGraphListProps {
  sources: ISourceNameAndValue[];
  colors: string[];
  totalSum: number;
}
const PieGraphList: React.FC<PieGraphListProps> = ({
  sources,
  colors,
  totalSum,
}) => {
  return (
    <>
      <StyledList>
        {sources.map((entry, index) => {
          const percentage = Math.floor((entry.value / totalSum) * 100);
          return (
            <StyledListItem key={index}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <StyledDot color={colors[index % colors.length]} />
                <StyledSpan>{entry.name}</StyledSpan>
              </div>
              <StyledSpan>{percentage}%</StyledSpan>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
};

export default PieGraphList;
