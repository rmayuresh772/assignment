// Create an array of strings of city names.

let city = ['Pune','Mumbai','Nagpur','Panvel','Thane'] 

///////////////////////////////////////////////////////////////////////////////////////
 
// From this array, create another array with all city names starting with 'P'.

var filterCities = city.filter(Pcity => { 
         return Pcity[0] === 'P';
})
 console.log(filterCities);

/////////////////////////////////////////////////////////////////////////////////////////

// Push additional city names to the array using push()

var newCity = city.push('Goa','Indore');
console.log(city)

//////////////////////////////////////////////////////////////////////////////////////////

// Create another array of string and add one to another.

let city2 = ['Bengaluru','kolkata','Chennai','Delhi']
const cities = city.concat(city2);
 console.log(cities);
 
 ///////////////////////////////////////////////////////////////////////////////////////////////

//  Sort this array in descending order.
 
city.sort();
const sort = city.reverse();

console.log(sort);

//////////////////////////////////////////////////
