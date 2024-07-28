document.getElementById('navbarToggle').addEventListener('click', function() {
  var links = document.getElementById('navbarLinks');
  if (links.style.display === 'block') {
      links.style.display = 'none';
  } else {
      links.style.display = 'block';
  }
});

function initMap() {
  const location = { lat: -25.344, lng: 131.036 };
  
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: location,
  });
  
  const marker = new google.maps.Marker({
      position: location,
      map: map,
  });
}