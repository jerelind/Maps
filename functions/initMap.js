//set Google Map properties and fetch previously saved markers from localStorage
initMap = () => {
    const mapProp = {
        center: new google.maps.LatLng(60.15639617730196, 24.90949634304809),
        zoom: 11
    }

    const map = new google.maps.Map(document.getElementById("googleMap"), mapProp)

    if(localStorage.length > 0) {
        for(let i = 0; i < localStorage.length; i++) {
            //parse localStorage values and set variables for marker
            const values = JSON.parse(localStorage.getItem(i))
            const lat = values[0].lat
            const lng = values[0].lng
            const coords = new google.maps.LatLng(lat, lng)
            const title = values[1]
            const desc = values[2]
            const openingHour = Number(values[3])
            const closingHour = Number(values[4])
            addMarker({
                map: map,
                coords: coords,
                title: title,
                desc: desc,
                openingHour: openingHour,
                closingHour: closingHour
            })
        }
    }

    google.maps.event.addListener(map, 'click', (event) => {
    // Add marker
        addMarker({
            map: map, 
            coords: event.latLng,
            title: "Untitled place",
            desc: "No description yet",
            openingHour: "",
            closingHour: ""
        })
    })
}