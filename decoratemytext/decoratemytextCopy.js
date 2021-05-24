$(loaded)
function loaded(){
    $("keepDeco").onclick = keepDecoration;
    $("bling").onchange = onChangeFn;
    $("pigLatin").onclick = pigLatin;
    $("malkovitch").onclick = toMalkovitch
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
    var txtDeco = $("txtDecoration");
    if($("bling").checked){
        txtDeco.attrib("fontWeight","bold");
        txtDeco.attrib("textDecoration","underline");
        txtDeco.attrib("color","green");
        $("body").attrib("backgroundImage", "url('fun.jpg')");
    }
    else{
        txtDeco.attrib("fontWeight","");
        txtDeco.attrib("textDecoration","");
        txtDeco.attrib("color","black");
        $("body").attrib("backgroundImage", "url('')");
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