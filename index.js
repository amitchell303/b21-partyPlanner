const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2503-FTB-ET-WEB-FT/events";

const getAllParties = async () => {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json.data);
  } catch (error) {
    console.error(error);
  }
};
const createParty = async (FormData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(FormData),
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
};
const deleteParty = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    console.log(json);
    console.log(`successfully deleted ${id}`);
  } catch (error) {
    console.error(error);
  }
};
// console.log(getAllParties());
// console.log(createParty());
// console.log(deleteParty());

const renderList = () => {
    
}
const form = document.querySelector("form");

const partyList = await getAllParties();

const rmvBtn = document.querySelector("#rmvBtn output");
const name = document.querySelector("#party-name output");
const dateTime = document.querySelector("#party-dateTime output");
const location = document.querySelector("#party-location output");
const description = document.querySelector("#party-description output");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
});

// converting the submitted form info into individual cards rather than columns
// function renderCard(party) {
//   const card = document.createElement("div");
//   card.classList.add("party-card");

//   card.innerHTML = `
//       <h2>${party.name}</h2>;
//       <p>Date: ${new Date(party.date).toLocaleString()}</p>
//       <p>Location: ${party.location}</p>
//       <p>Description: ${party.description}</p>
//     `;
//   return card;
// }
