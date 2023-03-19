
export default class Flight
{
    constructor(inbound, origin, destination, flightLink, date)
    {
        console.log(inbound)

        this.class = "outbound"
        if (inbound)
        {
            this.class = "inbound"
        }
        console.log(this.class)
        this.inbound = inbound;
        this.origin = origin;
        this.destination = destination;
        this.date = date;
        this.flightLink = flightLink;
    }

    create()
    {
        this.append(this.getTitle())
        this.append(this.flightDescription())
    }

    getTitle()
    {
        let title = document.createElement("h2")
        title.classList.add(this.class)
        title.innerText = this.getLocation()
        return title;
    }

    getLocation()
    {
        if (this.inbound) {
            return "In - " + this.destination;
        }
        return "Out - " + this.origin;
    }

    append(component)
    {
        const frame = document.querySelector('#flights');
        frame.appendChild(component);
    }

    flightDescription()
    {
        let description = document.createElement("dl");
        this.addKeyValue(description, "Origin ", this.origin)
        this.addKeyValue(description, "Destination ", this.destination)
        this.addKeyValueLink(description, "Flights ", this.flightLink)
        this.addKeyValue(description, "Date ", this.date)
        return description;
    }

    addKeyValue(table, key, value)
    {
        let keyDiv = document.createElement("dt")
        let valueDiv = document.createElement("dd")
        keyDiv.innerText = key;
        valueDiv.innerHTML = value;

        table.appendChild(keyDiv);
        table.appendChild(valueDiv);
    }

    addKeyValueLink(table, key, valueLink)
    {
        let keyDiv = document.createElement("dt")
        let valueDiv = document.createElement("dd")
        keyDiv.innerText = key;

        let button = document.createElement("button")

        let link = document.createElement("a")
        link.setAttribute("href", valueLink)
        console.log(this.description())
        link.textContent = this.description()

        button.appendChild(link);
        valueDiv.appendChild(button);

        table.appendChild(keyDiv);
        table.appendChild(valueDiv);
    }

    description()
    {
        return this.origin + " to " + this.destination + " Flights";
    }
}

