//! Les sélecteurs js
/* document.querySelector("h4").style.color = "blue";
 const select_h4 = document.querySelector("h4");*/

// !Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn1");
const btn2 = document.getElementById("btn2");
const answer = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("questionClick");
});

btn1.addEventListener("click", () => {
  answer.classList.add("answer");
  answer.style.background = "green";
});

btn2.addEventListener("click", () => {
  answer.classList.add("answer");
  answer.style.background = "red";
});
//?--------------------------------

//! Mouse event
const mouseMouse = document.querySelector(".mouse_move");
window.addEventListener("mousemove", (e) => {
  mouseMouse.style.left = e.pageX + "px";
  mouseMouse.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mouseMouse.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mouseMouse.style.transform = "scale(1) translate(-50%, -50%)";
  mouseMouse.style.background = "red";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "red";
});

answer.addEventListener("mouseover", () => {
  answer.style.transform = "rotate(2deg)";
});
//?--------------------------------

//! KeyPress event
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
});
//?-------------------------------

//! Scroll event
// const nav = document.querySelector("nav");

// window.addEventListener("scroll", () => {
//   var currentScroll = window.scrollY;

//   if (currentScroll >= 250) {
//     nav.style.top = "0";
//   } else {
//     nav.style.top = "-50px";
//   }
// });
//?-------------------------------

//! Form event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
  console.log(language);
});

form.addEventListener("submit", (e) => {
  console.log(cgv.checked);
  e.preventDefault();
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo} <h3>
    <h4>Language : ${language} <h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});
//?-----------------------------------------

//! Load event
/*window.addEventListener("load", () => {
  console.log("Document chargé");
});*/
//?-----------------------------------------

//!ForEach
/*const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});*/
//?-----------------------------------------

//! addEventListener Vs onclick
// document.body.onclick = function () {
//   console.log("Scroll !");
// };

//* Bubbling => fin ( évènement par défaut)
/*document.body.addEventListener("click", () => {
  console.log("Click1");
});*/

//* Usecapture
/*document.body.addEventListener(
  "click",
  () => {
    console.log("Click2");
  },
  true
);*/
//?-----------------------------------------

//! Stop propagation
/*questionContainer.addEventListener("click", (e) => {
  alert("Test !");
  e.stopPropagation();
});*/
// removeEventListener
//?-----------------------------------------

//! BOM
setTimeout(() => {
  questionContainer.style.borderRadius = "30px";
}, 3000);

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//     <div class='box'>
//         <h2>Nouvelle boite !<h2>
//     </div>

//     `;
// }, 3000);

// document.body.addEventListener("click", (e) => {
//   e.target.remove();
//   clearInterval(interval);
// });
//?-----------------------------------------

//! Location
/*console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);
location.replace("https://google.com");*/
//?-----------------------------------------

//! Navigator
console.log(navigator.userAgent);
//?-----------------------------------------

//! Setpropertie
/*window.addEventListener("mousemove", (e) => {
  form.style.setProperty("--x", e.pageX + "px");
  form.style.setProperty("--y", e.pageY + "px");
});
*/
