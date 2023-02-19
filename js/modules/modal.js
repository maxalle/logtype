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
export default modal;
export {closeModal, openModal};