function callDecoration(){
    var txtDeco = document.getElementById("txtDecoration");
    //txtDeco.style.fontSize="24pt";
    var txtSize = parseInt(window.getComputedStyle(txtDeco).fontSize);
    txtDeco.style.fontSize = txtSize + 2 + "pt";

}   

timer = null;
function keepDecoration() {
    if(timer == null) {
        timer = setInterval(callDecoration, 500);
    }
    else{
        clearInterval(timer);
        timer = null;
    }
}

function onChange(){
    
    //alert("checkbox is checked");
    var txtDeco = document.getElementById("txtDecoration");
    txtDeco.style.fontWeight = "bold";
    txtDeco.style.textDecoration = "underline";
    txtDeco.style.color = "green";
    
    document.body.style.backgroundImage = "url('fun.jpg')";

}

function toMalkovitch(){
    var txtDecoValue= document.getElementById("txtDecoration").value;
    var txtDecoArrays =  txtDecoValue.split(/\s+/);
    var markov = "";
    for(let i = 0; i<txtDecoArrays.length;i++){
        if(txtDecoArrays[i].length >= 5){
            txtDecoArrays[i] = "Malkovich";
        }
        markov += txtDecoArrays[i] + " ";
    }
    document.getElementById("txtDecoration").value = markov;
}