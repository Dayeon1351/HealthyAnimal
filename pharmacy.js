const PHARMACY_API_KEY = "a3b672b67e6841e09b8d2038b636b5f4";

function getPharmacyInfo(){
    fetch(`https://openapi.gg.go.kr/AnimalPharmacy?KEY=${PHARMACY_API_KEY}&Type=${"json"}&pIndex=${1}&pSize=${10}`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        console.dir(json);
    });
}

function init(){
    getPharmacyInfo();
}

init();