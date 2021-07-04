const PHARMACY_API_KEY = "a3b672b67e6841e09b8d2038b636b5f4";

function PharmacyCreateTable(AnimalPharmacyTable) {
  const table = document.querySelector(".pharmacy__table");
  const len = AnimalPharmacyTable.length;

  let tr = document.createElement("tr");
  let td = document.createElement("td");

  for (let i = 0; i < len; i++) {
    td.innerText = i + 1;
    tr.appendChild(td);
    td = document.createElement("td");
    for (let j = 0; j < 4; j++) {
      td.innerText = AnimalPharmacyTable[i][j];
      tr.appendChild(td);
      td = document.createElement("td");
    }
    table.appendChild(tr);
    tr = document.createElement("tr");
  }
}

function PharmacyDataPreprocess(json) {
  const AnimalPharmacyInfo = json.AnimalPharmacy[1]["row"];
  let AnimalPharmacyTable = [];

  for (let i = 0; i < 1000; i++) {
    if (AnimalPharmacyInfo[i].BSN_STATE_NM === "정상") {
      AnimalPharmacyTable.push([
        AnimalPharmacyInfo[i].SIGUN_NM,
        AnimalPharmacyInfo[i].BIZPLC_NM,
        AnimalPharmacyInfo[i].LOCPLC_FACLT_TELNO,
        AnimalPharmacyInfo[i].REFINE_LOTNO_ADDR,
      ]);
    }
  }
  // console.table(AnimalPharmacyTable);
  PharmacyCreateTable(AnimalPharmacyTable);
}

function getPharmacyInfo() {
  fetch(
    `https://openapi.gg.go.kr/AnimalPharmacy?KEY=${PHARMACY_API_KEY}&Type=${"json"}&pIndex=${1}&pSize=${1000}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.dir(json);
      PharmacyDataPreprocess(json);
    });
}

function init() {
  getPharmacyInfo();
}

init();
