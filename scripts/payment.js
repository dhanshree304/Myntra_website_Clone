const submitBtn = document.getElementById("sub");
const formTag = document.getElementById("formTag");
const finalAddress = document.getElementById("finalAddress");
const finalPrice = document.getElementById("finalPrice");

const addressTag = JSON.parse(localStorage.getItem("address"));
console.log(addressTag);

const { name, phone, pincode, address, locality, city, state } = addressTag;

finalAddress.textContent = `${name}  ,${phone} ,${address}, ${locality} ,${city} ,${state}, ${pincode}`;

finalPrice.textContent = ` RS. ${localStorage.getItem("totalAmount") || 0}`;

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const cardNumber = formTag.cardNum.value;
  const EXPNumber = formTag.expDate.value;
  const cvvNumber = formTag.cvv.value;
  const holderName = formTag.holderName.value;

  console.log(cardNumber);
  if (
    cardNumber === "" ||
    EXPNumber === "" ||
    cvvNumber === "" ||
    holderName === ""
  ) {
    alert("please enter all details");
  } else if (cardNumber === "12345678945" && cvvNumber === "1234") {
    alert("Your Payment has been successful . We will Connect You. Thank You!");
    localStorage.removeItem("cart-list");

    window.location.href = "/";
  } else {
    alert("Please check Your Details");
  }
});
