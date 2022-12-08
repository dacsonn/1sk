const scr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.header__left`)
sr.reveal(`.home__data , .footer__content, .footer__logo , 
.footer__description, .footer__info`,{origin:'bottom'} ) 
sr.reveal(`.about__data, .recently__data, .home__header, .conten__left`,{origin:'left'} ) 
sr.reveal(`.about__img, .recently__img, .conten__right`,{origin:'right'} ) 
sr.reveal(`.popular__card`,{interval: 100} ) 



