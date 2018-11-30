
$(document).ready(function(){

    //idea #1: global variables for the id's of each set of checkboxes+fieldset
    var targetCheckBox = ":checkbox";
    



    $(":checkbox").enhancedCheckBox();

    $(":checkbox").enhancedCheckBox("checkEm");

    $("fieldset").click(function(){
            //idea #2 parse id of clicked box, match to distinct ids of each set
            //var fields = ;
            var children = $(this).children(":checkbox");
           
           /* if(children.prop("checked")){
            children.prop("checked", false)
            
            $( children ).checkboxradio( "refresh" );
                     }
            else{*/
            children.prop("checked", true);//}
            //get children

            //activate
    });



   
})

document.getElementById("hi").innerHTML = "bye";


$.widget("custom.enhancedCheckBox", $.ui.checkboxradio, {
    enabled: true,
    checkEm: function(){
       // $(this).element.sibilings(":checkbox").prop("checked", "checked");
       // testd($(this).element.prop("checked"));
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
  
    


