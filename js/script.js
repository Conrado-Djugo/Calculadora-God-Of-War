const text = document.getElementById('textp');
const lampOnOff = document.getElementById('lamp');
const result= document.getElementById('num')
let pointAdd = false;
let onOff = false;


function insert(value) {
    result.innerHTML += value;
    pointAdd = false;
    text.textContent = "ON";
    lampOnOff.classList.add('ativo')
    
}


function deletAll(){
    result.innerHTML = '';
    pointAdd = false
    text.textContent = "OFF";
    lampOnOff.classList.remove('ativo')
}

function backNum() {
    const displayNum = document.getElementById('num').innerHTML;
    const updatedDisplayNum = displayNum.substring(0, displayNum.length - 1);
    result.innerHTML = updatedDisplayNum;

    if (!/[0-9a-zA-Z]/.test(updatedDisplayNum)) {
        text.textContent = "OFF";
        lampOnOff.classList.remove('ativo');
    }
}


function confirm(){
    if(result.textContent != 'Erro'){
        document.getElementById('num').innerHTML = eval(result.innerHTML)
        pointAdd = false
    }
}

function addNum(){
    if(!pointAdd && result.textContent !== ""){
        result.innerHTML += '.';
        pointAdd = true
    }
}

function buttonOnOff(){
  
}