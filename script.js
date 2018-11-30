
$(document).ready(function(){
    $(":checkbox").enhancedCheckBox();
    $(":checkbox").enhancedCheckBox("checkEm");
    $('.check:button').toggle(function(){
        $('checkbox-1').attr('checked','checked');
        $(this).val('uncheck all');
    },function(){
        $('checkbox-1').removeAttr('checked');
        $(this).val('check all');        
    })
})

document.getElementById("hi").innerHTML = "bye";


$.widget("custom.enhancedCheckBox", $.ui.checkboxradio, {
    enabled: true,
    checkEm: function(){
       // $(this).element.sibilings(":checkbox").prop("checked", "checked");
        testd($(this).element.prop("checked"));
        console.log()
    }

   /* _create: function(){
        this.element.addClass("checkbox");
    };*/

    
    /*this._on(this.parent,{
        click: function(e){
            element.prop( "checked", !this.element.is( ":checked" ) );
                    this.refresh();

            console.log("here");
        }
    });*/
  

    


});
//$("#checkbox-1").prop("checked", true);

function testd(x){
    console.log(x);
}

    

























    
 /*
    var test = document.getElementById("xy"); // need to make general
    var elem = this;
    $("fieldset").click(function(){
        console.log("hello");
       
        $("checkbox-1").prop('checked', true);

           
                var c = this.children.checked;
                $(':checkbox').prop('checked',c);
              
                  
    });
*/
  
    


