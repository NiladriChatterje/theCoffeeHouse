const mouseMove = (e) => {
    let x = (e.movementX);
        let y =(e.movementY);
       
        document.getElementById('p1').style.top='-25%';
        document.getElementById('p1').style.left='-25%';
        document.getElementById('p1').style.setProperty('--mouseX',x*20 +"%");
        document.getElementById('p1').style.setProperty('--mouseY',y*20+"%");

        document.getElementById('p2').style.top='-45%';
        document.getElementById('p2').style.left='30%';
        document.getElementById('p2').style.setProperty('--mouseX',-x*10 +"%");
        document.getElementById('p2').style.setProperty('--mouseY',-y*10+"%");

        document.getElementById('p3').style.top='-15%';
        document.getElementById('p3').style.left='80%';
        document.getElementById('p3').style.setProperty('--mouseX',x*20 +"%");
        document.getElementById('p3').style.setProperty('--mouseY',y*20+"%");

        document.getElementById('p4').style.top='40%';
        document.getElementById('p4').style.left='80%';
        document.getElementById('p4').style.setProperty('--mouseX',-x*10 +"%");
        document.getElementById('p4').style.setProperty('--mouseY',-y*10+"%");
      
        document.getElementById('p5').style.top='85%';
        document.getElementById('p5').style.left='20%';
        document.getElementById('p5').style.setProperty('--mouseX',x*20 +"%");
        document.getElementById('p5').style.setProperty('--mouseY',y*20+"%");

        document.getElementById('p6').style.top='85%';
        document.getElementById('p6').style.left='-20%';
        document.getElementById('p6').style.setProperty('--mouseX',-x*10 +"%");
        document.getElementById('p6').style.setProperty('--mouseY',-y*10+"%");
}

const mouseLeave = (e) =>{

    document.getElementById('p1').style.top='+25%';
        document.getElementById('p1').style.left='+25%';
        document.getElementById('p1').style.setProperty('--mouseX','-80%');
        document.getElementById('p1').style.setProperty('--mouseY','-80%');


        document.getElementById('p2').style.top='-15%';
        document.getElementById('p2').style.left='30%';
        document.getElementById('p2').style.setProperty('--mouseX',-50 +"%");
        document.getElementById('p2').style.setProperty('--mouseY',-30+"%");


        document.getElementById('p3').style.top='-05%';
        document.getElementById('p3').style.left='20%';
        document.getElementById('p3').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p3').style.setProperty('--mouseY',30+"%");
      
       
        
        document.getElementById('p4').style.top='35%';
        document.getElementById('p4').style.left='30%';
        document.getElementById('p4').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p4').style.setProperty('--mouseY',30+"%");

        document.getElementById('p5').style.top='65%';
        document.getElementById('p5').style.left='0%';
        document.getElementById('p5').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p5').style.setProperty('--mouseY',30+"%");


        document.getElementById('p6').style.top='55%';
        document.getElementById('p6').style.left='-10%';
        document.getElementById('p6').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p6').style.setProperty('--mouseY',30+"%");
}

const touchMove = (e)=>{
    let x = -(e.changedTouches[0].pageX)+(Array.from(document.getElementsByClassName('App'))[0].clientWidth)/2;
        let y =-(e.changedTouches[0].pageY)+(Array.from(document.getElementsByClassName('App'))[0].clientHeight)/2;
        console.log(e);
        document.getElementById('p1').style.top='-35%';
        document.getElementById('p1').style.left='-35%';
        document.getElementById('p1').style.setProperty('--mouseX',x*1.2 +"%");
        document.getElementById('p1').style.setProperty('--mouseY',y*1.2+"%");

        document.getElementById('p2').style.top='-55%';
        document.getElementById('p2').style.left='40%';
        document.getElementById('p2').style.setProperty('--mouseX',-x*1.2 +"%");
        document.getElementById('p2').style.setProperty('--mouseY',-y*1.2+"%");

        document.getElementById('p3').style.top='-15%';
        document.getElementById('p3').style.left='80%';
        document.getElementById('p3').style.setProperty('--mouseX',x*1.2 +"%");
        document.getElementById('p3').style.setProperty('--mouseY',y*1.2+"%");

        document.getElementById('p4').style.top='40%';
        document.getElementById('p4').style.left='80%';
        document.getElementById('p4').style.setProperty('--mouseX',-x*1.2 +"%");
        document.getElementById('p4').style.setProperty('--mouseY',-y*1.2+"%");
      
        document.getElementById('p5').style.top='85%';
        document.getElementById('p5').style.left='20%';
        document.getElementById('p5').style.setProperty('--mouseX',x*1.2 +"%");
        document.getElementById('p5').style.setProperty('--mouseY',y*1.2+"%");

        document.getElementById('p6').style.top='85%';
        document.getElementById('p6').style.left='-20%';
        document.getElementById('p6').style.setProperty('--mouseX',-x*1.2 +"%");
        document.getElementById('p6').style.setProperty('--mouseY',-y*1.2+"%");
}


const touchEnd =() =>{
    document.getElementById('p1').style.top='+25%';
        document.getElementById('p1').style.left='+25%';
        document.getElementById('p1').style.setProperty('--mouseX','-80%');
        document.getElementById('p1').style.setProperty('--mouseY','-80%');


        document.getElementById('p2').style.top='-15%';
        document.getElementById('p2').style.left='30%';
        document.getElementById('p2').style.setProperty('--mouseX',-50 +"%");
        document.getElementById('p2').style.setProperty('--mouseY',-30+"%");


        document.getElementById('p3').style.top='-05%';
        document.getElementById('p3').style.left='20%';
        document.getElementById('p3').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p3').style.setProperty('--mouseY',30+"%");
      
       
        
        document.getElementById('p4').style.top='35%';
        document.getElementById('p4').style.left='30%';
        document.getElementById('p4').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p4').style.setProperty('--mouseY',30+"%");

        document.getElementById('p5').style.top='65%';
        document.getElementById('p5').style.left='0%';
        document.getElementById('p5').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p5').style.setProperty('--mouseY',30+"%");


        document.getElementById('p6').style.top='55%';
        document.getElementById('p6').style.left='-10%';
        document.getElementById('p6').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p6').style.setProperty('--mouseY',30+"%");
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
export {mouseMove,mouseLeave,touchMove, touchEnd, scrollTopAppContainer} ;