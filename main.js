const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const menuList = document.getElementById('menuList');

menuIcon.addEventListener('click', () => {
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'inline-block';
  menuList.classList.add('open');
});

closeIcon.addEventListener('click', () => {
  menuIcon.style.display = 'inline-block';
  closeIcon.style.display = 'none';
  menuList.classList.remove('open');
});

const menuOptions = menuList.getElementsByTagName('a');
for (let i = 0; i < menuOptions.length; i += 1) {
  menuOptions[i].addEventListener('click', function menuOption(e) {
    e.preventDefault();

    const target = this.getAttribute('href');
    const targetSection = document.querySelector(target);

    targetSection.scrollIntoView({
      behavior: 'auto',
    });

    menuIcon.style.display = 'inline-block';
    closeIcon.style.display = 'none';
    menuList.classList.remove('open');
  });
}

const body = document.querySelector('body');
const section = document.querySelector('#portofolio');

const seeButtons = section.querySelectorAll('.button.see');

const buttonContent = [

  {
    head : 'Recipes',
    title: 'Button 1',
    imgSrc1: 'images/recipe-app.PNG',
    imgSrc2: 'images/recipe-app.PNG',
    tech: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
    para: "The Recipe app keeps track of all your recipes, ingredients. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.",
    liveLink: 'https://recipe-app-ness-7b64be69e9e6.herokuapp.com/users/sign_in',
    srcLink: 'https://github.com/Nessrine88/My-recipe-book',
  },
  {
    head : 'Tv-series',
    title: 'Button 2',
    imgSrc1: 'images/second-project.png',
    imgSrc2: 'images/second-project.png',
    tech: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
    para: "This project utilizes HTML, CSS, and JavaScript along with an open API to showcase movies and series featuring female protagonists. You're able to engage by liking or commenting on any film within the collection.",
    liveLink: 'https://nessrine88.github.io/Capstone-Project2/dist/',
    srcLink: ' https://github.com/Nessrine88/Capstone-Project2',
  },
  {
    head : 'Air-quality-index-in-Tunisia',
    title: 'Button 3',
    imgSrc1: 'images/air-project.PNG',
    imgSrc2: 'images/air-project.PNG',
    tech: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
    para: "Welcome to Air-Quality-Index-Tunisia web single page application! This project aims to provide current air pollution data for any coordinates on the globe. This README will guide you through setting up the application and understanding its structure.",
    liveLink: 'https://nessrine88.github.io/Air-quality-index/',
    srcLink: 'https://github.com/Nessrine88/Air-quality-index',
  },

  { head : '3D-portfolio',
    title: 'Button 4',
    imgSrc1: 'images/3Dportfolio.PNG',
    imgSrc2: 'images/3Dportfolio.PNG',
    tech: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
    para: "This project showcases stunning animations and captivating designs using Tailwind CSS in a Next.js environment, delivering an immersive 3D experience",
    liveLink: 'https://nessrine88.github.io/3DPortfolio/',
    srcLink: 'https://github.com/Nessrine88/3DPortfolio',
  },

  { head : 'Space-hub',
    title: 'Button 5',
    imgSrc1: 'images/spacehub.png',
    imgSrc2: 'images/spacehub.png',
    tech: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
    para: "In this project, we will leverage real-time data from the SpaceX API to develop a web application. The focus of this application is to create a platform for a company specializing in both commercial and scientific space travel services. Within this web application, users will have the capability to reserve rockets and participate in specific space missions.",
    liveLink: 'https://nessrine88.github.io/React-redux-Group-Project/',
    srcLink: 'https://github.com/Nessrine88/React-redux-Group-Project',
  },
  { head : 'Math-magician',
    title: 'Button 6',
    imgSrc1: 'images/mathmagician.PNG',
    imgSrc2: 'images/mathmagician.PNG',
    tech: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
    para: "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and Read a random math-related quote.",
    liveLink: 'https://nessrine88.github.io/Math-Magicians-Website/',
    srcLink: 'https://github.com/Nessrine88/Math-Magicians-Website',
  },
];

// Event listener for "See Project" buttons
document.querySelectorAll('.button.see').forEach((button, index) => {
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
            <a href="${content.liveLink}" target="_blank">
              <button type="button" class="bt1">See live <img src="images/see live icon.svg" alt=""></button>
            </a>
            <a href="${content.srcLink}" target="_blank">
              <button type="button" class="bt2">See source <img src="images/vector.svg" alt=""></button>
            </a>
          </div>
        </div>
        <ul class="track-list">
          ${content.tech.map((tech) => `<li>${tech}</li>`).join('')}
        </ul>
        <p class="track-para">${content.para}</p>
      </div>
      <div class="track-buttons">
        <a href="${content.liveLink}" target="_blank">
          <button type="button" class="btn1">See live <img src="images/see live icon.svg" alt=""></button>
        </a>
        <a href="${content.srcLink}" target="_blank">
          <button type="button" class="btn2">See source <img src="images/vector.svg" alt=""></button>
        </a>
      </div>
    `;

    main.appendChild(popup);
    document.body.appendChild(main);

    const close = popup.querySelector('.close');
    close.addEventListener('click', () => {
      document.body.removeChild(main);
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
