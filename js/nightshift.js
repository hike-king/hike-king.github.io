$(function() {
  changeReadModel();

  function switchReadMode() {
    var next_mode = $("body").hasClass("night-mode") ? "day" : "night";
    Cookies.set("read-mode", next_mode, {expires: 7, path: '/'});
    changeReadModel();
  }

  function changeReadModel() {
    if (Cookies.get("read-mode") == "night") {
      $("body").addClass("night-mode");
      $("#nightshift").removeClass("fa-moon-o").addClass("fa-sun-o");
    }

    // 非夜間模式
    if (Cookies.get("read-mode") == "day") {
      $("body").removeClass("night-mode");
      $("#nightshift").removeClass("fa-sun-o").addClass("fa-moon-o");
    }
  }

  $("#nightshift").click(function() {
    switchReadMode();
  });


});
