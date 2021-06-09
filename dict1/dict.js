//const { url } = require("inspector");

$(function () {


    $("#submit").click(function (e) {
        // $.get("http://localhost:8080")
        console.log("cliccked");
        e.preventDefault();
        //.done(addhtml)
        let lookUPWord = $("#wordSearch").val();
        console.log(lookUPWord);
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/test",
            data: { lookUPWord: lookUPWord },
            dataType: "json"
        }

        ).done((data)=>{
            console.log("success");
        }).fail((err)=>{
            console.log(err);
        });


    });


    /* function erro(){
        //console.log("error");
    } */
});