const box = document.querySelector(".box");
const input = document.querySelector("form input");
const btn = document.querySelector("button");
const qr = document.querySelector(".qr_code");
const qr_img = document.querySelector(".qr_code img");

let prevalue;

btn.addEventListener("click", () => {
  let qr_value = input.value.trim();
  if (!qr_value || qr_value == prevalue) return;
  prevalue = qr_value;
  btn.innerHTML = "Generating QR Code...";
  qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qr_value}`;
  qr_img.addEventListener("load", () => {
    box.classList.add("active");
    qr.classList.add("active");
    btn.innerHTML = "Generate QR Code";
  });
});

input.addEventListener('keyup' , ()=>{
    if(input.value.trim != prevalue){
        box.classList.remove("active");
        qr.classList.remove("active");
    }
})