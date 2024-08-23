import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProviderComponent = (props) => {
  const [response, setResponse] = useState("");
  const [recentPrompt , setRecentPrompt]=useState("");
  const [prevPrompt , setprevPrompt] = useState([]);
  const [showResult , setResult] = useState(false);
  const [loading,setLoading] = useState(false);
  const [resultData,setResutlData] = useState("");
  const onSent = async (prompt) => {
    const result = await run(prompt);
    setResponse(result);
  };

  
  onSent("What is React JS");

  const contextValue = {
    response,
    onSent,
    prevPrompt,
    setprevPrompt,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProviderComponent;
