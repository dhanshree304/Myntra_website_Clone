const cartArray = JSON.parse(localStorage.getItem("cart-list")) || [];

const mainDiv = document.getElementById("main");
const cartDiv = document.getElementById("cart");
const totalmrpTag = document.getElementById("totalmrp");
const disonmrp = document.getElementById("disonmrp");
const totalAmount = document.getElementById("totalAmount");
const ApplyCouponBtn = document.getElementById("ApplyCoupon");
const couponSection = document.getElementById("couponSection");
const ApplyBtn = document.getElementById("ApplyBtn");
const placerOrder = document.getElementById("placerOrder")
var sum = 0;
var quantity = 0;
var total = 0;
var totalValue = 0;
var discount = 0;
function display(data) {
  cartDiv.innerHTML = "";
  couponSection.style.display = "none";
  if (data.length === 0) {
    mainDiv.innerHTML = "";
    mainDiv.style.justifyContent = "center";
    mainDiv.style.alignItems = "center";
    mainDiv.style.height = "400px";
    const div = document.createElement("div");
    const h2Tag = document.createElement("h2");
    h2Tag.style.textAlign = "center";
    h2Tag.textContent = "Hey! It fells so light.";
    const pTag = document.createElement("p");
    pTag.textContent = "There is nothing in your bag . Please add some items";

    div.append(h2Tag, pTag);
    mainDiv.append(div);
  } else {
    data.map((product) => {
      sum += +product.price * +product.qty;
      quantity += +product.qty;
      total = sum;

      totalmrpTag.textContent = `RS.${+product.qty * 500 + total}`;
      disonmrp.textContent = `-RS.${+product.qty * 500 + total - total}`;
      totalValue =
        +product.qty * 500 +
        total -
        +product.qty * 500 +
        total -
        total +
        20 +
        79;


      ApplyBtn.addEventListener("click", function () {
        discount = totalValue - 100;
        localStorage.setItem("discount", discount);
       
       
      });
      console.log(discount)
      const temp = localStorage.getItem("discount");
  

      totalAmount.innerText = `RS. ${totalValue===0 ? discount : totalValue}`;
      ApplyCouponBtn.addEventListener("click", function () {
        couponSection.style.display = "flex";
      });

      const div = document.createElement("div");
      div.setAttribute("class", "card");
      const imgDiv = document.createElement("div");
      const imgTag = document.createElement("img");
      imgTag.setAttribute("class", "image");
      imgTag.src = product.image;

      imgDiv.append(imgTag);

      const div2 = document.createElement("div");
      div2.setAttribute("class", "div2");

      const h3Tag = document.createElement("h3");
      h3Tag.textContent = product.name;

      const pTag = document.createElement("p");
      pTag.textContent = product.description;

      const sizeDiv = document.createElement("div");
      sizeDiv.setAttribute("class", "sizeDiv");

      const selectDiv = document.createElement("div");
      selectDiv.setAttribute("class", "selectDiv");
      const count = document.createElement("h4");
      count.textContent = "Qty:";
      const qty = document.createElement("select");

      qty.addEventListener("change", function (e) {
        e.preventDefault();
        const filteredArray = cartArray.map((elem) => {
          if (elem.id === product.id) {
            return { ...elem, qty: +e.target.value };
          } else {
            return elem;
          }
        });
        console.log(filteredArray);
        localStorage.setItem("cart-list", JSON.stringify(filteredArray));
        window.location.reload();
      });

      const arrayTemp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      arrayTemp.map((count) => {
        const options = document.createElement("option");
        options.setAttribute("value", count);
        options.innerText = count;
        qty.append(options);
      });
      qty.value = product.qty;
      selectDiv.append(count, qty);

      const h4Tag = document.createElement("h4");
      if (!product.beauty) {
        h4Tag.textContent = `Size:${product.size}`;
      }
      const price = document.createElement("h4");
      price.setAttribute("class", "price");

      price.innerHTML = `Rs.${product.price} <strike>Rs.${
        +product.price + 500
      }</strike> <span id="price_per">(${Math.round(
        (Number(product.price) / (Number(product.price) + 500)) * 100
      )}%)</span>`;

      const returnTag = document.createElement("p");
      returnTag.textContent = "10 days return available";

      const closeIcon = document.createElement("p");
      closeIcon.textContent = "X";
      closeIcon.setAttribute("class", "cross");
      closeIcon.addEventListener("click", function () {
        const filteredArray = cartArray.filter(
          (elem) => elem.id !== product.id
        );
        localStorage.setItem("cart-list", JSON.stringify(filteredArray));
        window.location.reload();
      });

      sizeDiv.append(h4Tag, selectDiv);
      div2.append(h3Tag, pTag, sizeDiv, price, returnTag, closeIcon);
      div.append(imgDiv, div2);
      cartDiv.append(div);
    });
  }
}

display(cartArray);


placerOrder.addEventListener("click",function(){
  console.log(totalValue);
  localStorage.setItem("totalAmount",totalValue);
  window.location.href="../pages/address.html";

})