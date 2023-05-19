import { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import Popper from "@mui/material/Popper";

type TooltipProps = {
  selectedText: string;
  anchorEl: HTMLElement | null;
};

type TooltipContainerProps = {
  enabled: boolean;
};
const TooltipContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const HighlightedText = styled.div<{ isHighlighted: boolean }>`
  background-color: ${(props) => (props.isHighlighted ? "yellow" : "inherit")};
`;

const Container = styled(Popper)`
  background: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 9999;
`;

export const CustomTooltip: React.FC<TooltipProps> = ({
  selectedText,
  anchorEl,
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  console.log(selectedText, Boolean(anchorEl), anchorEl);
  const [enabled, setEnabled] = useState<boolean>(false);
  const handleToggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  const handleButtonClick = () => {
    setEnabled(!enabled);
  };

  return (
    <>
      {selectedText && (
        <Container id="tooltip-container" anchorEl={anchorEl} open>
          <Tooltip title={selectedText} arrow>
            <HighlightedText isHighlighted={isHighlighted}>
              {selectedText}
            </HighlightedText>
          </Tooltip>
          <Button variant="contained" onClick={handleToggleHighlight}>
            {isHighlighted ? "Remove Highlight" : "Highlight"}
          </Button>
        </Container>
      )}
    </>
  );
};
