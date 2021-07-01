const HOSPTIAL_API_KEY = "8dbafee77cf449d7b552493a8bdacde7";

function createTable(json){
    //병원이름
    console.log(json.Animalhosptl[1]["row"][0].BIZPLC_NM);
}

function getHospitalInfo(){
    fetch(`https://openapi.gg.go.kr/Animalhosptl?KEY=${HOSPTIAL_API_KEY}&Type=${"json"}&pIndex=${1}&pSize=${10}`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        console.dir(json);
        createTable(json);
    });
}

function init(){
    getHospitalInfo();
}

init();