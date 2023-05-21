import React, { forwardRef, useEffect, useState } from "react";
import { addNewHighlight, fetchSummary } from "../api/api.service";

type SummaryProps = {
  message: string;
};

export const Summary = forwardRef<HTMLDivElement, SummaryProps>(
  (props, ref) => {
    const { message } = props;
    const [summary, setSummary] = useState<string>("");

    useEffect(() => {
      const fetchSummaryData = async () => {
        try {
          const summaryData = await fetchSummary(message);
          setSummary(summaryData);
        } catch (error) {
          console.error("Error fetching summary:", error);
        }
      };

      fetchSummaryData();
    }, [message]);

    useEffect(() => {
      const toggleHighlight = async () => {
        try {
          const url = window.location.href;
          const data = {
            highlightedText: message,
            webpage: url,
            summary: summary,
          };

          if (summary && message) {
            await addNewHighlight(data);
            console.log("Highlight added to table");
          }
        } catch (error) {
          console.error("Error toggling highlight:", error);
        }
      };

      toggleHighlight();
    }, [message, summary]);

    return (
      <div ref={ref}>
        <p>Summary: {summary}</p>
      </div>
    );
  }
);
