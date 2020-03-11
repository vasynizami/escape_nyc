const button = document.querySelector("a");
const thisMonth = new Date().toISOString().slice(0, 7);
const api_key = "c2e79b2b6b6571705e78656293cbbc8a";
const user_input = document.querySelector("input");
const responseDiv = document.querySelector("#results");
const theads = document.querySelector("#tableheads");

//-----------------------------------------
//----------------------------------------
//------  get cheapest flights -----------
//----------------------------------------
//----------------------------------------

button.addEventListener("click", async () => {
  if (window.screen.width <= 414) {
    button.setAttribute("href", "#results");
  }
  const destination = user_input.value;
  const request = `http://api.travelpayouts.com/v1/prices/cheap?origin=JFK&destination=${destination}&depart_date=${thisMonth}&token=${api_key}&currency=USD`;
  const response = await axios.get(request);
  let res = response.data.data;
  let airport = res[Object.keys(res)[0]];

  theads.innerHTML = `
  <div>
    <p>Flight price in USD</p>
    <p>Airline</p>
    <p>Flight number</p>
    <p>Flight departs</p>
    <p>Flight returns</p>
  <div>
  `;
 
  //we have to give the default empty string value to responseDiv so that it resets 
  //the search results every time
  responseDiv.innerHTML = "";

  for (let i = 0; i < Object.keys(airport).length; i += 1) {
    let flights = airport[Object.keys(airport)[i]];

    console.log(flights);

    responseDiv.innerHTML += `

    <div>
      <p>${flights.price}</p>
      <p>${flights.airline}</p>
      <p>${flights.flight_number}</p>
      <p>${flights.departure_at.slice(0, 10)}</p>
      <p>${flights.return_at.slice(0, 10)}</p>
    </div>
  `;
  }

});

