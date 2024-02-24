// classList add hidden when click play now button then home section hidden and play ground show
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

// classList remove hidden and show playground
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
// add color keyboarad
function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-500");
}
// remove color keyboard
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-500");
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementid) {
  const element = document.getElementById(elementid);
  const text = element.innerText;
  return text;
}

// random Alphabet
function getARandomAlphabet() {
  // get or create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  //   console.log(alphabets);

  //   get a random index between 0 - 25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  //   console.log(index, alphabet);
  return alphabet;
}
