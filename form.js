document.querySelector("#open-subscribe-form").addEventListener("click",function(){
    document.querySelector(".subscribe-form").classList.add("active");
  });
  
  document.querySelector(".subscribe-form .close-btn").addEventListener("click",function(){
    document.querySelector(".subscribe-form").classList.remove("active");
  });

  document.getElementById("show-message").addEventListener("click", function() {
    alert("Thank you for subscribing");
  });

  // Get the modal for Sign up and Login forms
var modal1 = document.getElementById('id01');
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}