// Popup

const contactBtn = document.querySelector('.hero__btn');
const popupContainer = document.querySelector('.popup_container');
const popupForm = document.querySelector('#contact_form');
const submitBtn = document.querySelector('#submit_btn');


const togglePopup = () => {
    popupContainer.style.display = popupContainer.style.display==='grid'?'none':'grid';
};

contactBtn.addEventListener('click', () => {
    togglePopup();
});

popupContainer.addEventListener('click', () => {
    togglePopup();
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    togglePopup();
});

popupForm.addEventListener('click', (e) => {
    e.stopPropagation();
})

// Slider


const slider = document.querySelector('.service__slider');
const outerCircles = document.querySelectorAll('.outer_circle');

let curIndex = 0;

const setIndex = (idx) => {
    curIndex = idx;
    scrollSlides();
    setActiveCircle();
};

const setActiveCircle = () => {
    outerCircles.forEach((circle, index) => {
        if(index === curIndex){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
};

const scrollSlides = () => {
    const dest = slider.scrollWidth * curIndex * 0.33;
    slider.scrollTo({left: dest, behavior: 'smooth'});
};

outerCircles.forEach((circle, index) => {
    circle.addEventListener('click', () => setIndex(index));
});

setActiveCircle();

// Project

const projectImageContainer = document.querySelector('.project_imgbox');
const projectCards = document.querySelectorAll('.project__card');
const projectImageURLs = ['./assets/project__1.png', './assets/project__2.jpg', './assets/project__3.jpg'];

const setActiveImage = (idx) => {
    projectImageContainer.style.setProperty('--bg-url', `url(${projectImageURLs[idx]})`);
    projectCards.forEach((card, index) => {
        if(index === idx){
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
};

projectCards.forEach((card, index) => {
    card.addEventListener('click', () => setActiveImage(index));
});
