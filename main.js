

function schow(){
        let buttons = document.getElementById('buttons');
        buttons.style.display = "grid";

}


function cityname(thisbtn){
        let city = thisbtn.getAttribute( "value" );
        sessionStorage.setItem("city", city);
        //go to transport type page
}



function transtype(thisbtn){
        let transport_type =  thisbtn.getAttribute("value");
        sessionStorage.setItem("transport_type", transport_type);
        //go to city path page
}


function initialize(){
        sessionStorage.clear();
}


