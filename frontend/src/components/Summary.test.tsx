import React from "react";
import { render, waitFor, screen, act } from "@testing-library/react";
import { Summary } from "./Summary";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../api/api.service.ts", () => ({
  fetchSummary: jest.fn(),
  addNewHighlight: jest.fn(),
}));

describe("Summary component", () => {
  const message = "Test message";
  const summaryData = "Test summary";

  beforeEach(() => {
    jest
      .spyOn(require("../api/api.service.ts"), "fetchSummary")
      .mockImplementation(() => {
        return Promise.resolve(summaryData);
      });

    jest
      .spyOn(require("../api/api.service.ts"), "addNewHighlight")
      .mockImplementation(() => {
        return Promise.resolve();
      });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("renders the summary", async () => {
    const message = "Test summary";

    await act(async () => {
      render(<Summary message={message} />);
    });

    const summary = screen.getByText((content, element) => {
      return (
        element?.tagName.toLowerCase() === "p" && content.startsWith("Summary:")
      );
    });

    expect(summary).toBeInTheDocument();
    expect(summary).toHaveTextContent(`Summary: ${message}`);
  });

  it("calls fetchSummary with the correct message", async () => {
    render(<Summary message={message} />);
    await waitFor(() => {
      expect(
        require("../api/api.service.ts").fetchSummary
      ).toHaveBeenCalledWith(message);
    });
  });

  it("calls addNewHighlight with the correct data when summary and message are present", async () => {
    render(<Summary message={message} />);
    await waitFor(() => {
      expect(
        require("../api/api.service.ts").addNewHighlight
      ).toHaveBeenCalledWith({
        highlightedText: message,
        webpage: window.location.href,
        summary: summaryData,
      });
    });
  });
});
