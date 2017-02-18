var SolarSystem = (function(oldSolarSystem){
	
	var spaceships = [];

		oldSolarSystem.getSpaceShips = function(){
			return spaceships;
		};
		oldSolarSystem.setSpaceShips = function(crafts){
			spaceships.push(crafts);
		};
		oldSolarSystem.wreckSpaceShips = function(){
			spaceships.pop();
		};

	return oldSolarSystem;

})(SolarSystem || {});