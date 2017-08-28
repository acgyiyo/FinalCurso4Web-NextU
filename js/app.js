// alejandro cuervo

var Calculadora={
  init:function(){
    this.funciones();
    this.iniciarListeners();
  },

  iniciarListeners:function(){
    var botonesNumericos=[];
    for(var i=0;i<=9;i++){
      botonesNumericos.push(document.getElementById(i));
      botonesNumericos[i].addEventListener('click',function(){
        agregarNumero(i);
      });
    }

    document.getElementById('on').addEventListener('click',this.funciones.encender);
    document.getElementById('sign').addEventListener('click',this.sign);
    document.getElementById('por').addEventListener('click',this.multiplicar);
    document.getElementById('menos').addEventListener('click',this.restar);
    document.getElementById('mas').addEventListener('click',this.sumar);
    document.getElementById('punto').addEventListener('click',this.punto);
    document.getElementById('igual').addEventListener('click',this.igual);
  },

  funciones: function(){
    function encender(){

    };
    function sign(){

    };
    function multiplicar(){

    };
    function restar(){

    };
    function sumar(){

    };
    function punto(){

    };
    function igual(){

    }
  }
};

Calculadora.init();
