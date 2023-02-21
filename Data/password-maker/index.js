const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toLocaleUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = ".,;:!?/'()=-+*[]{}&~<>\"";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");
console.log(passwordOutput);

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];

    console.log(password);
  }

  passwordOutput.value = password;

  passwordOutput.select();
  navigator.clipboard.writeText(passwordOutput.value);
  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Généré mot de passe";
  }, 2000);
  // console.log(data);
}

generateButton.addEventListener("click", generatePassword);
