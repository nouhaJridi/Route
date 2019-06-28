function cottonPees(){
    array = document.getElementsByClassName("req");    
/*    var i ;
    for ( i=0 ; i <array.length ; i++ ){
        if(array[i].value == null) {
            array[i].style.color = "red" ;
            console.log(array[i].value);
            return;
        }
        else array[i].style.color = "green";
      }
    */

    
}

$(document).on("submit","form.needValidation",function(event){
        event.preventDefault();
       $(this).find(":input").each(function(){


            var patterns = $(this).data("pattern");
            if(patterns != null ) 
            {
                $rules = patterns.split(" ")
                var i ;
                for(i = 0 ; i<$rules.length ; i++){
                    console.log($(this).val());
                    switch($rules[i]){
                        case "string" : new RegExp("[a-z][A-Z]").test($(this).val()); break;
                        case "password" :new RegExp("").test($(this).val()); break;
                        
                        

                    }
                }
            }
       })
        

    })
