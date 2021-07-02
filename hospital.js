const HOSPTIAL_API_KEY = "8dbafee77cf449d7b552493a8bdacde7";

function createTable(AnimalHospitalTable) {
  const table = document.querySelector(".hospital__table");
  const len = AnimalHospitalTable.length;

  let tr = document.createElement("tr");
  let td = document.createElement("td");

  for (let i = 0; i < len; i++) {
    td.innerText = i + 1;
    tr.appendChild(td);
    td = document.createElement("td");
    for (let j = 0; j < 4; j++) {
      td.innerText = AnimalHospitalTable[i][j];
      tr.appendChild(td);
      td = document.createElement("td");
    }
    table.appendChild(tr);
    tr = document.createElement("tr");
  }
}

function DataPreprocess(json) {
  const AnimalhosptlInfo = json.Animalhosptl[1]["row"];
  let AnimalHospitalTable = [];

  for (let i = 0; i < 10; i++) {
    if (AnimalhosptlInfo[i].BSN_STATE_NM === "정상") {
      AnimalHospitalTable.push([
        AnimalhosptlInfo[i].SIGUN_NM,
        AnimalhosptlInfo[i].BIZPLC_NM,
        AnimalhosptlInfo[i].LOCPLC_FACLT_TELNO,
        AnimalhosptlInfo[i].REFINE_LOTNO_ADDR,
      ]);
    }
  }
  console.table(AnimalHospitalTable);
  createTable(AnimalHospitalTable);
}

function getHospitalInfo() {
  fetch(
    `https://openapi.gg.go.kr/Animalhosptl?KEY=${HOSPTIAL_API_KEY}&Type=${"json"}&pIndex=${1}&pSize=${10}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.dir(json);
      DataPreprocess(json);
    });
}

function init() {
  getHospitalInfo();
}

init();
