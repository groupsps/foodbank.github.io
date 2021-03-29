function mapView(){
  const button1 = document.querySelector('.button-1');
  const infoholder = document.querySelector('.map-holder');

  infoholder.classList.toggle('active');
  infoholder.setAttribute('id', 'map');
  button1.classList.toggle('active');
  createMap();
}

function listView(){
  const button2 = document.querySelector('.button-2');
  const infoholder = document.querySelector('.list-holder');
  
  infoholder.classList.toggle('active');
  infoholder.setAttribute('id', 'list');
  button2.classList.toggle('active');
}

function createMap() {
    const laLat = 34;
    const laLng = -118.25;
    const laLoc = {lat: laLat, lng: laLng}
    const mapStyle = {
        zoom: 10.1,
        center: laLoc,
        mapId: "892b95989cdc9cc6",
    };
    const map = new google.maps.Map(
      document.getElementById('map'),
      mapStyle
    );
}
