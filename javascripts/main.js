//IIFE INTRO

var outside = "global";

function scopeStuff() {
	var inside = "local";
	//console.log("outside from inside the function", outside); //"global"
	//console.log("inside from inside the function", inside); //"local"
}

//console.log("outside from outside the function", outside); //"global"
//console.log("inside from outside the function", inside); //"undefined"

scopeStuff();


// var global_base = 500;
// function throwAway() {
// 	global_base += 500;
// 	console.log(global_base);
// }
// throwAway();

// // document.getElementById('cat').addEventListener("click", throwAway);
// //TO MAKE THE FUNCTION RUN WITHOUT CALLING IT... ADD ()...
// (function throwAway() {
// 	global_base += 500;
// 	console.log(global_base);
// })();

var cats = (function(){
	var color = "black";
	var type = "tiger";

	return 8; //must put in "return" to bring out the value of the function from private to global -- can only return 1 value BUT you can return an object...below is the example (ln 39)
})();
console.log(cats.color); //will return an error of "color undefined" -- color and type vars are private variables and cannot be called outside of the function

var cats = (function(){
	var color = "black";
	var type = "tiger";

	return {
		getColor: function(){
			return color;
		},
		getType: function(){
			return type;
		},
		setColor: function(newColor){
			color = newColor;
		}

	};
})();
//console.log(cats.getColor());//will return the color "black"






