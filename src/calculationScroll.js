const mouseMove = (e) => {
    let x = (e.movementX);
        let y =(e.movementY);
       
        
        document.getElementById('p1').style.setProperty('--mouseX',x*20 +"%");
        document.getElementById('p1').style.setProperty('--mouseY',y*20+"%");

        
        document.getElementById('p2').style.setProperty('--mouseX',-x*10 +"%");
        document.getElementById('p2').style.setProperty('--mouseY',-y*10+"%");

        
        document.getElementById('p3').style.setProperty('--mouseX',x*20 +"%");
        document.getElementById('p3').style.setProperty('--mouseY',y*20+"%");

        
        document.getElementById('p4').style.setProperty('--mouseX',-x*10 +"%");
        document.getElementById('p4').style.setProperty('--mouseY',-y*10+"%");
      
       
        document.getElementById('p5').style.setProperty('--mouseX',x*20 +"%");
        document.getElementById('p5').style.setProperty('--mouseY',y*20+"%");

      
        document.getElementById('p6').style.setProperty('--mouseX',-x*10 +"%");
        document.getElementById('p6').style.setProperty('--mouseY',-y*10+"%");
}
const mouseEnter = () =>{
        
        document.getElementById('p1').style.setProperty('--mouseX','-25%');
        document.getElementById('p1').style.setProperty('--mouseY','-25%');

        document.getElementById('p2').style.setProperty('--mouseX','-45%');
        document.getElementById('p2').style.setProperty('--mouseY','30%');

        document.getElementById('p3').style.setProperty('--mouseX','-15%');
        document.getElementById('p3').style.setProperty('--mouseY','80%');

        document.getElementById('p4').style.setProperty('--mouseX','40%');
        document.getElementById('p4').style.setProperty('--mouseY','80%');

        document.getElementById('p5').style.setProperty('--mouseX','85%');
        document.getElementById('p5').style.setProperty('--mouseY','20%');

        document.getElementById('p6').style.setProperty('--mouseX','85%');
        document.getElementById('p6').style.setProperty('--mouseY','-20%');
}

const mouseLeave = (e) =>{

        document.getElementById('p1').style.setProperty('--mouseX','-80%');
        document.getElementById('p1').style.setProperty('--mouseY','-80%');

        document.getElementById('p2').style.setProperty('--mouseX',-50 +"%");
        document.getElementById('p2').style.setProperty('--mouseY',-30+"%");

        document.getElementById('p3').style.setProperty('--mouseX',-190 +"%");
        document.getElementById('p3').style.setProperty('--mouseY',70+"%");
      
        document.getElementById('p4').style.setProperty('--mouseX',-150 +"%");
        document.getElementById('p4').style.setProperty('--mouseY',30+"%");

        document.getElementById('p5').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p5').style.setProperty('--mouseY',0+"%");


       
        document.getElementById('p6').style.setProperty('--mouseX',0 +"%");
        document.getElementById('p6').style.setProperty('--mouseY',-130+"%");
}
const touchStart = ()=>{
    document.getElementById('p1').style.setProperty('--mouseX','-35%');
    document.getElementById('p1').style.setProperty('--mouseY','-35%');

    document.getElementById('p2').style.setProperty('--mouseX','-45%');
    document.getElementById('p2').style.setProperty('--mouseY','30%');

    document.getElementById('p3').style.setProperty('--mouseX','-15%');
    document.getElementById('p3').style.setProperty('--mouseY','80%');

    document.getElementById('p4').style.setProperty('--mouseX','40%');
    document.getElementById('p4').style.setProperty('--mouseY','80%');

    document.getElementById('p5').style.setProperty('--mouseX','85%');
    document.getElementById('p5').style.setProperty('--mouseY','20%');

    document.getElementById('p6').style.setProperty('--mouseX','85%');
    document.getElementById('p6').style.setProperty('--mouseY','-20%');
}
const touchMove = (e)=>{
    let x = -(e.changedTouches[0].clientX)+(Array.from(document.getElementsByClassName('App'))[0].clientWidth)/2;
        let y =-(e.changedTouches[0].clientY)+(Array.from(document.getElementsByClassName('App'))[0].clientHeight)/2;
        console.log(e);
        
        document.getElementById('p1').style.setProperty('--mouseX',x*2 +"%");
        document.getElementById('p1').style.setProperty('--mouseY',y*2+"%");

        
        document.getElementById('p2').style.setProperty('--mouseX',-x*2 +"%");
        document.getElementById('p2').style.setProperty('--mouseY',-y*2+"%");

        
        document.getElementById('p3').style.setProperty('--mouseX',x*2 +"%");
        document.getElementById('p3').style.setProperty('--mouseY',y*2+"%");

        
        document.getElementById('p4').style.setProperty('--mouseX',-x*2 +"%");
        document.getElementById('p4').style.setProperty('--mouseY',-y*2+"%");
      
        
        document.getElementById('p5').style.setProperty('--mouseX',x*2 +"%");
        document.getElementById('p5').style.setProperty('--mouseY',y*2+"%");

        
        document.getElementById('p6').style.setProperty('--mouseX',-x*2 +"%");
        document.getElementById('p6').style.setProperty('--mouseY',-y*2+"%");
}


const touchEnd =() =>{
   
        document.getElementById('p1').style.setProperty('--mouseX','-80%');
        document.getElementById('p1').style.setProperty('--mouseY','-80%');
        
        document.getElementById('p2').style.setProperty('--mouseX',-50 +"%");
        document.getElementById('p2').style.setProperty('--mouseY',-30+"%");

        document.getElementById('p3').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p3').style.setProperty('--mouseY',30+"%");
      
        document.getElementById('p4').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p4').style.setProperty('--mouseY',30+"%");

        document.getElementById('p5').style.setProperty('--mouseX',-80 +"%");
        document.getElementById('p5').style.setProperty('--mouseY',60+"%");

        document.getElementById('p6').style.setProperty('--mouseX',-30 +"%");
        document.getElementById('p6').style.setProperty('--mouseY',-30+"%");
}
let scrolltop = 0;
let scalee = 0;
const scrollTopAppContainer = () =>{


if(Array.from(document.getElementsByClassName('App'))[0].scrollTop >= 100){
    document.getElementById('logo').style.zIndex = -10
}
else{
    document.getElementById('logo').style.zIndex = 1;
}

scrolltop = Array.from(document.getElementsByClassName('App'))[0].scrollTop;
       
        scalee=scrolltop/
       Array.from(document.getElementsByClassName('App'))[0].clientHeight

       if(scalee < 1.25)
        document.getElementById('logo-title').style.setProperty('--y',scalee)
        
        if(scrolltop<300){
            document.getElementById('logo').style.setProperty('--x',
            1/(1+scrolltop/50));
        } 
       
        
    }
export {mouseMove,
    mouseLeave,touchMove, touchEnd, mouseEnter,
    scrollTopAppContainer,touchStart} ;