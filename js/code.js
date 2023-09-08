window.onload=init;

function init(){
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    state.x=1;
}

var state = {
    i:0,
    j:0,
    k:0,
    x:0
};

function nextTop(){
    console.log("inside function nextTop");
    console.log(state.i);
    var top = document.getElementById("top");
    if (state.i === 0){
        top.setAttribute("class", "top-1");
        state.i++;
        console.log(state.i);
    } else if (state.i===1){
        top.setAttribute("class","top-2");
        state.i++;
        console.log(state.i);
    } else if (state.i===2){
        top.setAttribute("class","top-3");
        state.i=0;
    }
}

function nextBottom(){
    console.log("inside function nextBottom");
    console.log(state.j);
    var bottom = document.getElementById("bottom");
    if (state.j === 0){
        bottom.setAttribute("class", "bottom-1");
        state.j++;
        console.log(state.j);
    } else if (state.j===1){
        bottom.setAttribute("class","bottom-2");
        state.j++;
        console.log(state.j);
    } else if (state.j===2){
        bottom.setAttribute("class","bottom-3");
        state.j=0;
    }
}

function nextHair(){
    console.log("inside function nextHair");
    console.log(state.k);
    var hair = document.getElementById("hair");
    if (state.k === 0){
        hair.setAttribute("class", "hair-1");
        state.k++;
        console.log(state.k);
    } else if (state.k===1){
        hair.setAttribute("class","hair-2");
        state.k++;
        console.log(state.k);
    } else if (state.k===2){
        hair.setAttribute("class","hair-3");
        state.k=0;
    }
}

function nextShoes(){
    console.log("inside function nextShoes");
    console.log(state.x);
    var shoes = document.getElementById("shoes");
    if (state.x === 0){
        shoes.setAttribute("class", "shoes-1");
        state.x++;
        console.log(state.x);
    } else if (state.x===1){
        shoes.setAttribute("class","shoes-2");
        state.x++;
        console.log(state.x);
    } else if (state.x===2){
        shoes.setAttribute("class","shoes-3");
        state.x=0;
    }
}



//the next buttons don't reset to 0;
//the assets might be showing up behind the background