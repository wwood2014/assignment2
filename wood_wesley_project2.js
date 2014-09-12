/*
Wesley Wood
SDI 201409
Project 2
*/

//Set Variables
	//String

var myName = "Wesley Wood"; //this variable contains a string referencing who I am
var work = "Emergency Dispatch Center"; // this variable shows where I work
var time = "10:40pm"; //this variable is the time the call happened
var closestUnit = "Medic 24"; // this variable shows the unit closest to the call
var fastestUnit = "Medic 22"; // this variable shows what unit would've had the fastest response
var supervisor = "Medcom Supervisor"; // this variable represents the paramedic supervisor needed to be contacted for major emergencies
var ra = "Respiratory Arrest"; // this variable is code for where someone's airway is blocked
var patients = "5"; // Number variable- this variable equals the number of patients in the story
var distance = true; // Boolean variable- this runs if the distance is true
var speed = false; // Boolean variable- this runs if distance is false
var say = function(message) {console.log(message);};// simplified console

// Functions
// Prompt
// Procedure
var name = function () {
    var myPrompt = prompt("Did I send" + closestUnit + "or" + fastestUnit + "?"); {
        if (myPrompt === true) {
            //output 1 if true
            console.log("You are correct, Medic 24 was sent!")
        } else {
            if (myPrompt === false) {
                //output 2 if false
                console.log("You are incorrect, I sent Medic 24.")
                // other answer will return a different answer
            } else {
                console.log("Are you even reading my story?")}
            }; //else if
        }; // my Prompt
    }; // finish function
    


    
