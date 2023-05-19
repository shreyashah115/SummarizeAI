import ReactDOM from "react-dom";
import { CustomTooltip as Tooltip } from "./Tooltip";
import { createRoot } from "react-dom/client";
import React from "react";

document.addEventListener("mouseup", () => {
  const selection = window.getSelection();
  const selectedText = selection?.toString().trim();
  if (selectedText && selection) {
    const rect = selection.getRangeAt(0).getBoundingClientRect();
    const anchorEl = document.elementFromPoint(
      rect.left,
      rect.top
    ) as HTMLElement | null;
    const tooltipContainer = document.createElement("div");
    tooltipContainer.id = "tooltip-container";
    document.body.appendChild(tooltipContainer);
    const root = createRoot(tooltipContainer);
    root.render(
      <React.StrictMode>
        <Tooltip selectedText={selectedText} anchorEl={anchorEl} />
      </React.StrictMode>
    );
    chrome.runtime.sendMessage({ selectedText, anchorEl });
  }
});
