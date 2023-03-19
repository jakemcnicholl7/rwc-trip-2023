import attendees from "./attendees.js"
import Location from "./location.js"

export default class Match
{
    constructor(team1, team2, date, time, location, tickets)
    {
        this.team1 = team1;
        this.team2 = team2;
        this.time = time;
        this.date = date;
        this.locationTitle = Location.formalName(location);
        this.location = location;
        this.tickets = tickets;
        this.attendees = attendees[location];
        this.remainingSpots = this.tickets - this.attendees.length;
        this.capacity_percent = Math.round(this.attendees.length / this.tickets * 100).toString()
    }

    toString()
    {
        return this.formalTeams() + " => " + this.formalDatetime()
    }


    formalDatetime()
    {
        return this.date + " @ " + this.time;
    }

    formalTeams()
    {
        return this.team1 + " vs "  + this.team2;
    }

    toDiv()
    {
        let match = document.createElement('div');
        match.innerHTML = this.toString();
        return match;
    }

    createSummary()
    {
        this.append(this.attendanceSummary());


    }

    matchSummary()
    {

    }



    append(component)
    {
        const frame = document.querySelector('#summary');
        frame.appendChild(component);
    }

    attendanceSummary()
    {
        let container = document.createElement("div");
        container.classList.add("container");

        let title = document.createElement("h2");
        title.innerText = this.formalTeams();

        container.appendChild(title);
        container.appendChild(this.attendanceDescription());
        container.appendChild(this.attendanceCapacity());
        return container;
    }

    attendanceDescription()
    {
        let description = document.createElement("dl");

        this.addKeyValue(description, "Date ", this.formalDatetime())
        this.addKeyValue(description, "Location ", this.locationTitle)
        this.addKeyValue(description, "Attendees ", this.attendees.join(", "))
        this.addKeyValue(description, "Remaining ", this.remainingSpots)

        return description;
    }

    addKeyValue(table, key, value)
    {
        let keyDiv = document.createElement("dt")
        let valueDiv = document.createElement("dd")
        keyDiv.innerText = key;
        valueDiv.innerText = value;

        table.appendChild(keyDiv);
        table.appendChild(valueDiv);
    }

    attendanceCapacity()
    {
        let progress = document.createElement("div");
        progress.classList.add("progress");

        let progressbar = document.createElement("div");
        progressbar.classList.add("progress-bar");
        //progressbar.classList.add("progress-bar-striped");
        progressbar.setAttribute("role", "pregressbar");
        progressbar.setAttribute("aria-valuenow", this.attendees.length.toString());
        progressbar.setAttribute("aria-valuemin", "0");
        progressbar.setAttribute("aria-valuemax", this.tickets.toString());
        progressbar.setAttribute("style","width:"+ this.capacity_percent + "%")
        progressbar.innerText = this.attendees.length + "/" + this.tickets.toString();
        progress.appendChild(progressbar);

        return progress;
    }

}
