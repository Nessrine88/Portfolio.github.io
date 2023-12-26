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

// popup-section

// popup-section

const body = document.querySelector('body');
const section = document.querySelector('#portofolio');

// Select cards and "See Project" buttons

const seeButtons = section.querySelectorAll('.button.see');

// Define the content for each button
const buttonContent = [
  {
    title: 'Button 1',
    imgSrc1: 'images/first-project.png',
    imgSrc2: 'images/first-project.png',
    head: 'Keeping track of hundreds of components',
    tech: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
    para: "This is a website for a Prickly Pear Seed Oils company. The website showcases the products, benefits, and uses of Prickly Pear Seed Oils. It aims to promote the company's products, educate visitors about the properties of Prickly Pear Seed Oils, and provide an easy way to purchase the oils online.The project is implemented using HTML, CSS, and JavaScript. It follows a responsive design approach, ensuring that the website looks great and functions well on different devices and screen sizes. The website features an attractive and intuitive user interface, allowing visitors to explore the various products, learn about their benefits, and make purchases with ease.",
    liveLink: 'https://nessrine88.github.io/Capstone-Project/index.html',
    srcLink: 'https://github.com/Nessrine88/Capstone-Project',
  },
  {
    title: 'Button 2',
    imgSrc1: 'images/second-project.png',
    imgSrc2: 'images/second-project.png',
    head: 'Keeping track of hundreds of components',
    tech: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
    para: "This project utilizes HTML, CSS, and JavaScript along with an open API to showcase movies and series featuring female protagonists. You're able to engage by liking or commenting on any film within the collection.",
    liveLink: 'https://nessrine88.github.io/Capstone-Project2/dist/',
    srcLink: ' https://github.com/Nessrine88/Capstone-Project2',
  },
  {
    title: 'Button 3',
    imgSrc1: 'images/Snapshoot Portfolio.png',
    imgSrc2: 'images/snapshoot desktop.png',
    head: 'Keeping track of hundreds of components',
    tech: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    title: 'Button 4',
    imgSrc1: 'images/Snapshoot Portfolio.png',
    imgSrc2: 'images/snapshoot desktop.png',
    head: 'Keeping track of hundreds of components',
    tech: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    title: 'Button 5',
    imgSrc1: 'images/Snapshoot Portfolio.png',
    imgSrc2: 'images/snapshoot desktop.png',
    head: 'Keeping track of hundreds of components',
    tech: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
  {
    title: 'Button 6',
    imgSrc1: 'images/Snapshoot Portfolio.png',
    imgSrc2: 'images/snapshoot desktop.png',
    head: 'Keeping track of hundreds of components',
    tech: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  },
];

// Event listener for "See Project" buttons
seeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const content = buttonContent[index];

    const main = document.createElement('div');
    main.classList.add('popup-container');

    const popup = document.createElement('div');
    popup.classList.add('popup-content');

    popup.innerHTML = `

    <div class="btn-img">
          <button class="close" type="button">
            <img id="cls-icon" src="images/Icon - Cancel.svg" alt="">
          </button>
      <div class="track-container">
        
          <img class="track-img1" src="${content.imgSrc1}" alt="" srcset="">
          <img class="track-img2" src="${content.imgSrc2}" alt="" srcset="">
        </div>
       <div class="track-container">
          
            <h4>${content.head}</h4>
          

          <div class="track-buttons-2">
            <a href=${content.liveLink}><button type="button" class="bt1">See live <img src="images/see live icon.svg" alt=""></button></a>
            <a href="#"><button type="button" class="bt2">See source <img src="images/vector.svg" alt=""></button></a>
          </div>

          </div>
        <ul class="track-list">
          ${content.tech.map((tech) => `<li>${tech}</li>`).join('')}
        </ul>
        <p class="track-para">${content.para}</p>
      </div>
      <div class="track-buttons">
        <a href="#"><button type="button" class="btn1">See live <img src="images/see live icon.svg" alt=""></button></a>
        <a href="#"><button type="button" class="btn2">See source <img src="images/vector.svg" alt=""></button></a>
      </div>
    `;
    // Get the dynamically created buttons
    const seeLiveButton = popup.querySelector('.bt1');
    const seeSourceButton = popup.querySelector('.bt2');

    // Set the dynamic content for "See Live" button
    seeLiveButton.textContent = 'See Live';
    // Set the dynamic content for "See Source" button
    seeSourceButton.textContent = 'See Source';

    // Set the dynamic link for "See Live" button
    seeLiveButton.parentElement.href = `${content.liveLink}`;
    seeSourceButton.parentElement.href = `${content.srcLink}`;
    main.appendChild(popup);
    body.appendChild(main);

    const close = popup.querySelector('.close');
    close.addEventListener('click', () => {
      body.removeChild(main);
    });
  });
});

// Validate form

const email = document.querySelector('#email');

email.addEventListener('input', (event) => {
  const correctInput = event.target.value.toLowerCase();
  if (event.target.value !== correctInput) {
    email.setCustomValidity('Please enter your email address using lowercase letters.');
  } else {
    email.setCustomValidity('');
  }
});
