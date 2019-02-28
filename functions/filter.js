//function for filtering the list of places by filter input
filter = (filterId) => {
    const input = document.getElementById(filterId)
    let filter = input.value.toUpperCase()

    // console.log(filterId)

    if(filterId === "titleFilter") {
        for(let i = 0; i < markers.length; i++) {
            const textValue = markers[i].title
            if(textValue.toUpperCase().indexOf(filter) > -1) {
                markers[i].setVisible(true)
            } else {
                markers[i].setVisible(false)
                markers[i].info.close()
            }
        }
    }

    if(filterId === "hourFilter") {
        for(let j = 0; j < markers.length; j++) {
            const openingHour = Number(markers[j].openingHour)
            const closingHour = Number(markers[j].closingHour)

            if(filter >= openingHour && filter <= closingHour) {
                markers[j].setVisible(true)
            } else if(filter.length === 0){
                markers[j].setVisible(true)
            } else {
                markers[j].setVisible(false)
                markers[j].info.close()
            }
        }
    }
}