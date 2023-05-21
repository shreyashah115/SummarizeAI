import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { HighlightTooltip } from "./components/HighlightTooltip";
import { HighlightProvider } from "./HighlightContext";

export const ContentScript = () => {
  const [selectedText, setSelectedText] = useState("");
  const [anchorEl, setAnchorEl] = useState<DOMRect | null>(null);
  const [isPopperOpen, setIsPopperOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message) {
      const enabled = message.isExtensionEnabled;
      setIsEnabled(enabled);
    }
  });

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      const selectedText = selection?.toString().trim();

      if (selectedText && selection && isEnabled) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const span = document.createElement("span");
        span.style.color = "black";
        span.style.backgroundColor = "orange";
        span.style.cursor = "pointer";
        span.classList.add("highlighted");

        const clonedRange = range.cloneRange();
        clonedRange.surroundContents(span);
        selection.removeAllRanges();
        selection.addRange(clonedRange);

        setSelectedText(selectedText);
        setAnchorEl(rect);
      } else {
        setSelectedText("");
        setAnchorEl(null);
      }
    };

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isEnabled, anchorEl]);

  const handleClick = (event: MouseEvent) => {
    if (
      event.target instanceof Element &&
      event.target.classList.contains("highlighted")
    ) {
      setAnchorEl(event.target.getBoundingClientRect());
      const highlightedText = event.target.textContent || "";
      setSelectedText(highlightedText);
      setIsPopperOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <React.StrictMode>
      {selectedText && anchorEl && isPopperOpen && (
        <HighlightTooltip
          selectedText={selectedText}
          anchorEl={anchorEl}
          isExtensionEnabled={isEnabled}
        />
      )}
    </React.StrictMode>
  );
};

const rootContainer = document.createElement("div");
rootContainer.id = "root2";
document.body.appendChild(rootContainer);
const rootDiv = ReactDOM.createRoot(rootContainer);
rootDiv.render(
  <React.StrictMode>
    <HighlightProvider>
      <ContentScript />
    </HighlightProvider>
  </React.StrictMode>
);
