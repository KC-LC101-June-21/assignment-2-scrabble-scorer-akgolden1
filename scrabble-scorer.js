
// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
//let newPointStructure;
/* need to replace this with a loop
const newPointStructure ={


1:[a],
3:[b],
3:[c],
2:[d],
1:[e],
4:[f],
2:[g],
4:[h],
1:[i],
8:[j],
5:[k],
1:[l],
3:[m],
1:[n],
1:[o],
3:[p],
10:[q],
1:[r],
1:[s],
1:[t],
1:[u],
4:[v],
4:[w],
8:[x],
4:[y],
10:[z]
};

*/



const vowelsOrConsonants = {

  3: ['A', 'E', 'I','O', 'U', 'Y'],
  1: ['B', 'C', 'D','F', 'G', 'H','J', 'K', 'L','M', 'N', 'O','P', 'Q', 'R','S', 'T', 'V','W', 'X', 'Z']
};


const scoringAlgorithms = [
  {
     "Name": "simpleScore",
      "Description": "Each letter is worth 1 point.",
       "scoringFunction": simpleScore
  },
  {
     "Name": "vowelBonusScore",
      "Description": "Vowels are 3 pts, consonants are 1 pt.",
       "scoringFunction": vowelBonusScore
  },


  {
     "Name": "scrabbleScore",
      "Description": "The traditional scoring algorithm.",
       "scoringFunction": scrabbleScore
  }

  //COMMENTING OUT OLD GAME TO TEST
  /*
  {
     "Name": "oldScrabbleScorer",
      "Description": "The traditional scoring algorithm.",
       "scoringFunction": oldScrabbleScorer 
  }
  */
];

function initialPrompt() {
  let word = input.question ("Let's play some scrabble! Enter a word to score:");
  //console.log ("you entered" + word);
   //console.log("Let's play some scrabble! Enter a word to score:");
  
     return word;
};



function oldScrabbleScorer(userWord) {

	let word = userWord.toUpperCase();
    //console.log ("Now I'm in oldscrabble and the userWord is " +  word);
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			//letterPoints += `Points for '${word[i]}': ${pointValue}\n`
       letterPoints ++;
 
		 }

	  }
           
 	}
   console.log  (`Score for '${word}' : ${letterPoints}\n`);
   //console.log (letterPoints);
	return letterPoints;
 
 }
  

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //



let userWord;

//let simpleScore;

//let vowelBonusScore;

//let scrabbleScore;

//Each object should contain three keys: name, description, and scoringFunction.
//Are we calling the function from within the array?


function simpleScore(userWord){

let word = userWord.toUpperCase();
    //console.log ("Now I'm in simpleScoreDcrabble and the userWord is " +  word);
	let letterPoints = "";
  //let simplePointValue = 0;
 
	for (let i = 0; i < word.length; i++) {
 
 //simplePointValue++;
			//letterPoints += `Points for '${word[i]}': ${simplePointValue}\n`
       letterPoints++;
    	}
      console.log  (`Score for '${word}' : ${letterPoints}\n`);
	return letterPoints;
 
};

function vowelBonusScore(userWord){

let word = userWord.toUpperCase();
    //console.log ("Now I'm in vowelBonus and the userWord is " +  word);
	let letterPoints=0; 
	for (let i = 0; i < word.length; i++) {
 	  for (const pointValue in vowelsOrConsonants ) { 
		 if (vowelsOrConsonants[pointValue].includes(word[i])) {
		//	letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      letterPoints += Number(pointValue);
         //letterPoints += Number(vowelsOrConsonants[pointValue]);
        
		 }
    }
  }
 console.log  (`Score for '${word}' : ${letterPoints}\n`);
  
	return letterPoints;
}

	//we may not need to pass the algorithm

function scorerPrompt(scoringAlgorithm) {

  //we're not actually scoring it here.
 
userScrabbleChoice = input.question ("Which scoring algorithm would you like to use? 0 - Simple: One point per character 1 - Vowel Bonus: Vowels are worth 3 points; 2 - Scrabble: Uses scrabble point system Enter 0, 1, or 2: "
);
  
 /*
  //console.log ("Algorithm Name: " +  scoringAlgorithms[userScrabbleChoice].Name);
    if (Number(userScrabbleChoice) === 0){
     //console.log ("In the scoring algorithm section of scorerprompt");
     scoringAlgorithms[0].scoringFunction(word);
   // console.log ("you chose" + scoringAlgorithms[0].scoringFunction);
   }
else if (Number(userScrabbleChoice) === 1){
     scoringAlgorithms [1].scoringFunction(word);
     //console.log ("you chose" + scoringAlgorithms[1].Name);
}

    else if (Number(userScrabbleChoice) === 2){
     scoringAlgorithms [2].scoringFunction (word);
    //call the function aligned with that number in ScoringAlgorithms.
    //maybe something like for userchoice =1, call scoring Algorithms . scoreFunction [i]
    //console.log ("you chose" + scoringAlgorithms[2].Name);

    }

else 
*/
///console.log ("I'm down here");
     return scoringAlgorithms[Number(userScrabbleChoice)];
     //we're returning an object.

}



function transform(oldPointStructure) {

  //console.log ("Now I'm in the transformed game");
  let scoresByLetter = {};//because this function will return an object

  //I want to look through every item in oldpointstructure to maybe pull the value of the key (letter) and then maybe store the value of that letter
  for(let score in oldPointStructure) {
  //for each value in that object
    let letters = oldPointStructure[score];//OldPointStructure returns this
    for (let i = 0 ; i < letters.length ; i++){
    //above line iterates through the length of the old oject and looks at the keys
    //I think I need to take the key and assign it to a value?
    //let key = oldPointStructure[score][i];
    //then add the key to the transformLowerCase object?
      scoresByLetter[letters[i].toLowerCase()] = Number(score);
    //we already told score what it is
    }  
    //return object with lowercase letters as keys. The value //for each key will be the points assigned to that letter
  }
  return scoresByLetter;
}

let newPointStructure =  transform(oldPointStructure);
//console.log(newPointStructure)

function scrabbleScore(userWord){

  let word = userWord.toLowerCase();//newPointStructure keys  are all lowercase.
    //console.log ("Now I'm in new ScrabbleScore and the userWord is " +  word);
  let letterPoints = 0;
  
 
	for (let i = 0; i < word.length; i++) {      
 
     // maybe a for loop here to see if the letters in the word are in the object?               
        letterPoints += Number((newPointStructure[word[i]]));  
       // Number(letterPoints);
        //console.log (typeof(letterPoints)); 
        //console.log(typeof(newPointStructure[word[i]]))
        //console.log (letterPoints);   
  }
     
      
 console.log  (`Score for '${word}' : ${letterPoints}\n`);
    
  	return letterPoints;
}

  

















function runProgram() {
   let currentWord = initialPrompt();
   let algorithmChoice = scorerPrompt();
 
   algorithmChoice.scoringFunction(currentWord);
   //returns an object
   //transform ();
   //oldScrabbleScorer(word);
  //simpleScore(word);
    
   //vowelBonusScore(word);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

