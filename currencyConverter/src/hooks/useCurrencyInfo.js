import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const[data, setData] = useState({});
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response;
            })      
            .then((response) => {
                // console.log(response, "response");
                return response.json();
            })
            .then((res) => {
                setData(res.rates);
                // Uncomment for debugging:
                // console.log(res.rates, "useCurrencyInfo rates");
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    }, [currency]);
    // Uncomment for debugging:
    // console.log(data, "useCurrencyInfo data");
    return data;
}
// This hook fetches currency information based on the provided currency code.
// It uses the ExchangeRate API to get the latest exchange rates for the specified currency.
export default useCurrencyInfo;