import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Popper } from "./Popper";
import "@testing-library/jest-dom/extend-expect";

describe("Popper", () => {
  const mockAnchorEl = {
    x: 10,
    y: 20,
    width: 100,
    height: 50,
    top: 20,
    right: 110,
    bottom: 70,
    left: 10,
    toJSON: jest.fn(),
  };
  it("renders the Popper component ", () => {
    act(() => {
      render(
        <Popper id="popper" anchorEl={mockAnchorEl}>
          Popper Content
        </Popper>
      );
    });
    const children = "Popper Content";

    const popperContainer = screen.getByTestId("popper-container");
    expect(popperContainer).toBeInTheDocument();
    expect(popperContainer).toHaveTextContent(children);
  });
});
