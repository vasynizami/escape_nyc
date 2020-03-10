const button = document.querySelector("button");
const thisMonth = new Date().toISOString().slice(0, 7);
const api_key = "c2e79b2b6b6571705e78656293cbbc8a";
const user_input = document.querySelector("input");
const destination = user_input.value;
const responseDiv = document.querySelector("div");

//-----------------------------------------
//----------------------------------------
//------  get cheapest flights -----------
//----------------------------------------
//----------------------------------------

const request = `http://api.travelpayouts.com/v1/prices/cheap?origin=JFK&destination=${destination}&depart_date=${thisMonth}&token=${api_key}&currency=USD`;

button.addEventListener("submit", async (event) => {
  event.preventDefault();
  const response = await axios.get(request);
  debugger;
  let flights = response.data.data;
  for (let i = 0; i < flights.length; i += 1) {
    responseDiv.innerHTML += `
      <p>${flights[i]}</p>
      <p>${flights[i].price}</p>
      <p>${flights[i].airline}</p>
      <p>${flights[i].flight_number}</p>
      <p>${flights[i].departure_at}</p>
  `}
});

// responseDiv.innerHTML += `<p>These are the cheapest flights to ${destination} from JFK this month:</p>
//   <p>${flights.destination}</p>
//   `

//----------------------------------------------
//--------- api for aeroports lookup  ------------
//---------------------------------------------

// const request_one = "http://aerodatabox.p.rapidapi.com/airports/search/term?limit=10&q=schiphol"
// const api_key = {
//  "x-rapidapi-key": "acb78ea11amsh46ce02561573e2dp1479b5jsnd98ffff069fe"
// }


// const getAirports = async () => {
//   const response = await axios.get(request_one, api_key);
//   debugger;
// };
// getAirports();

