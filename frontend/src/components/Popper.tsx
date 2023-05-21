import React, { useState, useRef, useEffect } from "react";
import { PopperContainer } from "./Popper.styles";

interface PopperProps {
  id: string;
  anchorEl: DOMRect | null;
  offset?: number;
  children: React.ReactNode;
}

export const Popper: React.FC<PopperProps> = ({
  id,
  anchorEl,
  offset = 0,
  children,
}) => {
  const [popperPosition, setPopperPosition] = useState({
    popperTop: 0,
    popperLeft: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      if (anchorEl) {
        const { top, left, width, height } = anchorEl;

        const scrollX =
          window.pageXOffset || document.documentElement.scrollLeft;
        const scrollY =
          window.pageYOffset || document.documentElement.scrollTop;

        const popperTop = top + height + scrollY;
        const popperLeft = left + width / 2 + scrollX;
        setPopperPosition({ popperTop, popperLeft });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [anchorEl, offset]);

  return (
    <PopperContainer
      data-testid="popper-container"
      top={popperPosition.popperTop}
      left={popperPosition.popperLeft}
    >
      {children}
    </PopperContainer>
  );
};
