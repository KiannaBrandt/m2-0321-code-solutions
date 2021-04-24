console.log("Hello, just a moment...");

var timeoutID;

function delayedAlert() {
  timeoutID = setTimeout(message, 2 * 1000);
}

function message() {
  console.log("Thanks for waiting!")
}

delayedAlert();
