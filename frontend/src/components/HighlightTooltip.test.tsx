import React from "react";
import { render, screen } from "@testing-library/react";
import { HighlightTooltip } from "./HighlightTooltip";
import "@testing-library/jest-dom/extend-expect";

describe("HighlightTooltip", () => {
  it("renders the tooltip when selectedText and isExtensionEnabled are true", async () => {
    const selectedText = "John Doe";
    const anchorEl = {
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
    const isExtensionEnabled = true;

    render(
      <HighlightTooltip
        selectedText={selectedText}
        anchorEl={anchorEl}
        isExtensionEnabled={isExtensionEnabled}
      />
    );

    const tooltipContainer = screen.getByText(/summary:/i);
    expect(tooltipContainer).toBeInTheDocument();
  });

  it("does not render the tooltip when selectedText is empty", () => {
    const selectedText = "";
    const anchorEl = {
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
    const isExtensionEnabled = true;

    render(
      <HighlightTooltip
        selectedText={selectedText}
        anchorEl={anchorEl}
        isExtensionEnabled={isExtensionEnabled}
      />
    );

    const tooltipContainer = screen.queryByText(/summary:/i);
    expect(tooltipContainer).toBeNull();
  });

  it("does not render the tooltip when isExtensionEnabled is false", () => {
    const selectedText = "Sample Text";
    const anchorEl = {
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
    const isExtensionEnabled = false;

    render(
      <HighlightTooltip
        selectedText={selectedText}
        anchorEl={anchorEl}
        isExtensionEnabled={isExtensionEnabled}
      />
    );

    const tooltipContainer = screen.queryByText(/summary:/i);
    expect(tooltipContainer).toBeNull();
  });
});
