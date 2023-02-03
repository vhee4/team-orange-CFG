document.querySelector("#open-subscribe-form").addEventListener("click",function(){
    document.querySelector(".subscribe-form").classList.add("active");
  });
  
  document.querySelector(".subscribe-form .close-btn").addEventListener("click",function(){
    document.querySelector(".subscribe-form").classList.remove("active");
  });

  document.getElementById("show-message").addEventListener("click", function() {
    alert("Thank you for subscribing");
  });
