import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
} from "react";

export const HighlightContext = createContext<any>(null);

export const HighlightProvider = ({ children }: { children: ReactElement }) => {
  const [highlightData, setHighlightData] = useState<any>(null);

  return (
    <HighlightContext.Provider value={{ highlightData, setHighlightData }}>
      {children}
    </HighlightContext.Provider>
  );
};

export const useHighlightContext = () => useContext(HighlightContext);
