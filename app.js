let gameSeq=[];
let userSeq=[];
let btns=["green","yellow","red","blue"];
let allbtn=document.querySelectorAll(".bttn")
let h4=document.querySelector(".h4mid")
let high=document.querySelector("h4")
let start=document.querySelector("#startbtn")
let started = false;
let level = 0;
let highscore = 0;

high.innerText=`Highest Score is ${highscore}`

start.addEventListener("click",function(){
    if(started == false){
        started = true;
        levelup();
    }
})

//button color changer 
function btnFlash(btn,randcolor){
        if(randcolor == "green"){
            btn.classList.add("userflashg");
            console.log(btn.getAttribute("id"))
        }
        else if(randcolor == "yellow") {
            btn.classList.add("userflashy");
            console.log(btn.getAttribute("id"))
        }
        else if(randcolor == "red"){
            btn.classList.add("userflashr");
            console.log(btn.getAttribute("id"))
        }
        else if(randcolor == "blue"){
            btn.classList.add("userflashb");
            console.log(btn.getAttribute("id"))
        } 
        setTimeout(function(){
            if(randcolor == "green"){
                btn.classList.remove("userflashg");
            }
            else if(randcolor == "yellow")
                btn.classList.remove("userflashy");
            
            else if(randcolor == "red")
                btn.classList.remove("userflashr");
            
            else if(randcolor == "blue")
                btn.classList.remove("userflashb");
        
    },250);
}

function userFlash(btn,usercolor) {
    //music.play()
    if(usercolor == "green"){
        btn.classList.add("userflashg");
        console.log(btn.getAttribute("id"))
    }
    else if(usercolor == "yellow") {
        btn.classList.add("userflashy");
        console.log(btn.getAttribute("id"))
    }
    else if(usercolor == "red"){
        btn.classList.add("userflashr");
        console.log(btn.getAttribute("id"))
    }
    else if(usercolor == "blue"){
        btn.classList.add("userflashb");
        console.log(btn.getAttribute("id"))
    } 
    setTimeout(function(){
        if(usercolor == "green"){
            btn.classList.remove("userflashg");
        }
        else if(usercolor == "yellow")
            btn.classList.remove("userflashy");
        
        else if(usercolor == "red")
            btn.classList.remove("userflashr");
        
        else if(usercolor == "blue")
            btn.classList.remove("userflashb");
    
},250);
}

function levelup() {
    userSeq=[];
    level++;
    h4.innerText=`Level ${level}`
    // h4.innerText=`Highest Score is ${highscore}`

    let randID = Math.floor(Math.random()*4);
    let randcolor = btns[randID];
    let randbtn = document.querySelector(`.${randcolor}`)
    gameSeq.push(randcolor)
    btnFlash(randbtn,randcolor);
}

function checkbtn(idx){
    if( userSeq[idx]== gameSeq[idx]){
        if( userSeq.length == gameSeq.length){
            setTimeout(levelup,1000)
        }
        
    }else{
        h4.innerHTML=`Game over!! Your Score is <b> ${level}</b> <br> Click Start Button key to restart `
        document.querySelector("body").style.backgroundColor = "pink"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "aliceblue"
        },50)
        if(level > highscore){
            highscore = level
        }
        high.innerText=`Highest Score is ${highscore}`
        reset();
    }
}

function btnPress(){
    let btn=this;
    usercolor = btn.getAttribute("id")
    userFlash(btn,usercolor)
    userSeq.push(usercolor)
    checkbtn(userSeq.length-1)
}

for(btn of allbtn){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level =0;
}

