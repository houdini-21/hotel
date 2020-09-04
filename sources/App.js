import template from "./modules/Template.js";
import { genCards, showModal } from "./modules/RenderTemplate.js";
import {
  hiddenshowCards,
  minInput,
  plusInput,
  numNigths,
  Total,
} from "./modules/BtnsFuntional.js";
import Guest from "./modules/Guest.js";
import { getdate, updateDateEnd, addEndReserve } from "./modules/Dates.js";
import { resetField, verifiedField } from "./modules/Validations.js";

template.forEach((data) => {
  genCards(data);
});

const selector = document.getElementById("selector");
selector.addEventListener("change", () => {
  hiddenshowCards(selector.value);
});
const btnAddDays = document.querySelectorAll("#plus");
const btnMinDays = document.querySelectorAll("#min");
const btnAgreeRoom = document.querySelectorAll(".btn-agree");

btnAddDays.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    plusInput(nArray);
  });
});

btnMinDays.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    minInput(nArray);
  });
});

const name = document.getElementById("form-name");
const lastname = document.getElementById("form-lastname");
const email = document.getElementById("form-email");
const phone = document.getElementById("form-numphone");
const datestart = document.getElementById("form-datestart");
const dateend = document.getElementById("form-dateend");
const numroom = document.getElementById("form-rooms");
const reservebtn = document.getElementById("reserve");
const exitbtn = document.getElementById("exitbtn");
datestart.min = getdate();

btnAgreeRoom.forEach((btn, nArray) => {
  btn.addEventListener("click", () => {
    showModal(nArray, numNigths, Total);
  });
});

datestart.addEventListener("change", () => {
  let endReserve = addEndReserve(datestart.value, numNigths);
  updateDateEnd(endReserve);
});

reservebtn.addEventListener("click", () => {
  verifiedField(
    name.value,
    lastname.value,
    email.value,
    phone.value,
    datestart.value,
    dateend.value,
    numroom.value
  );
});

exitbtn.addEventListener("click", () => {
  resetField(name, lastname, email, phone, datestart, dateend, numroom);
  document.getElementById("modalReserved").classList.add("hidden");
});
