// Alejandro Cuervo G

var Calculadora=(function(){
  var display = null;
  var resultado = 0;
  var memoria1 = '0';
  var memoria2 = '0';
  var operacion = '';

  var encender = function(){
    display.innerHTML = '0';
    memoria1='0';
    memoria2='0';
  }

  var sign = function(){
    memoria1=String(memoria1*-1);
    imprimirPantalla('');
  }
  var dividir = function(){
    operacion='dividir';
    preOperar2();
  }
  var multiplicar = function(){
    operacion='multiplicar';
    preOperar2();
  }
  var restar = function(){
    operacion='restar';
    preOperar2();
  }
  var sumar = function(){
    operacion='sumar';
    if(memoria2=='0'){
      preOperar();
    }else{
      memoria2 = operar(memoria2,memoria1,operacion);
      memoria1='0';
      display.innerHTML='0';
    }
  }

  function preOperar(){
    memoria2=memoria1;
    memoria1='0';
    display.innerHTML='0';
  }

  function preOperar2(){
    if(memoria2=='0'){
      memoria2=memoria1;
      memoria1='0';
      display.innerHTML='0';
    }else{
      memoria2 = operar(memoria2,memoria1,operacion);
      memoria1='0';
      display.innerHTML='0';
    }
  }

  function operar(var1,var2,oper){
    switch (oper) {
      case 'dividir':
        return String(parseFloat(var2)/parseFloat(var1));
      break;
      case 'multiplicar':
        return String(parseFloat(var2)*parseFloat(var1));
      break;
      case 'restar':
        return String(parseFloat(var2)-parseFloat(var1));
      break;
      case 'sumar':
        return String(parseFloat(var2)+parseFloat(var1));
        break;
      default:
        return;
    }
  }

  var punto = function(){
    var punto=memoria1.indexOf('.',0);

    if(punto==-1 && memoria1!='0'){
      imprimirPantalla('.');
    }
  }

  var igual = function(){
    memoria1 = operar(memoria1,memoria2,operacion);

    if(memoria1.length>=8){
      display.innerHTML = memoria1.substring(0,8);
    }else{
      display.innerHTML = memoria1;
    }
    memoria1 = '0'; memoria2 = '0';
  }

  var imprimirPantalla = function(caracter){
    if(memoria1=='0'){
      if(caracter!=0){
        memoria1=String(caracter);
      }
    }else{
      memoria1=memoria1+String(caracter);
    }
    //imprimirPantalla
    if(memoria1.length>=8){
      display.innerHTML = memoria1.substring(0,8);
    }else{
      display.innerHTML = memoria1;
    }
  }

  function iniciarListeners(){
    var botonesNumericos=[];
    for(var i=0;i<=9;i++){
      (function(posActual){
        botonesNumericos.push(document.getElementById(i));
        botonesNumericos[i].addEventListener('click',function(){
          imprimirPantalla(posActual);
        });
      })(i);
    }
    document.getElementById('on').addEventListener('click',encender);
    document.getElementById('sign').addEventListener('click',sign);
    document.getElementById('dividido').addEventListener('click',dividir);
    document.getElementById('por').addEventListener('click',multiplicar);
    document.getElementById('menos').addEventListener('click',restar);
    document.getElementById('mas').addEventListener('click',sumar);
    document.getElementById('punto').addEventListener('click',punto);
    document.getElementById('igual').addEventListener('click',igual);
  }

  return{
    init: function(){
      iniciarListeners();
      display=document.getElementById('display');
    }
  }

})();

Calculadora.init();
