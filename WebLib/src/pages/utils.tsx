import React, { useState } from "react";
import Layout from "@theme/Layout";
import { weiToCurrencyValue, currencyValueToWei, formatCurrencyValue } from "../../../dev/utils/ethereum";

const Utils = () => {
  const [decimals, setDecimals] = useState<number>(18);
  const [weiToCurrency, setWeiToCurrency] = useState<string>("0");
  const [currencyToWei, setCurrencyToWei] = useState<string>("0");
  const [formattedValue, setFormattedValue] = useState<string>("0");

  const [error, setError] = useState<string | undefined>(undefined);


  const setWeiToCurrencyValue = (value: string) => {
    try {
      const currencyVal = weiToCurrencyValue(value, decimals);
      setWeiToCurrency(currencyVal);
      setError(undefined);
    } catch (e) {
      setError(e.message);
    }
  };


  const setCurrencyToWeiValue = (value: string) => {
    try {
      const currencyVal = currencyValueToWei(value, decimals);
      setCurrencyToWei(currencyVal);
      setError(undefined);
    } catch (e) {
      setError(e.message);
    }
  };

  const setCurrencyFormattedValue = (value: string) => {
    try {
      const currencyVal = formatCurrencyValue(value);
      setFormattedValue(currencyVal);
      setError(undefined);
    } catch (e) {
      setError(e.message);
    }
  };

  const importString = `import { weiToCurrencyValue, currencyValueToWei, formatCurrencyValue } from "@kiroboio/web3-react-safe-transfer";`
  return (
    <Layout title="Utils">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: "20px",
          padding: "4%"
        }}
      >
        <code style={{ marginBottom: 16 }}>{importString}</code>
        <div style={{ marginBottom: 8 }}>
          decimals <input onChange={(e) => setDecimals(Number(e.target.value))} type="number" defaultValue="18" />
        </div>

        <code style={{ marginTop: 16 }}>weiToCurrencyValue(<input onChange={(e) => setWeiToCurrencyValue(e.target.value)} />, {decimals})</  code>
        <div>
          return: <code>{weiToCurrency}</code>
        </div>

        <code style={{ marginTop: 16 }}>currencyValueToWei(<input onChange={(e) => setCurrencyToWeiValue(e.target.value)} />, {decimals})</  code>
        <div>
          return: <code>{currencyToWei}</code>
        </div>

        <code style={{ marginTop: 16 }}>formatCurrencyValue(<input onChange={(e) => setCurrencyFormattedValue(e.target.value)} />)</  code>
        <div>
          return: <code>{formattedValue}</code>
        </div>
        <div style={{ marginTop: 16 }}>
          <div style={{ color: "red" }}>{error}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Utils;
