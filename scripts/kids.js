const product = document.getElementById("products");
const dataBase = "../database/Kids.json";

const getData = async () => {
  const res = await fetch(dataBase);
  const data = await res.json();
  display(data);
};

function display(data) {
  product.innerHTML = "";
  data.map((elem) => {
    const div = document.createElement("div");
    div.addEventListener("click",function(){
      const object ={
        name:elem.Category,
        id:new Date(),
        description:elem.Description,
        rating:elem.Rating,
        price:elem.Price,
        image:elem.Image,
        brand:""
      }
      localStorage.setItem("detail_product",JSON.stringify(object));
      window.location.href="../pages/detailsPage.html"
    })
    div.setAttribute("class","subDiv");
    const imgTag = document.createElement("img");
    imgTag.src = elem.Image;

    const category = document.createElement("h3");
    category.textContent = elem.Category;

    const description = document.createElement("p");
    description.textContent = elem.Description;

    const rating = document.createElement("h4");
    rating.setAttribute("class","rate")
    rating.textContent = `${elem.Rating} | ${elem.Rating_count}`;

    const price = document.createElement("h4");

    price.innerHTML = `Rs.${elem.Price} <strike>Rs.${
      +elem.Price + 500
    }</strike> <span id="price_per">(${Math.round(
      (Number(elem.Price) / (Number(elem.Price) + 500)) * 100
    )}%)</span>`;

    div.append(imgTag, rating, category, description, price);
    product.append(div);
  });
}

getData();
