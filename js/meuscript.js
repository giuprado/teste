function executar(){
    var botao = document.getElementById("btn1");
    botao.value = "Mudei texto!";
    botao.style.backgroundColor ="green";
    botao.style.color ="white";

    var imagem = document.getElementById("img1");
    imagem.src = "imagens/img01.jpg";
    imagem.width = "200";

    var tab = document.getElementById("tab");
    tab.border = "5";
    tab.style.backgroundColor = "blue";
    tab.width="400";

    var par = document.getElementById("par");
    par.innerHTML = "Modifiquei o texto!";
}

function trocar(){
    var el = document.getElementById("tab");
    el.classList.remove("table");
    el.classList.add("table2");
}

function voltar(){
    var el = document.getElementById("tab");
    el.classList.remove("table2");
    el.classList.add("table");
}

document.getElementById("btn2").onclick = function(){
    var el = document.getElementById("tab");
   // el.classList.remove("table");
    //el.classList.add("table2");
    el.className= "table2";
}

function manipular(){
    //var lista = document.getElementById("lista");
    //var item = lista.firstElementChild;

   var novoitem = document.createElement("li");
   var texto = document.createTextNode("Consegui!!!!");

   novoitem.appendChild(texto);

   var lista = document.getElementById("lista");
   lista.appendChild(novoitem);
}