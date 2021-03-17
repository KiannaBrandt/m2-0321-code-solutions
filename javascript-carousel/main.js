var $carouselSlide = document.querySelectorAll('.carousel-slide');
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
  for (var i = 0; i < $carouselSlide.length; i++) {
    if ($carouselSlide[i].classList[0] === 'view') {
      $carouselSlide[i].classList.replace("view", "hide");
      $circle[i].classList.replace("fas", "far");
      if (i !== $carouselSlide.length - 1) {
        $carouselSlide[i += 1].classList.replace("hide", "view");
        $circle[i].classList.replace("far", "fas");
      } else {
        $carouselSlide[0].classList.replace("hide", "view");
        $circle[0].classList.replace("far", "fas");
      };
    };
  };
};

function left(event) {
  stopInterval();
  for (var i = 0; i < $carouselSlide.length; i++) {
    if ($carouselSlide[i].classList[0] === 'view') {
      $carouselSlide[i].classList.replace("view", "hide");
      $circle[i].classList.replace("fas", "far");
      if (i !== 0) {
        $carouselSlide[i -= 1].classList.replace("hide", "view");
        $circle[i].classList.replace("far", "fas");
      } else {
        $carouselSlide[$carouselSlide.length - 1].classList.replace("hide", "view");
        $circle[$carouselSlide.length - 1].classList.replace("far", "fas");
        break;
      };
    };
  };
  changeInterval();
};

function right(event) {
  stopInterval();
  for (var i = 0; i < $carouselSlide.length; i++) {
    if ($carouselSlide[i].classList[0] === 'view') {
      $carouselSlide[i].classList.replace("view", "hide");
      $circle[i].classList.replace("fas", "far");
      if (i !== $carouselSlide.length - 1) {
        $carouselSlide[i += 1].classList.replace("hide", "view");
        $circle[i].classList.replace("far", "fas");
      } else {
        $carouselSlide[0].classList.replace("hide", "view")
        $circle[0].classList.replace("far", "fas");
      };
    };
  };
  changeInterval();
};

function progressClick(event) {
  stopInterval();
  if (event.target.classList[1] === 'fa-circle') {
    for (var i = 0; i < $carouselSlide.length; i++) {
      if (event.target.getAttribute('data-view') === $carouselSlide[i].getAttribute('data-view')) {
        $carouselSlide[i].className = 'view';
        $circle[i].className = 'fas fa-circle';
      } else {
        $carouselSlide[i].className = 'hide';
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
