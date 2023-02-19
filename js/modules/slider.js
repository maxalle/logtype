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
export default slider;