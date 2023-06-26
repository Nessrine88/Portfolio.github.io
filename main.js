
  // Get necessary elements
  var menuIcon = document.getElementById("menuIcon");
  var closeIcon = document.getElementById("closeIcon");
  var menuList = document.getElementById("menuList");

  // Add event listener to the menu icon
  menuIcon.addEventListener("click", function() {
    menuIcon.style.display = "none";
    closeIcon.style.display = "inline-block";
    menuList.classList.add("open");
  });