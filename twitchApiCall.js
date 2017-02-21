function loadDoc(channel_id) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var obj = JSON.parse(this.responseText);
     if(obj.stream.channel.url != null){
        console.log(obj.stream.channel.url);
        $('#'+channel_id).html('<a href='+'"'+obj.stream.channel.url+'">'+$('#'+channel_id).html()+'</a>');
        $('#'+channel_id).append('<span class="label label-success" style="float:right">LIVE</span>');
     }
    }
  };
  xhttp.open("GET", "https://api.twitch.tv/kraken/streams/"+channel_id, true);
  xhttp.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
  xhttp.setRequestHeader("Client-ID", "s1rbyp1ezmdz0cfiv5dcstecdrmizp");
  xhttp.send();
}

loadDoc(30816637);
loadDoc(70075625);
loadDoc(143563349);
loadDoc(79776140);
