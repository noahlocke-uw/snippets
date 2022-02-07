window.onload=function(){
  document.querySelector("#li_22").addEventListener("change", (event) => {
  if (document.querySelectorAll('input[type="checkbox"]:checked').length > 1) {
    showCustomAlert();
  } else {
    hideCustomAlert();
  }
  });

  function showCustomAlert() {
    document.querySelector("#li_25").style.display = "inline";
  }

  function hideCustomAlert() {
    document.querySelector("#li_25").style.display = "none";
  }
}

