
$(document).ready(function () {
  
    $("#formid").submit(function (e) {
        e.preventDefault();
        $("#resultdiv").removeClass("resultClass");
        lookup();

    });
     let selectedText = window.getSelection();
     console.log(selectedText);

});

function lookup() {
    let word = $("#lookupWord").val();
    $("#result").html("");
    console.log("lookup before post ajax");

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/searchword",
        data: { word: word },
        dataType: "json"
    }).done(function (data) {
        $("#resultdiv").addClass("resultClass"); 

        if (Object.keys(data).length) {

            $.map(data, (post, index) => {

                $("#result").append('<li><h3>' + post.word + '\t(' + post.wordtype + ')</h3>'
                    + '<p>' + post.definition + '</p></li>');

            });
           
        }
        else {
            $("#result").append(`<h2 class="noresult"> PLEASE CHECK YOUR SPELLING, WE DO NOT KNOW THIS WORD! <p class="noresult">"${word}"</p>`);
        }
    }).fail(function (xhr) {
        console.log(xhr);
    }).always(() => {
        $("#loader").hide();
    });

    $("#loader").show();


    console.log("finshed post");

}