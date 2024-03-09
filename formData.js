// Retrieve data from local storage
let storedData = localStorage.getItem("formDataArray");

// Check if there is any stored data
if (storedData) {
  // Parse the JSON string to convert it back to an array
  let formDataArray = JSON.parse(storedData);

  // Access the element where you want to display the data
  let displayElement = document.getElementById("displayData");

  // Iterate through formDataArray and display each object in cards
  formDataArray.forEach((formData) => {
    // Create a card element
    let card = document.createElement("div");
    card.classList.add("card");

    // Iterate through formData and create HTML elements for each property
    for (let key in formData) {
      let propertyElement = document.createElement("p");
      propertyElement.textContent = `${key}: ${formData[key]}`;
      card.appendChild(propertyElement);
    }

    // Append the card to the display element
    displayElement.appendChild(card);
  });
} else {
  console.log("No stored data found");
}
