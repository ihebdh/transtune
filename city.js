
fetch("/maps.json")
  .then((result) => {
    let Data = result.json();
    return Data;
  })
  .then((Data) => {
    let city = sessionStorage.getItem("city");
    let transtype = sessionStorage.getItem("transport_type");
    return Data[city][transtype]; 
  })

  .then((paths) => {
    let ref = Object.keys(paths);
    for (const key of ref) {
      console.log(key)
      let div = document.getElementById("parent_path");
      div.insertAdjacentHTML("beforeend","<a onclick='path(this)' class='path' href='map.html' value='"+key+"' id='path'> "+ paths[key].desc +"</a>")
  
  }

  }).catch((error) => {
      let div = document.getElementById("parent_path");
      div.innerHTML += "<a  class='path' value ='error'  style='border: 2px solid red; color: red;'> data not found :/ </a>";
      div.innerHTML += "<a href ='../index.html' style='color: black;font-size: 13px;text-decoration: underline;font-weight: 800;'>Back to home page</a>";
    
    
  });

  function path(thisbtn){
    let path =  thisbtn.getAttribute("value");
    sessionStorage.setItem("path", path);
    //go to map page
    
}




    
  