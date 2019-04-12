var nj1 = null;
var nj2 = null;
var pj1 = 0;  
var pj2 = 0;
var s = 2 ;
var c1 = null; c2 = null;c3 = null; c4 = null; c5 = null; c6 = null;c7 = null;c8 = null;c9 = null;
var jogadas = 0;

function jogar() {
  nj1 = document.getElementById('Nome1').value;
  nj2 = document.getElementById('Nome2').value;
  if(nj1 === '' || nj2 === ''){
    document.getElementById('textos').innerHTML = "Insira o nome dos jogadores"
  } else {
  s = parseInt(Math.random() * 2);
  if(s == 1 || s == 0) {
    if(s == 0){
    document.getElementById('textos').innerHTML = nj1 + " começa o jogo!!"
    }else if(s == 1){
    document.getElementById('textos').innerHTML = nj2 + " começa o jogo!!"
    }
    }
  }
}

function jogada(elemento){
  if(elemento.hasAttribute('style','background-color: #0A4029') == false){
    if(s == 0){
      elemento.setAttribute('style','background-color: #0A4029') 
      elemento.innerHTML = "<img src = image1.jpg>"
      s = s + 1 
      jogadas++
      velha();  
    } else if(s == 1) {
      elemento.setAttribute('style','background-color: #0A4029') 
      elemento.innerHTML = "<img src = image2.jpg>"
      s = s - 1
      jogadas++
      velha();
    }
  }
} 

function vencedor(elemento){
if(s == 0 || s == 1){
  if( c1=='x' && c2=='x' && c3=='x' || c4=='x' && c5=='x' && c6=='x' || c7=='x' && c8=='x' && c9=='x' || c1=='x' && c4=='x' && c7=='x' || c2=='x' && c5=='x' && c8=='x' || c3=='x' && c6=='x' && c9=='x' || c1=='x' && c5=='x' && c9=='x' || c3=='x' && c5=='x' && c7=='x'){
    elemento.setAttribute('style','background-color: #0A4029')
    elemento.innerHTML = "<img src = image1.jpg>"   
    s = 2
    document.getElementById('textos').innerHTML = nj1 + " VENCEU!!!" 
    jogadas = 'vitoria'
    pj1 += 1;
   
  }else if( c1=='o' && c2=='o' && c3=='o' || c4=='o' && c5=='o' && c6=='o' || c7=='o' && c8=='o' && c9=='o' || c1=='o' && c4=='o' && c7=='o' || c2=='o' && c5=='o' && c8=='o' || c3=='o' && c6=='o' && c9=='o' || c1=='o' && c5=='o' && c9=='o' || c3=='o' && c5=='o' && c7=='o'){
    elemento.setAttribute('style','background-color: #0A4029')
    elemento.innerHTML = "<img src = image2.jpg>"
    s = 2 
    document.getElementById('textos').innerHTML = nj2 + " VENCEU!!!" 
    jogadas = 'vitoria'
    pj2 += 1;
    }
  }
}

function velha(){
  if(jogadas == 9){
    document.getElementById('textos').innerHTML = "DEU VELHA!!" 
    document.getElementById('d1').innerHTML = "<img src = velha.jpg>" 
    document.getElementById('d2').innerHTML = "<img src = velha.jpg>"
    document.getElementById('d3').innerHTML = "<img src = velha.jpg>"
    document.getElementById('d4').innerHTML = "<img src = velha.jpg>"
    document.getElementById('d5').innerHTML = "<img src = velha.jpg>"
    document.getElementById('d6').innerHTML = "<img src = velha.jpg>"
    document.getElementById('d7').innerHTML = "<img src = velha.jpg>"
    document.getElementById('d8').innerHTML = "<img src = velha.jpg>"
    document.getElementById('d9').innerHTML = "<img src = velha.jpg>"
    s = 2;
  }
}

function zerar(){
  href="index.html"
  fimjogo();
}
function fimjogo(){
  c1 = ""; c2 = ""; c3 = ""; c4 = ""; c5 = "";c6 = "";c7 = "";c8 = "";c9 = "";
  document.getElementById('textos').innerHTML = "";
  s = 2;
  jogadas = "";
}

function verificar1(){
  if(c1 == null){
    if(s == 0){
    c1 = 'x';
    } else if(s == 1){
    c1 = 'o';
    }
  }
}
function verificar2(){
  if(c2 == null){
    if(s == 0){
    c2 = 'x'
    } else if(s == 1){
    c2 = 'o'
    }
  } 
}
function verificar3(){
  if(c3 == null){
    if(s == 0){
    c3 = 'x'
    } else if(s == 1){
    c3 = 'o'
    }
  }
}
function verificar4(){
  if(c4 == null){
    if(s == 0){
    c4 = 'x'
    } else if(s == 1){
    c4 = 'o'
    }
  }
}
function verificar5(){
  if(c5 == null){
    if(s == 0){
    c5 = 'x'
    } else if(s == 1){
    c5 = 'o'
    }
  }
}
function verificar6(){
  if(c6 == null){
    if(s == 0){
    c6 = 'x'
    } else if(s == 1){
    c6 = 'o'
    }
  }
}
function verificar7(){
  if(c7 == null){
    if(s == 0){
    c7 = 'x'
    } else if(s == 1){
    c7 = 'o'
    }
  }
}
function verificar8(){
  if(c8 == null){ 
    if(s == 0){
    c8 = 'x'
    } else if(s == 1){
    c8 = 'o'
    }
  }
}
function verificar9(){
  if(c9 == null){
    if(s == 0){
    c9 = 'x'
    } else if(s == 1){
    c9 = 'o'
    }
  }
}
 //function placar(){
 //document.getElementById('textos').innerHTML = "Placar: "+nj1 +" - "+pj1+" X "+nj2+" - "+pj2;
//}
