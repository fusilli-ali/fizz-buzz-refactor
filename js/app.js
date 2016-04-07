function fizzbuzz(n){
        for (var counter = 1; counter <= n; counter = counter + 1) 
    {
        if ((counter % 3)==0 && (counter % 5)==0){
            $("#fizz-buzz").append("<li>fizz buzz</li>");
        }
        else {
            if ((counter % 3)==0){
                $("#fizz-buzz").append("<li>fizz</li>");
            }
            else {
                if ((counter % 5)==0){
                    $("#fizz-buzz").append("<li>buzz</li>");
                }
                else {
                    $("#fizz-buzz").append("<li>"+counter+"</li>");
                }
            }
        }
    }
}
function getinput(){
    var flag = true;
    var other;
    do {
        var number = window.prompt("Gimme a number!", "Any number!");
        other = parseFloat(number);
        if(isNaN (other)){
           alert("Give me a freaking number!");
        }
        else {
            flag = false;
        }
    }
    while (flag); 
    var n = Math.round(other); 
    return n; 
}
$(document).ready(function(){
    var n = getinput();      
    fizzbuzz(n);      
});