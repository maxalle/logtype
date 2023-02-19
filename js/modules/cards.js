import { getResource } from "../services/services";
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
export default cards;