/*

USAGE:
$(CHECKBOX).enhancedCheckBox();
-name of inputs must begin with "checkbox-enhanced"
*/

var toggler = 0;

$(function () {

    //idea #1: global variables for the id's of each set of checkboxes+fieldset


    $(targetField).css('border', '2px dotted black');
    $(targetField).css('background-color', "#DCDCDC");

    //get number of elem

    //decide whether to append




})


var counter = 0;
/*var txt3 = document.createElement("p", { id: "added" });
txt3.text = ".";*/

var txt3 = document.createElement("p");
var node = document.createTextNode("O");
txt3.append(node);



$.widget("custom.enhancedCheckBox", $.ui.checkboxradio, {
    enabled: true,
    icon: false,
    thisCheckName: $(this).parent().prop("for"),

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
        var children = $(this).parent("fieldset");


       // console.log(children.length + " \n");
        console.log(this);


        $("label").children().each(function () {
            //    console.log($(this).length + " \n");
        });

        



      
            $("label").append(txt3);
            console.log("done" + counter);
     
            reduceKids("label");

        function reduceKids(children) {
            
            
            $(children).each(function(){
             var thisCheckName = this.id;
            console.log(thisCheckName);
            // RH CHECKBOX suffix #
            var thisNum = thisCheckName.match(/\d+/);

            //left hand checkbox -> CAN BE NULL IF RH=FIRST ONE.
            var prevCheckName = $("input[name^='" + thisCheckName + "']").prev().prev().prop("name");

            if (thisNum == 1) {
                var myNode = document.getElementById(thisCheckName);
                while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
                    console.log("removed");
                }
            }
            });
           

          /*  */
        };



        $(txt3).click(function (event) {
            //prevent double clicks
            event.stopPropagation();
            event.preventDefault();
            event.stopImmediatePropagation();

            console.log("jsdf");

            //right hand checkbox
            var thisCheckName = $(this).parent().prop("for");

            // RH CHECKBOX suffix #
            var thisNum = thisCheckName.match(/\d+/);

            //left hand checkbox -> CAN BE NULL IF RH=FIRST ONE.
            var prevCheckName = $("input[name^='" + thisCheckName + "']").prev().prev().prop("name");


            console.log(thisCheckName);
            console.log(thisNum);
            console.log(prevCheckName);

            console.log(this + "\n" + thisCheckName);
            $("input[name^='" + thisCheckName + "']").prop("checked", true);

            if (toggler == 0) {
                $("input[name^='" + thisCheckName + "']").prop("checked", true);
                $("input[name^='" + prevCheckName + "']").prop("checked", true);
                console.log(toggler++ + " checked");
            }
            else {
                $("input[name^='" + thisCheckName + "']").prop("checked", false);
                $("input[name^='" + prevCheckName + "']").prop("checked", false);
                console.log(toggler-- + " unchecked");
            }
        });


    }



});
