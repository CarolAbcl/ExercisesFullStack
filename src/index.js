const { argument, sumUtfCodes } = require("./helpers/funcs");

const lengthArgv = process.argv.length;

if (lengthArgv > 2) {
  const inputText = argument();
  console.log(sumUtfCodes(inputText));
}

if (lengthArgv <= 2 && process.title.includes("node")) {
  process.stdout.write("¿Cómo te llamas? ");
  process.stdin.on("data", (text) => {
    const inputText = text.toString();
    console.log(sumUtfCodes(inputText));
    process.exit();
  });
}

if (lengthArgv <= 2 && !process.title.includes("node")) {
  process.stdin.on("data", (text) => {
    const inputText = text.toString();

    if (!inputText.includes("ECHO")) {
      console.log(sumUtfCodes(inputText));
      process.exit();
    }

    console.log(sumUtfCodes(""));
    process.exit();
  });
}
