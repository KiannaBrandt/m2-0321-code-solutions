var intervalID;

function changeInterval() {
  intervalID = window.setInterval(countdown, 1000);
};

function stopInterval() {
  clearInterval(intervalID);
};

function countdown() {
  var $h1 = document.querySelector('h1')
  if ($h1.textContent === '1') {
    $h1.textContent = '~Earth Beeeelooowww Us~'
    stopInterval();
  } else {
    $h1.textContent -= 1;
  };
};

changeInterval();
