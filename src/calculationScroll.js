const mouseMove = (e) => {
    let x = (e.movementX);
        let y =(e.movementY);
        document.getElementById('p1').style.setProperty('--mouseX',-x*5+'%');
        document.getElementById('p1').style.setProperty('--mouseY',-y*5+'%');

        document.getElementById('p2').style.setProperty('--mouseX',55+x*3 +"%");
        document.getElementById('p2').style.setProperty('--mouseY',-80+y*5+"%");

        document.getElementById('p3').style.setProperty('--mouseX',190+x*5 +"%");
        document.getElementById('p3').style.setProperty('--mouseY',-50-y*5+"%");
      
        document.getElementById('p4').style.setProperty('--mouseX',230+x*3 +"%");
        document.getElementById('p4').style.setProperty('--mouseY',90+y*5+"%");

        document.getElementById('p5').style.setProperty('--mouseX',50+x*5 +"%");
        document.getElementById('p5').style.setProperty('--mouseY',320-y*5+"%");
       
        document.getElementById('p6').style.setProperty('--mouseX',-40-x*5 +"%");
        document.getElementById('p6').style.setProperty('--mouseY',180+y*6+"%");
}

const mouseLeave = (e) =>{

        document.getElementById('p1').style.setProperty('--mouseX','0%');
        document.getElementById('p1').style.setProperty('--mouseY','0%');

        document.getElementById('p2').style.setProperty('--mouseX',55 +"%");
        document.getElementById('p2').style.setProperty('--mouseY',-80+"%");

        document.getElementById('p3').style.setProperty('--mouseX',190 +"%");
        document.getElementById('p3').style.setProperty('--mouseY',-50+"%");
      
        document.getElementById('p4').style.setProperty('--mouseX',230 +"%");
        document.getElementById('p4').style.setProperty('--mouseY',90+"%");

        document.getElementById('p5').style.setProperty('--mouseX',30 +"%");
        document.getElementById('p5').style.setProperty('--mouseY',280+"%");
       
        document.getElementById('p6').style.setProperty('--mouseX',0 +"%");
        document.getElementById('p6').style.setProperty('--mouseY',130+"%");
}


let scrolltop = 0;
let scalee = 0;

const scrollTopAppContainer = () =>{
let app =Array.from(document.getElementsByClassName('App'))[0];
console.log()

if(app.scrollTop >= 100){
    document.getElementById('logo').style.zIndex = -10
}
else{
    document.getElementById('logo').style.zIndex = 1;
}

scrolltop = Array.from(document.getElementsByClassName('App'))[0].scrollTop;       
        scalee=scrolltop/app.clientHeight

       if(scalee < 1.25)
        {document.getElementById('logo-title').style.setProperty('--y',scalee)}
        
        if(scrolltop<300){
            document.getElementById('logo').style.setProperty('--x',
            1/(1+scrolltop/50));
        } 
        
       document.getElementById('welcome1').style.setProperty('--burger-scrollY',
        150-scrolltop/app.clientHeight*280+'%');

        document.getElementById('welcome2').style.setProperty('--burger-scrollY',
        150-scrolltop/app.clientHeight*90+'%');
        
        document.getElementById('sandwich1').style.setProperty('--burger-scrollY',
        390-scrolltop/app.clientHeight*120+'%');
        document.getElementById('sandwich2').style.setProperty('--burger-scrollY',
        290-scrolltop/app.clientHeight*85+'%');
        document.getElementById('sandwich3').style.setProperty('--burger-scrollY',
        560-scrolltop/app.clientHeight*190+'%');
        
    }
export {mouseMove,
    mouseLeave,
    scrollTopAppContainer} ;