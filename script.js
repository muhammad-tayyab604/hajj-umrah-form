document.addEventListener("DOMContentLoaded", function () {
  // Spliting Days and adding in nights and vice versa

  document.getElementById("days").addEventListener("change", function () {
    updateNightsBasedOnPackageDays(this.value);
  });

  document.getElementById("add-days").addEventListener("click", function () {
    let customDaysInput = document.getElementById("custom-days");
    let customDaysValue = parseInt(customDaysInput.value.trim());

    // if (!isNaN(customDaysValue) && customDaysValue > 0) {
    updateNightsBasedOnPackageDays(customDaysValue);
    // splitingDaysNights();
    // } else {
    console.error("Invalid custom days input");
    // }
  });

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

    let dynamicOptions = Array.from(selectElement.options).slice(4);
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
    addedOption.value = `${customDaysValue}${daysText}`;
    addedOption.textContent = `${customDaysValue}${daysText}`;

    // Append the new option
    selectElement.appendChild(addedOption);

    // Select the new option
    addedOption.selected = true;

    console.log(parseInt(nightsInMakkah) + parseInt(nightsInMadinah));
  }

  splitingDaysNights();

  // Visa Check box logic
  let visaLabelText = "";
  const visaCheckbox = document.getElementById("visaCheck");
  const visaLabel = document.querySelector('label[for="visaCheck"]');

  visaCheckbox.addEventListener("change", () => {
    visaLabelText = visaCheckbox.checked ? visaLabel.textContent : "";
  });

  // Airline Check box Logic
  let airlineLabelText = "";
  const airlineCheckBox = document.getElementById("airlineCheck");
  const airlineLabel = document.querySelector('label[for="airlineCheck"]');

  airlineCheckBox.addEventListener("change", () => {
    airlineLabelText = airlineCheckBox.checked ? airlineLabel.textContent : "";
  });

  // Expiry date enable disable
  let expDate = document.getElementById("expriyDate");
  expDate.addEventListener("click", () => {
    let expDateInput = document.getElementById("expriyDateInput");
    expDateInput.disabled = !expDateInput.disabled;
  });

  // phone number format and length validation
  let phoneNumberInput = document.getElementById("phoneNumber");

  phoneNumberInput.addEventListener("input", (e) => {
    let inputValue = e.target.value;

    let numericValue = inputValue.replace(/\D/g, "");

    e.target.value = numericValue;

    if (numericValue.length > 11) {
      alert("Number should be 11 Characters");
      e.target.value = numericValue.slice(0, 11);
      return;
    }
  });

  // ----------Adding other options logic start----------
  let addDaysBtn = document.getElementById("add-days");
  let addMakkahHotelBtn = document.getElementById("addMakkahHotelBtn");
  let addMadinahHotelBtn = document.getElementById("addMadinahHotelBtn");
  let addAirlineBtn = document.getElementById("addAirlineBtn");

  //   Event Listner for Adding days
  addDaysBtn.addEventListener("click", () => {
    let customDaysInput = document.getElementById("custom-days");
    let customDaysValue = customDaysInput.value.trim();
    let daysError = document.getElementById("days-error");

    if (customDaysValue === "" || isNaN(customDaysValue)) {
      daysError.style.display = "block";
      setTimeout(() => {
        daysError.style.display = "none";
      }, 3000);
      return;
    }

    let addedOption = document.createElement("option");

    addedOption.value = customDaysValue;
    const daysText = customDaysValue.includes(" Days") ? " Days" : " Days";
    addedOption.value = `${customDaysValue}${daysText}`;
    addedOption.textContent = `${customDaysValue}${daysText}`;
    let selectElement = document.getElementById("days");
    selectElement.appendChild(addedOption);
    customDaysInput.value = "";
    addedOption.selected = true;
    console.log(addedOption);
  });

  //   Event listner for adding makkah hotel
  addMakkahHotelBtn.addEventListener("click", () => {
    let customeMakkahHotelInput = document.getElementById(
      "custom-makkah-Hotel"
    );
    let inputEmptyError = document.getElementById("input-makkah-empty-error");

    let customMakkahHotelValue = customeMakkahHotelInput.value.trim();

    if (customMakkahHotelValue === "") {
      inputEmptyError.style.display = "block";
      setTimeout(() => {
        inputEmptyError.style.display = "none";
      }, 3000);
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
      inputEmptyError.style.display = "block";
      setTimeout(() => {
        inputEmptyError.style.display = "none";
      }, 3000);
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
      inputEmptyError.style.display = "block";
      setTimeout(() => {
        inputEmptyError.style.display = "none";
      }, 3000);
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
  airlineFareDisabled.value = airlineFare.value.trim();

  airlineFare.addEventListener("input", () => {
    let airlineFareValue = parseInt(airlineFare.value.trim());
    airlineFareDisabled.value = isNaN(airlineFareValue) ? "" : airlineFareValue;
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
    // Update the value of the "Total Package Amount" input field
    totalAmountDisabled.value = isNaN(totalAmount) ? "" : totalAmount;
  }

  updateTotalAmount();
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
    makkahHPDisabled.value = isNaN(makkahTotal) ? "" : makkahTotal;
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
    MadinahHPDisabled.value = isNaN(madinahTotal) ? "" : madinahTotal;
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
    visaFeeDisabled.value = isNaN(visaPrice) ? "" : visaPrice;
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

  //   Send Form data to whatsapp
  let sentWhatsappBtn = document.getElementById("submitbtn");
  sentWhatsappBtn.addEventListener("click", () => {
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    console.log(phoneNumber);
    let packageDaysElement = document.getElementById("days");
    let packageDaysValue = packageDaysElement.value;

    //  extracting the number from the string...
    let numericPackageDays = parseInt(packageDaysValue);

    let splitValue = Math.floor(numericPackageDays / 2);

    let makkahHotel = document.getElementById("makkah-hotel-list").value;
    let makkahHotelType = document.getElementById("makkah-hotel-star").value;
    let nightsInMakkah = document.getElementById("nightsInMakkah").value;
    let makkahHotelPrice = document.getElementById("makkahHotelPrice").value;
    let madinahHotel = document.getElementById("madinah-hotel-list").value;
    let madinahHotelType = document.getElementById("madinah-hotel-star").value;
    let nightsInMadinah = document.getElementById("nightsInMadinah").value;
    let madinahHotelPrice = document.getElementById("madinahHotelPrice").value;
    let visaFee = document.getElementById("visaFee").value;
    let airline = document.getElementById("airline-list").value;
    let airlineClass = document.getElementById("airline-class").value;
    let airlineFare = document.getElementById("airlineFare").value;
    let numberOfPerson = document.getElementById("number-of-person").value;

    let expDate = document.getElementById("expriyDateInput").value;
    let totalAmount = document.getElementById("totalAmount").value;

    // Store form data in local storage
    let formData = {
      "Phone Number": phoneNumber,
      Package: packageDaysElement,
      "Makkah Hotel": `${makkahHotel} - ${makkahHotelType} - ${nightsInMakkah}`,
      "Makkah Hotel Price(Per Night)": makkahHotelPrice,
      "Madinah Hotel": `${madinahHotel} - ${madinahHotelType} - ${nightsInMadinah}`,
      "Madinah Hotel Price(Per Night)": madinahHotelPrice,
      "Visa Fee(Riyal)": visaFee,
      Airline: `${airline}(${airlineClass})`,
      "Airline Fare": airlineFare,
      "Number of Persons": numberOfPerson,
      "Visa Check": visaLabelText,
      "Airline Check": airlineLabelText,
      "Expiry Date": expDate,
      "Total Package Amount": totalAmount,
    };

    let savedData = localStorage.getItem("formDataArray");

    let formDataArray = savedData ? JSON.parse(savedData) : [];

    formDataArray.push(formData);

    localStorage.setItem("formDataArray", JSON.stringify(formDataArray));

    // Phone number
    let url = `https://wa.me/${phoneNumber}?text=Package: ${numericPackageDays} Days (${splitValue} %2B ${
      numericPackageDays - splitValue
    })%0aMakkah Hotel: ${makkahHotel} - ${makkahHotelType} - ${nightsInMakkah} Nights%0aMakkah Hotel Price: ${makkahHotelPrice}%0aMadinah Hotel: ${madinahHotel} - ${madinahHotelType} - ${nightsInMadinah} Nights%0aMadinah Hotel price: ${madinahHotelPrice}%0aAirline: ${airline}(${airlineClass})%0aAirline Fare: ${airlineFare}%0aNo. Of Person: ${numberOfPerson}%0a${
      visaLabelText ? `Visa Check: ${visaLabelText}` : ""
    }%0a${airlineLabelText ? `Airline Check: ${airlineLabelText}` : ""}%0a${
      expDate ? `Expiry Date: ${expDate}` : ""
    }%0a%0aTotal Package Amount: ${totalAmount}`;

    window.open(url, "_blank").focus();
  });
});
