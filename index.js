$(document).ready(function(){

  var text;

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
