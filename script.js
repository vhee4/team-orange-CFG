// SCROLL ANIMATION

const boxes = document.querySelectorAll(".box");
const menuBar = document.querySelector(".menu-wrap");
const containerWrapper = document.getElementById("showcase");

const removeContainer = () => {
  containerWrapper.classList.toggle("none")
}

menuBar.addEventListener("click", removeContainer)



window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box, idx) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

