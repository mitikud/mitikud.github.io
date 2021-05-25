$(loaded)
function loaded(){
    $("mytextarea").value = JUGGLER;
}


$(document).ready(function(){
    $("select.country").change(function(){
        var selectedCountry = $(this).children("option:selected").val();
        alert("You have selected the country - " + selectedCountry);
    });
});

$(document).ready(function(){
    $("select.fontSelector").change(function(){
        var fontSelectedSize = $(this).children("option:selected").val();
        alert("You have selected font Size of - " + fontSelectedSize);
    });
});
