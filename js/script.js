const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
  const symbols = "()[]{}.,;<>´`~^!?@#$%&*-_|/'ªº°=+§";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  let password = "";
  const passwordLength = 10;
  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  ];

  //Indo de 4 em 4, gerando 12 números.
  for (i = 0; i < passwordLength; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }

  //Cortando os 2 últimos pra ficar com apenas 10.
  password = password.slice(0, passwordLength);
  generatedPasswordElement.style.display = "Block";
  generatedPasswordElement.querySelector("h4").innerText = password;
};

generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});
