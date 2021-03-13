function helloThere() {
  document.querySelector('h1').textContent = 'Hello There';
};

var timeoutID;

function timeout() {
  timeoutID = window.setTimeout(helloThere, 2000);
};

timeout();
