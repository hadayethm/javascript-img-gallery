const current = document.querySelector('#current');
const images = document.querySelectorAll('.img-item img');
let opacity = 0.4;
images[1].style.opacity = opacity;

images.forEach(function(img) {
    img.addEventListener('click', function(e) {
        images.forEach(img => (img.style.opacity = 1));
        current.src = e.target.src;
        e.target.style.opacity = opacity;
        current.classList.add("fade-up");
        setTimeout(function() {
            current.classList.remove("fade-up");
        }, 3000)
    });
});

// const current = document.querySelector("#current");
// const imgs = document.querySelectorAll(".img-item img");
// let bg = "red"
// imgs[0].style.backgroundColor = bg;
// imgs.forEach(function(img) {
//     img.addEventListener("click", function(e) {
//         current.src = e.target.src;
//         imgs.forEach(img => (img.style.backgroundColor = "white"));
//         e.target.style.backgroundColor = bg;
//         current.classList.add("fade-up");
//         setTimeout(function() {
//             current.classList.remove("fade-up")
//         }, 4000)
//     });
// })



// const big_img = document.querySelector('#current');
// const chobe = document.querySelectorAll('.img-item img');
// var bg = "red"
// chobe[0].style.backgroundColor = bg;
// chobe.forEach(function (images) {
//  images.addEventListener("click", function (e) {
//   chobe.forEach(images => (images.style.backgroundColor = "white"));
//   big_img.src = e.target.src;
//   e.target.style.backgroundColor = "red"
//  });
// });