
window.onload = function(){
    document.getElementById("keepDeco").onclick = keepDecoration;
    document.getElementById("bling").onchange = onChangeFn;
    document.getElementById("pigLatin").onclick = pigLatin;
    document.getElementById("malkovitch").onclick = toMalkovitch
}
var callDecoration = function(){
    var txtDeco = document.getElementById("txtDecoration");
    //txtDeco.style.fontSize="24pt";
    var txtSize = parseInt(window.getComputedStyle(txtDeco).fontSize);
    txtDeco.style.fontSize = txtSize + 2 + "pt";

}   

timer = null;
var keepDecoration = function() {
    if(timer == null) {
        timer = setInterval(callDecoration, 500);
    }
    else{
        clearInterval(timer);
        timer = null;
    }
}

var onChangeFn = function(){
    
    //alert("checkbox is checked");
    var txtDeco = document.getElementById("txtDecoration");
    if(document.getElementById("bling").checked){
        txtDeco.style.fontWeight = "bold";
        txtDeco.style.textDecoration = "underline";
        txtDeco.style.color = "green";
        document.body.style.backgroundImage = "url('fun.jpg')";
    }
    else{
        txtDeco.style.fontWeight = "";
        txtDeco.style.textDecoration = "";
        txtDeco.style.color = "black";
        document.body.style.backgroundImage = "url('')";
    }
    
    

}


var pigLatin = function(){
    var txtDecoValue= document.getElementById("txtDecoration").value;
    var txtDecoArrays =  txtDecoValue.split(/\s+/);
    var pigLatinWord = "";
    for(let i = 0; i<txtDecoArrays.length;i++){
        if(txtDecoArrays[i].charAt(0).match("[aeiouAEIOU]")){
            var word= txtDecoArrays[i] + "ay";
        }
        else{
            var wordAti = txtDecoArrays[i];
           for(let j = 0; j < wordAti.length; j++) {
               if(wordAti[j].match("[aeiouAEIOU]")) {
                   var word = wordAti.substring(j) + wordAti.substring(0,j)+"ay";
                   break;
               }
           }
        }
        pigLatinWord += word + " ";
    }
    document.getElementById("txtDecoration").value = pigLatinWord;
}

var toMalkovitch = function(){
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