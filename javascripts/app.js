// Rover Object Goes Here
// ======================

// Rover grid is 10x10
var grid = [
    ["R", null, null, null, null,null, null, null, null, null],
    [null, null, null, null, null,null, null, null, null, null],
    [null, null, null, null, null,null, null, null, null, null],
    [null, null, null, null, null,null, null, null, null, null],
    [null, null, null, null, null,null, null, null, null, null],
    [null, null, null, null, null,null, null, null, null, null],
    [null, null, null, null, null,null, null, null, null, null],
    [null, null, null, null, null,null, null, null, null, null],
    [null, null, null, null, null,null, null, null, null, null],
    [null, null, null, null, null,null, null, null, null, null]
  ];
  
  // Rover start specification
  var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [0,0],
  }
  // ======================
  // LEFT - Function which turns the rover left
  
  function turnLeft(rover){
    switch (rover.direction) {
      case "N":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "N";
        break;
    }
    console.log("turnLeft was called!");
  }
  
  // RIGHT- Function which turns the rover right
  
  function turnRight(rover){
     switch (rover.direction) {
      case "N":
        rover.direction = "E";
        break;
      case "W":
        rover.direction = "N";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "S";
        break;
    }
    console.log("turnRight was called!");
  }
  
  // FORWARD- Function which moves the rover forward
  
  function moveForward(rover){
    console.log("moveForward was called")
    switch (rover.direction) {
      case "N":
        rover.y -= 1;
        break;
      case "E":
        rover.x += 1;
        break;
      case "S":
        rover.y += 1;
        break; 
      case "W":
        rover.x -= 1;
        break; 
    }
    outofGrid("Back");
    console.log("moveForward was called")
    console.log("Current rover position " + [rover.x, rover.y]);
  }
  
  // BACKWARDS- Function which moves the rover backwards
  
  function moveBackwards(rover){
    switch(rover.direction) {
      case "N":
        rover.y += 1;
        break;
      case "E":
        rover.x -= 1;
        break;
      case "S":
        rover.y -= 1;
        break; 
      case "W":
        rover.x += 1;
        break; 
    }
    outofGrid("Foward");
    console.log("moveBackwards was called")
    console.log("Current rover position " + [rover.x, rover.y]);
  }
    function outGrid(){
    if (rover.x < 0 || rover.x >=10){
      console.log("Rover is out of grid");
      
    }
    if(rover.y <= 0){
      console.log("Rover is out of grid");
      
    }
  }
  
  //Rover commands
  
  function commands(rover){
    function updateTravelLog(rover) {
      var addTravelLog = rover.travelLog.push([rover.x, rover.y]);
    for (var i = 0; i < commands.length; i++){
      var selectDirection = directions [i];
      switch (selectDirection){
      case "F":
        moveForward(rover);
        break;
      case "R":
        turnRight(rover);
        break;
      case "B":
        moveBackwords(rover);
        break;
      case "L":
         turnLeft(rover);
         break;
      default: 
      console.log("SelectDirection", "Add travelLog");
      break;
     }
    }
  }
  }
  
  