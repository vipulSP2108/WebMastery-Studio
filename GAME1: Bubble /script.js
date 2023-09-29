function printall(){
    var total = "";
    for (var i = 0; i<49; i++){
        var rm = Math.floor(Math.random()*10);
        total = total + `<div class="box">${rm}</div>`;
    }
    document.querySelector(".contain").innerHTML = total;
}

function endgame(inputed){
    if(inputed == 0){
        // alert("hi");
    }
}

function timer(time){
    var terminal_console = setInterval(function(){
        if (time > 0){
            time = time-1;
            document.querySelector("#timer p").textContent = time;
        }
        else{
            endgame(time);
            clearInterval(terminal_console);
        }
    }, 1000);
}

function findval(){
    searchfor = Math.floor(Math.random()*10);
    document.querySelector("#now p").textContent = searchfor;
}

function scores(){
    document.querySelector("#scorep").textContent = Number(document.querySelector("#scorep").textContent) + 5;
}

function wrong_attempt(){
    document.querySelector("#attempt p").textContent -= 1;
}

function click_next(){
    document.querySelector("#next p").addEventListener("click",function(){
        document.querySelector("#now p").textContent = Number(document.querySelector("#next p").textContent);
        searchfor =  Number(document.querySelector("#next p").textContent);
    });
}

printall();

const inputed_time = 6;
timer(inputed_time);
var searchfor;
findval(searchfor);

var input;
document.querySelector(".contain").addEventListener("click",function(details){
    input = Number(details.target.textContent);
    if (searchfor == input){
        document.querySelector("#now h1").textContent = "Correct!";
        scores();
        findval(searchfor);
        delay = 0;
    }
    else{
        document.querySelector("#now h1").textContent = "Wrong!";
        wrong_attempt();
        delay = 0;
    }
    var delay = 0;
    var onesec_delay = setInterval(function(){
        if (delay < 2){
            delay = delay+1;
            document.querySelector("#now h1").textContent = "Find!";
        }
        else{
            delay = 0;
            clearInterval(onesec_delay);
        }
    }, 1000);
    endgame(Number(document.querySelector("#attempt p").textContent));
});

click_next();
