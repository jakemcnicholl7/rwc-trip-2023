
export default class Location
{
    constructor(name)
    {
        this.name = name;
        this.titleName = Location.formalName(name)
        this.matches = [];
    }

    static formalName(name)
    {
        let formalName = name;
        formalName = formalName.replace("_", " ")

        function toUpper(match) {
            return match.toUpperCase();
        }

        formalName = formalName.replace(/\b\w/g, toUpper);
        return formalName;
    }

    addMatch(match)
    {
        this.matches.push(match)
    }

    create()
    {
        this.createMarker('identifier');
        this.createMarker('highlighter');
        this.createMarker('selector');
        this.createInformation();
        this.createTitle();
    }


    createMarker(type)
    {
        let mark = this.createMark(type);
        this.append(mark);
        return mark;
    }

    createElement(type)
    {
        const mark = document.createElement('div');
        mark.classList.add('location-' + type);
        return mark;
    }

    createMark(type)
    {
        let mark = this.createElement(type)
        mark.setAttribute('data-location', this.name);
        return mark;
    }

    append(marker)
    {
        const frame = document.querySelector('#map_frame');
        frame.appendChild(marker);
    }

    createInformation()
    {
        let information = this.createMark('information');
        information.appendChild(this.matchSchedule());
        this.append(information)
    }

    createTitle()
    {
        let title = this.createMark('title');
        title.textContent = this.titleName;
        title.setAttribute('id', this.name + '_title');
        this.append(title)
        this.recenter(this.name + '_title')
    }

    recenter(id)
    {
        let div = document.getElementById(id);
        let width = div.offsetWidth;
        const left = parseInt(window.getComputedStyle(div).getPropertyValue('left'));
        console.log(width);
        console.log(left);
        const newLeft = left - width - 20
        console.log(newLeft);
        div.style.left = newLeft + 'px';
    }

    matchSchedule()
    {
        let schedule = this.createElement('schedule');
        for (let match of this.matches)
        {
            console.log(match);
            schedule.appendChild(match.toDiv());
        }
        return schedule;
    }
}