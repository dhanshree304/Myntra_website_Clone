const dataBase = "../database/Men.json";
const womenDataBase = "../database/Women.json";

var AllData = [];
const getData = async () => {
  const menres = await fetch(dataBase);
  const mensData = await menres.json();

  const womenRes = await fetch(womenDataBase);
  const womenData = await womenRes.json();
  AllData = [...mensData, ...womenData];
};
getData();
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
const searchBox = document.getElementById("searchBox");
const product = document.getElementById("products");
const searchProducts = document.getElementById("searchProducts");

searchBox.addEventListener("change", function (e) {
  const value = e.target.value;
  if (value === "") {
    product.style.display = "block";
    searchProducts.style.display = "none";
  } else {
    const temp = AllData.filter(
      (ele) =>
        ele?.Category?.includes(value) ||
        ele?.Description?.includes(value) ||
        ele?.Brand?.includes(value)
    );
    display(temp);
    product.style.display = "none";
    searchProducts.style.display = "grid";
  }
});

function display(data) {
  searchProducts.innerHTML = "";
  console.log(data);
  if (data.length > 0) {
    data.map((elem) => {
      const div = document.createElement("div");
      div.addEventListener("click", function () {
        const object = {
          name: elem.Category,
          id: new Date(),
          description: elem.Description,
          rating: elem.Rating,
          price: elem.Price,
          image: elem.Image,
          brand: "",
        };
        localStorage.setItem("detail_product", JSON.stringify(object));
        window.location.href = "../pages/detailsPage.html";
      });
      div.setAttribute("class", "subDiv");
      const imgTag = document.createElement("img");
      imgTag.src = elem.Image;

      const category = document.createElement("h3");
      category.textContent = elem.Category;

      const description = document.createElement("p");
      description.textContent = elem.Description;

      const rating = document.createElement("h4");
      rating.setAttribute("class", "rate");
      rating.textContent = `${elem.Rating} | ${elem.Rating_count}`;

      const price = document.createElement("h4");

      price.innerHTML = `Rs.${elem.Price} <strike>Rs.${
        +elem.Price + 500
      }</strike> <span id="price_per">(${Math.round(
        (Number(elem.Price) / (Number(elem.Price) + 500)) * 100
      )}%)</span>`;

      div.append(imgTag, rating, category, description, price);
      searchProducts.append(div);
    });
  } else {
    const pTag = document.createElement("p");
    pTag.textContent = "No product found";

    searchProducts.append(pTag);
  }
}
