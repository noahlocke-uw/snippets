window.onload=function(){
  function showCustomAlert() {
    document.querySelector("#li_25").classList.remove("hideOnLoad");
  }

  function hideCustomAlert() {
    document.querySelector("#li_25").classList.add("hideOnLoad");
  }

  document.querySelector("#li_22").addEventListener("change", (event) => {
    if (document.querySelectorAll('input[type="checkbox"]:checked').length > 1) {
      showCustomAlert();
    } else {
      hideCustomAlert();
    }
  });
}

