function callDecoration(){
    //var txtDeco = document.getElementById("txtDecoration");
    //txtDeco.style.fontSize="24pt";
    //document.getElementById("txtDecoration").style.fontSize = parseInt(document.getElementById("txtDecoration").style.fontSize)+ 2 + "em";
    document.getElementById("txtDecoration").style.fontSize = parseInt(document.getElementById("txtDecoration").style.fontSize) + 2 + "pt";

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
}