function D(x){return document.getElementById(x);}
function random(x){return Math.ceil(Math.random()*x);}
class dim{
  constructor(x,y,w,h,obj,time=undefined,speed=undefined){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.obj=obj;
        this.move();
        obj.style.width=w+"px";
        obj.style.height=h+"px";
        if (time!=undefined)
          this.change_dist(time,speed);
    }
    move(){
        this.obj.style.left=this.x+"px";
        this.obj.style.top=this.y+"px";
    }
    change_color(color,color_text=null){
        this.obj.style.backgroundColor=color;
    }
    change_dist(time=undefined,speed=undefined){
        this.dist=speed * time;
    }
}
const context = new (window.AudioContext || window.webkitAudioContext)();
function SOUND(nota,time,if_sound){
  if (!if_sound)return;//Me parece molesto a veces
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
function regla_de_3(si_x,es_igual,entonces){
  return es_igual*entonces/si_x;
}