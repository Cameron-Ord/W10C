


function makeNew(detail_1){

    detail_1[`target`][`style`][`color`] = `#7798AB`;


}

let one_click = document.querySelectorAll(`.click`);

for(let counter = 0; counter < one_click.length; counter = counter +1){


    one_click[counter].addEventListener(`click`, makeNew);

};



function mouseOver(background){


    background[`target`][`style`][`background-image`] = `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/399.png)`;

}

function mouseOff(none){


    none[`target`][`style`][`background-image`] = `none`;
}

let bidooftime = document.querySelectorAll(`.page_span`);

for(let counter = 0; counter < bidooftime.length; counter = counter +1){


    bidooftime[counter].addEventListener(`mouseover`, mouseOver);

    bidooftime[counter].addEventListener(`mouseout`, mouseOff)

};


function onSpace(main){

    if(main[`code`] === `Space`){
        main[`target`][`style`][`background-color`] = `black`;
        }


}

let change_body = document.querySelectorAll(`.page_span`);

for(let counter = 0; counter < change_body.length; counter = counter +1){


    change_body[counter].addEventListener(`keydown`, onSpace);



};






function addBidoof(bidoof){
  

    bidoof[`target`][`style`][`background-image`] = `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/399.png)`;


}

let add_bidoof = document.querySelector(`#page_header`);

add_bidoof.addEventListener(`dblclick` , addBidoof);






function addBidoof2(bidoof2){
  

    bidoof2[`target`][`style`][`background-image`] = `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/399.png)`;


}

let add_bidoof2 = document.querySelector(`#page_footer`);

add_bidoof2.addEventListener(`dblclick`, addBidoof2);

