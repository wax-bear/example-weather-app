function geoFindMe() {
  var output = document.getElementById("out");
  var map = document.getElementById("map");
  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    $.post('/current',  {longitude: longitude, latitude:latitude}, function(data){
      alert("it worked!");
      console.log(data);
    })

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

}