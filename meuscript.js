
function executar(){
    var botao = document.getElementById('btn1');
    botao.value = "Mudei o texto!";
    botao.style.backgroundColor = 'red';
  
    var imagem = document.getElementById('img1');
    imagem.src = "imagens/img01.jpg";
    imagem.width = "100";

    var tab = document.getElementById('tab');
    tab.border = "5";
    tab.bgcolor="blue";
    tab.width="400";

    var par = document.getElementById('par');
    par.innerHTML = "Modifiquei o texto!";

}

