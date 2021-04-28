

let jsonResults;
let env_variable;

var xmlhttp = new XMLHttpRequest();
var url = "/";
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        env_variable = xmlhttp.responseText.key;   
        // do something with the users variable that was passed by the routes

    }
};

xmlhttp.open("GET", url, true);
xmlhttp.setRequestHeader('Accept', 'application/json');
xmlhttp.send();

function getData() {
    console.log('hello!');
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=' + env_variable)                
    .then(response => response.json())
    .then(json => saveData(json));
};

function saveData(json){
    jsonResults = Object.keys(json).map((key) => [key, json[key]]);
    jsonResults.map((value, index, arr) => {
        console.log(value);
        console.log(index);
        console.log(arr);
        console.log(checkIndex(index));
    });
    console.log(jsonResults);
};


    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector("#myButton").addEventListener("click", getData); 
     });




// class Robot{
//     constructor(name, type){
//         this.name = name;
//         this.type = type;
//         this.greeting = function(){
//             return "I'm " + this.name + " I'm a " + this.type + ".";
//         }
//     }
// }

// function getData(){
//     fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=' + process.env.ALPHA_VANTAGE_KEY)
//     .then(response => response.json())
//     .then(json => saveData(json));
// }

// function saveData(json){
//     jsonResults = json;
//     console.log(jsonResults);
// }

// let insocAlbums = {'first': 'Information Socieity', 'second': 'Hack', 'third': 'Peace and Love Inc.'};
// function groupBand(albums){
//     console.table(albums);
//     //console.group("Album List");
//     //console.log('first:', albums.first);
//     //console.log('second:', albums.second);
//     //console.log('third:', albums.third);
//     //console.groupEnd();
    
//     //console.dir(document);
// }

// function myCount(evt){
//     console.dirxml(evt);
// }



// document.addEventListener("DOMContentLoaded", () => {
//     //groupBand(insocAlbums);
//     document.querySelector("#myButton").addEventListener("click", getData); 
//  });


// class BendingUnit extends Robot{
//     constructor(name, type){
//         super(name, type);
//     }
//     primaryFunction(){
//         console.log(this.name + " bends things");
//     }
// }

//const array1 = [1, 2, 3];
//const array2 = Object.assign([...array1], {3: 4});
//console.log(array2);