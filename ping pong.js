"uses strict";
const context = new (window.AudioContext || window.webkitAudioContext)();
function D(x){
    return document.getElementById(x);
}
function init_canvas(canvas){
        canvas.setAttribute("width",screen.width);
    canvas.setAttribute("height",screen.height);
    return canvas.getContext("2d");
}
/*
    function copy/paste of :
        https://hdeleon.net/crear-sonido-con-el-navegador-con-javascript-html5-sin-mp3-ni-wav/
*/

function SOUND(nota,time){
  //creamos oscilador
  var osc = context.createOscillator();

  // admite: sine, square, sawtooth, triangle
  osc.type = 'triagle'; 
  osc.frequency.value=nota;

  //asignamos el destino para el sonido
  osc.connect(context.destination);
  //iniciamos la nota
  osc.start();
  // detenemos la nota en time segundos.
  osc.stop(context.currentTime + time);

}
class dim{
    constructor(x,y,w,h,life=3){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.life=life;
    }
};
class blocks extends dim{
    constructor(x,y,w,h,life,ctx){
        super(x,y,w,h,life);
        this.ctx=ctx;
    }
    draw(fillColor,strokeColor){
        /*Dibujamos el rectángulo y preparamos los colores*/
        this.ctx.beginPath();
        this.ctx.fillStyle=fillColor;
        this.ctx.strokeColor=strokeColor;
        this.ctx.rect(this.x,this.y,this.w,this.h);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
    }
    clear(){
        /*    Para poder borrar los bordes debemos hacer varias operaciones aritméticas.*/
        this.ctx.clearRect(this.x-1,this.y-1,this.w+2,this.h+2);
    }
};
class balls extends dim{
    constructor(x,y,r,life,ball){
        super(x,y,undefined,undefined,life);
        this.ball=ball;//Debe ser un circulo svg.
        //TODO HACER: Cuando sepa hacer un circulo SVG mejoraré esta clase.
        this.r=r;//Radio.
    }
    move(){
        this.ball.setAttribute("cx",this.x+"px");
        this.ball.setAttribute("cy",this.y+"px");
    }
}
class per extends dim{
    constructor(x,y,w,h,life=3,obj){
        super(x,y,w,h,life);
        this.obj=obj;
        this.pto=0;
    }
    move(){
        this.obj.setAttribute("x",this.x+"px");
        this.obj.setAttribute("y",this.y+"px");
    }
    change(){
        this.obj.setAttribute("width",this.w+"px");
        this.obj.setAttribute("height",this.h+"px");
    }
}
class mensajes{
    /*Esto se llenará de variables durante la ejecución del programa.
    Nota: esta clase solo la usare para comunicarme entre funciones y eventos.
    */
}
