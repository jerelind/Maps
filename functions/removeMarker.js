removeMarker = (id) => {

    //find the index of the marker to be removed
    const index = markers.findIndex(m => m.id === id)

    //remove the marker from markers array
    markers.splice(index, 1)
    localStorage.removeItem(id)
}

removeAllMarkers = () => {
    for(let i = 0; i < markers.length; i++) {
        markers[i].setMap(null)
    }
    markers = []
    localStorage.clear()
}