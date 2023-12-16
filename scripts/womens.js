const product = document.getElementById("products");
const dataBase = "../database/Women.json";

var AllData=[];
const getData = async () => {
  const res = await fetch(dataBase);
  const data = await res.json();
  AllData=data;
  display(data);
  // console.log(data)
};

function display(data) {
  product.innerHTML = "";
  data.map((elem) => {
    const div = document.createElement("div");
    div.addEventListener("click",function(){
      const object ={
        name:elem.Brand,
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



const brand = document.getElementById("brand");
const price =document.getElementById("price");

let catArray =[];
brand.addEventListener("change",function(e){
 
  if(e.target.checked){
    catArray.push(e.target.name);
  }else{
    catArray.pop(e.target.name);
  }

  const filteredData = AllData.filter((product) => {
    return catArray.some((brand) => product?.Brand?.toLowerCase().includes(brand));
  });
  display(filteredData);
});

price.addEventListener("change", function (e) {
  if (e.target.checked) {
    catArray.push(+e.target.name);
  } else {
    catArray.pop(+e.target.name);
  }

  const filteredData = AllData.filter((product) => {
    return catArray.some((price) => {
      if (price === 35) {
        return product?.Price > price && product?.Price < 500;
      } else if (price === 501) {
        return product?.Price > price && product?.Price < 1500;
      } else if (price === 1500) {
        return product?.Price > price && product?.Price < 3000;
      } else {
        return product?.Price > price;
      }

      
    });
  });

  display(filteredData);
});

const sortTag = document.getElementById("sortTag");
 sortTag.addEventListener("change",function(e){
  const value = e.target.value;
  if(value===""){
    display(AllData);
  }else if(value==="LowToHigh"){
    const data = AllData.sort((a,b)=> +a.Price - +b.Price );
    display(data);

    
  }else{
    const data = AllData.sort((a,b)=> +b.Price - +a.Price );
    display(data);
  }
  

 })
