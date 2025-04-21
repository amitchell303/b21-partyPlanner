const COHORT = "2503-FTB-ET-WEB-FT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

// === State ===

const state = {
  parties: [],
};

/** Updates state with parties from the API */
async function getParties() {
  try {
    const url = "API_URL";
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

/** Adds new party from form**/
const body = documentSelector("body");
async function addParty(parties) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parties),
    });
  } catch (error) {
    console.log(error);
  }
}

const deleteParty = async () =>
  // === Render ===

  /** Renders artists from state */
  function renderArtists() {
    // TODO
  };

/** Syncs state with the API and rerender */
async function render() {
  await getArtists();
  renderArtists();
}

// === Script ===

render();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  arrNames.push(`${data.get("first_name")} ${data.get("last_name")}`);
  print();
  firstName.value = "";
  description.value = "";
  description.value = "";
});
