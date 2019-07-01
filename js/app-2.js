

var idx ;
let b =0;
var arrayX =[];
var arrayO =[];
let Win1=0 ,Win2=0 ,Win3=0 ,Win4=0 ,Win5=0 ,Win6=0 ,Win7=0 ,Win8=0 ;
let WinO1=0 ,WinO2=0 ,WinO3=0 ,WinO4=0 ,WinO5=0 ,WinO6=0 ,WinO7=0 ,WinO8=0 ;


 document.getElementsByTagName('audio')[0].volume = 0.3;
 var audio = document.getElementById("clickSound");

 $('.optionPlay button').click(function(event) {
  let select = $(this).attr("id");
console.log(select);
});

$(function() {
    $('.selectBox').change(function() {
    let z   = this.form.submit();
        console.log(z);

    });
});


$('.square').click(function(event) {
   idx = $(this).children("div").attr("id");
   audio.play();
  if (b == 0) {
    if( document.getElementById(idx).innerHTML === "" ) {
      document.getElementById("showPlayer").innerHTML = "2Player";
    document.getElementById(idx).innerHTML = '<i class="far fa-circle a-circle">';
    b=1;

            if("x1"  === idx || "x2" === idx || "x3" === idx){
            WinO1 += 1; }
            if("x4" === idx || "x5" === idx || "x6" === idx){
              WinO2 += 1;}
            if("x7" === idx || "x8" === idx || "x9" === idx){
               WinO3 += 1;}
            if("x1" === idx || "x4" === idx || "x7" === idx){
              WinO4 += 1;}
            if("x2" === idx || "x5" === idx || "x8" === idx){
              WinO5 += 1;}
            if("x3" === idx || "x6" === idx || "x9" === idx){
              WinO6 += 1;}
            if("x1" === idx || "x5" === idx || "x9" === idx){
              WinO7 += 1;}
            if("x3" === idx || "x5" === idx || "x7" === idx){
                WinO8 += 1;}

    if(WinO1 === 3 || WinO2  === 3 || WinO3  === 3 || WinO4   === 3 ||WinO5   === 3 || WinO6  === 3 || WinO7  === 3 || WinO8 === 3 ){
      console.log("you are win");
      $('h1').text("win O");
     // $('body').css('background-image', 'url(' + 'wintage.jpeg' + ')cover ');
    //$('body').css('background', 'url(wintage.jpeg) cover no-repeat ');
    $('body').css({'background-image':'url(' + 'wintage.jpeg' + ')',
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat'});


    }
  }}else{
    if( document.getElementById(idx).innerHTML === "" ) {
    document.getElementById("showPlayer").innerHTML = "1Player";
    document.getElementById(idx).innerHTML = '<i class="fas fa-times x-icon"></i>';
    b=0;

        if("x1"  === idx || "x2" === idx || "x3" === idx){
        Win1 += 1; }
        if("x4" === idx || "x5" === idx || "x6" === idx){
          Win2 += 1;}
        if("x7" === idx || "x8" === idx || "x9" === idx){
           Win3 += 1;}
        if("x1" === idx || "x4" === idx || "x7" === idx){
          Win4 += 1;}
        if("x2" === idx || "x5" === idx || "x8" === idx){
          Win5 += 1;}
        if("x3" === idx || "x6" === idx || "x9" === idx){
          Win6 += 1;}
        if("x1" === idx || "x5" === idx || "x9" === idx){
          Win7 += 1;}
        if("x3" === idx || "x5" === idx || "x7" === idx){
            Win8 += 1;}
    if(Win1 === 3 || Win2  === 3 || Win3  === 3 || Win4   === 3 ||Win5   === 3 || Win6  === 3 || Win7  === 3 || Win8 === 3 ){
      console.log("you are win X");
      $('h1').text(" win X");
        $('body').css({'background-image':'url(' + 'wintage.jpeg' + ')',
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat'});
    }
  }}
});


$('#buttonR').click(function() {
    location.reload();
});



//Win situations
//
// ["x1", "x2", "x3"]
// ["x4", "x5", "x6"]
// ["x7", "x8", "x9"]
//
//  ["x1", "x4", "x7"]
//  ["x2", "x3", "x8"]
//  ["x3", "x6", "x9"]
//
//   ["x1", "x5", "x9"]
//   ["x3", "x5", "x7"]
