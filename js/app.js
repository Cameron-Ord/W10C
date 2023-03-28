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
  

    bidoof[`target`][`style`][`background-image`] = `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/399.png)`;


};

let add_bidoof = document.querySelector(`#page_header`);

add_bidoof.addEventListener(`dblclick` , addBidoof);






function addBidoof2(bidoof2){
  

    bidoof2[`target`][`style`][`background-image`] = `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/399.png)`;


};

let add_bidoof2 = document.querySelector(`#page_footer`);

add_bidoof2.addEventListener(`dblclick`, addBidoof2);





function onSpace(bigdoof){

if(bigdoof[`code`] === `Space` ) {

    bigdoof[`target`][`style`][`background-image`] = `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/399.png)`;
}

};

let body = document.querySelector(`body`);

body.addEventListener(`keydown`, onSpace);



function offSpace(bigdoofus){

    if(bigdoofus[`code`] === `Enter` ) {

        bigdoofus[`target`][`style`][`background-image`] = `none`;
    }

}

let turn_off = document.querySelector(`body`);

body.addEventListener(`keydown`, offSpace);