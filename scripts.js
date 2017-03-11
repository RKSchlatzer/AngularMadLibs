
function doStuff(){
  var input = $('#logcolor').val().toUpperCase();


console.log(input);

    if (input === "GREEN") {
      console.log("Yay I'm Working");
      $('#output').append('green! Congrats for guessing correctly!');
    } else {
      /*resets input field here
      function resetForm('#logcolor') {
    $('#' + id).val(function() {
        return this.defaultValue;
    });    */

      $('#output').append('Not that, try again!');
      console.log("Running but not getting input as text, etc.");
    }
}
