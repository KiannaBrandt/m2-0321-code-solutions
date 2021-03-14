var $img = document.querySelectorAll('img');
var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $circle = document.querySelectorAll('.fa-circle');
var $progress = document.querySelector('.progress');

var intervalID;

function changeInterval() {
  intervalID = window.setInterval(carousel, 3000);
};

function stopInterval() {
  clearInterval(intervalID);
}

function carousel() {
  for (var i = 0; i < $img.length; i++) {
    if ($img[i].className === 'view') {
      $img[i].className = 'hide';
      $circle[i].className = 'far fa-circle';
      if (i !== $img.length - 1) {
        $img[i += 1].className = 'view';
        $circle[i].className = 'fas fa-circle';
      } else {
        $img[0].className = 'view';
        $circle[0].className = 'fas fa-circle';
      };
    };
  };
};

function left(event) {
  stopInterval();
  for (var i = 0; i < $img.length; i++) {
    if ($img[i].className === 'view') {
      $img[i].className = 'hide';
      $circle[i].className = 'far fa-circle';
      if (i !== 0) {
        $img[i -= 1].className = 'view';
        $circle[i].className = 'fas fa-circle';
      } else {
        $img[$img.length - 1].className = 'view';
        $circle[$img.length - 1].className = 'fas fa-circle';
        break;
      };
    };
  };
  changeInterval();
};

function right(event) {
  stopInterval();
  for (var i = 0; i < $img.length; i++) {
    if ($img[i].className === 'view') {
      $img[i].className = 'hide';
      $circle[i].className = 'far fa-circle';
      if (i !== $img.length - 1) {
        $img[i += 1].className = 'view';
        $circle[i].className = 'fas fa-circle';
      } else {
        $img[0].className = 'view';
        $circle[0].className = 'fas fa-circle';
      };
    };
  };
  changeInterval();
};

function progressClick(event) {
  stopInterval();
  if (event.target && event.target.nodeName === 'I') {
    for (var i = 0; i < $img.length; i++) {
      if (event.target.getAttribute('data-view') === $img[i].getAttribute('data-view')) {
        $img[i].className = 'view';
        $circle[i].className = 'fas fa-circle';
      } else {
        $img[i].className = 'hide';
        $circle[i].className = 'far fa-circle';
      };
    };
  };
  changeInterval();
};

$leftArrow.addEventListener('click', left);
$rightArrow.addEventListener('click', right);
$progress.addEventListener('click', progressClick);

changeInterval();
