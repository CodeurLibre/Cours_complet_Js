//! Les tableaux
let array = ["Abidjan", "Bouake", "Dabou"];
// console.log(array[0][3]);

let array2 = ["Abidjan", 24, true, [1, 2], { nom: "Hugues" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "Hugues",
  age: 21,
  techno: ["Js", "React", "Node Js"],
  admis: false,
};

let data = [
  {
    pseudo: "Hugues",
    age: 21,
    techno: ["Js", "React", "Node Js"],
    admin: false,
  },
  {
    pseudo: "Priscille",
    age: 22,
    techno: ["Python", "React", "Node Js"],
    admin: true,
  },
  {
    pseudo: "Charles",
    age: 24,
    techno: ["Php", "React", "Node Js"],
    admin: false,
  },
];
// console.log(data[0].pseudo[2]);

//! Les structures de contrôle
if (data[1].age > data[0].age) {
  //   console.log(data[1].pseudo + " est plus âgé(e) que " + data[0].pseudo);
}

//! Les boucles for
// for (const user of data) {
//   document.body.innerHTML += `<li>${user.pseudo} - ${user.age} </li>`;
// }

for (i = 0; i < data.length; i++) {
  // document.body.innerHTML += `<h2>${data[i].pseudo[0]} - ${data[i].age} </h2>`;
}

document.body.addEventListener("click", (e) => {
  // console.log(e.target.id);
  switch (e.target.id) {
    case "Javascript":
      document.body.style.background = "yellow";
      break;

    case "Php":
      document.body.style.background = "#6442ae";
      break;

    case "Python":
      document.body.style.background = "blue";
      break;

    default:
      null;
  }
});

//! Méthode String
let string2 = "Javascript est un language orienté objet";
// console.log(typeof "42");
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string2));
// console.log(string2.length);
// console.log(string2[string2.length - 1]);
// console.log(string2.indexOf("langage"));
// console.log(string2.indexOf("x")); // Retourne -1 s'il ne reconnait pas

// let newString = string2.slice(8, 17);
// console.log(string2.split(" "));

// console.log(string2.toLocaleUpperCase);
// console.log(string2.replace("Javascript", "PHP"));

//! Méthode Number
let number2 = 45.2164;
let numberString = "42.12 est un chiffre";

//! Methode array
let array3 = ["Js", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4);

let newArray = [...array3, ...array4];
// console.log(newArray);
// console.log(array3.join(" "));

// console.log(newArray.slice(1, 3));
// console.log(array3.indexOf("Python"));
// newArray.forEach((language) => console.log(language));

// console.log(array3.every((language) => language === "p"));
// console.log(array3.some((language) => language === "Js"));

// let shift = array3.shift();
// console.log(shift);
// console.log(array3.po());

// console.log(array3.splice(0, 1, "moi"));
// console.log(array3);

//? Important
let arrayNumber = [17, 5, 13, 4];
// console.log(arrayNumber.reduce((x, y) => x + y));
// console.log(arrayNumber.push(17));

//*filter = filtrer, sort= trier, map= lister un peu que forEach

// console.log(arrayNumber.filter((number) => number > 5));
// console.log(arrayNumber.sort((a, b) => a - b));

// document.body.innerHTML = arrayNumber
//   .map((number) => `<li>${number}</li>`)
//   .join(" ");
//! Methode object
document.body.innerHTML = data
  .filter((user) => user.pseudo.includes("s"))
  .sort((a, b) => b.age - a.age)
  .map(
    (user) => `
  <div class='userCard'>
    <h3>Pseudo: ${user.pseudo}</h3>
    <p>Age: ${user.age} ans</p>
    <p>Status: ${user.admin ? "Modérateur" : "Membre"}</p>
    
  </div>
  
`
  )
  .join("");
