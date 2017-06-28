// Creates a new array with the results of calling a provided function on every element of an array.
var forecast = [
{day: 'Monday', sun: true, humidity: 10},
{day: 'Tuesday', sun: false, humidity: 100},
{day: 'Wednesday', sun: true, humidity: 100},
{day: 'Thursday', sun: false, humidity: 25},
{day: 'Friday', sun: true, humidity: 100},
{day: 'Saturday', sun: false, humidity: 10},
{day: 'Sunday', sun: true, humidity: 10}
];

// If I want to save only the humidity in other array 
// I can use the loop

var humid = [];
for(var i = 0; i < forecast.length; i++) {
	humid.push(forecast[i].humidity); // save the humidity in new array.
}

console.log('humid', humid);

// We can use the .map more simple
var humid2 = forecast.map(function(item){
	return item.humidity;
});

console.log('humid2', humid);