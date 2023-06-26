// Get necessary elements
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const menuList = document.getElementById('menuList');

// Add event listener to the menu icon
menuIcon.addEventListener('click', () => {
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'inline-block';
  menuList.classList.add('open');
});

// Add event listener to the close icon
closeIcon.addEventListener('click', () => {
  menuIcon.style.display = 'inline-block';
  closeIcon.style.display = 'none';
  menuList.classList.remove('open');
});

// Add event listeners to the menu options
const menuOptions = menuList.getElementsByTagName('a');
for (let i = 0; i < menuOptions.length; i += 1) {
  menuOptions[i].addEventListener('click', function menuOption(e) {
    e.preventDefault(); // Prevent the default link behavior

    const target = this.getAttribute('href'); // Get the target section ID
    const targetSection = document.querySelector(target); // Find the target section

    // Scroll to the target section smoothly
    targetSection.scrollIntoView({
      behavior: 'auto',
    });

    // Close the menu
    menuIcon.style.display = 'inline-block';
    closeIcon.style.display = 'none';
    menuList.classList.remove('open');
  });
}
