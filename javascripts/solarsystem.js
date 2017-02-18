//iife notation is conventionally paschall case
var SolarSystem = (function(){
	var dwarfPlanets = ["Pluto"];

	return {
		getDwarfPlanets: function (){
			return "they are rejects";
		},
		setDwarfPlanets: function (lumpOfRcok){
			dwarfPlanets.push(lumpOfRock);
		}
	}
})();

// console.log("Planets: ", SolarSystem.getPlanets());
// console.log("Planets with people: ", SolarSystem.getPlanetsLandedPeopleOn());
// SolarSystem.setSpaceShips("Red Dragon");
// SolarSystem.setSpaceShips("Apollo 11");
// SolarSystem.setSpaceShips("Voyager");
// console.log("Space Crafts ", SolarSystem.getSpaceShips());

















