// const setParties = [
//     { name: "New Years Party!", date: "12/31", time: "9:00pm", location: "Art Museum"};
//     { name: "Valentines: Friday the 14th!", date: "2/14", time: "7:00pm", location: "Barcelona Ristorante"};
//     { name: "St. Patty's Day!", date: "3/17", time: "8:30pm", location: "Comrade Brewing Co."};
// ]

const getParties = async () => {
    try {
      const url = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2503-FTB-ET-WEB-FT/events";
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  const addNewParty = async () => {
    try {
      const data = {
        name: "",
        description: "",
        date: ,
        location: 
      };
      const url = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2503-FTB-ET-WEB-FT/events";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Something didn't work");
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };