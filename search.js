const hospitalButton = document.querySelector(".hospitalBtn");
const pharmacyButton = document.querySelector(".pharmacyBtn");

function handleDiplay(event) {
    const currentTarget = event.currentTarget.className;
    const main = document.querySelector(".main");

    main.style.display = "none";
    if (currentTarget === hospitalButton.className) {
        const hospital = document.querySelector(".hospital");
        hospital.style.display = "block";
    } else {
        const pharmacy = document.querySelector(".pharmacy");
        pharmacy.style.display = "block";
    }
}

if (hospitalButton) {
    hospitalButton.addEventListener("click", handleDiplay);
}

if (pharmacyButton) {
    pharmacyButton.addEventListener("click", handleDiplay);
}