$(document).ready(function(){
    var number = window.prompt("Gimme a number!", "Any number!");
for (var counter = 1; counter <= 100; counter = counter + 1) 
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
});


/*$(document).ready(function(){
for (var counter = 1; counter <= 100; counter = counter + 1) 
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
});
*/