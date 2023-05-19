import React, { useState } from "react";
import styled from "styled-components";

type ToggleContainerProps = {
  enabled: boolean;
};

const ToggleContainer = styled.div<ToggleContainerProps>`
  display: inline-block;
  width: 60px;
  height: 34px;
  background-color: ${({ enabled }) => (enabled ? "#4CAF50" : "#ccc")};
  border-radius: 34px;
  position: relative;
  transition: background-color 0.3s;
  cursor: pointer;
`;

interface ToggleHandleProps {
  enabled: boolean;
}

const ToggleHandle = styled.div<ToggleHandleProps>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 4px;
  left: ${({ enabled }) => (enabled ? "calc(100% - 30px)" : "4px")};
  transition: left 0.3s;
`;

export const ToggleSwitch = () => {
  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    setEnabled(!enabled);
  };

  return (
    <ToggleContainer enabled={enabled} onClick={handleToggle}>
      <p>hey mannnnn</p>
      <ToggleHandle enabled={enabled} />
    </ToggleContainer>
  );
};
