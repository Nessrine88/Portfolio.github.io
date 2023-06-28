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

// const body = document.querySelector("body");
// const section = document.querySelector("#portofolio");

// // Select cards and "See Project" buttons
// const cards = section.querySelectorAll(".card");
// const seeButtons = section.querySelectorAll(".button.see");

// // Define the content for each button
// const buttonContent = [
//   {
//     title: "Button 1",
//     imgSrc1: "images/Snapshoot Portfolio.png",
//     imgSrc2: "images/snapshoot desktop.png",
//     header: "Keeping track of hundreds of components",
//     tech: ["JavaScript", "Ruby", "HTML", "CSS"],
//     para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s."
//   },
//   {
//     title: "Button 2",
//     imgSrc1: "images/Snapshoot Portfolio2.png",
//     imgSrc2: "images/snapshoot desktop2.png",
//     header: "Popup Content for Button 2",
//     tech: ["Python", "React", "Node.js", "MongoDB"],
//     para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
//   },
//   {
//     title: "Button 3",
//     imgSrc1: "images/Snapshoot Portfolio2.png",
//     imgSrc2: "images/snapshoot desktop2.png",
//     header: "Popup Content for Button 3",
//     tech: ["Python", "React", "Node.js", "MongoDB"],
//     para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
//   },
//   {
//     title: "Button 4",
//     imgSrc1: "images/Snapshoot Portfolio2.png",
//     imgSrc2: "images/snapshoot desktop2.png",
//     header: "Popup Content for Button 4",
//     tech: ["Python", "React", "Node.js", "MongoDB"],
//     para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
//   },
//   {
//     title: "Button 5",
//     imgSrc1: "images/Snapshoot Portfolio2.png",
//     imgSrc2: "images/snapshoot desktop2.png",
//     header: "Popup Content for Button 5",
//     tech: ["Python", "React", "Node.js", "MongoDB"],
//     para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
//   },
//   {
//     title: "Button 6",
//     imgSrc1: "images/Snapshoot Portfolio2.png",
//     imgSrc2: "images/snapshoot desktop2.png",
//     header: "Popup Content for Button 7",
//     tech: ["Python", "React", "Node.js", "MongoDB"],
//     para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
//   }
// ];

// // Event listener for "See Project" buttons
// seeButtons.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     const card = cards[index];
//     const content = buttonContent[index];

//     const main = document.createElement("div");
//     main.classList.add("popup-container");

//     const popup = document.createElement("div");
//     popup.classList.add("popup-content");

//     popup.innerHTML = `
//       <div class="track-container">
//         <div class="btn-img">
//           <button class="close" type="button">
//             <img id="cls-icon" src="images/Icon - Cancel.svg" alt="">
//           </button>
//           <img class="track-img1" src="${content.imgSrc1}" alt="" srcset="">
//           <img class="track-img2" src="${content.imgSrc2}" alt="" srcset="">
//         </div>
//         <div class="track-div-flex">
//           <p id="track-header">${content.header}</p>
//           <div class="track-buttons-2">
//             <a href="#"><button type="button" class="bt1">See live <img src="images/see live icon.svg" alt=""></button></a>
//             <a href="#"><button type="button" class="bt2">See source <img src="images/vector.svg" alt=""></button></a>
//           </div>
//         </div>
//         <ul class="track-list">
//           ${content.tech.map(tech => `<li>${tech}</li>`).join("")}
//         </ul>
//         <p class="track-para">${content.para}</p>
//       </div>
//       <div class="track-buttons">
//         <a href="#"><button type="button" class="btn1">See live <img src="images/see live icon.svg" alt=""></button></a>
//         <a href="#"><button type="button" class="btn2">See source <img src="images/vector.svg" alt=""></button></a>
//       </div>
//     `;

//     main.appendChild(popup);
//     body.appendChild(main);

//     const close = popup.querySelector(".close");
//     close.addEventListener("click",    () => {
//       body.removeChild(main);
//     });
//   });
// });


