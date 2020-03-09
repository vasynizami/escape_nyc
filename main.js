const button = document.querySelector("button");
// const api_key = "c2e79b2b6b6571705e78656293cbbc8a";
const request = "http://api.travelpayouts.com/v1/prices/monthly?currency=USD&origin=MOW&destination=HKT&token=c2e79b2b6b6571705e78656293cbbc8a";
// const today = new Date().toISOString().slice(0, 10);
const getFlight = async () => {
  const resp = await axios.get(request);
}
getFlight();

button.addEventListener("click", async () => {
  getFlight();
} )