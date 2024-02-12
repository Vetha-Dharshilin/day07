// Array Method

//a.Get all the countries from asia continent / region using filter function

var request = new XMLHttpRequest ();

request.open("Get" , "https://restcountries.com/v3.1/all");

request.send();

request.onload = function(){
    
  var data=JSON.parse(this.response);
 var casia=data.filter((x)=>x.region==='Asia');
console.log(casia);
    
}

//b. get all the countries with a population of less than 2lakhs using filter function

var request1 = new XMLHttpRequest();

request1.open("GET" , "https://restcountries.com/v3.1/all");

 request1.send();

 request1.onload = function(){
  var result1 = JSON.parse(request1.response);
 var pop = result1.filter((element) =>{
 return element.population<200000 ;
 })
  console.log(pop);
 }

 //c. print all the following details name , capital,flags,using forEach function

  var request2 = new XMLHttpRequest();

 request2.open("GET" ,"https://restcountries.com/v3.1/all" );

request2.send();
request2.onload = function(){
 var result2 = JSON.parse(request2.response);
 result2.forEach(element => {
    console.log(element.name);
  console.log(element.capital);
console.log(element.flag);      
});
}

  // d.print the total population of countries using reduce function

var request3 = new XMLHttpRequest();

 request3.open ("GET" , "https://restcountries.com/v3.1/all");

request3.send();
request3.onload = function(){
 var result3 = JSON.parse(request3.response);
 var total = result3.reduce((acc,curr) => {
   return acc + curr.population;
},0) ;
console.log(total);
    
}

  //e. print the country that uses US dollars as currency

 var request4 = new XMLHttpRequest();

request4.open ("GET" , "https://restcountries.com/v3.1/all");

request4.send();
request4.onload = function(){
 var result4 = JSON.parse(request4.response);
var currency = result4.filter((element) => element.currencies && element.currencies.USD)
console.log(result4);       
          
}