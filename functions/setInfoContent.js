//function for setting infowindow content by marker ID
setContent = (id) => {
    markers[id].info.setContent(
    `
    <div id="infoContent">
        <h1 class="infoTitle">${markers[id].title}</h1>
        <p class="coordinates">${markers[id].position}</p>
        <div>
            <input id="title-${id}" type="text" placeholder="New title">
            <button onclick="updateTitle(${id})">Add</button>
        </div>
        <div>
            <input id="desc-${id}" type="text" placeholder="New description">
            <button onclick="updateDesc(${id})">Add</button>
        </div>
        <div>
            <input id="openingHour-${id}" type="number" placeholder="New opening hour">
            <button onclick="updateOpeningHour(${id})">Add</button>
        </div>
        <div>
            <input id="closingHour-${id}" type="number" placeholder="New closing hour">
            <button onclick="updateClosingHour(${id})">Add</button>
        </div>
        <p>${markers[id].desc}</p>
        <p>Open: ${markers[id].openingHour}-${markers[id].closingHour}</p>
    </div>
    `
    )
}