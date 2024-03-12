// Retrieve data from local storage
let storedData = localStorage.getItem("formDataArray");
let EmptyStorage = document.getElementById("EmptyStorage");
if (storedData) {
  let formDataArray = JSON.parse(storedData);

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
  EmptyStorage.style.display = "block";
}
