// (function(){

// var urlBase = 'http://api.openweathermap.org/data/2.5/'

//     $.get('http://swapi.co/api/people/?page=2')
//      .done(function(response){
//         console.log(response.places[0]['place name']);
//     });
//     console.log('Not waiting for the response.');
// })();

var people=[];
getData('http://swapi.co/api/people/', people, function(){
    console.log(people);
});

function getData(url, list, callback){
    $.get(url, function (response){
        people = people.concat(response.results);
        if(response.next){
            getData(response.next, people, callback);
        }else{
            callback();
        }
    });
}
