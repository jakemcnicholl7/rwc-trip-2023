
import Flight from "./flight.js"

const lyon_link = "https://www.skyscanner.ie/transport/flights/dub/lys/230920/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&is_banana_refferal=true&outboundaltsenabled=false&preferdirects=true&ref=home&rtn=0"
const marseille_link = "https://www.skyscanner.ie/transport/flights/mrs/dub/231003/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=true&rtn=0"

const flights = [
    new Flight(true, "Dublin", "Lyon", lyon_link, "Wed, 20th Sept 2023"),
    new Flight(false, "Marseille", "Dublin", marseille_link, "Tue, 3rd Oct 2023")
]

export default flights;