updateTitle = (id) => {
    markers[id].title = document.getElementById(`title-${id}`).value
    setContent(id)
    
    //change localStorage value of title
    const values = JSON.parse(localStorage.getItem(id))
    values[1] = markers[id].title
    localStorage.setItem(id, JSON.stringify(values))
}

updateDesc = (id) => {
    markers[id].desc = document.getElementById(`desc-${id}`).value
    setContent(id)

    //change localStorage value of desc
    const values = JSON.parse(localStorage.getItem(id))
    values[2] = markers[id].desc
    localStorage.setItem(id, JSON.stringify(values))
}

updateOpeningHour = (id) => {
    markers[id].openingHour = document.getElementById(`openingHour-${id}`).value
    setContent(id)

    //change localStorage value of hours
    const values = JSON.parse(localStorage.getItem(id))
    values[3] = markers[id].openingHour
    localStorage.setItem(id, JSON.stringify(values))
}

updateClosingHour = (id) => {
    markers[id].closingHour = document.getElementById(`closingHour-${id}`).value
    setContent(id)

    const values = JSON.parse(localStorage.getItem(id))
    values[4] = markers[id].closingHour
    localStorage.setItem(id, JSON.stringify(values))
}