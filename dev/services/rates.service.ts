import axios from "axios";

export const getRate = () =>
  axios
    .get("https://api.coingecko.com/api/v3/exchange_rates", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      const eth = response.data?.rates?.eth?.value;
      const usd = response.data?.rates?.usd?.value;

      if (Boolean(eth) && Boolean(usd))
        return Math.round((usd / eth) * 10000) / 10000;
      throw new Error("rate error");
    })
    .catch((err) => {
      throw new Error(err);
    });
