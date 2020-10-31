// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) { 
        return response.json() }).then(function(json) {
        let missionTarget = document.getElementById("missionTarget");
        let i = Math.floor(Math.random() * json.length); 
        let planets = "";         
            planets = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[i].name}</li>
                  <li>Diameter: ${json[i].diameter}</li>
                  <li>Star: ${json[i].star}</li>
                  <li>Distance from Earth: ${json[i].distance}</li>
                  <li>Number of Moons: ${json[i].moons}</li>
               </ol>
               <img src="${json[i].image}"> 
           `;
           missionTarget.innerHTML = planets;    
        });        

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();      
      }  
      
      if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false) {
            alert("Ivalid input type! Input must be a string.");
            event.preventDefault();
      }
      
      if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true) {
               alert("Ivalid input type! Input must be a number.");
               event.preventDefault();
      }      
      
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoSatus = document.getElementById("cargoStatus"); 
      let launchStatus = document.getElementById("launchStatus");

      if (pilotName.value !== "") {   
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
      }

      if (copilotName.value !== "") {
         copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch.`;
      }
      
      if (fuelLevel.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = `There is not enough fuel for the journey.`;
         launchStatus.innerHTML = `Shuttle not ready for launch.`;
         launchStatus.style.color = "red";
      }

      if (cargoMass.value > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`;
         launchStatus.innerHTML = `Shuttle not ready for launch.`;
         launchStatus.style.color = "red";
      }

      if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = `Shuttle is ready for launch.`;
         launchStatus.style.color = "green";
         fuelStatus.innerHTML = "Fuel status okay.";
         cargoStatus.innerHTML = "Cargo status okay.";
      }
   
});
});