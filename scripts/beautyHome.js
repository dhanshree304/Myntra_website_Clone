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

let end = 15;
let start = 0;
let totalPages = 150 / end;

const API = "https://makeup-api.herokuapp.com/api/v1/products.json";

const product = document.getElementById("products");
const paginationDiv = document.getElementById("pagination");
var AllData = [];
const getData = async (start, end) => {
  display([]);
  const res = await fetch(API);
  const data = await res.json();

  AllData = data;
  const refine_data = data.slice(start, end);
  console.log(refine_data); //0-15 objects
  display(refine_data);
};
function display(data) {
  product.innerHTML = "";

  if (data.length > 0) {
    paginationDiv.style.display = "flex";
    data.map((elem) => {
      const div = document.createElement("div");
      div.addEventListener("click", function () {
        const object = {
          name: elem.name,
          id: new Date(),
          description: elem.category,
          rating: elem.rating,
          price: elem.price,
          image: elem.api_featured_image,
          brand: elem.brand,
          beauty: true,
        };
        localStorage.setItem("detail_product", JSON.stringify(object));
        window.location.href = "../pages/detailsPage.html";
      });
      div.setAttribute("class", "subDiv");
      const imgTag = document.createElement("img");
      imgTag.src = elem.api_featured_image;

      const category = document.createElement("h3");
      category.textContent = elem.name;

      const description = document.createElement("p");
      description.textContent = elem.category;

      const rating = document.createElement("h4");
      rating.setAttribute("class", "rate");
      rating.textContent = `${
        elem.rating ? elem.rating : Math.floor(Math.random() * 5)
      } | ${Math.floor(Math.random() * 500)}`;

      const price = document.createElement("h4");

      price.innerHTML = `Rs.${elem.price} <strike>Rs.${+elem.price + 500 }</strike>
      
      <span id="price_per">(${Math.round(
        (Number(elem.price) / (Number(elem.price) + 500)) * 100
      )}%)</span>`;

      div.append(imgTag, rating, category, description, price);
      product.append(div);
    });
  } else {
    const div = document.createElement("div");
    div.setAttribute("id", "loading");
    const img = document.createElement("img");
    img.src =
      "https://cdn.dribbble.com/users/882457/screenshots/7945812/media/6cd78297ad33b66fe9cf6c7408e1d252.gif";
    div.append(img);
    product.append(div);
  }
}

getData(start, end);

function pagination(start, end, totalPages) {
  const array = Array.from({ length: totalPages }, (_, i) => i + 1);

  paginationDiv.innerHTML = "";
  const div = document.createElement("div");

  array.map((count, i) => {
    const btn = document.createElement("button");
    btn.setAttribute("class", "pageBtn");
    btn.addEventListener("click", function () {
      if (count === 1) {
        start = 0;
        end = 15;
        getData(start, end);
      } else if (end === totalPages) {
        // Do nothing if end is already at the last page
        return;
      } else {
        start = +btn.innerText * 15;//2*15=30;
        end = start + 15;//30+15=45;
        getData(start, end);
      }

      btn.disabled = true;
      const getArrayBtn = document.querySelectorAll(".pageBtn");
      // [1,2,3,4,5,6,7,8]
      // 1=active
      // 2=disbled
      //3=active
      //4=active

      getArrayBtn.forEach((button, index) => {
        // c=2  btn=3
        if (count !== +button.innerText) {
          button.disabled = false;
        }
      });
    });

    btn.textContent = count;
    div.append(btn);
    paginationDiv.append(div);
  });
}

pagination(start, end, totalPages);

const category = document.getElementById("category");
const brand = document.getElementById("brand");
const catArray = [];
category.addEventListener("change", function (e) {
  if (e.target.checked) {
    catArray.push(e.target.name);
  } else {
    catArray.pop(e.target.name);
  }
  const filteredData = AllData.filter((product) => {
    // [{category:gel},{category:pen},{category:oil}]=allData
    //["gel"]=catArray
    // gel
    return catArray.some((category) => product?.category?.includes(category));
  });
  console.log(filteredData);
  const refine_data = filteredData.slice(start, end);

  display(refine_data);
});

brand.addEventListener("change", function (e) {
  console.log(e);
  if (e.target.checked) {
    catArray.push(e.target.name);
  } else {
    catArray.pop(e.target.name);
  }

  const filteredData = AllData.filter((product) => {
    return catArray.some((brand) => product?.brand?.includes(brand));
  });
  console.log(filteredData);
  const refine_data = filteredData.slice(start, end);
  display(refine_data);
});

const sortTag = document.getElementById("sortTag");
sortTag.addEventListener("change", function (e) {
  const value = e.target.value;
  if (value === "") {
    //console.log(AllData);
    getData(start, end);

    //display(AllData);
  } else if (value === "ascending") {
    const data = AllData.sort((a, b) => (b.name < a.name ? 1 : -1));
    const refine_data = data.slice(start, end);
    display(refine_data);
  } else {
    const data = AllData.sort((a, b) => (a.name < b.name ? 1 : -1));
    const refine_data = data.slice(start, end);
    display(refine_data);
  }
});
