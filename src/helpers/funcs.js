const argument = () => {
  const arrayArg = [];
  process.argv.forEach((arg, idx) => {
    idx > 1 && arrayArg.push(arg);
  });

  return arrayArg.join("");
};

const cleanInputText = (inputText) => inputText.replace(" ", "").trim();

const textToArray = (text) => text.split("");

const utfEncodeList = (arrayOfChar) => {
  let arrayCode = [];
  arrayOfChar.forEach((char) => {
    arrayCode.push(char.charCodeAt());
  });

  return arrayCode;
};

const sumUtfCodes = (inputText) => {
  const text = cleanInputText(inputText);
  const arrayChar = textToArray(text);
  const arrayCode = utfEncodeList(arrayChar);

  if (arrayCode.length === 0) return "Oops! No hay texto a evaluar";

  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const sumCode = arrayCode.reduce(reducer).toString();

  return sumCode;
};

module.exports = {
  argument,
  sumUtfCodes,
};
