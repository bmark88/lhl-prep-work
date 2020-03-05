const blocksAway = function(directions) {
  let northCount = 0;
  let southCount = 0;
  let eastCount = 0;
  let westCount = 0;
  let finalPosition = {
    east: 0,
    north: 0
  };
  let currentDirection = '';
  let previousTurn = '';

  if (currentDirection === '' && typeof directions[0] === 'string') {
    previousTurn = directions[0];
    if (previousTurn === 'right') {
      currentDirection = 'east';
    } else if (previousTurn === 'left') {
      currentDirection = 'north';
    }
  }
  
  for (let i = 1; i < directions.length; i++) {
    if (typeof directions[i] === 'number') {
      if (currentDirection === 'north') {
        northCount += directions[i];
      } else if (currentDirection === 'south') {
        southCount += directions[i];
      } else if (currentDirection === 'east') {
        eastCount += directions[i];
      } else if (currentDirection === 'west') {
        westCount += directions[i];
      }
    } else if (typeof directions[i] === 'string') {
      if (currentDirection === 'north' && directions[i] === 'right') {
        currentDirection = 'east';
      } else if (currentDirection === 'north' && directions[i] === 'left') {
        currentDirection = 'west';
      } else if (currentDirection === 'south' && directions[i] === 'right') {
        currentDirection = 'west';
      } else if (currentDirection === 'south' && directions[i] === 'left') {
        currentDirection = 'east';
      } else if (currentDirection === 'east' && directions[i] === 'right') {
        currentDirection = 'south';
      } else if (currentDirection === 'east' && directions[i] === 'left') {
        currentDirection = 'north';
      } else if (currentDirection === 'west' && directions[i] === 'right') {
        currentDirection = 'north';
      } else if (currentDirection === 'west' && directions[i] === 'left') {
        currentDirections = 'south';
      }
    }
  }
  finalPosition.east = eastCount - westCount;
  finalPosition.north = northCount - southCount;

  return finalPosition
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));