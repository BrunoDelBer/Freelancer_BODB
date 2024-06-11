// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

// var _ = require('underscore');

// var evens = _.reject([1, 2, 3, 4, 5, 6], (num) => num % 2 != 0);

// console.log("Evens");
// console.log(evens);


// Your last Python3 code is saved below:
// # Given a list of employees with their scores arranged in the order of Employee ID's. A manager has to assemble a team for a new project.

// # Every member of the team is chosen using the following rules:

// # Only an employee in the `first or last M available` Employee IDs may be chosen.

// # Higher-scoring employees should be chosen over lower-scoring ones.

// # If there is a tie, the employee with the lower Employee ID is selected.

// # Once selected, the employee is unavailable for the next round.

// # Return an array of the Employee IDs to denote the selected team.



// # function getTeam(employeeScores, teamSize, M) => Array of Employee ID's

// # Example 1: 
// # score = [17, 2, 10, 12, 27, 2, 11, 20, 8]
// # team_size = 3
// # m = 4
// # Answer - [7, 4, 0]

// # Example 2:
// # score = [8, 17, 10, 18, 1, 5, 3, 17, 16, 14]
// # team_size = 4
// # m = 4
// # Answer - [3,1,7,8]

// # Example 3:
// # score = [8, 1, 10, 17, 6, 4, 9, 19]
// # team_size = 5
// # m = 3
// # Answer - [7, 2, 3, 6, 0]
  
var mayor = 0;
var index = 0;
  
function getTeam(employeeScores, teamSize, M){
  let scoresIndex = [];
  let team = 0;
  let i = 0;
  let group = m;
  while(teamSize - 1 != team){

  for( i ; i < group ; i++){
       if(employeeScores[i] > mayor){
          mayor = employeeScores[i];
          index = i;
       }
  }
   group += m;
   console.log("for values")
   console.log(i, group);
   console.log('Max score now')
  console.log(mayor)
  console.log(index)
   scoresIndex.push(index);
   team++;
   mayor = 0;
  }
  
  for(let i = employeeScores.length - M; i < employeeScores.length ; i++){
       if(employeeScores[i] > mayor){
          mayor = employeeScores[i];
          index = i;
       }
  }
  console.log('Max score now')
  console.log(mayor)
  console.log(index)

  scoresIndex.push(index);
  console.log('Scores List')
  console.log(scoresIndex)
}
// let score = [17, 2, 10, 12, 27, 2, 11, 20, 8]
// let team_size = 3
// let m = 4

let score = [8, 17, 10, 18, 1, 5, 3, 17, 16, 14]
let team_size = 4
let m = 4

getTeam(score, team_size, m)
