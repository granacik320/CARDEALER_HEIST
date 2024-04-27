let result = "";
let numbers = [];
let complite = 1;
const urlParams = new URLSearchParams(window.location.search);
let char = "1234567890";
if(urlParams.has('hard')){
    char = "ΘΙΛΨΧΦξΞλΠζβΣθ"
}

let st = [];
const bar = new ProgressBar.Line(progress, {
    strokeWidth: 4,
    easing: 'linear',
    duration: 10000,
    color: 'rgba(255,0,243,0.55)',
    trailColor: 'rgba(255,255,255,0.31)',
    trailWidth: 8,
    svgStyle: {width: '100%', height: '100%'}
});

document.querySelector(".numbers").addEventListener("click", check);
document.querySelector(".rows").addEventListener("click", check2);

function random(min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

function hide(){
    document.getElementById("btn").disabled = true;
    complite = 1;
    numbers = [];
    document.querySelector(".complite").innerHTML = "1/3"
    bar.animate(1.0, {
        duration: 3000
    }, setnumbers36);
    document.querySelector("h1").style.display = "none";
}

function setnumbers36(){
    st.unshift(false);
    bar.set(0)
    bar.animate(1.0, end);
    document.querySelector(".bgstart").style.display = "none";
    document.querySelector(".numbers").style.display = "flex";
    document.querySelector(".app").style.display = "block";
    document.querySelector(".set").style.display = "block";
    for(let i = 1; i < 7; i++){
        for(let j = 1; j < 7; j++){
            result = "";
            for ( let x = 0; x < 4; x++ ) {
                result += char.charAt(Math.floor(Math.random() * 10));
            }
            document.querySelector(".row"+i+" "+".number"+j).innerHTML = result;
        }
    }
    result = "";
    for ( let x = 0; x < 4; x++ ) {
        result += char.charAt(Math.floor(Math.random() * 10));
    }
    document.querySelector(".set").innerHTML = result;
    document.querySelector(".row"+ random(1,6) +" "+".number"+ random(1,6)).innerHTML = result;
    numbers.unshift(result);
}
function setnumbers6(){
    st.unshift(false);
    bar.set(0)
    bar.animate(1.0, end);
    for(let j = 1; j < 7; j++){
        result = "";
        for ( let x = 0; x < 4; x++ ) {
            result += char.charAt(Math.floor(Math.random() * 10));
        }
        document.querySelector(".rows"+" .number"+j).innerHTML = result;
    }
    document.querySelector(".rows"+" .number"+random(1,6)).innerHTML = numbers[numbers.length - 1];
}
function check(e){
    if(e.target.innerHTML.length === 4){
        st[st.length - 1] = true;
        if(e.target.innerHTML === result){
            complite++;
            if(complite > 3){
                document.querySelector(".complite").innerHTML = "1/3"
                document.querySelector(".numbers").style.display = "none";
                document.querySelector(".set").style.display = "none";
                document.querySelector(".rows").style.display = "flex";
                document.querySelector("h2").innerHTML = "WYBIERZ POPRAWNY";
                setnumbers6()
                complite = 1;
            }else{
                document.querySelector(".complite").innerHTML = complite + "/3"
                setnumbers36()
            }
        }else{
            end()
        }
    }
}
function check2(e){
    if(e.target.innerHTML.length === 4){
        st[st.length - 1] = true;
        if(e.target.innerHTML === numbers[numbers.length - 1]){
            numbers.pop()
            complite++;
            if(complite > 3){
                document.querySelector(".app").style.display = "none";
                document.querySelector("h1").style.display = "flex";
                bar.animate(1.0, {
                    duration: 3000
                }, end);
            }else{
                document.querySelector(".complite").innerHTML = complite + "/3"
                setnumbers6()
            }
        }else{
            end()
        }
    }
}
function end(){

    document.querySelector(".bgstart").style.display = "flex";
    document.querySelector(".rows").style.display = "none"
    document.querySelector(".numbers").style.display = "none";
    document.getElementById("btn").disabled = false;
    st = [];
    bar.stop();
    bar.set(0);
    console.log("rr",st)
}
function time(){
    if(st[st.length - 1] === false){
        end()
        console.log("end")
    }
    st.pop();
    console.log(st)
}
