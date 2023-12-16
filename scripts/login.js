const continuBtn = document.querySelector("#continuBtn");
const continuBtnSignup = document.getElementById("continuBtnSignup");

continuBtn && continuBtn.addEventListener("click", getOtp);

const signupData = JSON.parse(localStorage.getItem("signupData")) || [];
const p1 = document.getElementById("p1");
const main = document.getElementById("main");
const otp = 1234;

const inpBox = document.querySelector("#inpBox");

function getOtp() {
  if (inpBox.value === "") {
    p1.textContent = "Please Enter Your Mobile Number";
    p1.style.display = "block";
  } else if (inpBox.value.length !== 10) {
    p1.textContent = "Please enter a valid mobile number (10 digits)";
    p1.style.display = "block";
  } else {
    main.innerHTML = "";
    console.log(signupData);
    // signupData=[{mobile:122333}]
    const dataCheck = signupData.filter((e) => e.mobile === inpBox.value); //[{mobile:122333}]
    if (dataCheck.length > 0) {
      localStorage.setItem("loginData", inpBox.value);

      const img = document.createElement("img");
      img.src = "../Assets/images/102.jpg";
      img.setAttribute("class", "img1");

      const h2tag = document.createElement("h2");
      h2tag.textContent = "Verify with OTP";

      const ptag = document.createElement("p");
      ptag.textContent = `Sent to${inpBox.value}`;

      const inputDiv = document.createElement("div");
      inputDiv.setAttribute("class", "otp");

      const inpBox1 = document.createElement("input");
      inpBox1.setAttribute("maxlength", "1");
      const inpBox2 = document.createElement("input");
      inpBox2.setAttribute("maxlength", "1");
      const inpBox3 = document.createElement("input");
      inpBox3.setAttribute("maxlength", "1");
      const inpBox4 = document.createElement("input");
      inpBox4.setAttribute("maxlength", "1");

      inpBox4.addEventListener("keypress", function (event) {
        const userOtp = `${inpBox1.value}${inpBox2.value}${inpBox3.value}${inpBox4.value}`;
        if (event.key === "Enter") {
          event.preventDefault();
          console.log(userOtp);
          if (+userOtp === otp) {
            alert("You are  successfully logged in");
            window.location.href = "/";
          } else {
            alert("Enter correct OTP");
          }
        }
      });

      const h5tag = document.createElement("h5");
      h5tag.innerHTML = `Login using <span class="red">Password</span>`;
      const h5tagg = document.createElement("h5");
      h5tagg.innerHTML = `Having trouble logging in? <span class="red">Get help</span>`;

      inputDiv.append(inpBox1, inpBox2, inpBox3, inpBox4);
      main.append(img, h2tag, ptag, inputDiv, h5tag, h5tagg);
    } else {
      window.location.href = "./signUp.html";
    }
  }
}

continuBtnSignup &&
  continuBtnSignup.addEventListener("click", function () {
    const loginNum = localStorage.getItem("loginData");
    const name = document.getElementById("name");

    const email = document.getElementById("email");
    const mobileNum = document.getElementById("mobNum");
    if (name.value === "" || email.value === "") {
      alert("Please enter ur credentials");
    } else {
      mobileNum.textContent = `You have signup for this mobile number ${loginNum}`;

      const signupObj = {
        name: name.value,
        email: email.value,
        mobile: loginNum,
      };
      signupData.push(signupObj);
      localStorage.setItem("signupData", JSON.stringify(signupData));
      window.location.href = "./login.html";
      alert("You are successfully signup, login from here now");
    }
  });
