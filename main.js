
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

  // Add event listener to the close icon
  closeIcon.addEventListener("click", function() {
    menuIcon.style.display = "inline-block";
    closeIcon.style.display = "none";
    menuList.classList.remove("open");
  });

  // Add event listeners to the menu options
  var menuOptions = menuList.getElementsByTagName("a");
  for (var i = 0; i < menuOptions.length; i++) {
    menuOptions[i].addEventListener("click", function(e) {
      e.preventDefault(); // Prevent the default link behavior

      var target = this.getAttribute("href"); // Get the target section ID
      var targetSection = document.querySelector(target); // Find the target section

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: "auto"
      });

      // Close the menu
      menuIcon.style.display = "inline-block";
      closeIcon.style.display = "none";
      menuList.classList.remove("open");
    });
  }

