const slider = document.getElementById("myRange");
const kg = document.getElementById("kg");
const mins = document.getElementById("mins")
kg.innerHTML = slider.value + 'Kg';
mins.innerHTML = Math.floor(slider.value * 10.4) + 'Mins'

slider.oninput = function() {
  kg.innerHTML = this.value + 'Kg';
  mins.innerHTML = Math.floor(slider.value * 10.4) + 'Mins'
}

// const hero_slider = document.querySelector('.hero-slider');
// let left = 0
//  setInterval(() => {
//    left = left - 100
//    if(left == -300){
//      left = 400
//    }
//   hero_slider.style.left = left + '%'
//  }, 4000)


