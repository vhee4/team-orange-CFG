document
  .querySelector("#open-subscribe-form")
  .addEventListener("click", function () {
    document.querySelector(".subscribe-form").classList.add("active");
  });

document
  .querySelector(".subscribe-form .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".subscribe-form").classList.remove("active");
  });

// Display thank you for subscribing message
document.getElementById("show-message").addEventListener("click", function () {
  alert("Thank you for subscribing");
});

// Get the modal for Sign up and Login forms
var modal1 = document.getElementById("id01");
var modal2 = document.getElementById("id02");

// Display "thank you for signing up" message
document.getElementById("signup").addEventListener("click", function () {
  alert("Thank you for Signing up");
});
