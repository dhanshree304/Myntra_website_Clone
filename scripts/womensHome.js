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
























const silder = document.getElementById("slider");

const imgArr = [
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/744f6742-7705-45a9-b555-892c309b36cd1650181498588-Premium-Collection_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/5f930503-ecb2-489a-9ab8-5081e10a15681649581894257-Staycation-Essentials_DEsk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/9dc6368b-8168-495f-8259-97e29f523b0c1649582887347-Loungewear_Desk.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/38f37101-f335-44be-af8f-5d53de15c75e1649530843725-Casual---Sports-Shoes_Desk--1-.jpg",
  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/a20271c6-249f-480b-bcc7-1b150516e54e1651599573998-Dressberry_Desk.jpg",
];

let count = 0;
function sliderShow() {

    const ulTag=document.createElement("div");
    ulTag.setAttribute("class","dotsDiv");

    imgArr.map((_,i)=>{
        const liTag=document.createElement("div");
        ulTag.append(liTag);

    })
    dots.append(ulTag);


  setInterval(() => {
    slider.innerHTML = "";
    const imgTag = document.createElement("img");
    imgTag.src = imgArr[count];
    imgTag.setAttribute("class", "slideImg");
    slider.append(imgTag);
    count++;

    if (count === imgArr.length - 1) {
      count = 0;
    }
  }, 1000);
}
sliderShow();
