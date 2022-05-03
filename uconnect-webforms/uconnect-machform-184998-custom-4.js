window.onload=function(){
  
  var field = document.querySelector("#li_22");
  var PIN = document.querySelector("#element_26");
  
  function showCustomAlert() {
    document.querySelector("#li_25").classList.remove("hideOnLoad");
  }

  function hideCustomAlert() {
    document.querySelector("#li_25").classList.add("hideOnLoad");
  }

  if (field) {
    field.addEventListener("change", (event) => {
      if (document.querySelectorAll('input[type="checkbox"]:checked').length > 1) {
        showCustomAlert();
      } else {
        hideCustomAlert();
      }
    });
  }

  
  // prevent spaces in PIN
  if (PIN) {
    PIN.addEventListener('keypress', function ( event ) {  
      var isNumber = isFinite(event.key);
      var key = event.keyCode;
      if (key === 32 || !isNumber) {
        event.preventDefault();
      }
    });
  }
}

