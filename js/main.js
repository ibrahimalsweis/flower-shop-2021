let video = document.querySelector("video");

video.onclick = function () {
  this.paused ? this.play() : this.pause();
};

// let about = document.querySelector(".aboutUs");
// let started = false;

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= about.offsetTop - 200) {
//     if (!started) {
//       this.document.getElementById("about-title").classList.add("active");
//     }
//     started = true;
//   }
// });
