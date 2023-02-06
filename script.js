// SCROLL ANIMATION

const boxes = document.querySelectorAll(".box");
const menuBar = document.querySelector(".menu-wrap");
const contentWrapper = document.getElementById("content");

const removeContent = () => {
  contentWrapper.classList.toggle("none")
}

menuBar.addEventListener("click", removeContent)

//the explore button on the welcome page which will direct to the home page 
 function myFunction() {
      window.location.href = "Home.html";
    }

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

// READ MORE
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
