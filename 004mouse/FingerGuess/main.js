var r,score=0,grade=1,lastHumanChoice,humanChoice;
var lastWinner="none",lastComputerChoice="shitou";
function shitou() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/shitou.png\"/>";
    humanChoice="shitou";
    judge("shitou");
    lastHumanChoice="shitou";
}
function jiandao() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/jiandao.png\"/>";
    humanChoice="jiandao";
    judge("jiandao");
    lastHumanChoice="jiandao";
}
function bu() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/bu.png\"/>";
    humanChoice="bu";
    judge("bu");
    lastHumanChoice="bu";
}
function judge(myChoice) {
    r =3*Math.random();
    var computerResult;
    if(grade==1){
        computerResult=onlyshitou();
    }
    else if (grade==2){
        computerResult=mofang();
    }
    else if (grade==3){
        computerResult=winnerAgain();
        lastComputerChoice=computerResult;
    }
    else if (grade==4){
        computerResult=loseChange();
        lastComputerChoice=computerResult;
    }
    else if (grade==5){
        computerResult=lovePaper();
    }
    else if (grade==6){
        computerResult=randomPlayer();
    }
    else if (grade==7){
        computerResult=cheatingMan(humanChoice);
    }

    if (myChoice=="shitou"){
        if (computerResult=="shitou"){
            lastWinner="none";
        }
        else if (computerResult=="jiandao"){
            lastWinner="human";
            score+=1;
        }
        else if (computerResult=="bu"){
            lastWinner="com";
            score-=1;
        }
    }
    else if (myChoice=="jiandao"){
        if (computerResult=="shitou"){
            score-=1;
            lastWinner="com";
        }
        else if (computerResult=="jiandao"){
            lastWinner="none";
        }
        else if (computerResult=="bu"){
            score+=1;
            lastWinner="human";
        }
    }
    else {
        if (computerResult=="shitou"){
            lastWinner="human";
            score+=1;
        }
        else if (computerResult=="jiandao"){
            score-=1;
            lastWinner="com";
        }
        else if (computerResult=="bu"){
            lastWinner="none";
        }
    }
    if (score>=5){
        score=0;
        grade+=1;
    }
    document.getElementById("result").innerHTML="第"+grade+"关 积分："+score;
    if (grade>7){
        document.getElementById("result").innerHTML="厉害！全部通关啦！";
    }
}
function gogogo() {
}
function computerChoice() {
    r = Math.random()*3;
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

function randomPlayer(){
    r = Math.random()*3;
    var temp;
    if (r<1){
        document.getElementById("computerChoice").innerHTML="<img src='images/shitou.png'>";
        temp= "shitou";
    }
    else if (r<2){
        document.getElementById("computerChoice").innerHTML="<img src='images/jiandao.png'>";
        temp= "jiandao";
    }
    else {
        document.getElementById("computerChoice").innerHTML="<img src='images/bu.png'>";
        temp= "bu";
    }
    document.getElementById("computerName").innerHTML="随心所欲";
    document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";
    return temp;
}

function lovePaper() {
    r = Math.random()*3;
    var temp;
    if (r<0.8){
        document.getElementById("computerChoice").innerHTML="<img src='images/shitou.png'>";
        temp= "shitou";
    }
    else if (r<1.7){
        document.getElementById("computerChoice").innerHTML="<img src='images/jiandao.png'>";
        temp= "jiandao";
    }
    else {
        document.getElementById("computerChoice").innerHTML="<img src='images/bu.png'>";
        temp= "bu";
    }
    document.getElementById("computerName").innerHTML="爱布先生";
    document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";
    return temp;
}

function onlyshitou() {
    document.getElementById("computerName").innerHTML="大锤哥";
    document.getElementById("computerChoice").innerHTML="<img src='images/shitou.png'>";
    return "shitou";
}
function mofang() {
    document.getElementById("computerName").innerHTML="模仿帝";
    document.getElementById("computerChoice").innerHTML="<img src='images/"+lastHumanChoice+".png'>";
    return lastHumanChoice;
}
function winnerAgain() {
    document.getElementById("computerName").innerHTML="赢了还出";
    if (lastWinner=="com"){
        document.getElementById("computerChoice").innerHTML="<img src='images/"+lastComputerChoice+".png'>";
        return lastComputerChoice;
    }
    var temp=computerChoice();
    document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";
    return temp;
}
function loseChange() {
    document.getElementById("computerName").innerHTML="输了就换";
    if (lastWinner=="human"){
        var temp=getResultExclude(lastComputerChoice);
        document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";
        return temp;
    }
    temp=computerChoice();
    document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";
    return temp;
}
function getResultExclude(exclusion) {
    var temp=computerChoice();
    if (temp==exclusion){
        return getResultExclude(exclusion);
    }
    else {
        return temp;
    }
}

function cheatingMan(humanChoice) {
    document.getElementById("computerName").innerHTML="作弊爷爷";
    if (humanChoice=="shitou"){
        r=Math.random();
        if (r<0.5){
            document.getElementById("computerChoice").innerHTML="<img src=\"images/bu.png\"/>";
            return "bu";
        }
        else {
            return computerChoice();
        }
    }
    else if (humanChoice=="jiandao"){
        r=Math.random();
        if (r<0.5){
            document.getElementById("computerChoice").innerHTML="<img src=\"images/shitou.png\"/>";
            return "shitou";
        }
        else {
            return computerChoice();
        }
    }
    else {
        r=Math.random();
        if (r<0.5){
            document.getElementById("computerChoice").innerHTML="<img src=\"images/jiandao.png\"/>";
            return "jiandao";
        }
        else {
            return computerChoice();
        }
    }
}

function control() {
    if (document.getElementById("music").paused){
        document.getElementById("music").play();
        document.getElementById("musicButton").style.backgroundImage="url(\"images/start.jpg\")";
    }
    else {
        document.getElementById("music").pause();
        document.getElementById("musicButton").style.backgroundImage="url(\"images/stop.jpg\")";
    }
}