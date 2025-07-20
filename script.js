// Toggle login dropdown
const loginDropdown = document.querySelector('.login-dropdown');
const loginBtn = document.querySelector('.login-btn');

if (loginBtn && loginDropdown) {
    loginBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        loginDropdown.classList.toggle('open');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!loginDropdown.contains(e.target)) {
            loginDropdown.classList.remove('open');
        }
    });
}

// Toggle categories dropdown
const categoriesBar = document.querySelector('.categories-bar');
const categoriesBtn = document.querySelector('.categories-btn');

if (categoriesBtn && categoriesBar) {
    categoriesBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        categoriesBar.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
        if (!categoriesBar.contains(e.target)) {
            categoriesBar.classList.remove('open');
        }
    });
}

// Adventure section scroll arrows
const adventureCardsContainer = document.querySelector('.adventure-cards-container');
const adventureCards = document.querySelector('.adventure-cards');
const leftArrow = document.querySelector('.adventure-arrow.left');
const rightArrow = document.querySelector('.adventure-arrow.right');

if (adventureCardsContainer && leftArrow && rightArrow) {
    leftArrow.addEventListener('click', () => {
        adventureCardsContainer.scrollBy({ left: -350, behavior: 'smooth' });
    });
    rightArrow.addEventListener('click', () => {
        adventureCardsContainer.scrollBy({ left: 350, behavior: 'smooth' });
    });
}

// Categories scroll section arrows
const categoriesScrollContainer = document.querySelector('.categories-scroll-cards-container');
const categoriesLeftArrow = document.querySelector('.categories-scroll-arrow.left');
const categoriesRightArrow = document.querySelector('.categories-scroll-arrow.right');

if (categoriesScrollContainer && categoriesLeftArrow && categoriesRightArrow) {
    categoriesLeftArrow.addEventListener('click', () => {
        categoriesScrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
    });
    categoriesRightArrow.addEventListener('click', () => {
        categoriesScrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
    });
}

// Trending section scroll arrows
const trendingCardsContainer = document.querySelector('.trending-cards-container');
const trendingLeftArrow = document.querySelector('.trending-arrow.left');
const trendingRightArrow = document.querySelector('.trending-arrow.right');

if (trendingCardsContainer && trendingLeftArrow && trendingRightArrow) {
    trendingLeftArrow.addEventListener('click', () => {
        trendingCardsContainer.scrollBy({ left: -500, behavior: 'smooth' });
    });
    trendingRightArrow.addEventListener('click', () => {
        trendingCardsContainer.scrollBy({ left: 500, behavior: 'smooth' });
    });
}

// Must-Do section scroll arrows
const mustdoCardsContainer = document.querySelector('.mustdo-cards-container');
const mustdoLeftArrow = document.querySelector('.mustdo-arrow.left');
const mustdoRightArrow = document.querySelector('.mustdo-arrow.right');

if (mustdoCardsContainer && mustdoLeftArrow && mustdoRightArrow) {
    mustdoLeftArrow.addEventListener('click', () => {
        mustdoCardsContainer.scrollBy({ left: -500, behavior: 'smooth' });
    });
    mustdoRightArrow.addEventListener('click', () => {
        mustdoCardsContainer.scrollBy({ left: 500, behavior: 'smooth' });
    });
}

// Abu Dhabi Must-Dos section scroll arrows
const abudhabiCardsContainer = document.querySelector('.abudhabi-cards-container');
const abudhabiLeftArrow = document.querySelector('.abudhabi-arrow.left');
const abudhabiRightArrow = document.querySelector('.abudhabi-arrow.right');

if (abudhabiCardsContainer && abudhabiLeftArrow && abudhabiRightArrow) {
    abudhabiLeftArrow.addEventListener('click', () => {
        abudhabiCardsContainer.scrollBy({ left: -500, behavior: 'smooth' });
    });
    abudhabiRightArrow.addEventListener('click', () => {
        abudhabiCardsContainer.scrollBy({ left: 500, behavior: 'smooth' });
    });
}

// Slider auto-slide logic
const slides = document.querySelectorAll('.slider-slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
let sliderInterval;

function showSlide(idx) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
        dots[i].classList.toggle('active', i === idx);
    });
    currentSlide = idx;
}
function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}
function startSlider() {
    sliderInterval = setInterval(nextSlide, 3000);
}
function stopSlider() {
    clearInterval(sliderInterval);
}
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
        stopSlider();
        startSlider();
    });
});
const sliderContainer = document.querySelector('.slider-container');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopSlider);
    sliderContainer.addEventListener('mouseleave', startSlider);
    startSlider();
}

// Testimonial carousel auto-slide logic
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
const testimonialCardsContainer = document.querySelector('.testimonial-cards');
let testimonialCurrent = 0;
let testimonialInterval;
const testimonialVisible = 3;

function showTestimonialSlide(idx) {
    testimonialCards.forEach((card, i) => {
        card.style.display = (i >= idx && i < idx + testimonialVisible) ? 'flex' : 'none';
    });
    testimonialDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
    });
    testimonialCurrent = idx;
}
function nextTestimonialSlide() {
    let next = testimonialCurrent + 1;
    if (next > testimonialCards.length - testimonialVisible) next = 0;
    showTestimonialSlide(next);
}
function startTestimonialSlider() {
    testimonialInterval = setInterval(nextTestimonialSlide, 3000);
}
function stopTestimonialSlider() {
    clearInterval(testimonialInterval);
}
testimonialDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showTestimonialSlide(i);
        stopTestimonialSlider();
        startTestimonialSlider();
    });
});
if (testimonialCardsContainer) {
    testimonialCardsContainer.addEventListener('mouseenter', stopTestimonialSlider);
    testimonialCardsContainer.addEventListener('mouseleave', startTestimonialSlider);
    showTestimonialSlide(0);
    startTestimonialSlider();
}
