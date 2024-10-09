//pencil

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var num = document.getElementById('num');
var a=0;

plus.addEventListener("click",()=>{
    a++;
    a=a<10 ? "0"+a : a;
    num.innerText=a;
});

minus.addEventListener("click",()=>{
    if(a>0){
        a--;
        a=a<10 ? "0"+a : a;
      var number =  num.innerText=a;
      
    }
});

var buy = document.getElementById('buy');

buy.addEventListener("click",()=>{
    buy.innerText="ADDED";
    var dairyprice = a*80;
    console.log(dairyprice);
    localStorage.setItem('dp',dairyprice);
    
})

// ====2====

var plus2 = document.getElementById('addi');
var minus2 = document.getElementById('sub');
var num2 = document.getElementById('dig');
b=0;

plus2.addEventListener("click",()=>{
    b++;
    b=b<10 ? "0"+b : b;
    num2.innerText=b;
});

minus2.addEventListener("click",()=>{
    if(b>0){
        b--;
        b=b<10 ? "0"+b : b;
        num2.innerText=b;
    }
});

var buy2 = document.getElementById('buy2');

buy2.addEventListener("click",()=>{
    buy2.innerText="ADDED";
    var star = b*70;
    console.log(star);
    localStorage.setItem('st5',star);
});

// ====/   3   \====


var plus3 = document.getElementById('plus3');
var minus3 = document.getElementById('minus3');
var num3 = document.getElementById('num3');
c=0;

plus3.addEventListener("click",()=>{
    c++;
    c=c<10 ? "0"+c : c;
    num3.innerText=c;
});

minus3.addEventListener("click",()=>{
    if(c>0){
        c--;
        c=c<10 ? "0"+c : c;
        num3.innerText=c;
    }
});

var buy3 = document.getElementById('buy3');

buy3.addEventListener("click",()=>{
    buy3.innerText="ADDED";
    var penr = c*20;
    console.log(penr);
    localStorage.setItem('pen',penr);
});

// =====/   4   \===

var plus4 = document.getElementById('plus4');
var minus4 = document.getElementById('minus4');
var num4 = document.getElementById('num4');
d=0;

plus4.addEventListener("click",()=>{
    d++;
    d=d<10 ? "0"+d : d;
    num4.innerText=d;
});

minus4.addEventListener("click",()=>{
    if(d>0){
        d--;
        d=d<10 ? "0"+d : d;
        num4.innerText=d;
    }
});

var buy4 = document.getElementById('buy4');

buy4.addEventListener("click",()=>{
    buy4.innerText="ADDED";
    var pbrush = d*40;
    console.log(pbrush);
    localStorage.setItem('pb',pbrush);
});

// ===/   5   \===

var plus5 = document.getElementById('plus5');
var minus5 = document.getElementById('minus5');
var num5 = document.getElementById('num5');
e=0;

plus5.addEventListener("click",()=>{
    e++;
    e=e<10 ? "0"+e : e;
    num5.innerText=e;
});

minus5.addEventListener("click",()=>{
    if(e>0){
        e--;
        e=e<10 ? "0"+e : e;
        num5.innerText=e;
    }
});

var buy5 = document.getElementById('buy5');

buy5.addEventListener("click",()=>{
    buy5.innerText="ADDED";
    var teaddy = e*300;
    console.log(teaddy);
    localStorage.setItem('td',teaddy);

});


// ===/   6   \===


var plus6 = document.getElementById('plus6');
var minus6 = document.getElementById('minus6');
var num6 = document.getElementById('num6');
f=0;

plus6.addEventListener("click",()=>{
    f++;
    f=f<10 ? "0"+f : f;
    num6.innerText=f;
});

minus6.addEventListener("click",()=>{
    if(f>0){
        f--;
        f=f<10 ? "0"+f : f;
        num6.innerText=f;
    }
});

var buy6 = document.getElementById('buy6');

buy6.addEventListener("click",()=>{
    
    buy6.innerText="ADDED";
    var pencil = f*25;
    console.log(pencil);
    localStorage.setItem('pp',pencil);
});


// ===/   7   \===


var addi7 = document.getElementById('addi7');
var sub7 = document.getElementById('sub7');
var dig7 = document.getElementById('dig7');
g=0;

addi7.addEventListener("click",()=>{
    g++;
    g=g<10 ? "0"+g : g;
    dig7.innerText=g;
});

sub7.addEventListener("click",()=>{
    if(g>0){
        g--;
        g=g<10 ? "0"+g : g;
        dig7.innerText=g;
    }
});

var buy7 = document.getElementById('buy7');

buy7.addEventListener("click",()=>{
    
    buy7.innerText="ADDED";
    var keyboard = g*100;
    console.log(keyboard);
    localStorage.setItem('kbd',keyboard);
});


// =====/  8   \====


var addi8 = document.getElementById('addi8');
var sub8 = document.getElementById('sub8');
var dig = document.getElementById('dig8');
h=0;

addi8.addEventListener("click",()=>{
    h++;
    h=h<10 ? "0"+h : h;
    dig8.innerText=h;
});

sub8.addEventListener("click",()=>{
    if(h>0){
        h--;
        h=h<10 ? "0"+h : h;
        dig8.innerText=h;
    }
});

var buy8 = document.getElementById('buy8');

buy8.addEventListener("click",()=>{
    
    buy8.innerText="ADDED";
    var monitor = h*10000;
    console.log(monitor);
    localStorage.setItem('moni',monitor);
});


// ===/   9   \====



var addi9 = document.getElementById('addi9');
var sub9 = document.getElementById('sub9');
var dig9 = document.getElementById('dig9');
i=0;

addi9.addEventListener("click",()=>{
    i++;
    i=i<10 ? "0"+i : i;
    dig9.innerText=i;
});

sub9.addEventListener("click",()=>{
    if(i>0){
       i--;
       i=h<10 ? "0"+i :i;
        dig9.innerText=i;
    }
});

var buy9 = document.getElementById('buy9');

buy9.addEventListener("click",()=>{
    
    buy9.innerText="ADDED";
    var cpu = i*15000;
    console.log(cpu);
    localStorage.setItem('cpup',cpu);
});


// ===/   10   \====



var addi10 = document.getElementById('addi10');
var sub10 = document.getElementById('sub10');
var dig10 = document.getElementById('dig10');
j=0;

addi10.addEventListener("click",()=>{
    j++;
    j=j<10 ? "0"+j : j;
    dig10.innerText=j;
});

sub10.addEventListener("click",()=>{
    if(j>0){
        j--;
        j=j<10 ? "0"+j : j;
        dig10.innerText=j;
    }
});

var buy10 = document.getElementById('buy10');

buy10.addEventListener("click",()=>{
    
    buy10.innerText="ADDED";
    var mouse = j*100;
    console.log(mouse);
    localStorage.setItem('mousep',mouse);
});

// =====find price======

