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
  
  // prevent spaces in PIN
  $(function() {
    $("input#element_12").on({
       keydown: function(e) {
          if (e.which === 32)
             return false;
       },
       // When spaces managed to "sneak in" via copy/paste
       change: function() {
          // Regex-remove all spaces in the final value
          this.value = this.value.replace(/\s/g, "");
       }
    });
  });
}

