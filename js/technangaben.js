document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

var instance = M.Carousel.getInstance(elem);
var slides = document.getElementsByClassName("carousel-item");
var carousel = document.getElementsByClassName("carousel");
for (i=0, i<slides.length, i++){
    if (instance.pressed=true){
        instance.next();
    }
}

