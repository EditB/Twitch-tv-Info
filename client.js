$(document).ready(function(){
  
   //once the code works, add more users to the array!!
  var twitchStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  $.each(twitchStreamers, function(_, value) {
    
    var url = 'https://wind-bow.glitch.me/twitch-api/streams/' + value;

    $.getJSON(url, function(data) {
      
      var strStatus = "offline";
      var strURL = "https://www.twitch.tv/" + value;
      var strColor = "#cccccc";
      
      if (data.stream !== null) {
       strStatus = data.stream.game +  " " + data.stream.stream_type;
        
        strColor="#cff9d1";
        
      }
            
        $('#display').append("<p><div style='background-color:"+strColor+";'><a href=" + strURL + " target='_blank'>" + value  + "</a>"+ "&nbsp;&nbsp;&nbsp;" + strStatus + "</div></p>");
      console.log(data);
    });
});
  
  
  
  
  
});