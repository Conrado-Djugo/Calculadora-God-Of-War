
const result= document.getElementById('num')
let pointAdd = false;

function insert (value){
    result.innerHTML += value;
    pointAdd = false

}

function deletAll(){
    result.innerHTML = '';
    pointAdd = false
}

function backNum(){
    if( result.textContent) {
        const displayNum = document.getElementById('num').innerHTML
        result.innerHTML = displayNum.substring(0, displayNum.length -1)
       
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