const button = document.querySelector("button");
// const api_key = "c2e79b2b6b6571705e78656293cbbc8a";
const request = "http://api.travelpayouts.com/v1/prices/monthly?currency=USD&origin=MOW&destination=HKT&token=c2e79b2b6b6571705e78656293cbbc8a";
// const thisMonth = new Date().toISOString().slice(0, 7);
// const request_two = "http://aerodatabox.p.rapidapi.com/airports/search/term?limit=10&q=schiphol";
const req = "https://airport.api.aero/airport?user_key=moscow"
// const api_key = {
//   "x-rapidapi-key": "bf59807f4emsh44047611471d4e3p11acd2jsnd792b43633ef"
// };
const api = {

}
// const getFlight = async () => {
//   const response = await axios.get(request);
//   debugger;
// }
// getFlight();

const getAirports = async () => {
  const response = await axios.get(req);
  debugger;
};
getAirports();



// button.addEventListener("click", async () => {
//   getAirports();
// });
