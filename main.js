//----------------------------------------
//----------------------------------------
//------------variables------------------
//----------------------------------------
//----------------------------------------

const button = document.querySelector("button");
const thisMonth = new Date().toISOString().slice(0, 7);
const api_key = "c2e79b2b6b6571705e78656293cbbc8a";
const user_input = document.querySelector("input");
const responseDiv = document.querySelector("#results");
const theads = document.querySelector("#tableheads");

//-------------------------------------------
//------------------------------------------
//------get cheapest flights on click-----
//----------------------------------------
//----------------------------------------

button.addEventListener("click", async () => {
  
  const destination = user_input.value;
  if (destination.length !== 3) {
    alert("Please, enter the IATA code!")
  } else {
      const request = `http://cors-anywhere.herokuapp.com/api.travelpayouts.com/v1/prices/cheap?origin=JFK&destination=${destination}&depart_date=${thisMonth}&token=${api_key}&currency=USD`;
      const response = await axios.get(request);
      let res = response.data.data;
      let airport = res[Object.keys(res)[0]];

      theads.innerHTML = `
        <div>
          <p>Flight price</p>
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
            <p>$${flights.price}</p>
            <p>${flights.airline} ${flights.flight_number}</p>
            <p>${flights.departure_at.slice(0, 10)}</p>
            <p>${flights.return_at.slice(0, 10)}</p>
          </div>
        `;
      }
  }
})