var toggler = 0;
$(document).ready(function(){

    //idea #1: global variables for the id's of each set of checkboxes+fieldset
    var targetCheckBox = ":checkbox";
    var targetField = "#xy";

    $(":checkbox").enhancedCheckBox();

    $(":checkbox").enhancedCheckBox("checkEm");

    $("fieldset").click(function(event){
            event.stopPropagation();
            event.preventDefault();
            event.stopImmediatePropagation();
       
            //idea #2 parse id of clicked box, match to distinct ids of each set
            //var fields = ;
            var children = $(this).children(targetCheckBox);
            if(toggler==0){
             children.prop("checked", true);console.log(toggler++ + " checked"); }
             else{
             children.prop("checked", false);  console.log(toggler-- + " unchecked");}
        
    });



   
})




$.widget("custom.enhancedCheckBox", $.ui.checkboxradio, {
    enabled: true,
    icon: false,
    checkEm: function(){
      
        console.log()
    }


});


    


























 
  
    


