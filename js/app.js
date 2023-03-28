function makeNew(detail_1){

    detail_1[`target`][`style`][`color`] = `#7798AB`;


};


//this function just changes the color//


let one_click = document.querySelectorAll(`.click`);

for(let counter = 0; counter < one_click.length; counter = counter +1){


    one_click[counter].addEventListener(`click`, makeNew);

};

//click class is set to h1 tags//




//mouseover and mouse off that adds and removes a backgroud image//

function mouseOver(background){


    background[`target`][`style`][`background-image`] = `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/399.png)`;
    background[`target`][`style`][`background-position`] = `50%`, `50%`;

    background[`target`][`style`][`object-fit`] = `cover`;
};

function mouseOff(none){


    none[`target`][`style`][`background-image`] = `none`;
};

let bidooftime = document.querySelectorAll(`.page_span`);

for(let counter = 0; counter < bidooftime.length; counter = counter +1){


    bidooftime[counter].addEventListener(`mouseover`, mouseOver);

    bidooftime[counter].addEventListener(`mouseout`, mouseOff)

};

//more background images that appear on dblclicks//



function addBidoof(bidoof){
  
    bidoof[`target`][`style`][`background-position`] = `50%`, `50%`;
    bidoof[`target`][`style`][`background-image`] = `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/399.png)`;


};

let add_bidoof = document.querySelector(`#page_header`);

add_bidoof.addEventListener(`dblclick` , addBidoof);






function addBidoof2(bidoof2){
  

    bidoof2[`target`][`style`][`background-image`] = `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/399.png)`;
    bidoof2[`target`][`style`][`background-position`] = `50%`, `50%`;
    bidoof2[`target`][`style`][`object-fit`] = `cover`;

};

let add_bidoof2 = document.querySelector(`#page_footer`);

add_bidoof2.addEventListener(`dblclick`, addBidoof2);



//a function that changes the background image of the body//

function onSpace(bigdoof){

if(bigdoof[`code`] === `Space` ) {

    bigdoof[`target`][`style`][`background-image`] = `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/399.png)`;
}

};

let body = document.querySelector(`body`);

body.addEventListener(`keydown`, onSpace);



//used [`code`] to select the correct input for keydown//

function offSpace(bigdoofus){

    if(bigdoofus[`code`] === `Enter` ) {

        bigdoofus[`target`][`style`][`background-image`] = `none`;
    }

}

let turn_off = document.querySelector(`body`);

body.addEventListener(`keydown`, offSpace);






//this is just extra stuff I added afterwards for fun don't worry about it//





function change_the_image(image){

    if(image[`target`].getAttribute(`src`) === `/images/399.png`){
    
        image[`target`].setAttribute(`src`, `https://www.serebii.net/swordshield/pokemon/399.png`);
    
    }else{
    
        image[`target`].setAttribute(`src`, `/images/399.png`);
    }
    
    };
    
    let change_image = document.querySelectorAll(`.page_span`);
    
    for(counter = 0; counter < change_image.length; counter = counter +1){
    
    change_image[counter].addEventListener(`click`, change_the_image)
    
    
    };


    function image_BG(biggest){


        biggest[`target`][`style`][`background-image`] = `url(https://lh3.googleusercontent.com/Gtx0rIY2cjEjh2gf3uN1U9QfUjVuJO7I7VtenD_9poaMo9V6Z-YQw5d2pwqBJovuR52tPaApwUjYFINWetjjrrYOJIhJXGaSm0z-1h1xJsHXAOw=s2400-rj)`;
        bidoof2[`target`][`style`][`background-position`] = `50%`, `50%`;
        bidoof2[`target`][`style`][`object-fit`] = `cover`;
    

    };


    let image_background = document.querySelectorAll(`.images`);

  
    for(counter = 0; counter < image_background.length; counter = counter +1){

        image_background[counter].addEventListener(`click`, image_BG)


    };