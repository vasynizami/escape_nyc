//variables for API call to travelpayouts

const button = document.querySelector("button");
const thisMonth = new Date().toISOString().slice(0, 7);
//add cors workaround from heroku before the url
const url = "http://cors-anywhere.herokuapp.com/api.travelpayouts.com/v1/prices/cheap"
const api_key = "c2e79b2b6b6571705e78656293cbbc8a";
const user_input = document.querySelector("input");
const responseDiv = document.querySelector("#results");
const theads = document.querySelector("#tableheads");


//getting response on click

button.addEventListener("click", async () => {
  
  const destination = user_input.value;

  //check that user entered an IATA code
  if (destination.length !== 3) {

    alert("Please, enter the IATA code!");

  } else {

    const request = `${url}?origin=JFK&destination=${destination}&
      depart_date=${thisMonth}&token=${api_key}&currency=USD`;
    
    const response = await axios.get(request);

    let res = response.data.data;
    
    //the response from this api is object, not array, hence such syntax
    let airport = res[Object.keys(res)[0]];
    
    //add headings for the displayed results
    theads.innerHTML = `
      <div>
        <p>Flight price</p>
        <p>Flight number</p>
        <p>Flight departs</p>
        <p>Flight returns</p>
      <div>
    `;
    
    //preparing to populate the responseDiv with results
    //give default empty string value to responseDiv so that it resets 
    //the search results every time the input value is changed
    responseDiv.innerHTML = "";

    for (let i = 0; i < Object.keys(airport).length; i += 1) {

      let flights = airport[Object.keys(airport)[i]];

      //display results
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