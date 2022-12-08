
var dropdown  = document.querySelector('.list-item-drop')
var headerMobileMenu = document.querySelector('.header-mobile_menu');
var mask = document.querySelector('.mask_header-mobile-menu')
var listDrop = document.querySelector('.drop_down');



dropdown.onclick = function(){
    if(listDrop.classList.contains('showList')){
        listDrop.classList.remove('showList');
    }
    else{
        listDrop.classList.add('showList');
    }
}



var iconHeaderMobile = document.querySelector('.header-mobile_icon');

iconHeaderMobile.onclick = function(){
    if(!mask.classList.contains('show')){
        mask.classList.remove('hidden');
        headerMobileMenu.classList.remove('hidden');
        mask.classList.add('show');
        headerMobileMenu.classList.add('show');
    }
}

mask.onclick = function(){
    if(mask.classList.contains('show')){
        mask.classList.remove('show');
        headerMobileMenu.classList.remove('show');
        mask.classList.add('hidden');
        headerMobileMenu.classList.add('hidden');
    }
}

