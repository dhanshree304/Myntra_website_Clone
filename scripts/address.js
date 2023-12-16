const formTag = document.getElementById("formTag");
const saveAdd = document.getElementById("saveAdd");

saveAdd.addEventListener("click", function (e) {
  e.preventDefault();

  const name = formTag.name.value;
  const phone = formTag.phone.value;
  const pincode = formTag.pincode.value;
  const address = formTag.address.value;
  const locality = formTag.locality.value;
  const city = formTag.city.value;
  const state = formTag.state.value;

  const object = {
    name,
    phone,
    pincode,
    address,
    locality,
    city,
    state,
  };

  if (
    name === "" ||
    phone === "" ||
    pincode === "" ||
    address === "" ||
    locality === "" ||
    city === "" ||
    state === ""
  ) {
    alert("Please fill all the details");
  } else {
    localStorage.setItem("address", JSON.stringify(object));

    window.location.href = "../pages/payment.html";
  }
});
