'use strict';

//////////////////////////////////////////////
////////// |/|\| Modal window |/|\| /////////
////////////////////////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const mainHading = document.querySelector('h1');
const fName = document.querySelector('.name');
const lName = document.querySelector('.l-name');
const email = document.querySelector('.email');
const password = document.querySelector('.pass');
const enterBtn = document.querySelector('.enter-btn');

mainHading.firstElementChild.style.color = 'white';

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const learnMore = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

learnMore.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(operCon =>
    operCon.classList.remove('operations__content--active'),
  );

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const nevigation = document.querySelector('.nav');

function handleHover(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

nevigation.addEventListener('mouseover', handleHover.bind(0.5));

nevigation.addEventListener('mouseout', handleHover.bind(1));

const intialCords = section1.getBoundingClientRect();
// console.log(intialCords);

window.addEventListener('scroll', function (e) {
  if (window.scrollY > intialCords.top) nevigation.classList.add('sticky');
  else nevigation.classList.remove('sticky');
});

const allSection = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observe) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });

  observe.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imageObserver.observe(img));

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

slider.style.overflow = 'visible';

let curSlid = 0;
const maxSlide = slides.length;

slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));

btnLeft.addEventListener('click', function () {
  if (curSlid < 1) {
    curSlid = 2;
  } else {
    curSlid--;
  }

  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - curSlid) * 100}%)`),
  );
});
btnRight.addEventListener('click', function () {
  if (curSlid === maxSlide - 1) {
    curSlid = 0;
  } else {
    curSlid++;
  }
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - curSlid) * 100}%)`),
  );
});

////////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// document.querySelectorAll('.section');

// document.getElementById('section--1');
// const allBtns = document.getElementsByTagName('button');

// console.log(allBtns);

// console.log(document.getElementsByClassName('btn'));

// Creating and Incerting element

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality';
// message.innerHTML =
//   'We use cookies for improved functionality. <button class="btn btn-close-cookie">Got it! </button> ';

// // header.prepend(message);
// header.append(message);

// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message.cloneNode(true));

// // delete elements

// document.querySelector('.btn-close-cookie').addEventListener('click', () => {
//   message.remove();
// });

// // setTimeout(() => {
// //   message.remove();
// // }, 1000 * 10);

// console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'yellow');

// // Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.className);

// console.log(logo.dataset.versionNumber);

// console.log(console.log(logo.getAttribute('designer')));
// logo.setAttribute('company', 'Bankist');
// console.log(console.log(logo.getAttribute('src')));

// const link = document.querySelector('.nav__link--btn');

// console.log(link.getAttribute('href'));

// const h1 = document.querySelector('h1');

// const alert1 = () => {
//   alert('wow');
//   // h1.removeEventListener('click', alert1);
// };

// h1.addEventListener('click', alert1);

// setTimeout(() => {
//   h1.removeEventListener('click', alert1);
// }, 3000);

// // h1.addEventListener('click', () => {
// //   alert('now');
// // });

// // h1.onclick = () => {
// //   alert('this is the end');
// // };
// // h1.onclick = () => {
// //   alert('this is the wow');
// // };

// // rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// // console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   // console.log('wow');

//   this.style.backgroundColor = randomColor();

//   // Stop propagation
//   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // console.log('wow');

//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav').addEventListener('click', () => {
//   console.log('Link');
// });

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(element => {
//   if (element !== h1) {
//     element.style.transform = 'scale(0.9)';
//   }
// });
