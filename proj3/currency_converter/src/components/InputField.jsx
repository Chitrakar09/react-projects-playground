import { useId } from "react";

function InputField({
  label,
  options,
  setCurrency,
  selected,
  readonly = false,
  calculatedValue,
  setInputValue,
}) {
  console.log(calculatedValue);
  const id = useId();
  let option = [];
  if (options === "loading") {
    option.push(
      <option
        className="bg-gray-700 text-amber-50"
        value="loading"
        key="loading"
      >
        loading..
      </option>
    );
  } else if (options === "no options") {
    option.push(
      <option className="bg-gray-700 text-amber-50" value="error" key="error">
        no options
      </option>
    );
  } else {
    options.forEach((currencies) => {
      option.push(
        <option
          className="bg-gray-700 text-amber-50"
          value={currencies}
          key={currencies}
        >
          {currencies}
        </option>
      );
    });
  }
  const handleMoneyValue = (e) => {
    setInputValue(Number(e.target.value));
  };
  const handleChange = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <>
      <div className="cardHolder backdrop-blur-sm bg-white/5 border border-white/10 shadow-md w-full h-30 flex justify-between rounded-2xl mb-5">
        <div className="inputField font-semibold text-white/90 text-2xl flex flex-col justify-evenly items-center w-3/5 text-center">
          <label>{label}</label>
          <input
            className="appearance-none w-3/4 h-10  bg-gray-200 rounded-xl text-center justify-center items-center text-black"
            type="number"
            id={id}
            defaultValue={readonly ? calculatedValue : 1}
            readOnly={readonly}
            onChange={handleMoneyValue}
          ></input>
        </div>
        <div className="currencyField font-semibold text-white/90 text-2xl flex flex-col justify-evenly items-center text-center w-2/5">
          <label>Currency</label>
          <select
            className="appearance-none bg-gray-200 h-10 w-3/4 text-wrap flex justify-center items-center text-center text-black rounded-xl"
            onChange={handleChange}
            value={selected}
          >
            {option}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputField;
