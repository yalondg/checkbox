/*

USAGE:
$(CHECKBOX).enhancedCheckBox();
-name of inputs must begin with "checkbox-enhanced"
*/

var toggler = 0;

$(function () {

    //idea #1: global variables for the id's of each set of checkboxes+fieldset


    $(targetField).css('border', '2px dotted black');
    $(targetField).css('background-color', 'grey');


    //click functionality




})


    var counter = 0;
var txt3 = document.createElement("div", { id: "added" });
txt3.innerHTML = "<>";

$.widget("custom.enhancedCheckBox", $.ui.checkboxradio, {
    enabled: true,
    icon: false,
    checkOut: function () {
        $(targetField).click(function (event) {
            event.stopPropagation();
            event.preventDefault();
            event.stopImmediatePropagation();

            //idea #2 parse id of clicked box, match to distinct ids of each set
            //var fields = ;
            var children = $(this).children(targetCheckBox);
            if (toggler == 0) {
                children.prop("checked", true); console.log(toggler++ + " checked");
            }
            else {
                children.prop("checked", false); console.log(toggler-- + " unchecked");
            }

        });
    },
    checkMid: function () {
        var children = $(targetField).children(targetCheckBox);

     
        console.log(children.length + " \n");
        console.log()
      

        $("label").children().each(function(){
        //    console.log($(this).length + " \n");
        });
    
       if(counter % 16 ==0){
           $("label").append(txt3);
             console.log("done" + counter);
       }else{
            //$("label").append("s");
            console.log("ds" + counter);
       }
       counter++;
       
        $(txt3).click(function (event) {
            //prevent double clicks
            event.stopPropagation();
            event.preventDefault();
            event.stopImmediatePropagation();

            var thisCheckName = $(this).parent().prop("for");

            console.log(this + "\n" + thisCheckName);
            $("input[name^='" + thisCheckName + "']").prop("checked", true);

            if (toggler == 0) {
                $("input[name^='" + thisCheckName + "']").prop("checked", true);
                console.log(toggler++ + " checked");
            }
            else {
                $("input[name^='" + thisCheckName + "']").prop("checked", false);
                console.log(toggler-- + " unchecked");
            }
        });


    }



});


































