// alejandro cuervo

//variables
var display = null;
var resultado = 0;
var memoria1 = '0';

//objeto
var Calculadora = {
  init:function(){
    this.iniciarListeners();
    display=document.getElementById('display');
  },

  iniciarListeners:function(){
    var calc=this;
    var botonesNumericos=[];
    for(var i=0;i<=9;i++){
      botonesNumericos.push(document.getElementById(i));
      botonesNumericos[i].addEventListener('click',function(){
        calc.agregarNumero(this);
      });
    }

    document.getElementById('on').addEventListener('click',this.encender);
    document.getElementById('sign').addEventListener('click',this.sign);
    document.getElementById('por').addEventListener('click',this.multiplicar);
    document.getElementById('menos').addEventListener('click',this.restar);
    document.getElementById('mas').addEventListener('click',this.sumar);
    document.getElementById('punto').addEventListener('click',this.punto);
    document.getElementById('igual').addEventListener('click',this.igual);
  },

  agregarNumero: function(btn){
    var num=btn.id;
    if(memoria1==0){
      if(num!=0){
        memoria1=num;
      }
    }else {
      memoria1=memoria1+num;
    }

    this.imprimirNumero();
  },
  encender: function(){
    display.innerHTML = '0';
    memoria1=0;
  },
  sign:function(){

  },
  multiplicar:function(){

  },
  restar:function(){

  },
  sumar:function(){

  },
  punto:function(){

  },
  igual:function(){

  },
  imprimirNumero(){
    if(memoria1.length>=8){
      var memStr=memoria1+"";
      display.innerHTML = memStr.substring(0,8);
    }else{
      display.innerHTML = memoria1;
    }
  }
};

Calculadora.init();
