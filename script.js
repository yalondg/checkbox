
//which checkboxes/fieldsets to apply enhancement to
var targetCheckBox = "input[name^='checkbox-enhanced']";
var targetField = "fieldset";

$(document).ready(function(){

    var targetCheckBox = "input[name^='checkbox-enhanced']";
    var targetField = "#xy";


    $(targetCheckBox).enhancedCheckBox();

    $(targetCheckBox).enhancedCheckBox("checkOut");
    $(targetCheckBox).enhancedCheckBox("checkMid");
 
   


   
});
