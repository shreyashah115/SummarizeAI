import styled from "styled-components";
import { colors, sizes, styles } from "./constants";

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  background-color: ${colors.background};
  border: 1px solid ${colors.text};
  padding: ${sizes.small};
`;

export const ToggleContainer = styled.div<{ enabled: boolean }>`
  display: inline-block;
  width: 60px;
  height: 34px;
  background-color: ${({ enabled }) => (enabled ? "#4CAF50" : "#ccc")};
  border-radius: 34px;
  position: relative;
  transition: background-color 0.3s;
  cursor: pointer;

  .toggle-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .toggle-label {
    margin-left: 10px;
    font-weight: bold;
    color: #333333;
  }
`;

export const HighlightContainer = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  background-color: ${colors.background};
  padding: 10px;
  box-shadow: ${styles.boxShadow};
  border-radius: ${styles.borderRadius};
`;

export const HighlightItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: ${styles.borderRadius};
  box-shadow: ${styles.boxShadow};
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }

  .text {
    font-weight: bold;
    color: ${colors.text};
  }

  .webpage {
    color: ${colors.gray};
  }

  .date {
    color: ${colors.lightGray};
  }
`;

export const ToggleHandle = styled.div<{ enabled: boolean }>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 4px;
  left: ${({ enabled }) => (enabled ? "calc(100% - 30px)" : "4px")};
  transition: left 0.3s;
`;
