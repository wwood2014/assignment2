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
var dH = 15; // number variable- this variable represents miles driven to hospital
var distance = true; // Boolean variable- this runs if the distance is true
var speed = false; // Boolean variable- this runs if distance is false
var say = function(message) {console.log(message);};// simplified console
var minutesTotal = 15;

// Functions
// Prompt
// Procedure
var name = function () {
    var myPrompt = prompt("Did I send" + closestUnit + "or" + fastestUnit + "?"); {
        if (myPrompt === "Medic 24") {
            //output 1 if true
            console.log("You are correct, Medic 24 was sent!")
        } else {
            if (myPrompt === "Medic 22") {
                //output 2 if false
                console.log("You are incorrect, I sent Medic 24.")
                // other answer will return a different answer
            } else {
                console.log("Are you even reading my story?")}
            }; //else if
        }; // my Prompt
    }; // finish function
    
    
// Confirm Argument
// Boolean Function

var affirmative = function(myArgument1) {
    if (myArgument1 === true) {
        say("The medic unit is 5 miles away.")
        return myArgument1;
        } else {
            if (myArgument1 === false) {
                //while-loop
                var milesTraveled = 6
                while (milesTraveled > 0) {
                say("It seems like it takes forever driving" + milesTraveled + "this many miles more to a job.")
                milesTraveled--;
                }; //while
                    say("We're almost there.")
                    return milesTraveled;
            }; //if milesTraveled = false
        }; //else
}; //End of confirmation function


//Number Function
//For-Loop

var totalDistance = function (dH) {
    var miles = 
        for (distance = (miles + dh); distance > 0; distance--) {
            say( distance + "transporting a patient requires a ton of driving")
        }; //close loop
        
    return time;

    }; //close number function
    
//string function

var thisHappened = function(value1, value2) {
    
    var cause = "driving to emergency and to hospital,";
    var totalOutcome = (cause + value1 + "," + "and" + value2);
//console.log(totalOutcome)
return totalOutcome
    // close function
    
    
Main Code

say("This patient went into respiratory arrest.")
say("When a person goes into respiratory arrest, CPR needs to be started.")
say("I had to dispatch a Medcom Supervisor to assist the Paramedics with a traumatic situation, in addition to driving" + totalDistance + "miles during this emergency")


systemUp()

var myArgument1 = confirm ("Will the next call me shorter driving distance?")


var affirmative2 = affirmative(myArgument1) // boolean condition for affirmative function
    if (affirmative2 === true) {
        say("It'll be a shorter distance.")
    } else {
        say ("Better luck next time.")
    };
    
// added a confirm
var ta = confirm ("Why does it take so long to drive?")
    if (ta === true) {
        var timeDriven = minutesTotal(totalDistance)
            say(timeDriven + "minutes! Yeah we're taking a long time.")
    } else {
        
        say("This is draining me.")
        var timeDriven = minutesTotal(totalDistance)
        say(timeDriven + "minutes! Yeah we're taking a long time.")
    }// and else
    
    
    
thisHappened(value1, value2)

//added additional confirm to go with the theme
var finish = confirm("Can you guess the outcome?")
    if (finish === true) {
        var string = thisHappened(value1, value2)
        say(string)
    } else {
        say("Well this has been a long story.")
        var string = thisHappened(value1, value2)
        say(string);
    }; //finish else

};