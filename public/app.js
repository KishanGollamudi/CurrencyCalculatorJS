async function loadCurrencies() {
  const res = await fetch("/api/currencies");
  const data = await res.json();

  let from = document.getElementById("from");
  let to = document.getElementById("to");

  data.forEach(c => {
    from.innerHTML += `<option value="${c}">${c}</option>`;
    to.innerHTML += `<option value="${c}">${c}</option>`;
  });
}

async function convert() {
  let amount = document.getElementById("amount").value;
  let fromC = document.getElementById("from").value;
  let toC = document.getElementById("to").value;

  let res = await fetch("/api/convert", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      from_currency: fromC,
      to_currency: toC,
      amount: Number(amount)
    })
  });

  let data = await res.json();
  document.getElementById("result").innerHTML =
    `${amount} ${fromC} = <b>${data.converted_amount}</b> ${toC}`;
}

loadCurrencies();

