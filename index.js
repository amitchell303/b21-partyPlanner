const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2503-FTB-ET-WEB-FT/events";

const getAllParties = async () => {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
  }
};
const createParty = async (partyData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(partyData),
    });
    return response.json();
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

const form = document.querySelector("form");
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = new FormData(e.target);

  const dateTimeLocal = data.get("dateTime");
  const isoDateTime = new Date(dateTimeLocal).toISOString();

  const partyData = {
    name: data.get("name"),
    date: isoDateTime,
    location: data.get("location"),
    description: data.get("description"),
  };
  await createParty(partyData);
  await renderPartyList();
});

// converting the submitted form info into individual cards rather than columns
function renderCard(party) {
  const card = document.createElement("div");
  card.classList.add("party-card");

  card.innerHTML = `
        <h2>${party.name}</h2>
        <p><strong>Date/Time:</strong> ${new Date(party.dateTime).toLocaleString()}</p>
        <p><strong>Location:</strong> ${party.location}</p>
        <p><strong>Description:</strong> ${party.description}</p>
      `;
  return card;
}

const renderPartyList = async () => {
  const partyList = await getAllParties();

  const listDisplay = document.querySelector("#cards-container");
  listDisplay.innerHTML = "";

  for (let party of partyList) {
    const card = renderCard(party);
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.dataset.id = party.id;
    removeBtn.addEventListener("click", async () => {
      await deleteParty(party.id);
      await renderPartyList();
    });

    card.appendChild(removeBtn);
    listDisplay.appendChild(card);
  }
};

renderPartyList();



// Below is my original code that produced a column of info (not pretty to look at)

// const renderPartyList = async () => {
//   const partyList = await getAllParties();

//   const nameOutput = document.querySelector("#party-name output");
//   const dTOutput = document.querySelector("#party-dateTime output");
//   const locOutput = document.querySelector("#party-location output");
//   const desOutput = document.querySelector("#party-description output");
//   const rmvOutput = document.querySelector("#rmvBtn");

//   nameOutput.innerHTML = "";
//   dTOutput.innerHTML = "";
//   locOutput.innerHTML = "";
//   desOutput.innerHTML = "";
//   rmvOutput.innerHTML = "";

//   for (let obj of partyList) {
//     const newName = document.createElement("p");
//     const newDT = document.createElement("p");
//     const newLoc = document.createElement("p");
//     const newDes = document.createElement("p");
//     const newBtn = document.createElement("button");

//     newName.textContent = obj.name;
//     newDT.textContent = obj.dateTime;
//     newLoc.textContent = obj.location;
//     newDes.textContent = obj.description;
//     newBtn.textContent = "Remove";
//     newBtn.dataset.id = obj.id;

//     nameOutput.append(newName);
//     dTOutput.append(newDT);
//     locOutput.append(newLoc);
//     desOutput.append(newDes);
//     rmvOutput.append(newBtn);
//   }
// };

// const rmvBtn = document.getElementById("rmvBtn");
// rmvBtn.addEventListener("click", async function (e) {
//   const id = e.target.dataset.id;
//   await deleteParty(id);
//   await renderPartyList();
// });
