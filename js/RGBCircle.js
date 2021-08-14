
let p5
let delegate

export function main(_p5){
    p5 = _p5

    p5.setup = _ => {
        var canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
        canvas.parent('p5RGBCircle')
    }
    
    p5.draw = _ =>{
        p5.blendMode(p5.BLEND); //?
        p5.background(245);
        //noStroke();
        p5.blendMode(p5.MULTIPLY);
        p5.noStroke();
        p5.translate(p5.width/2,p5.height/2);
        p5.fill(0,150,240);
        drawLiq(18,50,20,100);
        p5.fill(240,240,0);
        drawLiq(15,60,25,120);
        p5.fill(240,0,240);
        drawLiq(12,45,15,150);
    }

    function drawLiq(vNnum,nm,sm,fcm) {
        p5.push();
        p5.rotate(p5.frameCount/fcm);
        let dr = p5.TWO_PI/vNnum;
        p5.beginShape();
        for(let i = 0; i  < vNnum + 3; i++){
            let ind = i%vNnum;
            let rad = dr *ind;
            let r = p5.height*0.3 + p5.noise(p5.frameCount/nm + ind) * p5.height*0.1 + p5.sin(p5.frameCount/sm + ind)*p5.height*0.05;
            p5.curveVertex(p5.cos(rad)*r, p5.sin(rad)*r);
        }
        p5.endShape();
        p5.pop();
    }
}

export function setDelegate(_delegate) {
    delegate = _delegate;
  }