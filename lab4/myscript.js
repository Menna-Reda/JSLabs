var slider = document.getElementById('slider');
var images = slider.querySelectorAll('img');
let index = 0;
var timer=null;
function imagesSlideShow(){
    if(!timer){
        timer = setInterval(function () {
                index = (index + 1) %images.length
            images.forEach(function (img, i) {
                if (i === index) {
                img.classList.add('on');
                }
                else
                    img.classList.remove('on');
            });      
            }, 3000);
    }
    
}

function reset() {
    clearInterval(timer); 
    timer = null;
    index = 0; 
    images.forEach(function (img, i) {
        img.classList.remove('on');
        if (i === index) {
          img.classList.add('on');
        }
      });
  }
  slider.addEventListener('mouseover',imagesSlideShow);
  slider.addEventListener('mouseout',reset);

