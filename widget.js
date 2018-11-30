$.widget("custom.checkC", $.ui.checkboxradio,{
    test: function(){
        $(document).getElementById("hi").innerHTML = "lux";
    }
})

//$("xyz").append.checkC();

//$("xyz").test();

$.widget( "custom.superDialog", $.ui.dialog, {
    red: function() {
        this.element.css( "color", "red" );
    }
});
 
// Create a new <div>, convert it into a superDialog, and call the red() method.
