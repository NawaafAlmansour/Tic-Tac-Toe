$.idx;
let b = 0;
document.getElementsByTagName('audio')[0].volume = 0.3;
var audio = document.getElementById("clickSound");

$('.optionPlay button').click(function(event) {
  let select = $(this).attr("id");
  console.log(select);
});

$(function() {
  $('.selectBox').change(function() {
    let z = this.form.submit();
    console.log(z);
  });
});

$('.square').click(function(event) {
  $.idx = $(this).attr('id');
  audio.play();
  if (b == 0) {
    if ($.idx = $(this).text() == "") {
      $.idx = $(this).html('<i class="far fa-circle a-circle">');
      $.idx = $(this).attr('name', 'O');
      checkWinner('O');
      b = 1;
    }} else {
    if ($.idx = $(this).text() == "") {
      $.idx = $(this).html('<i class="fas fa-times x-icon"></i>');
      $.idx = $(this).attr('name', 'X');
      checkWinner('X');
      b = 0;
    }
  }
});


function checkWinner(player) {
  if (($("#0").attr('name') == player && $("#1").attr('name') == player && $("#2").attr('name') == player) ||
    ($("#3").attr('name') == player && $("#4").attr('name') == player && $("#5").attr('name') == player) ||
    ($("#6").attr('name') == player && $("#7").attr('name') == player && $("#8").attr('name') == player) ||
    ($("#0").attr('name') == player && $("#3").attr('name') == player && $("#6").attr('name') == player) ||
    ($("#1").attr('name') == player && $("#4").attr('name') == player && $("#7").attr('name') == player) ||
    ($("#2").attr('name') == player && $("#5").attr('name') == player && $("#8").attr('name') == player) ||
    ($("#0").attr('name') == player && $("#4").attr('name') == player && $("#8").attr('name') == player) ||
    ($("#2").attr('name') == player && $("#4").attr('name') == player && $("#6").attr('name') == player)) {
    console.log("you are win "+ player);
    $('h1').text("win " + player);
  }
}

$('#buttonR').click(function() {
  location.reload();
});
