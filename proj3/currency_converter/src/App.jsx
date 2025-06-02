import { useEffect, useState } from "react";
import InputField from "./components/InputField";
import useCurrencyInfo from "./Hooks/useCurrency";

function App() {
  const [CurrencyFrom, setCurrencyFrom] = useState("usd");
  const [CurrencyTo, setCurrencyTo] = useState("npr");
  const [currencyInfo, loading, error] = useCurrencyInfo(CurrencyFrom);
  const [inputValue, setInputValue] = useState(1);
  const [calculatedValue, setCalculatedValue] = useState();

  let options;
  if (loading) {
    options = "loading";
  } else if (error) {
    options = "no options";
  } else {
    options = Object.keys(currencyInfo);
  }

  const calculate = () => {
    if (currencyInfo && currencyInfo[CurrencyTo]) {
      const result = inputValue * currencyInfo[CurrencyTo];
      setCalculatedValue(result);
      console.log(calculatedValue);
    }
  };

  const swap = () => {
    setCurrencyFrom(CurrencyTo);
    setCurrencyTo(CurrencyFrom);
  };

  useEffect(() => {
    if (!loading && !error && currencyInfo[CurrencyTo]) {
      calculate();
    }
  }, [currencyInfo]);
  return (
    <>
      <div
        className="main h-full flex justify-center items-center bg-center bg-cover"
        style={{
          backgroundImage: `url(${"https://www.shutterstock.com/shutterstock/videos/31364173/thumb/12.jpg?ip=x480"})`,
        }}
      >
        <h1 className="heading text-3xl md:text-4xl fixed top-5 text-white font-bold drop-shadow-[0_0_8px_rgba(173,216,230,0.8)]">
          Currency converter
        </h1>
        <div className="holder w-2/6 h-100 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-5  text-white">
          <form
            className="w-full h-full relative flex-col flex justify-center items-center"
            onSubmit={(e) => {
              e.preventDefault();
              calculate();
            }}
          >
            <InputField
              label={"From"}
              options={options}
              setCurrency={setCurrencyFrom}
              selected={CurrencyFrom}
              setInputValue={setInputValue}
            />
            <InputField
              label={"To"}
              options={options}
              setCurrency={setCurrencyTo}
              calculatedValue={calculatedValue}
              selected={CurrencyTo}
              readonly
            />
            <button
              className=" swap absolute top-32 left-51 w-20 flex justify-center items-center px-4 py-2 rounded-xl bg-blue-700 text-white border border-white hover:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={swap}
            >
              Swap
            </button>
            <button className="convert w-full flex items-center justify-center px-4 py-2 rounded-xl bg-blue-700 text-white border border-white hover:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg">
              Convert {CurrencyFrom.toUpperCase()} to {CurrencyTo.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
