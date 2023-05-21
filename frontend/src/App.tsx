import React, { useEffect, useState } from "react";
import { getAllHighlights, Highlight } from "./api/api.service";
import {
  PopupContainer,
  ToggleContainer,
  HighlightContainer,
  ToggleHandle,
  HighlightItem,
} from "./App.styles";

export const App = () => {
  const [isExtensionEnabled, setIsExtensionEnabled] = useState(false);
  const [highlights, setHighlights] = useState<Highlight[]>([]);

  useEffect(() => {
    chrome.storage.local.get("isExtensionEnabled", (result) => {
      const initialData = result.isExtensionEnabled;
      setIsExtensionEnabled(initialData);
    });
  }, []);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id as number, {
      isExtensionEnabled: isExtensionEnabled,
    });
  });

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const response = await getAllHighlights();
        const sortedData = response.sort((a, b) => {
          const dateA = a.createdDate ? new Date(a.createdDate).getTime() : 0;
          const dateB = b.createdDate ? new Date(b.createdDate).getTime() : 0;
          return dateA - dateB;
        });
        setHighlights(sortedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHighlights();
  }, []);

  const handleToggle = () => {
    chrome.storage.local.set(
      { isExtensionEnabled: !isExtensionEnabled },
      () => {
        console.log("Extension value stored in local storage");
      }
    );
    setIsExtensionEnabled(!isExtensionEnabled);
  };

  return (
    <PopupContainer>
      <ToggleContainer enabled={isExtensionEnabled} onClick={handleToggle}>
        <ToggleHandle enabled={isExtensionEnabled} />
      </ToggleContainer>
      <HighlightContainer>
        <ul>
          {highlights.map((highlight) => (
            <HighlightItem key={highlight.id}>
              <p className="text">Text: {highlight.highlightedText}</p>
              <p className="webpage">Webpage: {highlight.webpage}</p>
              <p className="summary">Summary: {highlight.summary}</p>
              <p className="date">
                Date: {highlight.createdDate?.toLocaleString()}
              </p>
            </HighlightItem>
          ))}
        </ul>
      </HighlightContainer>
    </PopupContainer>
  );
};

export default App;
