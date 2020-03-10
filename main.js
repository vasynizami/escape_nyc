const button = document.querySelector("button");
const thisMonth = new Date().toISOString().slice(0, 7);
const api_key = "c2e79b2b6b6571705e78656293cbbc8a";
const user_input = document.querySelector("input");
const responseDiv = document.querySelector("div");

//-----------------------------------------
//----------------------------------------
//------  get cheapest flights -----------
//----------------------------------------
//----------------------------------------

button.addEventListener("click", async () => {
  const destination = user_input.value;
  const request = `http://api.travelpayouts.com/v1/prices/cheap?origin=JFK&destination=${destination}&depart_date=${thisMonth}&token=${api_key}&currency=USD`;
  const response = await axios.get(request);
  // debugger;
  // console.log(response);
  // debugger;
  let res = response.data.data;
  let airport = res[Object.keys(res)[0]];
  let flights = airport[Object.keys(airport)[0]];
  console.log(airport);
  console.log(flights);
  console.log(Object.keys(airport).length);

  for (let i = 0; i < Object.keys(airport).length; i += 1) {
    // debugger;
    console.log(airport[Object.keys(airport)[i]]);
    responseDiv.innerHTML += `
      <p>${airport[Object.keys(airport)[i]].price}</p>
      <p>${airport[Object.keys(airport)[i]].airline}</p>
      <p>${airport[Object.keys(airport)[i]].flight_number}</p>
      <p>${airport[Object.keys(airport)[i]].departure_at}</p>
  `;
    console.log(i);
  }
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
