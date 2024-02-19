let selectedSeats = [];
let availableSeat = 40;
let sitPrice = 550;
let serial = 1;
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

  //click Button and show per seat, class and per seat price
  // 1. seat serial
  const seatSerial = clickButton.innerText;
  const titleContainer = document.getElementById("seat-class-price");
  const p = document.createElement("p");
  p.innerText = serial + ". " + seatSerial;
  titleContainer.appendChild(p);
  serial++;

  // 2. class serial
  const classSerial = "Economoy";
  const classContainer = document.getElementById("class-seat-price");
  const p2 = document.createElement("p");
  p2.innerText = classSerial;
  classContainer.appendChild(p2);

  //price serial 
  const priceContainer = document.getElementById("price-seat-class");
  const p3 = document.createElement("p");
  p3.innerText = sitPrice;
  priceContainer.appendChild(p3);

  // // price serial
  // const priceSerial = (clickButton.innerText = sitPrice);
  // const priceContainer = document.getElementById("price-seat-class");
  // const p3 = document.createElement("p");
  // p3.innerText = priceSerial;
  // priceContainer.appendChild(p3);

  clickButton.classList.add("selected");
  clickButton.style.backgroundColor = "#1dd100";
  clickButton.style.color = "white";
  const selectedSeat = clickButton.innerText;
  selectedSeats.push(selectedSeat);
  const selectedCount = selectedSeats.length;
  availableSeat--;
  document.getElementById("left-seat").innerText = availableSeat;
  document.getElementById("select-seat").innerText = selectedCount;
  calculateTotalPrice();
}
document.querySelectorAll("#btn").forEach((button) => {
  button.addEventListener("click", handleClick);
});
function calculateTotalPrice() {
  const totalPrice = selectedSeats.length * sitPrice;
  const totalPriceElement = (document.getElementById("total-price").innerText =
    totalPrice);
  const grandTotalPriceElement = (document.getElementById(
    "grand-total"
  ).innerText = totalPrice);
}
