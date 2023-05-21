import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { HighlightTooltip } from "./components/HighlightTooltip";
import { HighlightProvider } from "./HighlightContext";

export const ContentScript = () => {
  const [selectedText, setSelectedText] = useState("");
  const [anchorEl, setAnchorEl] = useState<DOMRect | null>(null);
  const [isExtensionEnabled, setIsExtensionEnabled] = useState(false);
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const handleMouseUp = () => {
    const selection = window.getSelection();
    const selectedText = selection?.toString().trim();
    if (selectedText && selection) {
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
      sendMessage(selectedText, rect);
    } else {
      setSelectedText("");
      setAnchorEl(null);
    }
  };

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

  const sendMessage = (selectedText: string, anchorEl: DOMRect | null) => {
    chrome.runtime.sendMessage({
      selectedText,
      anchorEl,
      isExtensionEnabled,
    });
  };

  const handleStorageChange = (
    changes: { [key: string]: chrome.storage.StorageChange },
    areaName: string
  ) => {
    if (areaName === "local" && changes.isExtensionEnabled) {
      const newData = changes.isExtensionEnabled.newValue;
      setIsExtensionEnabled(newData);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("click", handleClick);
    chrome.storage.onChanged.addListener(handleStorageChange);

    chrome.storage.local.get("isExtensionEnabled", ({ isExtensionEnabled }) => {
      setIsExtensionEnabled(isExtensionEnabled);
    });

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("click", handleClick);
      chrome.storage.onChanged.removeListener(handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (selectedText && anchorEl) {
      sendMessage(selectedText, anchorEl);
    }
  }, [selectedText, anchorEl, isExtensionEnabled]);

  return (
    <React.StrictMode>
      {selectedText && anchorEl && isPopperOpen && (
        <HighlightTooltip
          selectedText={selectedText}
          anchorEl={anchorEl}
          isExtensionEnabled={isExtensionEnabled}
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
