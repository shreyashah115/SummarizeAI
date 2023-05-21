import axios from "axios";

export type Highlight = {
  highlightedText: string;
  webpage: string;
  summary?: string;
  id?: string;
  createdDate?: Date | undefined;
};

const BASE_URL = "http://localhost:3000/api/v1";

export const addNewHighlight = async (
  highlightData: Highlight
): Promise<Highlight> => {
  try {
    const response = await axios.post(`${BASE_URL}/highlight`, highlightData);
    return response.data;
  } catch (error) {
    console.error("Error adding highlight:", error);
    throw error;
  }
};

export const getAllHighlights = async (): Promise<Highlight[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/highlight`);
    return response.data;
  } catch (error) {
    console.error("Error fetching highlights:", error);
    throw error;
  }
};

export const removeHighlight = async (
  highlightData: Highlight
): Promise<Highlight> => {
  try {
    const response = await axios.delete(`${BASE_URL}/highlight`, {
      data: highlightData,
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting highlight:", error);
    throw error;
  }
};

export const fetchSummary = async (message: string): Promise<string> => {
  try {
    const response = await axios.post(`${BASE_URL}/openai`, { message });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
