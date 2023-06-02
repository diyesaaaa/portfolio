"use strict";

// SPLASH

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  }, 3300);
})

// element class toggle function

const elementToggleFunc = (element) => {
  element.classList.toggle("active");
};

// sidebar

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  elementToggleFunc(sidebar);
});

// about

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal tiggle function

const testimonialsModalFunc = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", () => {
    modalImg.src = testimonialsItem[i].querySelector(
      "[data-testimonials-avatar]"
    ).src;
    modalTitle.innerHTML = testimonialsItem[i].querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = testimonialsItem[i].querySelector(
      "[data-testimonials-text]"
    ).innerHTML;
    testimonialsModalFunc();
  });
}

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// menu navigation

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// nav menu events

for (let k = 0; k < navigationLinks.length; k++) {
  navigationLinks[k].addEventListener("click", () => {
    for (let i = 0; i < pages.length; i++) {
      if (
        navigationLinks[k].innerHTML.toLowerCase() === pages[i].dataset.page
      ) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// PORTFOLIO

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", () => {
  elementToggleFunc(select);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", () => {
    let selectedValue = selectItems[i].innerText.toLowerCase();
    selectValue.innerText = selectItems[i].innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = (selectedValue) => {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", () => {
    let selectedValue = filterBtn[i].innerText.toLowerCase();
    selectValue.innerText = filterBtn[i].innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    filterBtn[i].classList.add("active");
    lastClickedBtn = filterBtn[i];
  });
}


// portfolio modal tiggle function

//THDS ADMIN
const THDSAdminItem = document.querySelectorAll("[thdsadmin-data]");
const modalContainerTHDSAdmin = document.querySelector("[thdsadmin-modal-container]");
const modalCloseBtnTHDSAdmin = document.querySelector("[thdsadmin-modal-close-btn]");
const overlayTHDSAdmin = document.querySelector("[thdsadmin-overlay]");

const THDSAdminModalFunc = () => {
  modalContainerTHDSAdmin.classList.toggle("active");
  overlayTHDSAdmin.classList.toggle("active");
};

for (let i = 0; i < THDSAdminItem.length; i++) {
  THDSAdminItem[i].addEventListener("click", () => {
    THDSAdminModalFunc();
  });
}

modalCloseBtnTHDSAdmin.addEventListener("click", THDSAdminModalFunc);
overlayTHDSAdmin.addEventListener("click", THDSAdminModalFunc);



//THDS MOBILE APP
const THDSMobileItem = document.querySelectorAll("[thdsmobile-data]");
const modalContainerTHDSMobile = document.querySelector("[thdsmobile-modal-container]");
const modalCloseBtnTHDSMobile = document.querySelector("[thdsmobile-modal-close-btn]");
const overlayTHDSMobile = document.querySelector("[thdsmobile-overlay]");

const THDSMobileModalFunc = () => {
  modalContainerTHDSMobile.classList.toggle("active");
  overlayTHDSMobile.classList.toggle("active");
};

for (let i = 0; i < THDSMobileItem.length; i++) {
  THDSMobileItem[i].addEventListener("click", () => {
    THDSMobileModalFunc();
  });
}

modalCloseBtnTHDSMobile.addEventListener("click", THDSMobileModalFunc);
overlayTHDSMobile.addEventListener("click", THDSMobileModalFunc);


//DINO RUSH
const DinoRushItem = document.querySelectorAll("[dinorush-data]");
const modalContainerDinoRush = document.querySelector("[dinorush-modal-container]");
const modalCloseBtnDinoRush = document.querySelector("[dinorush-modal-close-btn]");
const overlayDinoRush = document.querySelector("[dinorush-overlay]");

const DinoRushModalFunc = () => {
  modalContainerDinoRush.classList.toggle("active");
  overlayDinoRush.classList.toggle("active");
};

for (let i = 0; i < DinoRushItem.length; i++) {
  DinoRushItem[i].addEventListener("click", () => {
    DinoRushModalFunc();
  });
}

modalCloseBtnDinoRush.addEventListener("click", DinoRushModalFunc);
overlayDinoRush.addEventListener("click", DinoRushModalFunc);



//THDSLanding Page
const THDSLandingItem = document.querySelectorAll("[thdslanding-data]");
const modalContainerTHDSLanding = document.querySelector("[thdslanding-modal-container]");
const modalCloseBtnTHDSLanding = document.querySelector("[thdslanding-modal-close-btn]");
const overlayTHDSLanding = document.querySelector("[thdslanding-overlay]");

const THDSLandingModalFunc = () => {
  modalContainerTHDSLanding.classList.toggle("active");
  overlayTHDSLanding.classList.toggle("active");
};

for (let i = 0; i < THDSLandingItem.length; i++) {
  THDSLandingItem[i].addEventListener("click", () => {
    THDSLandingModalFunc();
  });
}

modalCloseBtnTHDSLanding.addEventListener("click", THDSLandingModalFunc);
overlayTHDSLanding.addEventListener("click", THDSLandingModalFunc);




// Contact

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", () => {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}



class WeeSlider extends HTMLElement {
  constructor() {
    super();
    this.loopSlides = this.dataset.loop === 'true';
    this.slides = [...this.querySelectorAll('.wee-slider__slide')];
    this.navDots = [...this.querySelectorAll('.wee-slider__navdot')];
    this.buttons = [...this.querySelectorAll('.wee-slider__buttons button')];
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.buttons.forEach(button => button.addEventListener('click', this.handleButtonClick));
    this.navDots.forEach((navDot, index) => navDot.addEventListener('click', () => {
      this.handleSlideChange(index);
    }));

    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        const slideIndex = this.slides.indexOf(target);
        target.classList.toggle('visible', isIntersecting);
        this.navDots[slideIndex].classList.toggle('visible', isIntersecting);
        if (!this.loopSlides) this.handleSlideButtonActive();
      });
    }, { threshold: 0.9 });
    this.slides.forEach(slide => observer.observe(slide));
    this.classList.add('loaded');
  }

  handleButtonClick(event) {
    const { classList } = event.currentTarget;
    const isNext = classList.contains('wee-slider__button-next');
    const modifier = isNext ? 1 : -1;
    const condition = slide => slide.classList.contains('visible');
    let index = isNext ? this.slides.findLastIndex(condition) : this.slides.findIndex(condition);
    index = index !== -1 ? index + modifier : (isNext ? 0 : this.slides.length - 1);
    if (this.loopSlides) index = (index + this.slides.length) % this.slides.length;
    this.handleSlideChange(index);
  }

  handleSlideChange(index) {
    this.slides.forEach((slide, i) => {
      if (i === index) slide.scrollIntoView();
    });
    this.navDots.forEach((navDot, i) => {
      navDot.classList.toggle('active', i === index);
    });
  }

  handleSlideButtonActive() {
    this.buttons.forEach(button => {
      const isNext = button.classList.contains('wee-slider__button-next');
      const slide = isNext ? this.slides[this.slides.length - 1] : this.slides[0]
      button.disabled = slide.classList.contains('visible');
    });
  }
}

customElements.define('wee-slider', WeeSlider);
