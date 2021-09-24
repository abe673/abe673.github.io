var elem = document.getElementById("thisPage");
    var state = false;
    function openFullscreen() {
      if (!state) {
        elem.requestFullscreen();
        state = true;
      }else{
        document.exitFullscreen();
        state = false;
      }
    }