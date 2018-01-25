$(document).ready(function(){

  var text;
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  $("#edu").click(function(){
    text = "Education"
   $("#text").html("*I am a student at George Mason University and I am looking to graduate in 2018 with a B.S. in Information Technology");
  });
  $("#course").click(function(){
    text = "Coursework";
      $("#text").html("*Introduction to Programming(Python)<br>*Object Oriented Programming(Java)<br>*Data Structures<br>*Web Programming(HTML,CSS,PHP)<br>*Mobile Development(Swift)<br>*FreeCodeCamp(JavaScript)");
  });
  $("#exp").click(function(){
    text = "Experience";
    $("#text").html("*I work as a caregiver for Mr. Gordon Richmond, a man with severe quadriplegic cerebral palsy.  I do what I can to ensure he can pursue the lifestyle he wants.");
  });
  $("#contact").click(function(){
    text = "Language";
    $("#text").html("*Phone - (571)217-3826<br>*Email: khandker.islam46@gmail.com");
  });
});
