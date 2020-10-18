const arrow = document.querySelector('.arrow');

const arrowMobile = document.querySelector('.arrow-mobile');

// Mobile arrow slide
arrowMobile.addEventListener('click', function() {
    let arrowUp = 'http://dev.hoppa.com/images/45/arrow-up@2x.png';
    let arrowDown = 'http://dev.hoppa.com/images/45/arrow-down@2x.png';

    let imgPropMobile = document.querySelector('.arrow-mobile');

    imgPropMobile.src = (imgPropMobile.src === arrowUp)? arrowDown : arrowUp;

    let overlay = document.getElementById('overlay');
    let content = document.getElementById('content');

    if  (imgPropMobile.src === arrowUp)  {
        overlay.classList.add('slide-in');
        overlay.classList.remove('slide-out');
        content.classList.add('fade-in');
        content.classList.remove('fade-out'); 
    	
    } else {  
        
        overlay.classList.add('slide-out');
        overlay.classList.remove('slide-in');
        content.classList.add('fade-out');
        content.classList.remove('fade-in');         
    }
});


//Desltop arrow slide
arrow.addEventListener('click', function() {

    let arrowLeft = 'http://dev.hoppa.com/images/45/arrow-left@2x.png';
    let arrowRight = 'http://dev.hoppa.com/images/45/arrow-right@2x.png';

    let imgProp = document.querySelector('.arrow');

    imgProp.src = (imgProp.src === arrowLeft)? arrowRight : arrowLeft;

    let overlay = document.getElementById('overlay');
    let content = document.getElementById('content');

    if  (imgProp.src === arrowLeft)  {       
        overlay.classList.add('slide-in');
        overlay.classList.remove('slide-out');
        content.classList.add('fade-in');
        content.classList.remove('fade-out');
       	
    } else {        
        overlay.classList.add('slide-out');
        overlay.classList.remove('slide-in');
        content.classList.add('fade-out');
        content.classList.remove('fade-in');   
    }	  
});


// Memebrship tier hover

const tier = document.querySelector('.tier1');

tier.addEventListener('mouseover', function() {
    tier.innerHTML = `
        <img src ="http://dev.hoppa.com/images/45/card-grey.png" />   
    `
});

tier.addEventListener ('mouseout', function() {
    tier.innerHTML = `
        <img src ="http://dev.hoppa.com/images/45/card-white.png" />   
    `
});

