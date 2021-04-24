var count = 3;

var intervalID = setInterval(countdown, 1000);

function countdown() {
  console.log(count--)
  if (count === 0) {
    console.log("Blast off!");
    clearInterval(intervalID);
  };
};
