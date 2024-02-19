let seletedSeats = [];
let availableSeat = 40;
let sitPrice = 550;
function handleClick(event) {
  const clickButton = event.target;
  if (clickButton.classList.contains("selected")) {
    return;
  }
  const selectedButton = document.querySelectorAll(".selected");
  if (selectedButton.length >= 4) {
    alert("You have already 4 seat selected");
    return;
  }
  clickButton.classList.add("selected");
  clickButton.style.backgroundColor = "#1dd100";
  clickButton.style.color = "white";
  const seletedSeat = clickButton.innerText;
  seletedSeats.push(seletedSeat);
  const seletedCount = seletedSeats.length;
  availableSeat--;
  document.getElementById("left-seat").innerText = availableSeat;
  document.getElementById("select-seat").innerText = seletedCount;
  calculateTotalPrice();
}
document.querySelectorAll("#btn").forEach((button) => {
  button.addEventListener("click", handleClick);
});
// function calculateTotalPrice() {
//   const totalPrice = seletedSeats.length * sitPrice;
//   const totalPriceElement = (document.getElementById("total-price").innerText =
//     totalPrice);
//   const grandTotalPriceElement = (document.getElementById(
//     "grand-total"
//   ).innerText = totalPrice);
// }

