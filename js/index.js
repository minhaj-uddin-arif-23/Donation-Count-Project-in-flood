// const Balance = parseFloat(document.getElementById('balance-decrease').innerText) /// my 50 taka
//  donation add button
const MyNewBalance = parseFloat(
  document.getElementById("main-balance").innerText
);
document.getElementById("donate-btn").addEventListener("click", function () {
  const input = parseFloat(document.getElementById("input-value").value);
  const currentBalance = parseFloat(document.getElementById("noahkali").innerText);
  const myUpdatedBalance = parseFloat(document.getElementById("main-balance").innerText);

  if (isNaN(input) || input <= 0) {
    alert("Please type a number");
    return;
  }

  if (myUpdatedBalance >= input) {
    const totalDonate = input + currentBalance; //total donation
    document.getElementById("noahkali").innerText = `${totalDonate}`;
    // history showing part

    const historyItem = document.createElement("div");
    historyItem.className =
      "text-left border border-2 border-gray-400 lg:px-20 lg:py-10  px-4 py-5 w-11/12 mx-auto my-10 rounded-xl bg-gradient-to-r from-indigo-100 from-5% via-sky-100 via-20% to-emerald-100 to-30% my-5";
    historyItem.innerHTML = `
             ${totalDonate} Taka is dontated for famine-2024 at Noahkali ,at Bangladesh
              <p class="text-xl text-black"> Date: ${new Date()} </p>
              
            `;
    const historyContainer = document.getElementById("history-list");

    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    abc.showModal();
    const totalHave = Math.abs(myUpdatedBalance - input);

    document.getElementById("main-balance").innerText = `${totalHave}`;
  } else {
    alert("you have no money to added");
    return;
  }
});
// modal part two

// Donate part 2
document.getElementById("donate-btn-2").addEventListener("click", function () {
  const input = parseFloat(document.getElementById("input-value-2").value);
  const currentBalance = parseFloat(document.getElementById("feni").innerText);
  const myUpdatedBalance = parseFloat(
    document.getElementById("main-balance").innerText
  );

  if (isNaN(input) || input <= 0) {
    alert("Please type a valid number");
    return;
  }
  if (myUpdatedBalance >= input) {
    const totalDonate = input + currentBalance; //total donation
    document.getElementById(
      "feni"
    ).innerText = `${totalDonate} `;
    // history showing part

    const historyItem = document.createElement("div");
    historyItem.className =
      "text-left border border-2 border-gray-400 lg:px-20 lg:py-10  px-4 py-5 w-11/12 mx-auto bg-gradient-to-r from-indigo-100 from-5% via-sky-100 via-20% to-emerald-100 to-30% my-5";
    historyItem.innerHTML = `
           ${totalDonate} Taka is dontated for famine-2024 at feni ,at Bangladesh
            <p class="text-xl text-black"> Date : ${new Date()}</p>
            
          `;
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    abc.showModal();
    const totalHave = Math.abs(myUpdatedBalance - input);
    document.getElementById("main-balance").innerText = `${totalHave}`;
  } else {
    alert("you have no money to added");
    return;
  }
});

document.getElementById("donate-btn-4").addEventListener("click", function () {
  const input = parseFloat(document.getElementById("input-value-4").value);
  const currentBalance = parseFloat(document.getElementById("quota").innerText);
  const myUpdatedBalance = parseFloat(document.getElementById("main-balance").innerText);

  if (isNaN(input) || input <= 0) {
    alert("Please type a valid number");
    return;
  }
  if (myUpdatedBalance >= input) {
    const totalDonate = input + currentBalance; //total donation
    document.getElementById(
      "quota"
    ).innerText = `${totalDonate} `;
    // history showing part

    const historyItem = document.createElement("div");
    historyItem.className =
      "text-left border border-2 border-gray-400 lg:px-20 lg:py-10  px-4 py-5 w-11/12 mx-auto bg-gradient-to-r from-indigo-100 from-5% via-sky-100 via-20% to-emerald-100 to-30% my-5";
    historyItem.innerHTML = `
             ${totalDonate} Taka is dontated for famine-2024 at Qouta Movement ,at Bangladesh
              <p class="text-xl text-black"> Date : ${new Date()}</p>
              
            `;
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    abc.showModal();
    const totalHave = Math.abs(myUpdatedBalance - input);
    document.getElementById("main-balance").innerText = `${totalHave} `;
  } else {
    alert("you have no money to added");
    return;
  }
});

document.getElementById("donate-btn-5").addEventListener("click", function () {
  const input = parseFloat(document.getElementById("input-value-5").value);
  const currentBalance = parseFloat(document.getElementById("sylet").innerText);
  const myUpdatedBalance = parseFloat(document.getElementById("main-balance").innerText);

  if (isNaN(input) || input <= 0) {
    alert("Please type a valid number");
    return;
  }
  if (myUpdatedBalance >= input) {
    const totalDonate = input + currentBalance; //total donation
    document.getElementById(
      "sylet"
    ).innerText = `${totalDonate} `;
    // history showing part

    const historyItem = document.createElement("div");
    historyItem.className =
      "text-left border border-2 border-gray-400 lg:px-20 lg:py-10  px-4 py-5 w-11/12 mx-auto bg-gradient-to-r from-indigo-100 from-5% via-sky-100 via-20% to-emerald-100 to-30% my-5";
    historyItem.innerHTML = `
             ${totalDonate} Taka is dontated for famine-2024 at Moulvibaza ,at Bangladesh
              <p class="text-xl text-black"> Date : ${new Date()} </p>
              
            `;
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    abc.showModal();
    const totalHave = Math.abs(myUpdatedBalance - input);
    document.getElementById("main-balance").innerText = `${totalHave}`;
  } else {
    alert("you have no money to added");
    return;
  }
});
//  close the close confirmation tab
document.getElementById("close-toast").addEventListener("click", function () {
  abc.close();
});

// history tab functionality
const historySelect = document.getElementById("history-btn");
const donationSelect = document.getElementById("donation-btn");
const footer = document.getElementById("footer");
historySelect.addEventListener("click", function () {
  historySelect.classList.add(
    "bg-[#B4F461]",
    "font-bold",
    "px-6",
    "py-2",
    "rounded-lg",
    "text-black"
  );
  footer.style.backgroundColor = "bg-[#F9F7F3] ";
  historySelect.classList.remove(
    "text-gray-500",
    "border",
    "border-gray-600",
    "border-2"
  );
  donationSelect.classList.remove("bg-[#B4F461]", "font-bold");
  donationSelect.classList.add(
    "text-gray-500",
    "border",
    "border-gray-600",
    "border-2",
    "px-5",
    "py-2",
    "rounded-md",
    "font-semibold"
  );

  document.getElementById("main-part").classList.add("hidden");
  document.getElementById("history-show").classList.remove("hidden");
});
donationSelect.addEventListener("click", function () {
  donationSelect.classList.add(
    "bg-[#B4F461]",
    "font-bold",
    "px-6",
    "py-2",
    "rounded-lg",
    "text-black"
  );
  donationSelect.classList.remove(
    "text-gray-500",
    "border",
    "border-gray-500",
    "border-2"
  ),
    historySelect.classList.remove("bg-[#B4F461]", "font-bold");
  historySelect.classList.add(
    "text-gray-500",
    "border",
    "border-gray-600",
    "border-2",
    "px-5",
    "py-2",
    "rounded-md",
    "font-semibold"
  );
  document.getElementById("main-part").classList.remove("hidden");
  document.getElementById("history-show").classList.add("hidden");
});
