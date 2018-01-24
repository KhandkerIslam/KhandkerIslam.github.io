//This program uses an api to get random Donald Trump quotes.

//An array of color codes
var colors = ['#DAF7A6','#FFC300','#FF5733','#C70039','#900C3F','#581845'];
//This function gets random colors by getting random numbers for RGB values.
function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var hexR = r.toString(16);
  var hexG = g.toString(16);
  var hexB = b.toString(16);
  if (hexR.length == 1) {
    hexR = "0" + hexR;
  }
  if (hexG.length == 1) {
    hexG = "0" + hexG;
  }
  if (hexB.length == 1) {
    hexB = "0" + hexB;
  }
  
  var hexColor = "#" + hexR + hexG + hexB;
   
  return hexColor.toUpperCase();
}
//The tweet message function is supposed to open the window to allow one to retweet the donald trump quote.
function tweet(message) {
  window.open('https://twitter.com/intent/tweet?hashtags= donaldtrump&text='   + encodeURIComponent(message));
}
//get the quote using getJSON
function getQuote(){
   $.getJSON("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status){
   
   });
}
//document ready is a jquery function that ensures that the javascript code inside of this function only runs once Document Object Model is ready for JS to execute.
$( document ).ready(function() {
  $("#quoteButton").click(function () {  
    //sets the color to a random color
    var color = getRandomColor();
    var quote;
    //Gets a random Trump quote using the whatdoestrumpthink api.
    $.getJSON("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status){

        //Applies fade and animate effects
        $('#quoteText').fadeOut(500, function() {
            $(this).text(data.message).fadeIn(500);
            $("#quoteText").animate({color:color});
        });
        $('#header').fadeOut(500, function() {
            $(this).text("Donald Trump").fadeIn(500);
            $("#header").animate({color:color});
        });
      });
  });
});