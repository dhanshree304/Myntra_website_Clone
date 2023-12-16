const profile = document.querySelector(".profileSection");
profile.addEventListener("mouseenter", function () {
  document.querySelector(".profileDropdown").style.display = "block";
});

document
  .querySelector(".profileDropdown")
  .addEventListener("mouseenter", function () {
    document.querySelector(".profileDropdown").style.display = "block";
  });

profile.addEventListener("mouseleave", function () {
  document.querySelector(".profileDropdown").style.display = "none";
});

document
  .querySelector(".profileDropdown")
  .addEventListener("mouseleave", function () {
    document.querySelector(".profileDropdown").style.display = "none";
  });

document.getElementById("loginBtn").addEventListener("click", () => {
  window.location.href = "./pages/login.html";
});
const product = JSON.parse(localStorage.getItem("detail_product"));

const wishlist = document.getElementById("btn2");
const cart = document.getElementById("btn1");
const sizeDiv = document.getElementById("sizeDiv");
const sizes = document.getElementById("sizes");
const price = document.getElementById("rs");
const strikeTag = document.getElementById("strike");
const discount = document.getElementById("disPtag");
const category = document.getElementById("category");
const description = document.getElementById("desc");
const img = document.getElementById("img");
const details = document.getElementById("details");

function display(product) {
  console.log(product);
  if (product) {
    if (!product.beauty) {
      sizeDiv.style.display = "flex";
      sizes.style.display = "flex";
    }
    img.src = product.image;
    category.textContent = product.name || product.brand;

    price.textContent = `Rs.${product.price}`;

    strikeTag.textContent = +product.price + 500;

    discount.textContent = `(${Math.round(
      (Number(product.price) / (Number(product.price) + 500)) * 100
    )}%)`;

    description.textContent = product.description;
  }
}
display(product);

const wishlistArray = JSON.parse(localStorage.getItem("wishlist")) || [];

wishlist.addEventListener("click", function (e) {
  const present = wishlistArray.filter((p) => p.id === product.id);
  if (present.length > 0) {
    alert("Product is already added in wishlist");
  } else {
    console.log(product);
    wishlistArray.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlistArray));
    alert("product added in wishlist");
  }
});

var size = "";

const size1 = document.getElementById("size1");
const size2 = document.getElementById("size2");
const size3 = document.getElementById("size3");
const size4 = document.getElementById("size4");
const size5 = document.getElementById("size5");
size1.addEventListener("click", function () {
  size = "";
  size += size1.textContent;
  size1.style.backgroundColor = "red";
  size2.style.backgroundColor = "white";
  size3.style.backgroundColor = "white";
  size4.style.backgroundColor = "white";
  size5.style.backgroundColor = "white";
});

size2.addEventListener("click", function () {
  size = "";
  size += size2.textContent;
  size1.style.backgroundColor = "white";
  size2.style.backgroundColor = "red";
  size3.style.backgroundColor = "white";
  size4.style.backgroundColor = "white";
  size5.style.backgroundColor = "white";
});

size3.addEventListener("click", function () {
  size = "";
  size += size3.textContent;
  size1.style.backgroundColor = "white";
  size2.style.backgroundColor = "white";
  size3.style.backgroundColor = "red";
  size4.style.backgroundColor = "white";
  size5.style.backgroundColor = "white";
});

size4.addEventListener("click", function () {
  size += size4.textContent;
  size1.style.backgroundColor = "white";
  size2.style.backgroundColor = "white";
  size3.style.backgroundColor = "white";
  size4.style.backgroundColor = "red";
  size5.style.backgroundColor = "white";
});

size5.addEventListener("click", function () {
  size = "";
  size += size5.textContent;
  size1.style.backgroundColor = "white";
  size2.style.backgroundColor = "white";
  size3.style.backgroundColor = "white";
  size4.style.backgroundColor = "white";
  size5.style.backgroundColor = "red";
});

const cartArray = JSON.parse(localStorage.getItem("cart-list")) || [];

cart.addEventListener("click", function (e) {
  const present = cartArray.filter((p) => p.id === product.id);
  if (!product.beauty && size === "") {//beauty madhal nsel aani size select nsel tr.
    alert("Please select size");
  } else {
    if (present.length > 0) {
      alert("Product is already added in cart");
    } else {
      cartArray.push({ ...product,qty:1, ...(!product.beauty && { size: size }) });//created object , destructuring product ,if product is not from beauty
      //adding size
      localStorage.setItem("cart-list", JSON.stringify(cartArray));
      alert("product added in cart");
    }
  }
});


