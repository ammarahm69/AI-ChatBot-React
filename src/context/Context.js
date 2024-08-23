import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProviderComponent = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async () => {
    setLoading(true);
    setResultData(""); // Clear previous data
    setResult(true);
    setRecentPrompt(input);

    console.log("Input before API call:", input);

    const result = await run(input); // Call the API and get the response

    console.log("API response:", result);

    setResultData(result); // Set the response in the state

    setLoading(false);
    setInput(""); // Clear the input field after submission
  };

  const contextValue = {
    input,
    setInput,
    onSent,
    prevPrompt,
    setPrevPrompt,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProviderComponent;
