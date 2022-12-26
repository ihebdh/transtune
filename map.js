
function loadmap() {
    fetch("/maps.json")
  .then((result) => {
    let map = result.json();
    return map;
  })
  .then((map) => {
    let path = sessionStorage.getItem("path");
    let city = sessionStorage.getItem("city");
    let transport_type = sessionStorage.getItem("transport_type");
    return map[city][transport_type][path]
  }).then((onepath) => {
      document.getElementById('frame').src = onepath.map;
      document.getElementById('mapslink').href = onepath.link;       
}).catch((error) => {
        document.getElementById('frame').srcdoc="<div>No map found :/</div>";
        document.getElementById('mapslink').target = "";

});
}
