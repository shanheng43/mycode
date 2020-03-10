var r;
function shitou() {
    r =3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"images/shitou.png\"/>";
    var computerResult=computerChoice();
    judge("shitou",computerResult);
}
function jiandao() {
    r =3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"images/jiandao.png\"/>";
    var computerResult=computerChoice();
    judge("jiandao",computerResult);
}
function bu() {
    r =3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"images/bu.png\"/>";
    var computerResult=computerChoice();
    judge("bu",computerResult);
}
function judge(myChoice,computerResult) {
    if (myChoice=="shitou"){
        if (computerResult=="shitou"){
            document.getElementById("result").innerHTML="draw!";
        }
        else if (computerResult=="jiandao"){
            document.getElementById("result").innerHTML="you win!";
        }
        else if (computerResult=="bu"){
            document.getElementById("result").innerHTML="you lose!";
        }
    }
    else if (myChoice=="jiandao"){
        if (computerResult=="shitou"){
            document.getElementById("result").innerHTML="you lose!";
        }
        else if (computerResult=="jiandao"){
            document.getElementById("result").innerHTML="draw!";
        }
        else if (computerResult=="bu"){
            document.getElementById("result").innerHTML="you win!";
        }
    }
    else if (myChoice=="bu"){
        if (computerResult=="shitou"){
            document.getElementById("result").innerHTML="you win!";
        }
        else if (computerResult=="jiandao"){
            document.getElementById("result").innerHTML="you lose!";
        }
        else if (computerResult=="bu"){
            document.getElementById("result").innerHTML="draw!";
        }
    }
}
function gogogo() {
}
function computerChoice() {
    if (r<1){
        document.getElementById("computerChoice").innerHTML="<img src='images/shitou.png'>";
        return "shitou";
    }
    else if (r<2){
        document.getElementById("computerChoice").innerHTML="<img src='images/jiandao.png'>";
        return "jiandao";
    }
    else {
        document.getElementById("computerChoice").innerHTML="<img src='images/bu.png'>";
        return "bu";
    }
}