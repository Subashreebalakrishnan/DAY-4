var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send();
request.onload = function(){
var countrydata=JSON.parse(request.response);
for(let output of countrydata){
    console.log(output.name)
    console.log(output.region)
    console.log(output.subregion)
    console.log(output.population)   
}
}