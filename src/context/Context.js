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
    setResultData("");
    setLoading(true);
    setResult(true);
    const result = await run(input);
    setResultData(result)
    setLoading(false)
    setInput("")
 
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
