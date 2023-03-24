/*
Winter is coming! You and your family have to prepare, but you have an annoying problem. When checking your clothing drawers, you find that all of your gloves are mismatched and unorganized. You don't want to seem silly by wearing two different gloves, so you'll have to find some sort of way to match up each pair. 

Write an algorithm that accepts an array of strings, where each string represents an individual glove and its color. Your algorithm should return an object that contains how many pairs of gloves there are for each color, as well as how many leftover single gloves there are. 

For example:
If you were given the following input: 
["red", "green", "red", "blue", "blue"]
Your algorithm would return:
{
    red: 1,
    blue: 1,
    leftovers: 1 
}
Since there are 2 single red gloves, which combine into a pair, and 2 single blue gloves, which also combine into a pair. However, the 1 single green glove does not have a corresponding match, so it is tallied in the "leftovers" key-value pair. 

If you were given the following input: 
["red", "red", "red", "blue", "blue", "blue", "black", "black", "black"]
Your algorithm would return: 
{
    red: 1,
    blue: 1,
    black: 1,
    leftovers: 3
}
Since there is exactly 1 pair each for red, blue, and black gloves, and 3 leftover single gloves. 
*/

// Write your code below: 

function countGloves(glovesArray) {
    let gloves = {};
  
    for (let i = 0; i < glovesArray.length; i++) {
      let color = glovesArray[i];
      if (!gloves[color]) {
        gloves[color] = 1;
      } else {
        gloves[color]++;
      }
    }
  
    let leftovers = 0;
  
    for (let color in gloves) {
      if (gloves[color] % 2 !== 0) {
        gloves[color]--;
        leftovers++;
      }
    }
  
    gloves['leftovers'] = leftovers;
  
    return gloves;
  }


  //or

  let glovesArray = ["red", "green", "red", "blue", "blue"];
let result = countGloves(glovesArray);
console.log({
  red: 1,
  green: 1,
  blue: 1,
  leftovers: 1
});

function countGloves(glovesArray) {
  let gloves = {};

  for (let i = 0; i < glovesArray.length; i++) {
    let color = glovesArray[i];
    if (!gloves[color]) {
      gloves[color] = 1;
    } else {
      gloves[color]++;
    }
  }

  let leftovers = 0;

  for (let color in gloves) {
    if (gloves[color] % 2 === 0) {
      gloves[color] /= 2;
    } else {
      gloves[color] = Math.floor(gloves[color] / 2);
      leftovers++;
    }
  }

  gloves['leftovers'] = leftovers;

  return gloves;
}