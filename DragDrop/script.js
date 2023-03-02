const box = document.querySelectorAll(".box");
const image = document.querySelector(".image");

box.forEach(function (box) {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    box.classList.add("hovered");
  });

  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
  });

  box.addEventListener("drop", () => {
    box.appendChild(image);
    box.classList.remove("hovered");
  });
});

// box[0].addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// box[0].addEventListener("drop", () => {
//   box[0].appendChild(image);
// });

// box[1].addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// box[1].addEventListener("drop", () => {
//   box[1].appendChild(image);
// });

// box[2].addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// box[2].addEventListener("drop", () => {
//   box[2].appendChild(image);
// });

// box[3].addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// box[3].addEventListener("drop", () => {
//   box[3].appendChild(image);
// });