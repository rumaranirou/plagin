
$(document).ready(function(){

//draggable

    $( function() {
        $( "#dragg" ).draggable();
    } );      
   
 //sortable 
    
    $( function() {
        $( "#sortable" ).sortable();
      } );


//accordion
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      collapsible: true,
      collapsible: true

    });
  } );


//autocomplete
$( function() {
var data = [
    'Html', 
    "css",
    "js",
    "bootstrap"


];


$( "#c_name" ).autocomplete({
  source: data
});




$( "#draggable" ).draggable();
$( "#droppable" ).droppable({
  drop: function( event, ui ) {
    $( this )
      .addClass( "ui-state-highlight" )
      .find( "p" )
        .html( "Dropped!" );
  }
});

} );




//autocomple


$( function() {

var names = [ "Jörn Zaefferer", "Scott González", "John Resig" ];
 
var accentMap = {
  "á": "a",
  "ö": "o"
};
var normalize = function( term ) {
  var ret = "";
  for ( var i = 0; i < term.length; i++ ) {
    ret += accentMap[ term.charAt(i) ] || term.charAt(i);
  }
  return ret;
};

$( "#developer" ).autocomplete({
  source: function( request, response ) {
    var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
    response( $.grep( names, function( value ) {
      value = value.label || value.value || value;
      return matcher.test( value ) || matcher.test( normalize( value ) );
    }) );
  }
});



var availableTags = [
  "ActionScript",
  "AppleScript",
  "Asp",
  "BASIC",
  "C",
  "C++",
  "Scala",
  "Scheme"
];
$( "#tags" ).autocomplete({
  source: availableTags
});
});

//datepicker
$( function() {

  $( "#datepicker" ).datepicker();
} );
//toltip
$( function() {
    $( document ).tooltip();
} );
//tabs

$( function() {

  $( "#tabs" ).tabs();
} );


  $( function() {
      $( "#draggable" ).draggable();
   } );





})