import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static("public"));

const rates = {
  USD: 1, INR: 83.28, EUR: 0.92, JPY: 150.21, GBP: 0.80, SGD: 1.34, AED: 3.67
};

app.get("/api/currencies", (req, res) => {
  res.json(Object.keys(rates));
});

app.post("/api/convert", (req, res) => {
  const { from_currency, to_currency, amount } = req.body;
  const result = (amount / rates[from_currency]) * rates[to_currency];

  res.json({
    converted_amount: Number(result.toFixed(2)),
    from_currency,
    to_currency,
    amount
  });
});

app.listen(5000, () => console.log("Running on http://localhost:5000"));

