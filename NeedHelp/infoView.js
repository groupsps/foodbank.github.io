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
  const resourceNames = document.querySelectorAll('.resource-holder a');

  infoholder.classList.toggle('active');
  infoholder.setAttribute('id', 'list');
  button2.classList.toggle('active');

  for(indx = 0; indx < resourceNames.length; indx++){
    resourceNames[indx].classList.toggle('active');
  }
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

function addPantries(){
  fetch('resources.json')
    .then(function(resp){
      return resp.json();
    })
    .then(function(data){
      for(num = 0; num < data.size; num++){
        const listHolder = document.getElementById('list-holder');
        const resourceHolder = document.createElement('div');
        const name = document.createElement('a');
        const contact = document.createElement('p');
        const address = document.createElement('p');
        const description = document.createElement('p');

        name.innerText = data.foodPantries[num].name;
        contact.innerText = 'Contact: '  + data.foodPantries[num].contact;
        address.innerText = 'Location: ' + data.foodPantries[num].street + '\n' + data.foodPantries[num].zipCode + ' ' + data.foodPantries[num].cityState;
        description.innerText = 'Pantry Hours of Operation: ' + data.foodPantries[num].description;

        resourceHolder.setAttribute('class', 'resource-holder');
        if(num == 1) {
          
        }else{
          name.setAttribute('href', data.foodPantries[num].website);
        }
        resourceHolder.appendChild(name);
        resourceHolder.appendChild(contact);
        resourceHolder.appendChild(address);
        resourceHolder.appendChild(description);
        listHolder.appendChild(resourceHolder);
      }
    })
}
