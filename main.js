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
  let res = response.data.data;
  let airport = res[Object.keys(res)[0]];
  let flights = airport[Object.keys(airport)];
  // console.log(airport);
  // console.log(flights);
  // console.log(Object.keys(airport).length);

  for (let i = 0; i < Object.keys(airport).length; i += 1) {
   
    // console.log(airport[Object.keys(airport)[i]]);
    responseDiv.innerHTML += `
      <p>Flight price in USD</p>
      <p>${airport[Object.keys(airport)[i]].price}</p>
      <p>Airline</p>
      <p>${airport[Object.keys(airport)[i]].airline}</p>
      <p>Flight number</p>
      <p>${airport[Object.keys(airport)[i]].flight_number}</p>
      <p>Flight departs</p>
      <p>${airport[Object.keys(airport)[i]].departure_at}</p>
  `;
  
  }
});