document.addEventListener("DOMContentLoaded", function () {
  // Spliting Days and adding in nights and vice versa
  document.getElementById("days").addEventListener("change", function () {
    updateNightsBasedOnPackageDays(this.value);
  });

  document.getElementById("add-days").addEventListener("click", function () {
    let customDaysInput = document.getElementById("custom-days");
    let customDaysValue = parseInt(customDaysInput.value.trim());

    if (!isNaN(customDaysValue) && customDaysValue > 0) {
      updateNightsBasedOnPackageDays(customDaysValue);
      splitingDaysNights();
      // Close the modal after adding days
      document.getElementById("modal-for-packageDays").classList.add("hidden");
    } else {
      alert(
        "Field shouldn't be empty or invalid. Please enter a valid number of days."
      );
    }
  });

  // Add input event listener to custom-days input field for numeric validation
  document
    .getElementById("custom-days")
    .addEventListener("input", function (event) {
      // Get the input value
      let inputValue = event.target.value;

      // Remove any non-digit characters
      let numericValue = inputValue.replace(/\D/g, "");

      // Update the input field with the filtered numeric value
      event.target.value = numericValue;
    });

  // Function to format date from mm/dd/yyyy to dd/mm/yyyy
  function formatDate(inputDate) {
    // Split the date into month, day, and year parts
    var parts = inputDate.split("/");

    // Reorder the parts to create the new date format
    var formattedDate = parts[1] + "/" + parts[0] + "/" + parts[2];

    return formattedDate;
  }

  function updateNightsBasedOnPackageDays(selectedPackageDays) {
    let splitValue = Math.floor(selectedPackageDays / 2);
    document.getElementById("nightsInMakkah").value = splitValue;
    document.getElementById("nightsInMadinah").value =
      selectedPackageDays - splitValue;
  }

  function splitingDaysNights() {
    let nightsInMakkah = document.getElementById("nightsInMakkah").value;
    let nightsInMadinah = document.getElementById("nightsInMadinah").value;

    let customDaysValue = parseInt(nightsInMakkah) + parseInt(nightsInMadinah);

    let selectElement = document.getElementById("days");

    let dynamicOptions = Array.from(selectElement.options).slice(3);
    dynamicOptions.forEach((option) => option.remove());

    if (
      nightsInMakkah.trim() === "" ||
      isNaN(nightsInMakkah) ||
      nightsInMadinah.trim() === "" ||
      isNaN(nightsInMadinah)
    ) {
      let addedOption = document.createElement("option");
      addedOption.value = `${0} Days`;
      addedOption.textContent = "0 Days";
      selectElement.appendChild(addedOption);
      addedOption.selected = true;
      return;
    }

    let addedOption = document.createElement("option");
    addedOption.value = customDaysValue;
    const daysText = String(customDaysValue).includes(" Days")
      ? " Days"
      : " Days";
    addedOption.textContent = `${customDaysValue}${daysText}`;

    // Insert the new option before the first option in the select element
    selectElement.insertBefore(addedOption, selectElement.firstChild);

    // Select the new option
    addedOption.selected = true;
  }

  splitingDaysNights();

  // Visa Check box logic
  let visaCheck = "";
  document
    .getElementById("visaCheck")
    .addEventListener("change", function (event) {
      if (event.target.checked) {
        visaCheck = document.getElementById("visaFeeDisabled").value.trim();
      } else {
        visaCheck = "";
      }
    });

  // Airline Check box Logic
  let selectedAirline = "";

  document
    .getElementById("airlineCheck")
    .addEventListener("change", function (event) {
      if (event.target.checked) {
        // If the checkbox is checked, retrieve the selected airline
        selectedAirline = document.getElementById("airline-list").value;
      } else {
        selectedAirline = "";
      }
    });

  // Pessenger Name check box logic
  let selectedPassenger = "";

  function updatePassengerName() {
    if (document.getElementById("pesengerCheck").checked) {
      selectedPassenger = document.getElementById("pesengerName").value.trim();
    } else {
      selectedPassenger = "";
    }
  }

  // Expiry date enable disable
  let expDate = document.getElementById("expriyDate");
  expDate.addEventListener("click", () => {
    let expDateInput = document.getElementById("expriyDateInput");
    expDateInput.disabled = !expDateInput.disabled;
  });

  // phone number format and length validation
  document
    .getElementById("phoneNumber")
    .addEventListener("input", function (event) {
      // Get the input value
      let inputValue = event.target.value;

      // Remove any non-digit characters
      let phoneNumber = inputValue.replace(/\D/g, "");

      if (phoneNumber.length > 12) {
        alert("Number should be 11 Characters");
        phoneNumber = phoneNumber.slice(0, 12);
      }

      // Check if the phone number starts with +92 and has 10 digits
      if (phoneNumber.startsWith("92") && phoneNumber.length === 12) {
        // Format the phone number as +92XXXXXXXXX
        event.target.value = "+92" + phoneNumber.slice(2);
      } else {
        event.target.value = inputValue;
      }
    });

  // ----------Adding other options logic start----------
  let addMakkahHotelBtn = document.getElementById("addMakkahHotelBtn");
  let addMadinahHotelBtn = document.getElementById("addMadinahHotelBtn");
  let addAirlineBtn = document.getElementById("addAirlineBtn");

  //   Event listner for adding makkah hotel
  addMakkahHotelBtn.addEventListener("click", () => {
    let customeMakkahHotelInput = document.getElementById(
      "custom-makkah-Hotel"
    );
    let inputEmptyError = document.getElementById("input-makkah-empty-error");

    let customMakkahHotelValue = customeMakkahHotelInput.value.trim();

    if (customMakkahHotelValue === "") {
      // inputEmptyError.style.display = "block";
      // setTimeout(() => {
      //   inputEmptyError.style.display = "none";
      // }, 3000);
      alert("Flields Shouldn't be Empty");
      return;
    }
    let addedOption = document.createElement("option");
    addedOption.value = customMakkahHotelValue;
    addedOption.textContent = customMakkahHotelValue;

    let selectElement = document.getElementById("makkah-hotel-list");
    selectElement.appendChild(addedOption);
    customeMakkahHotelInput.value = "";
    addedOption.selected = true;
  });

  // Event Listner for adding madinah hotel
  addMadinahHotelBtn.addEventListener("click", () => {
    let customMadinahHotelInput = document.getElementById(
      "custom-madinah-hotel"
    );
    let inputEmptyError = document.getElementById("input-madinah-empty-error");
    let customMadinahHotelValue = customMadinahHotelInput.value.trim();

    if (customMadinahHotelValue === "") {
      // inputEmptyError.style.display = "block";
      // setTimeout(() => {
      //   inputEmptyError.style.display = "none";
      // }, 3000);
      alert("Flields Shouldn't be Empty");
      return;
    }

    let addedOption = document.createElement("option");
    addedOption.value = customMadinahHotelValue;
    addedOption.textContent = customMadinahHotelValue;

    let selectElement = document.getElementById("madinah-hotel-list");
    selectElement.appendChild(addedOption);
    splitingDaysNights();
    customMadinahHotelInput.value = "";
    addedOption.selected = true;
  });

  //   Event listner for adding Airline
  addAirlineBtn.addEventListener("click", () => {
    let customAirlineInput = document.getElementById("custom-airline");
    let customAirlineValue = customAirlineInput.value.trim();
    let inputEmptyError = document.getElementById("input-airline-empty-error");

    if (customAirlineValue === "") {
      // inputEmptyError.style.display = "block";
      // setTimeout(() => {
      //   inputEmptyError.style.display = "none";
      // }, 3000);
      alert("Flields Shouldn't be Empty");

      return;
    }
    let addedOption = document.createElement("option");
    addedOption.value = customAirlineValue;
    addedOption.textContent = customAirlineValue;
    let selectElement = document.getElementById("airline-list");
    selectElement.appendChild(addedOption);
    customAirlineInput = "";
    addedOption.selected = true;
  });
  //   ----------Adding Other options logic END----------

  // getting makkah values
  let makkahHPDisabled = document.getElementById("makkahHPDisabled");
  let MakkahHP = document.getElementById("makkahHotelPrice");
  makkahHPDisabled.value = MakkahHP.value.trim();

  //  getting madinah values
  let MadinahHPDisabled = document.getElementById("madinahHPDisabled");
  let MadinahHP = document.getElementById("madinahHotelPrice");
  MadinahHPDisabled.value = MadinahHP.value.trim();

  //   Visa Fee
  let visaFeeDisabled = document.getElementById("visaFeeDisabled");
  let visaFee = document.getElementById("visaFee");
  visaFeeDisabled.value = visaFee.value.trim();

  //   Airline Fare
  let airlineFare = document.getElementById("airlineFare");
  let airlineFareDisabled = document.getElementById("airlineFareDisabled");

  function formatAirlineFare(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  airlineFareDisabled.value = formatAirlineFare(airlineFare.value.trim());

  airlineFare.addEventListener("input", () => {
    let airlineFareValue = parseInt(airlineFare.value.trim());
    airlineFareDisabled.value = isNaN(airlineFareValue)
      ? ""
      : formatAirlineFare(airlineFareValue);
    updateTotalAmount();
  });

  // Nights in makkah
  let nightsInMakkah = document.getElementById("nightsInMakkah");
  nightsInMakkah.addEventListener("input", () => {
    splitingDaysNights();
    updateMakkahTotal();
    updateTotalAmount();
  });

  // Nights in Madinah
  let nightsInMadinah = document.getElementById("nightsInMadinah");
  nightsInMadinah.addEventListener("input", () => {
    splitingDaysNights();
    updateTotalAmount();
    updateMadinahTotal();
  });

  // exchange rate
  let exchangeRate = document.getElementById("exchangeRate");
  exchangeRate.addEventListener("input", (e) => {
    visaFeeTotal();
    updateMakkahTotal();
    updateMadinahTotal();
    updateTotalAmount();
  });

  // No of Person
  let numberOfPerson = document.getElementById("number-of-person");
  numberOfPerson.addEventListener("input", (e) => {
    updateTotalAmount();
  });

  // Adjustment
  let adjustment = document.getElementById("adjustment");
  adjustment.addEventListener("input", () => {
    updateTotalAmount();
  });

  //   ----------Sum the price Start----------
  function updateTotalAmount() {
    let makkahHPValue = parseInt(MakkahHP.value.trim()) || 0;
    let MadinahHPValue = parseInt(MadinahHP.value.trim()) || 0;
    let visaFeeValue = parseInt(visaFee.value.trim()) || 0;
    let exchangeRate = document.getElementById("exchangeRate").value;
    let airlineFareValue = parseInt(airlineFare.value.trim()) || 0;
    let totalAmountDisabled = document.getElementById("totalAmount");
    let makkaNights = document.getElementById("nightsInMakkah").value;
    let madinahNights = document.getElementById("nightsInMadinah").value;
    let numberOfPerson = parseInt(
      document.getElementById("number-of-person").value
    );
    let adjustment = parseInt(document.getElementById("adjustment").value);

    if (isNaN(adjustment)) {
      adjustment = 0; // Set adjustment to 0 if it's not a valid number
    }

    let makkahTotal =
      isNaN(makkaNights) || isNaN(exchangeRate)
        ? 0
        : parseInt(exchangeRate) * parseInt(makkaNights) * makkahHPValue;

    let madinahTotal =
      isNaN(madinahNights) || isNaN(exchangeRate)
        ? 0
        : parseInt(exchangeRate) * parseInt(madinahNights) * MadinahHPValue;

    let visaPrice = isNaN(exchangeRate)
      ? 0
      : parseInt(exchangeRate) * visaFeeValue;

    let totalAmount = makkahTotal + madinahTotal + visaPrice + airlineFareValue;

    totalAmount *= numberOfPerson;
    totalAmount += adjustment;

    // Format the total amount with commas
    let formattedTotalAmount = totalAmount
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Update the value of the "Total Package Amount" input field
    totalAmountDisabled.value = isNaN(totalAmount) ? "" : formattedTotalAmount;
    // console.log("Formated total amount", formattedTotalAmount);
  }
  // Call updateTotalAmount function once when the page loads
  window.addEventListener("load", updateTotalAmount);
  //   ----------Sum the price End----------

  // ---------- Makkah Total start ----------
  function updateMakkahTotal() {
    let makkahHPValue = parseInt(MakkahHP.value.trim()) || 0;
    let exchangeRate = parseInt(document.getElementById("exchangeRate").value);
    let makkaNights = document.getElementById("nightsInMakkah").value;
    let makkahHPDisabled = document.getElementById("makkahHPDisabled");

    let makkahTotal =
      isNaN(makkaNights) || isNaN(exchangeRate)
        ? 0
        : parseInt(exchangeRate) * parseInt(makkaNights) * makkahHPValue;

    let formatedMakkahPrice = makkahTotal
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    makkahHPDisabled.value = isNaN(makkahTotal) ? "" : formatedMakkahPrice;
    // console.log(formatedMakkahPrice);
  }
  //set default value to initial value
  document.getElementById("makkahHPDisabled").defaultValue =
    updateMakkahTotal();
  //   Makkah Hotel Price logic

  MakkahHP.addEventListener("input", () => {
    let makkahHPValue = parseInt(MakkahHP.value.trim());
    makkahHPDisabled.value = isNaN(makkahHPValue) ? "" : makkahHPValue;
    updateTotalAmount();
    updateMakkahTotal();
  });

  // ---------- Makkah Total end ----------

  // ---------- Madinah Total start ----------

  function updateMadinahTotal() {
    let MadinahHPValue = parseInt(MadinahHP.value.trim()) || 0;
    let exchangeRate = document.getElementById("exchangeRate").value;
    let madinahNights = document.getElementById("nightsInMadinah").value;
    let MadinahHPDisabled = document.getElementById("madinahHPDisabled");

    let madinahTotal =
      isNaN(madinahNights) || isNaN(exchangeRate)
        ? 0
        : parseInt(exchangeRate) * parseInt(madinahNights) * MadinahHPValue;
    let formatedMadinahPrice = madinahTotal
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    MadinahHPDisabled.value = isNaN(madinahTotal) ? "" : formatedMadinahPrice;
  }

  // Set initial madinah total price
  document.getElementById("madinahHPDisabled").defaultValue =
    updateMadinahTotal();

  //   Madinah Hotel Price logic

  MadinahHP.addEventListener("input", () => {
    let MadinahHPValue = parseInt(MadinahHP.value.trim());
    MadinahHPDisabled.value = isNaN(MadinahHPValue) ? "" : MadinahHPValue;
    updateTotalAmount();
    updateMadinahTotal();
  });

  // ---------- Madinah Total End ----------

  // Visa fee total
  function visaFeeTotal() {
    let visaFeeValue = parseInt(visaFee.value.trim()) || 0;
    let exchangeRate = document.getElementById("exchangeRate").value;
    let visaFeeDisabled = document.getElementById("visaFeeDisabled");

    let visaPrice =
      isNaN(visaFeeValue) || isNaN(exchangeRate)
        ? 0
        : parseInt(exchangeRate) * visaFeeValue;
    let formatedVisaFee = visaPrice
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    visaFeeDisabled.value = isNaN(visaPrice) ? "" : formatedVisaFee;
  }

  // Initial visa fee value
  document.getElementById("visaFeeDisabled").defaultValue = visaFeeTotal();
  visaFee.addEventListener("input", () => {
    let visaFeeValue = parseInt(visaFee.value.trim());
    visaFeeDisabled.value = isNaN(visaFeeValue) ? "" : visaFeeValue;
    updateTotalAmount();
    visaFeeTotal();
  });

  // Check if there is a data in local storage

  let oldDataBtn = document.getElementById("old-data-btn");

  let storage = localStorage.getItem("formDataArray");

  if (storage) {
    oldDataBtn.style.display = "block";
  }

  updatePassengerName();

  //   Send Form data to whatsapp
  let sentWhatsappBtn = document.getElementById("submitbtn");
  sentWhatsappBtn.addEventListener("click", () => {
    let priceOfMakkahHotel = document.getElementById("makkahHotelPrice").value;
    let priceOfMadinahHotel =
      document.getElementById("madinahHotelPrice").value;
    let pesengerName = document.getElementById("pesengerName").value;
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    let packageDaysElement = document.getElementById("days");
    let packageDaysValue = packageDaysElement.value;
    updatePassengerName();
    //  extracting the number from the string...
    let numericPackageDays = parseInt(packageDaysValue);

    let splitValue = Math.floor(numericPackageDays / 2);

    let makkahHotel = document.getElementById("makkah-hotel-list").value;
    // let makkahHotelType = document.getElementById("makkah-hotel-star").value;
    let nightsInMakkah = document.getElementById("nightsInMakkah").value;
    let makkahHotelPrice = document.getElementById("makkahHPDisabled").value;
    let madinahHotel = document.getElementById("madinah-hotel-list").value;
    // let madinahHotelType = document.getElementById("madinah-hotel-star").value;
    let nightsInMadinah = document.getElementById("nightsInMadinah").value;
    let madinahHotelPrice = document.getElementById("madinahHPDisabled").value;
    let visaFee = document.getElementById("visaFee").value;
    let airline = document.getElementById("airline-list").value;
    let airlineClass = document.getElementById("airline-class").value;
    let airlineFare = document.getElementById("airlineFare").value;
    let numberOfPerson = document.getElementById("number-of-person").value;
    document
      .getElementById("pesengerCheck")
      .addEventListener("change", updatePassengerName);
    let expDate = document.getElementById("expriyDateInput").value;
    let totalAmount = document.getElementById("totalAmount").value;

    // Check if the "Hotel Prices (PKR)" checkbox is checked
    let hotelPricesCheck = document.getElementById("hotelPricesCheck");
    let includeHotelPrices = hotelPricesCheck.checked;

    // logic for ticket fare or visa fee or madinah and makkah hotel price is = 0
    if (
      parseInt(airlineFare) === 0 ||
      parseInt(visaFee) === 0 ||
      parseInt(priceOfMakkahHotel) === 0 ||
      parseInt(priceOfMadinahHotel) === 0
    ) {
      alert("Please ensure that you have entered all the fields .");
      return; // Exit the function, preventing form submission
    }

    // Logic for visa + accomodation + Ticket
    let responseText = "";

    // Check if Visa Fee is greater than 0
    if (parseInt(visaFee) > 0) {
      responseText += "  Visa";
    }
    // Check if airline fare is greater than 0
    if (parseInt(airlineFare) > 0) {
      responseText += " | Ticket";
    }

    // Check if Makkah and Madinah hotel prices are greater than 0
    if (parseInt(priceOfMakkahHotel) > 0 && parseInt(priceOfMadinahHotel) > 0) {
      responseText += " | Accomodation";
    }

    function formatDate(date) {
      const d = new Date(date);
      const day = d.getDate().toString().padStart(2, "0");
      const month = (d.getMonth() + 1).toString().padStart(2, "0");
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    }
    // Store form data in local storage

    let formData = {
      "Phone Number ": phoneNumber,
      Package: `${packageDaysValue} Days (${splitValue} + ${
        numericPackageDays - splitValue
      })`,
      "Makkah Hotel ": `${makkahHotel} - ${nightsInMakkah} Nights`,
      "Makkah Hotel Price(Per Night) ": `${makkahHotelPrice}`,
      "Madinah Hotel ": `${madinahHotel} - ${nightsInMadinah} Nights`,
      "Madinah Hotel Price(Per Night) ": madinahHotelPrice,
      "Number of Persons ": numberOfPerson,
      // "Expiry Date ": `${expDate ? expDate : "Not Selected"}`,
      "Total Package Amount ": totalAmount,
    };

    // Only add the properties if they are selected
    if (selectedPassenger) {
      formData["Pessenger's Name: "] = `${selectedPassenger}`;
    }
    if (visaCheck) {
      formData["Visa Price: "] = `${visaCheck} (PKR)`;
    }

    if (selectedAirline) {
      formData[
        "Airline: "
      ] = `${selectedAirline}(${airlineClass} - ${airlineFare})`;
    }

    if (expDate) {
      formData["Expiry Date: "] = `${formatDate(expDate)}`;
    }

    let savedData = localStorage.getItem("formDataArray");
    let formDataArray = savedData ? JSON.parse(savedData) : [];
    formDataArray.push(formData);
    localStorage.setItem("formDataArray", JSON.stringify(formDataArray));

    // send form data to Phone number
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `${selectedPassenger ? `Dear ${selectedPassenger}` : ""}\n` +
        `*Package:* ${numericPackageDays} Days\n` +
        `*Makkah Hotel:* ${makkahHotel} - (${nightsInMakkah} Nights)\n` +
        `*Madinah Hotel:* ${madinahHotel} - (${nightsInMadinah} Nights)\n` +
        `${
          includeHotelPrices
            ? `*Makkah Hotel Price:* ${makkahHotelPrice} (PKR)`
            : ""
        }\n` +
        `${
          includeHotelPrices
            ? `*Madinah Hotel Price:* ${madinahHotelPrice} (PKR)`
            : ""
        }\n` +
        `*Airline:* ${airline} (${airlineClass})\n` +
        `${selectedAirline ? `*Ticket Fare:* ${airlineFare} (PKR)` : ""}\n` +
        `${visaCheck ? `*Visa Fee:* ${visaCheck} (PKR)` : ""}\n` +
        `*No. Of Person:* ${numberOfPerson}\n` +
        `*Total Package Amount:* ${totalAmount} (PKR)\n` +
        `${responseText}\n\n` +
        `${expDate ? `*Package Expires on:* ${formatDate(expDate)}` : ""}`
    )}`;

    window.open(url, "_blank").focus();
  });
});
