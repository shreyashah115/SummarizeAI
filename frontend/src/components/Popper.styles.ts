import styled from "styled-components";

export const PopperContainer = styled.div<{ top: number; left: number }>`
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
  }

  div {
    margin-bottom: 4px;
  }

  button {
    margin-right: 8px;
    background-color: #fff;
    color: #333;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
    }
  }
`;
