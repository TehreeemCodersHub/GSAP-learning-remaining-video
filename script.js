// var intialPath = `M 10 100 Q 500 100 990 100`;
// var finalPath = `M 10 100 Q 500 100 990 100`;

var getPage = document.querySelector(".main");
var getCursor = document.querySelector(".cursor");
var getImg = document.querySelector(".img");
// alert(getCursor);

getPage.addEventListener("mousemove", function (e) {
  gsap.to(getCursor, {
    x: e.x,
    y: e.y,
    duration: 1,
    ease: "back.out",
    // scrub: true,
  });
});
getImg.addEventListener("mouseenter", function () {
  getCursor.innerHTML = "view More";
  gsap.to(getCursor, {
    scale: 3,
  });
});
getImg.addEventListener("mouseleave", function () {
  getCursor.innerHTML = "";
  gsap.to(getCursor, {
    scale: 1,
  });
});
