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

const wishlistArray = JSON.parse(localStorage.getItem("wishlist")) || [];

const count = document.getElementById("count");
const main = document.getElementById("main");

function display(data) {
  count.textContent = data.length;
  main.innerHTML = "";
  if (data.length > 0) {
    data.map((elem) => {
      console.log(elem);
      const div = document.createElement("div");

      div.setAttribute("class", "subDiv");
      const imgTag = document.createElement("img");
      imgTag.src = elem.image;

      const icon = document.createElement("p");
      icon.textContent = "X";
      icon.setAttribute("class", "deleteIcon");
      

      icon.addEventListener("click", function () {
        //fil=[{id:1,gir},{id:3,bod}]
        // 2
        const filterArray = wishlistArray.filter(
          (product) => product.id !== elem.id
        );
        localStorage.setItem("wishlist", JSON.stringify(filterArray));
        window.location.reload();
      });

      const div2 = document.createElement("div");
      div2.setAttribute("class", "desc");

      const category = document.createElement("h3");
      category.textContent = elem.name;

      const price = document.createElement("h4");

      price.innerHTML = `Rs.${elem.price} <strike>Rs.${
        +elem.price + 500
      }</strike> <span id="price_per">(${Math.round(
        (Number(elem.price) / (Number(elem.price) + 500)) * 100
      )}%)</span>`;
      const btn = document.createElement("button");
      btn.textContent = "Move To Bag";
      div2.append(category, price, btn);
      div.append(imgTag, icon, div2);
      main.append(div);
    });
  } else {
    main.style.display = "flex";
    const div = document.createElement("div");
    div.setAttribute("class", "wish");
    const h2Tag = document.createElement("h2");

    h2Tag.textContent = "Your Wishlist is empty";
    div.append(h2Tag);
    main.append(div);
  }
}
display(wishlistArray);
