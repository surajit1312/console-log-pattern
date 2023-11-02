const console = require("./index");

console.logTitle("Demo Title Message Style A", "=", "red");

console.logTitle("Demo Title Message Style B", "*", "yellow");

console.logTitle("Demo Title Message Style C", "@", "green");

console.logTitle("Demo Title Message Style D", "#", "blue");

console.logNote(
  ": Demo Notes A : ",
  true,
  "Prepend Label",
  "Append Label",
  "magenta"
);

console.logConsole("Demo console log", true, "cyan");

console.logError("Demo Error Logs", true, "yellow");

console.logExeBlock("Demo Execution Block", true, "green");

console.logExeBlock(null, true, "magenta");
