window.onload = function () {
    var tela = document.getElementById('tela');   
    var ctx = tela.getContext("2d");    
    var velx = vely = 0;               
    var inix = iniy = 10;             
    var macax = macay = 20;           
    var tamp = 20;
    var qtdp = 28;                     
    var rastro = [];                  
    var pont = 0;
    const vel = 1;                       

    document.addEventListener("keydown", keyPush); 
    setInterval(jogo, 1000/15);       
    ras = 3;                          

    function jogo() {
        inix += velx;                 
        iniy += vely                  

        if (inix < 0) {               
            inix = qtdp -1;            
        }
        if (inix > qtdp -1) {
            inix = 0;
        }
        if (iniy < 0) {
            iniy = qtdp -1;
        }
        if (iniy > qtdp -1) {
            iniy = 0;
        }

        ctx.fillStyle = "#101010";
        ctx.fillRect(0, 0, tela.width, tela.height);
        
        ctx.fillStyle = "#af2b2b";
        ctx.fillRect(macax*tamp, macay*tamp, tamp, tamp);

        ctx.fillStyle = "#74fb52";
        for(var i=0; i<rastro.length; i++) {
            ctx.fillRect(rastro[i].x*tamp, rastro[i].y*tamp, tamp-1, tamp-1);

            if(rastro[i].x == inix && rastro[i].y == iniy) {
                velx = vely = 0;
                ras = 3;
                pont = 0
            }
        }

        rastro.push({x:inix, y:iniy})     
        while(rastro.length > ras) {      
            rastro.shift();
        }

        if(macax == inix && macay == iniy) {
            ras++;                                     
            macax = Math.floor(Math.random()*qtdp);   
            macay = Math.floor(Math.random()*qtdp);   
            pont++;
        }
    }

    function keyPush(event) {
        switch(event.keyCode) {
            case 37:             
                velx =- vel;
                vely = 0
                break;

            case 38:             
                velx = 0;
                vely = -vel;
                break;

            case 39:               
                velx = vel;
                vely = 0;
                break;

            case 40:             
                velx = 0;
                vely = vel;
                break;

            default:
                break;
        }
    }
}
