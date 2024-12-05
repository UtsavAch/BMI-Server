const IMCForm = document.getElementById("imc-form");

IMCForm.onsubmit = async (event) => {
  event.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const response = await fetch("http://localhost:3000/calculate-imc", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ weight, height }),
  });

  const result = await response.json();
  document.getElementById("result").textContent = result.imc;
};
