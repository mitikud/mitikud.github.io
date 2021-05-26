/* $(loaded)
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
}); */

(function(){

    "use strict"

    window.onload = function(){
        document.getElementById("animationSelector").onchange = getAnimationPage;
        document.getElementById("fontSelector").onchange = setAnimationSize;
        document.getElementById("start").onclick = animationLooper;
        document.getElementById("stop").onclick = animationStopper;
    };

    function getAnimationPage(){
        let e = document.getElementById("animationSelector");
        let v = document.getElementById("txtArea")
        if(e.value === "blank"){
            v.innerHTML = BLANK;
        }else if(e.value === "excercise"){
            v.innerHTML = EXERCISE;
        }else if(e.value === "juggler"){
            v.innerHTML = JUGGLER;
        }else if(e.value === "bike"){
            v.innerHTML = BIKE;
        }else if(e.value === "dive"){
            v.innerHTML = DIVE;
        }else if(e.value === "custom"){
            v.innerHTML = CUSTOM;
            v.readOnly = false;
        }
    }

    function setAnimationSize(){
        let e = document.getElementById("fontSelector");
        let v = document.getElementById("txtArea");
        if(e.value === "tiny"){
            v.style.fontSize = "7pt";
        }else if(e.value === "small"){
            v.style.fontSize = "10pt";
        }else if(e.value === "medium"){
            v.style.fontSize = "12pt";
        }else if(e.value === "large"){
            v.style.fontSize = "16pt";
        }else if(e.value === "xLarge"){
            v.style.fontSize = "24pt";
        }else if(e.value === "xxLarge"){
            v.style.fontSize = "42pt";
        }
    }

    var x = null;
    var i;

    function animationLooper(){
        let v = document.getElementById("txtArea");
        let arr = v.innerHTML.split("=====");
        let s;
        if(document.getElementById("turbo").checked){
            s = 50;
        }else{
            s = 250;
        }
        x = setInterval(myAnimate, s);

        function myAnimate(){
            if(i === undefined){
                i = 0;
            }else if(i < (arr.length - 1)){
                i = i + 1;
            }else if(i === (arr.length - 1)){
                i = 0;
            }
            v.innerHTML = arr[i];
            document.getElementById("start").disabled = true;
            document.getElementById("animationSelector").disabled = true;
        }
    }

    function animationStopper(){
        clearInterval(x);
        getAnimationPage();
        document.getElementById("start").disabled = false;
        document.getElementById("animationSelector").disabled = false;
    }

})();