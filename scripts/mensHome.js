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
  window.location.href = "../pages/login.html";
});























const slider = document.getElementById("slider");
const dots = document.getElementById("dots");
const imgArr = [
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/e384cb32-690c-4ccf-a6cb-61df36960bb21651599573972-Workwear_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b54399f0-6ed5-44b3-84b0-e9d5c1657aaa1651599573991-CR7_Desk_Baner.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/846beb79-ada7-48c3-a6c6-4448f276c2111651599573979-Sports-Shoes_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/abd2b07f-954c-43ad-ba39-bfa50527d0641650180659364-Backpacks---Luggage_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/eb6408d8-b413-49f7-8525-317fddba53821650180659351-Casual---Sports-Shoes_Desk.jpg",
];

let count = 0;
function sliderShow() {
  const ulTag = document.createElement("div");
  ulTag.setAttribute("class", "dotsDiv");
  imgArr.map((_, i) => {
    const liTag = document.createElement("div");

    ulTag.append(liTag);
  });

  dots.append(ulTag);

  setInterval(() => {
    slider.innerHTML = "";
    // console.log(count !== imgArr.length - 1);

    const imgTag = document.createElement("img");
    imgTag.src = imgArr[count];
    // console.log(imgArr[count]);
    imgTag.setAttribute("class", "slideImg");
    slider.append(imgTag);
    count++;
    if (count === imgArr.length - 1) {
      count = 0;
    }
  }, 1000);
}

sliderShow();
