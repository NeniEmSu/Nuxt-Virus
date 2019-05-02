function initMap() {
  let location = {
    lat: 49.558033,
    lng: 25.566920
  };
  let map = new google.maps.Map(document.querySelector("#map"), {
    zoom: 16,
    center: location
  });
  let marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
