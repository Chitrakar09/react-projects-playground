import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";
function App() {
  const [length, setLength] = useState(8);
  const [checkNum, setCheckNum] = useState(false);
  const [checkChar, setCheckChar] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState({ state: false, result: null });
  const inputRef = useRef();

  const handleCopy = () => {
    inputRef.current.select();
    navigator.clipboard
      .writeText(password)
      .then(() => {
        setCopied({ state: true, result: "done" });
      })
      .catch(() => {
        setCopied({ state: true, result: "failure" });
      });
  };

  const RenderAlert = ({ result }) => {
    return (
      <div className="alert h-10 w-40 bg-gray-600 text-blue-50 rounded-xl flex items-center justify-center fixed top-10">
        {result == "done" ? "successfully copied!!" : "copy failed!!"}
      </div>
    );
  };

  const handlePassword = useCallback(() => {
    let generatedPassword = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (checkNum) string += "0123456789";
    if (checkChar) string += "!@#$%^&*()_+-=[]{}|;:',.<>/?`~";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * (string.length - 0 + 1)) + 0;
      generatedPassword += string.charAt(index);
    }
    setPassword(generatedPassword);
  }, [length, checkNum, checkChar]);

  useEffect(() => {
    handlePassword();
  }, [length, checkChar, checkNum]);

  useEffect(() => {
    if (copied.state) {
      const timeOutId = setTimeout(() => {
        setCopied({ state: false, result: null });
      }, 1000);
      return () => clearTimeout(timeOutId);
    }
  }, [copied]);

  return (
    <>
      <div className="main h-full bg-cover bg-center flex flex-col justify-center items-center">
        {copied.state && <RenderAlert result={copied.result} />}
        <p className="text-4xl text-white mb-5">Password Generator</p>
        <div className="holder p-5 h-30 w-2/5 bg-white/10 shadow-lg backdrop-blur-sm rounded-lg border border-white/20 flex-col justify-center items-center">
          <div className="inputs flex justify-evenly items-center mb-3">
            <input
              className="inputField w-3/4 bg-white rounded-md text-center text-2xl h-10 p-3 border-2 border-black"
              type="text"
              value={password}
              readOnly
              ref={inputRef}
            ></input>
            <button
              className="copyButton h-10 p-3 bg-blue-500 hover:bg-blue-700 rounded-2xl text-center flex justify-center items-center text-amber-50 text-xl border-black border-2"
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>
          <div className="controls flex justify-evenly items-center text-xl text-amber-50">
            <input
              type="range"
              min={8}
              max={12}
              onChange={(e) => setLength(e.target.value)}
              defaultValue={length}
              className="rounded-2xl appearance-none bg-white cursor-pointer h-4 border-1 border-black mt-1"
            ></input>
            <label className="flex w-1/6 mr-1">
              Length:<p className="text-red-500 ml-1">{length}</p>
            </label>
            <input
              type="checkbox"
              checked={checkNum}
              onChange={() => setCheckNum(!checkNum)}
              className="numberCheckbox w-5 h-5 mt-1 ml-1"
            ></input>
            <label>Numbers</label>
            <input
              type="checkbox"
              checked={checkChar}
              onChange={() => setCheckChar(!checkChar)}
              className="characterCheckbox w-5 h-5 mt-1"
            ></input>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
