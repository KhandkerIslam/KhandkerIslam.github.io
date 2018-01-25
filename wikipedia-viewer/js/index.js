
/*The submit button, once it it is clicked the following function will run*/
$("#submit").click(function() {
  /*Once the submit button has been clicked, the html text for results changes to an empty string*/
  $('#results').html('');
  /*Val holds the user inputed search */
  var val = $("#search");
  
  console.log(val);
  /*Sets the value of test to the value in val, or rather the user search input.*/
  var test = val.val();
  /*The search variable will store a formatted copy of the test variable so that it works with the ajax function
  used to retrieve the JSON data provided by the wikipedia API*/
  var search = test.replace(" ", "%20");
  var test;
  /*This function is used to pull JSON data by using the wikipedia api.  The formatted user search value */
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+search+"&limit=10&namespace=0&format=json&callback=?",
    //The datatype is JSON.
    dataType: "json",
    //Upon success, this function will run.
    success: function(response) {
      //The "response" is the JSON file that is retrieved. The response is an array that holds many arrays.
      //The arrays inside response hold information such as the search results names.  The name variable holds this.
      var names = response[1];
      //The arrays inside response hold information such as the descriptions of the search results.  The description 
      //variable holds this.  
      var desc = response[2];
      //The arrays inside response hold information such as the links to the search results.  The links variable holds
      //this.
      var links = response[3];
      //This for loop is ultimately responsible for building up new div.  The new div will hold the first 10 search
      //results.  This means the name, link and description.  
      for(var i = 0;i<10;i++){
        //The newdiv is created, and it is given a number representing its place in the search results from 1 to 10.
        var newdiv = $( "<div class = 'result' id='object'"+i+"></div>");
        //The link variable holds the link at index of i as a hyperlink and the name as well.
        var link = $("<div class = 'link'><p><a href="+links[i]+">"+names[i]+"</a></p></div>");
        //The info variable holds the description of the search link.
        var info = $("<div id = 'text'><p>"+desc[i]+"</p></div>");
        //The link is appended to info.
        $(link).append(info);
        //The link is appended to new div
        $(newdiv).append(link);
        //The results are appended to new div.
        $("#results").append(newdiv);
        //The jumbotron has to change to accomodate the results, so the vh sets it to 100vh meaning it takes all of 
        //the vertical height of the viewport.
        $(".jumbotron").css("height","100vh");
      }
    }
  });
});