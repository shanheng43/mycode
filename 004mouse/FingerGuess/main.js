var r,score=0,grade=1,lastHumanChoice;
var isComputerWin=false,lastComputerChoice;
function shitou() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/shitou.png\"/>";
    judge("shitou");
    lastHumanChoice="shitou";
}
function jiandao() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/jiandao.png\"/>";
    judge("jiandao");
    lastHumanChoice="jiandao";
}
function bu() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/bu.png\"/>";
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
    else {
        computerResult=computerChoice();
    }
    if (myChoice=="shitou"){
        if (computerResult=="shitou"){
            isComputerWin=false;
        }
        else if (computerResult=="jiandao"){
            isComputerWin=false;
            score+=1;
        }
        else if (computerResult=="bu"){
            isComputerWin=true;
            score-=1;
        }
    }
    else if (myChoice=="jiandao"){
        if (computerResult=="shitou"){
            isComputerWin=true;
            score-=1;
        }
        else if (computerResult=="jiandao"){
            isComputerWin=false;
        }
        else if (computerResult=="bu"){
            isComputerWin=false;
            score+=1;
        }
    }
    else if (myChoice=="bu"){
        if (computerResult=="shitou"){
            isComputerWin=false;
            score+=1;
        }
        else if (computerResult=="jiandao"){
            isComputerWin=true;
            score-=1;
        }
        else if (computerResult=="bu"){
            isComputerWin=false;
        }
    }
    if (score>=5){
        score=0;
        grade+=1;
    }
    document.getElementById("result").innerHTML="第"+grade+"关 积分："+score;
    if (grade>=10){
        document.getElementById("result").innerHTML="厉害！全部通关啦！";
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
    if (isComputerWin){
        document.getElementById("computerChoice").innerHTML="<img src='images/"+lastComputerChoice+".png'>";
        return lastComputerChoice;
    }
    var temp=computerChoice();
    document.getElementById("computerChoice").innerHTML="<img src='images/"+temp+".png'>";
    return temp;
}