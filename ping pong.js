function D(x){return document.getElementById(x);}
function random(x){return Math.ceil(Math.random()*x);}
class dim{
  constructor(x,y,w,h,obj){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.obj=obj;
    }
    move(){
        this.obj.style.left=this.x+"px";
        this.obj.style.top=this.y+"px";
    }
    change_color(color){
        this.obj.style.backgroundColor=color;
    }
}
const context = new (window.AudioContext || window.webkitAudioContext)();
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
