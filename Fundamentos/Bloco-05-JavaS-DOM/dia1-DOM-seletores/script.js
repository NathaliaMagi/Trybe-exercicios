        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 /// 1
 function changeParagraph() {
    let paragraf = document.getElementsByTagName('p')[0];
    paragraf.innerText = "Como me vejo daqui a dois anos!";
 }
 
function chanceColorGreen() {
   let estilo = document.getElementsByClassName("main-content")[0];
   estilo.style.backgroundColor = "rgb(76,164,109)";
}

function changeColorWhite() {
    let whiteColor = document.getElementsByClassName("center-content")[0];
    whiteColor.style.backgroundColor = 'white';
}

function corretionH(){
    document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";
}

function changeSizeP(){
    //Utilizar do método toUpeerCase()
    let para = document.getElementsByTagName("p");

    for(let cont = 0; cont< para.length; cont += 1) {
       para[cont].style.textTransform.toUpperCase();
    }
}

function showConsole(){
    let mostrar = document.getElementsByTagName("p");
    for(let cont = 0; cont< mostrar.length; cont += 1){
        console.log(mostrar[cont].innerText);
    }
}

changeParagraph();
chanceColorGreen();
changeColorWhite();
corretionH();
changeSizeP();
showConsole();