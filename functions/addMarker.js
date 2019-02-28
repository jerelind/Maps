//function for adding markers to map
addMarker = (props) => {
    const infoWindow = new google.maps.InfoWindow({
        content: null
    })

    const marker = new google.maps.Marker({
        id: markers.length,
        title: props.title,
        desc: props.desc,
        openingHour: props.openingHour,
        closingHour: props.closingHour,
        position: props.coords,
        map: props.map,
        info: infoWindow
    })

    //set infoWindow content
    marker.info.setContent(
        `
        <div id="infoContent">
            <h1 class="infoTitle">${marker.title}</h1>
            <p class="coordinates">${marker.position}</p>
            <div>
                <input id="title-${marker.id}" type="text" placeholder="New title">
                <button onclick="updateTitle(${marker.id})">Add</button>
            </div>
            <div>
                <input id="desc-${marker.id}" type="text" placeholder="New description">
                <button onclick="updateDesc(${marker.id})">Add</button>
            </div>
            <div>
                <input id="openingHour-${marker.id}" type="number" placeholder="New opening hour">
                <button onclick="updateOpeningHour(${marker.id})">Add</button>
            </div>
            <div>
                <input id="closingHour-${marker.id}" type="number" placeholder="New closing hour">
                <button onclick="updateClosingHour(${marker.id})">Add</button>
            </div>
            <p>${marker.desc}</p>
            <p>Open: ${marker.openingHour}-${marker.closingHour}</p>
        </div>
        `
    )

    //event listeners for markers
    marker.addListener('click', () => {
        marker.info.open(props.map, marker)
    })

    marker.addListener('dblclick', () => {
        removeMarker(marker.id)
        marker.setMap(null)
    })

    markers.push(marker)

    //set marker values to localStorage
    const values = [marker.position, marker.title, marker.desc, marker.openingHour, marker.closingHour]

    localStorage.setItem(marker.id, JSON.stringify(values))
}