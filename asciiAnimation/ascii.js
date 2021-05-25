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


