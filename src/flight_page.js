
import flights from './flights.js'

function setup()
{
    for (let flight of flights)
    {
        flight.create();
    }
}

window.onload = setup