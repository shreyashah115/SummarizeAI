import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors, sizes } from "./constants";
import { ToggleSwitch } from "./ToggleSwitch";

const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: ${colors.background};
  border: 1px solid ${colors.text};
  padding: ${sizes.small};
`;

// const ToggleLabel = styled.label`
//   display: flex;
//   align-items: center;
//   margin-bottom: ${sizes.small};
// `;

const App = () => {
  return (
    <PopupContainer>
      <ToggleSwitch />
      {/* {selectedText && (
        <Tooltip selectedText={selectedText} anchorEl={anchorEl} />
      )} */}
    </PopupContainer>
  );
};

export default App;
