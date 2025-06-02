import { useEffect, useState } from "react";

function useCurrencyInfo(currencyFrom) {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]= useState(null);
  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyFrom}.json`
        );
        const result = await response.json();
        setData(result[currencyFrom]);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error);
      }
      finally{
        setLoading(false);
      }
    };
    getApi()
  },[currencyFrom]);
  return [Data,loading,error];
}

export default useCurrencyInfo;
