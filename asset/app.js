//parte 1
const btnImg = document.querySelector("#btnImg");

btnImg.addEventListener("click", () => { 
    if (btnImg.style.borderStyle === "solid"){ 
        
        btnImg.style.border ="none";
        
    }else(btnImg.style.border="red 2px solid")
    
});


//parte 2 

let stickeruno = document.querySelector('#stickeruno');
let stickerdos = document.querySelector('#stickerdos');
let stickertres = document.querySelector('#stickertres');
let totalsticker = document.querySelector('#totalsticker');
const btnstickers = document.querySelector('#btnstickers');

btnstickers.addEventListener('click',() =>{
    let uno = Number(stickeruno.value);
    let dos = Number(stickerdos.value);
    let tres = Number(stickertres.value);
    let numerostickers = uno+dos+tres;
    
    if (numerostickers <= 10){
        totalsticker.innerHTML= `<b>¡Excelente! Has elegido ${numerostickers} stickers </b>` ;
        totalsticker.style.color = "aqua";
    return;
}
    if (numerostickers > 10){
        totalsticker.innerHTML= `<b>Has elegido ${numerostickers} stickers. Debes llevar menos de 10.</b>`;
        totalsticker.style.color = "red";
    return;
}
});

//parte 3
let inputpassuno =document.querySelector("#inputpassuno")
let inputpassdos =document.querySelector("#inputpassdos")
let inputpasstres =document.querySelector("#inputpasstres")
let resultadopassword =document.querySelector("#resultadopassword")
let btnpassword =document.querySelector("#btnpassword")


btnpassword.addEventListener('click',() =>{
    let passuno = inputpassuno.value;
    let passdos = inputpassdos.value;
    let passtres = inputpasstres.value;
    let password = passuno + passdos + passtres;


    if (password === "911"){
        resultadopassword.innerHTML = "<b>Password 1 Correcto</b>";
        resultadopassword.style.color = "aqua";
    return; 
    }
    if (password === "714" ){
        resultadopassword.innerHTML = "<b>Password 2 Correcto</b>";
        resultadopassword.style.color = "aqua";
    return;
    }
    if (password != "911" || "714"){
        resultadopassword.innerHTML = "<b>Password  Incorrecto</b>";
        resultadopassword.style.color = "red";
    return;
    }
})
