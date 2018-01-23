

$("#submit").click(function() {
  $('#results').html('');
  var val = $("#search");
  var test = val.val();
  var search = test.replace(" ", "%20");
  var test;
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+search+"&limit=10&namespace=0&format=json&callback=?",
    dataType: "json",
    success: function(response) {
      var names = response[1];
      var desc = response[2];
      var links = response[3];
      for(var i = 0;i<10;i++){
        var newdiv = $( "<div class = 'result' id='object'"+i+"></div>");
        var link = $("<div class = 'link'><p><a href="+links[i]+">"+names[i]+"</a></p></div>");
        var info = $("<div id = 'text'><p>"+desc[i]+"</p></div>");
        $(link).append(info);
        $(newdiv).append(link);
        $("#results").append(newdiv);
      }
    }
  });
});