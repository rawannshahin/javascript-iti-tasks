async function getPosition(countryName) {
    const request = new XMLHttpRequest();
    request.open("get", `https://nominatim.openstreetmap.org/search?format=json&q=${countryName}`);
    request.send();
  
    return new Promise((resolve, reject) => {
      request.addEventListener("load", function() {
        const response = JSON.parse(request.responseText);
        if (response.length > 0) {
          const latitude = parseFloat(response[0].lat);
          const longitude = parseFloat(response[0].lon);
          resolve({ latitude, longitude });
        } else {
          reject('No coordinates found');
        }
      });
    });
  }
  
  window.onload = function() {
    document.getElementById('countrySelector').addEventListener('change', async function() {
        const selectedCountry = this.value;
        try {
            const { latitude, longitude } = await getPosition(selectedCountry);
            initMap(latitude, longitude);
        } catch (error) {
            console.error(error);
        }
    });
};



let map, infoWindow;

function initMap(latitude=0,longitude=0) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude },
    zoom: 4,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        },
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation.",
  );
  infoWindow.open(map);
}

window.initMap = initMap;