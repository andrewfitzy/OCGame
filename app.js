/*
 * Module dependencies
 */
var http = require('http')
  , express = require('express')
  , fs = require('fs')
  , path = require("path")
  , p = "./assets"

/*
 * variables
 */ 
var fileList = []
var app = express()
var myObj
var catCount = 0
var answerCount = 0

/*
 * Initialise the file list
 */
fs.readdir(p, function (err, files) {
	if (err) {
		throw err
	}
	files.map(function (file) {
		return path.join(p, file)
	}).filter(function (file) {
		return fs.statSync(file).isFile()
	}).forEach(function (file) {
		fileList.push(file)
	});
});

/*
 * function that processes a word into a game word
 */
var processWord = function(inText) {
	var result = []
	inText = inText.trim()
	var spaceCount = 0
	var character;
	for(i= 0;i < inText.length;i++) {
		character = inText[i]
		//count number of spaces
		if(" " == character) {
			spaceCount++;
		} else if(!isVowel(character) && isLetter(character)) { //remove all vowels
			//append to result
			result.push(character);
		}
	}
	for(i= 0;i < spaceCount;i++) {
		//insert a space into a random index.
		result.splice(Math.floor(Math.random() * result.length),0," ")
	}
	return result.join("")
}

/*
 * Check whether the letter is a vowel
 */
var isVowel = function(character) {
	var isVowel = false
	//evaluate in order of character popularity: http://en.wikipedia.org/wiki/Letter_frequency
	if("E" == character || "A" == character || "O" == character || "I" == character || "U" == character) {
		isVowel = true
	}
	return isVowel
}

/*
 * Check whether the letter is a letter i.e. A-Z
 */
var isLetter = function(character) {
	var isLetter = false
	if(character >= "A" && character <= "Z") {
		isLetter = true
	}
	return isLetter
}

/*
 * Check whether the letter is a letter i.e. A-Z
 */
var getNextCategory = function() {
	if(fileList.length > 0) {
		//select random file
		var rndIndex = Math.floor(Math.random() * fileList.length)
		var data = fs.readFileSync(fileList[rndIndex])
		//var removable = fileList.splice(rndIndex, 1);
		try {
			myObj = JSON.parse(data)
		}
		catch (err) {
			console.log('There has been an error parsing JSON file.')
			console.log(err);
		}
	}
}

/*
 * Define the directory in which to store static content to be served
 */
app.use(express.static(__dirname + '/static'));

/*
 * Deal with a call to the word path
 */
app.get('/word', function(req, res) {
	if(myObj == null || answerCount == 5) {
		getNextCategory()
		answerCount = 0
	}
    var rndIndex = Math.floor(Math.random() * myObj.answers.length)
	var answer = myObj.answers[rndIndex].toUpperCase()
	//var removable = myObj.answers.splice(rndIndex, 1);
	var scrambledWord = processWord(answer)
	
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	})
	res.end('_testcb(\'{"category": "' + myObj.display + '", "answer": "' + answer + '", "scramble": "' + scrambledWord + '"}\')')
	answerCount++
});

app.listen(8000)