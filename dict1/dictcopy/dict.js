$(function() {
 

    $("#submit").click(function() { 
       // $.get("http://localhost:8080")
        .done(addhtml)
        .fail(erro); });
    }); 
function addhtml(data){


}

function erro(){
    console.log("error");
}