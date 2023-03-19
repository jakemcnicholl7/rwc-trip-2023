import fixtures from "./fixtures.js"


function setup()
{
    for (let fixture of fixtures)
    {
        fixture.createSummary();
    }
}

window.onload = setup