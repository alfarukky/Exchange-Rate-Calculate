const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEL_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const swap_El = document.getElementById("swap");
const rate_El = document.getElementById("rate");

function calculate() {
  const currencyOne = currencyEl_one.value;
  const currencyTwo = currencyEL_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currencyTwo];
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
      rate_El.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
    });
}
//event listeners

currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEL_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);
swap_El.addEventListener("click", function () {
  let temp = currencyEl_one.value;
  currencyEl_one.value = currencyEL_two.value;
  currencyEL_two.value = temp;
  calculate();
});
calculate();
