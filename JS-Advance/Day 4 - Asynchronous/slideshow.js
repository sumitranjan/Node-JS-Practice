var x;
function start() {
  let images_arr = JSON.parse(localStorage.getItem("images"));

  let slideshow_img = document.getElementById("slideshow_image");

  let i = 0;

  x = setInterval(function () {
    if (i === images_arr.length) {
      // clearInterval(x);

      i = 0;
    }
    slideshow_img.src = images_arr[i];
    i = i + 1;
    console.log("i:", i);
  }, 2000);
}

function stop() {
  clearInterval(x);
}
