/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc(){
    
    const calories = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;

    if(localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if(localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function initLocalSettings(selector, activeClass){
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if(elem.getAttribute('id') === localStorage.getItem('sex')){
                elem.classList.add(activeClass);
            }
            if(elem.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                elem.classList.add(activeClass);
            }
        })
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
    function calcTotal() {
        if(!sex || !height || !weight || !age || !ratio) {
            calories.textContent = 'Введіть всі значення';
            return;
        }
        
        if(sex === 'female'){
            calories.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 + height) - (4.3 * age)) * ratio);
        } else {
            calories.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(`${selector}`);

        elements.forEach(elem => { // Цей спосіб є доцільнішим, так як при йому не виникає багів з простором між кнопками
            elem.addEventListener('click', (e) => {
                if(e.target.getAttribute('data-ratio')){
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
    
                console.log(sex, height, weight, age, ratio);
    
                e.target.classList.add(activeClass);
    
                calcTotal();
            });
        });
        // document.querySelector(parentSelector).addEventListener('click', (e) => { // Делегація подій в даному випадку не підходить, бо створює баг з натисканням на простір між кнопками
        //     if(e.target.getAttribute('data-ratio')){
        //         ratio = +e.target.getAttribute('data-ratio');
        //     } else {
        //         sex = e.target.getAttribute('id');
        //     }

        //     elements.forEach(elem => {
        //         elem.classList.remove(activeClass);
        //     });

        //     console.log(sex, height, weight, age, ratio);

        //     e.target.classList.add(activeClass);

        //     calcTotal();
        // });
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        
        input.addEventListener('input', () => {

            if(input.value.match(/\D/g)){
                input.style.border = '2px solid #ff2f36';
                input.style.borderRadius = '3px';
            } else {
                input.style.border = 'none';
            }

            switch(input.getAttribute('id')){
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            
            calcTotal();
        });

        getDynamicInformation('#height');
        getDynamicInformation('#weight');
        getDynamicInformation('#age');

    }
}

// module.exports = calc;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");

function cards(){
        // class MenuCard {
        //     constructor(img, alt, subtitle, descr, price, parentSelector, ...classes) {
        //         this.img = img;
        //         this.alt = alt;
        //         this.subtitle = subtitle;
        //         this.descr = descr;
        //         this.price = price;
        //         this.parent = document.querySelector(parentSelector);
        //         this.classes = classes; // параметр за замовчуванням прописати через оператор АБО не вийде, так як рест оператор працює з масивами
        //         this.transfer = 41; // в майбутньому можна зробити щоб динамічно приходив через НБУ
        //         this.changeToUAH();
        //     }

        //     changeToUAH() {
        //         this.price = this.price * this.transfer;
        //     }

        //     render() {
        //         const element = document.createElement('div');
        //         this.element = 'menu__item';
        //         if (this.classes.length === 0){
        //             element.classList.add(this.element);
        //         } else {
        //             this.classes.forEach(className => element.classList.add(className));
        //         }
        //         element.innerHTML = `
        //                 <img src=${this.img} alt=${this.alt}>
        //                 <h3 class="menu__item-subtitle">${this.subtitle}</h3>
        //                 <div class="menu__item-descr">${this.descr}</div>
        //                 <div class="menu__item-divider"></div>
        //                 <div class="menu__item-price">
        //                     <div class="menu__item-cost">Цена:</div>
        //                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        //                 </div>`;
        //         this.parent.append(element);
        //     }
        // }
        class MenuCard {
            constructor(img, alt, subtitle, descr, price, parentSelector, ...classes) {
                this.img = img;
                this.alt = alt;
                this.subtitle = subtitle;
                this.descr = descr;
                this.price = price;
                this.parent = document.querySelector(parentSelector);
                this.classes = classes; // параметр за замовчуванням прописати через оператор АБО не вийде, так як рест оператор працює з масивами
                this.transfer = 41; // в майбутньому можна зробити щоб динамічно приходив через НБУ
                this.changeToUAH();
            }

            changeToUAH() {
                this.price = this.price * this.transfer;
            }

            render() {
                const element = document.createElement('div');
                this.element = 'menu__item';
                if (this.classes.length === 0){
                    element.classList.add(this.element);
                } else {
                    this.classes.forEach(className => element.classList.add(className));
                }
                element.innerHTML = `
                        <img src=${this.img} alt=${this.alt}>
                        <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>`;
                this.parent.append(element);
            }
        }

        

    // getResource('http://localhost:3000/menu')
    //     .then(data => {
            // data.forEach(({img, altimg, title, descr, price}) => { // завдяки деструктуризації об'єктів, можна писати більш локанічний код і без повторень
            //     new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         })
    //     });

    // axios.get('http://localhost:3000/menu')
    //     .then(posts => {
    //         // console.log(posts);
    //         posts.data.forEach(({img, altimg, title, descr, price}) => { // завдяки деструктуризації об'єктів, можна писати більш локанічний код і без повторень
    //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //     });

    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data){ // потрібно додатково прпоисати конвертацію price в цій функції
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');
    //         element.classList.add('menu__item');

    //         element.innerHTML = `
    //         <img src=${img} alt=${altimg}>
    //         <h3 class="menu__item-subtitle">${title}</h3>
    //         <div class="menu__item-descr">${descr}</div>
    //         <div class="menu__item-divider"></div>
    //         <div class="menu__item-price">
    //             <div class="menu__item-cost">Цена:</div>
    //             <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //         </div>
    //         `;

    //         document.querySelector('.menu .container').append(element);
    //     });
    // }

    // new MenuCard(
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     'Меню “Фитнес”',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     9,
    //     '.menu .container',
        
    // ).render(); // альтернативний синтаксис, при якому посилання на об'єкт не зберігаються і це допомагає зберегти пам'ять

    // new MenuCard(
    //     "img/tabs/elite.jpg",
    //     'elite',
    //     'Меню “Премиум”',
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     13,
    //     '.menu .container',
        
    // ).render();

    // new MenuCard(
    //     "img/tabs/post.jpg",
    //     'post',
    //     'Меню "Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
    //     11,
    //     '.menu .container',
        
    // ).render();

}

// module.exports = cards;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function forms(formSelector, modalTimerId){
    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Thank you',
        failure: 'Smth went wrong',
    }

    forms.forEach(item => {
        bindPostData(item);
    })

    // спілкування з сервером виносять в окремі функції
    // postData відповідатиме за пост даних на сервер. bindPostData за прив'язку
    
    // async/await завжди використовуються разом. async ставиться перед кодом і наголошує що цей код виконуватиметься не чекаючи доки скріпт дійде до цього місця
    // await ставиться перед операціями, які потребують отримання результата чи даних, для уникнення помилок
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Для AJAX вимкнення стандартного повідомлення завжди обов'язкове
            
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);

            // const request = new XMLHttpRequest(); // Створюємо http запит
            // request.open('POST', 'server.php'); // налаштовуємо запити

            // request.setRequestHeader('Content-type', 'application/json'); // setrequestHeader блокує отримання даних сервером, якщо XMLHttpRequest використовується разом з FormData
            const formData = new FormData(form); // Потрібно завжди перевіряти інпути на наявність name, так як FormData не знайде їх без цього атрибуту

            // const object = {};
            // formData.forEach(function(value, key){
            //     object[key] = value;
            // }); 
            // Перетворюємо formData в JSON формат

            const json = JSON.stringify(Object.fromEntries(formData.entries())); // приймаємо 

            // fetch('server.php', { // Проміс якій запускається від фетча не перейде в стан кетч через відповідь хттп 404, 500, 501, 502
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json',
            //     },
            //     body: JSON.stringify(object)
            // })
            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
            // .then(data => data.text()) // обробка даних вже здійснюється в postData
            .then(data => {
                console.log(data); // те що повернув сервер(fetch)
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            })
            // request.send(json);

            // request.addEventListener('load', () => {
            //     if(request.status === 200){
            //         console.log(request.response);
            //         showThanksModal(message.success);
            //         form.reset();
            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // })
        })
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        }, 4000)
    }
}

// module.exports = forms;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function closeModal(modalSelector){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    // modal.classList.toggle('show');
    document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId){
    const modal = document.querySelector(modalSelector);    
    modal.classList.add('show');
    modal.classList.remove('hide');
    // modal.classList.toggle('show'); // альтернативна реалізація через тогл класів
    document.body.style.overflow = 'hidden';
    
    console.log(modalTimerId);
    if(modalTimerId){
        clearInterval(modalTimerId);
    }
}

function modal(triggerSelector, modalSelector, modalTimerId){
    // Modal

    const modalTrigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);
        //   modalCloseBtn = document.querySelector('[data-close]'); // Для динамічних модальних вікон така реалізація не підійде. Потрібно використовувати делегування подій

    
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId))
    });

    // modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if(e.target === modal || e.target.getAttribute('data-close') == ''){
            closeModal(modalSelector);
        }
    })

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')){
            closeModal(modalSelector);
        }
    })


    function showModalByScroll(){
        if( window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll); // Інода трапляється баг, коли модальне вікно не відображається. Тому загальну висоту документа необхідно відняти 1 піксель

}

// module.exports = modal;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}){
    

    // slider Option 2
    const slides = document.querySelectorAll(slide), // {slide}
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          slider = document.querySelector(container), // {container}, а також це являється нашим головним слайдером
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    if(slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%'; // влаштовуємо всі слайди в ряд для каруселі
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    })

    next.addEventListener('click', () => {
        if (offset == cutNum(width) * (slides.length - 1)){ // offset == 650px * 3 - 1950px, mean 4 slide
            offset = 0;
        } else {
            offset += cutNum(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`

        if(slideIndex == slides.length){
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        // dots.forEach(dot => dot.style.opacity = '.5');
        // dots[slideIndex - 1].style.opacity = 1;
        dotsOpacity(slideIndex);
    })

    function dotsOpacity(index){
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[index - 1].style.opacity = 1;
    }

    function cutNum(string){
        return +string.replace(/\D/g, '');
    }

    prev.addEventListener('click', () => {
        if (offset == 0){
            offset = cutNum(width) * (slides.length - 1)
        } else {
            offset -= cutNum(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == 1){
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        
        // dots.forEach(dot => dot.style.opacity = '.5');
        // dots[slideIndex - 1].style.opacity = 1;
        dotsOpacity(slideIndex);
    })

    // Slider navigation

    slider.style.position = 'relative'; // встановлюємо для слайдера релятивне позиціонування, щоб зпозиціонувати кнопки абсолютно

    const indicators = document.createElement('ol'),
          dots = [];

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slider.append(indicators);

    for(let i = 0; i < slides.length; i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = ` 
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;`;
        if(i == 0){
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    dots.forEach(dot => { // робимо кнопки функціональними
        dot.addEventListener('click', (e) => { // навішуємо обробник подій на кожну кнопку
            const slideTo = e.target.getAttribute('data-slide-to'); // data-slide-to="#" # - від 1 до кількості слайдів

            slideIndex = slideTo; // slideIndex = 1 to #
            offset = cutNum(width) * (slideTo - 1); // offset = 500 * 1 ~ 4;

            slidesField.style.transform = `translateX(-${offset})`; //slidesField = translateX(-500 ~ -2000)

            // dots.forEach(dot => dot.style.opacity = '.5'); // міняєм прозорість у кнопок
            // dots[slideIndex - 1].style.opacity = 1; // міняєм прозорість у активної кнопки. slideTo = 1, slideIndex = slideTo, dots[0].style.opacity = 1
            dotsOpacity(slideIndex);
            
            if(slides.length < 10){
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }
        })
    })
    // SLIDER OPTION 1 by Ivan
    // showSlides(slideIndex);

    // if(slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides1.length;
    // }
    // function showSlides(n){
    //     if(n > slides.length) {
    //         slideIndex = 1
    //     }

    //     if(n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     if(slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block';
    //     // slides[slideIndex - 1].classList.remove('hide');
    // }
    
    // function plusSlides(n){
    //     showSlides(slideIndex += n);
    // }
    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // })

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // })

    // slider by ME

    // const slideImgs = document.querySelectorAll('.offer__slide'),
    //       slideCounter = document.querySelector('#current'),
    //       slidePrev = document.querySelector('.offer__slider-prev'),
    //       slideNext = document.querySelector('.offer__slider-next'),
    //       sliderParent = document.querySelector('.offer__wrapper');

    // function hideSlides(){
    //     slideImgs.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show', 'fade');
    //     })
    // }

    // function showSlide(i = 0){
    //     slideImgs[i].classList.add('show', 'fade');
    //     slideImgs[i].classList.remove('hide');
    //     if(i >= 10){
    //     slideCounter.textContent = `${++i}`;
    //     } else {
    //     slideCounter.textContent = `0${++i}`;
    //     }
    // }

    // hideSlides();
    // showSlide();
    // let i = 1;
    // slideNext.addEventListener('click', event => {
    //     const target = event.target;
    //     if(target == slideNext){
    //         hideSlides();
    //         showSlide(i++);
    //         if(i > slideImgs.length){
    //             i = 1;
    //         }
    //          // треба пофіксити перший слайд, так як він спрацьовує після другого кліку
    //     }
    // })
    // slidePrev.addEventListener('click', event => {
    //     const target = event.target;
    //     if(target == slidePrev){
    //         if(i < 0){
    //             i = slideImgs.legth;
    //         }
    //         hideSlides();
    //         showSlide(--i);
    //     }
    // })
}

// module.exports = slider;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass){
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        })
    }

    // В ES6 з'явилась можливість назначати параметри для аргументів за замовчуванням, просто присвоївши їм значення. Це дозволяє викликати функцію без аргументів
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((item, i) => {
                if( target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    hideTabContent();
    showTabContent();
}

// module.exports = tabs;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline){
    //timer
    // const deadline = '2023-04-15'; // в майбутньому може статись ситуація прив'язки дати до адміністративної панелі і там буде інпут з таймом дати і він буде повертати такого типу строку

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());  // методи parse прописуються для того щоб код був ідентичний і легше читався

              if( t <= 0){
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
              } else {
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                minutes = Math.floor((t / 1000 / 60) % 60), 
                seconds = Math.floor((t / 1000) % 60);
              }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock(); // викликається для того щоб ініціалізувати дату до timeInterval, щоб уникнути мерехтіння дати під час перезавантаження
        
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);

}

// module.exports = timer;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => (/* binding */ getResource),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: data,
    });

    return await res.json(); // повертаємо проміс з фетча, щоб можна було далі його обробити через then. Перш ніж повертати res.json потрібно створювати механізм, який дочекається результат роботи асинхроного коду
}

const getResource = async (url) => {
    const res = await fetch(url); 

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`); // Об'єкт помилки дозволяє нам самим створити помилку

    }
    return await res.json();
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");











window.addEventListener('DOMContentLoaded', () => {
    // const tabs = require('./modules/tabs'),
    //       modal = require('./modules/modal'),
    //       timer = require('./modules/timer'),
    //       cards = require('./modules/cards'),
    //       forms = require('./modules/forms'),
    //       calc = require('./modules/calc'),
    //       slider = require('./modules/slider');
    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)('.modal', modalTimerId), 50000);
    
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('[data-modal]', '.modal', modalTimerId);
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])('.timer', '2023-04-15');
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])('form', modalTimerId);
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });
});
    

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map