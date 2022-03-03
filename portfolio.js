const appearMenu = document.querySelector('.menuDropDown');
const mobileMenu = document.querySelector('.default');
const disappearMenu = document.querySelector('.x-icon');
const disappearMenuOptions = document.querySelectorAll('.mobile-menu-li');
const popupClick = document.querySelectorAll('.btn-Project');

const portfolio = [
  {
    img: 'images/Snapshoot-Portfolio1.svg',
    name: 'Tonic',
    information1: 'CANOPY',
    information2: 'Back End Dev',
    information3: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technolgies1: 'html',
    technologies2: 'css',
    technologies3: 'javascript',
    seeLive: 'https://oshanedesign.github.io/My-Portfolio/',
    seeSource: 'https://github.com/oshanedesign/My-Portfolio',
    span1: 'See live',
    span2: 'See source',
  },
];
function getHtml(projectData) {
  return `
  <img class="x-display" src="images/xim.svg">
    <h2 class="tonic">Tonic</h2>
    <ul class="sub-Points">
      <li class="canopy">${projectData.information1}</li>
      <li class="sub-Text">${projectData.information2}</li>
      <li class="sub-Text">${projectData.information3}</li>
    </ul>
    <div class="desktop-Img-Works">
      <img class="snapshoot" src="${projectData.img}" />
    </div>
    <p class="popup-paragraph">
    ${projectData.description}
    </p>
    <div class="lang"></div>
    <ul class="languages">
      <li class="languages-List">${projectData.technolgies1}</li>
      <li class="languages-List">${projectData.technologies2}</li>
      <li class="languages-List">${projectData.technologies3}</li>
    </ul>
    <div class="popup-buttons">
      <button class="see-live">
      <a
        class="live-link"
        href="${projectData.seeLive}"
      > See Live</a>
        <img class="" src="/images/symbolproject.svg" />
      </button>
    
    <button class="see-source">
    <a
        class="source-link"
        href="${projectData.seeSource}"
      > See Source</a>
      <img class="" src="/images/kittyproject.svg" />
      </div>
    </button>
  `;
}
const popupMenu = document.createElement('div');
popupMenu.innerHTML = getHtml(portfolio[0]);
document.body.appendChild(popupMenu);
function display() {
  mobileMenu.classList.toggle('mobile-menu');
}
function display2() {
  popupMenu.classList.toggle('show');
}
for (let i = 0; i < disappearMenuOptions.length; i += 1) {
  disappearMenuOptions[i].addEventListener('click', display);
}
for (let j = 0; j < popupClick.length; j += 1) {
  popupClick[j].addEventListener('click', display2);
}
const popupClose = document.querySelector('.x-display');
appearMenu.addEventListener('click', display);
disappearMenu.addEventListener('click', display);
popupClose.addEventListener('click', display2);