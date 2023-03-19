import Location from './src/location.js'
import Match from './src/match.js'
import fixtures from './src/fixtures.js'
import locations from './src/locations.js'

function setup()
{
    for (let fixture of fixtures)
    {
        let location_name = fixture.location;
        let location = new Location(location_name);
        location.addMatch(fixture);
        location.create();
    }
}

window.onload = setup