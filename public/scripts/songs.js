$(onReady);
function onReady(){
$('#addSongButton').on('click', function(){
  
  console.log('button');

  var objectToSend = {
    song: $('#songIn').val(),
    artist: $('#artistIn').val()
  };
  console.log(objectToSend);
  //get input
  //create object
  //use ajax to send object
  //when back from server update display


});
}
