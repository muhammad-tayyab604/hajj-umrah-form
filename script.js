document.addEventListener("DOMContentLoaded", function () {
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
    addedOption.textContent = `${customDaysValue} Days`;
    let selectElement = document.getElementById("days");
    selectElement.appendChild(addedOption);
    customDaysInput.value = "";
    addedOption.selected = true;
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

  //   Makkah Hotel Price logic
  let makkahHPDisabled = document.getElementById("makkahHPDisabled");
  let MakkahHP = document.getElementById("makkahHotelPrice");
  makkahHPDisabled.value = MakkahHP.value.trim();

  MakkahHP.addEventListener("input", () => {
    let makkahHPValue = parseInt(MakkahHP.value.trim());
    makkahHPDisabled.value = isNaN(makkahHPValue) ? "" : makkahHPValue;
    updateTotalAmount();
  });

  //   Madinah Hotel Price logic
  let MadinahHPDisabled = document.getElementById("madinahHPDisabled");
  let MadinahHP = document.getElementById("madinahHotelPrice");
  MadinahHPDisabled.value = MadinahHP.value.trim();

  MadinahHP.addEventListener("input", () => {
    let MadinahHPValue = parseInt(MadinahHP.value.trim());
    MadinahHPDisabled.value = isNaN(MadinahHPValue) ? "" : MadinahHPValue;
    updateTotalAmount();
  });

  //   Visa Fee
  let visaFeeDisabled = document.getElementById("visaFeeDisabled");
  let visaFee = document.getElementById("visaFee");
  visaFeeDisabled.value = visaFee.value.trim();

  visaFee.addEventListener("input", () => {
    let visaFeeValue = parseInt(visaFee.value.trim());
    visaFeeDisabled.value = isNaN(visaFeeValue) ? "" : visaFeeValue;
    updateTotalAmount();
  });

  //   Airline Fare
  let airlineFare = document.getElementById("airlineFare");
  let airlineFareDisabled = document.getElementById("airlineFareDisabled");
  airlineFareDisabled.value = airlineFare.value.trim();

  airlineFare.addEventListener("input", () => {
    let airlineFareValue = parseInt(airlineFare.value.trim());
    airlineFareDisabled.value = isNaN(airlineFareValue) ? "" : airlineFareValue;
    updateTotalAmount();
  });

  //   ----------Sum the price Start----------
  function updateTotalAmount() {
    let makkahHPValue = parseInt(MakkahHP.value.trim()) || 0;
    let MadinahHPValue = parseInt(MadinahHP.value.trim()) || 0;
    let visaFeeValue = parseInt(visaFee.value.trim()) || 0;
    let airlineFareValue = parseInt(airlineFare.value.trim()) || 0;
    let totalAmountDisabled = document.getElementById("totalAmount");

    let totalAmount =
      makkahHPValue + MadinahHPValue + visaFeeValue + airlineFareValue;

    // Update the value of the "Total Package Amount" input field
    totalAmountDisabled.value = totalAmount;
  }

  updateTotalAmount();
  //   ----------Sum the price End----------

  //   Send Form data to whatsapp
  let sentWhatsappBtn = document.getElementById("submitbtn");
  sentWhatsappBtn.addEventListener("click", () => {
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    let packageDays = document.getElementById("days").value;
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
    let totalAmount = document.getElementById("totalAmount").value;

    // Phone number
    let url = `https://wa.me/${phoneNumber}?text=Package Days:${packageDays}%0aMakkah Hotel:${makkahHotel}%0aMakkah Hotel Type:${makkahHotelType}%0aNights In Makkah: ${nightsInMakkah}%0aMakkah Hotel Price: ${makkahHotelPrice}%0aMadinah Hotel: ${madinahHotel}%0aMadinah Hotel Type: ${madinahHotelType}%0aNights In Madinah: ${nightsInMadinah}%0aMadinah Hotel price: ${madinahHotelPrice}%0aVisa Fee: ${visaFee}%0aAirline: ${airline}%0aAirline Class: ${airlineClass}%0aAirline Fare: ${airlineFare}%0aNo. Of Person: ${numberOfPerson}%0a%0aTotal Package Amount: ${totalAmount}`;

    window.open(url, "_blank").focus();
  });
});
