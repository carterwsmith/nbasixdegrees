//popular players for random
var newPlayers = [
    "Patrick Mahomes",
    "Justin Jefferson",
    "Justin Herbert",
    "Joe Burrow",
    "Chase Young",
    "Kyler Murray",
    "Nick Bosa",
    "Devin White",
    "Noah Fant",
    "Darnell Savage Jr.",
    "Daniel Jones",
    "Josh Jacobs",
    "Marquise Brown",
    "Montez Sweat",
    "N'Keal Harry",
    "A.J. Brown",
    "Lamar Jackson",
    "Baker Mayfield",
    "Saquon Barkley",
    "Denzel Ward",
    "Quenton Nelson",
    "Roquan Smith",
    "Minkah Fitzpatrick",
    "Vita Vea",
    "Marcus Davenport",
    "Alvin Kamara",
    "Jaire Alexander",
    "Darius Leonard",
    "Jerry Jeudy",
    "Christian Kirk",
    "Aaron Donald",
    "Ezekiel Elliott",
    "Dak Prescott",
    "Marshon Lattimore",
    "Julio Jones",
    "Antonio Brown",
    "Nick Bosa",
    "Joey Bosa"
    ]
    
    var oldPlayers = ["Tom Brady",
    "Tim Tebow",
    "Brian Urlacher",
    "Ray Lewis",
    "Peyton Manning",
    "Marshall Faulk",
    "Jerry Rice",
    "Joe Montana",
    "Lawrence Taylor",
    "Jim Brown",
    "Walter Payton",
    "Dick Butkus",
    "Deion Sanders",
    "Barry Sanders",
    "Johnny Unitas",
    "Fran Tarkenton",
    "Randy Moss",
    "Brett Favre",
    "Emmitt Smith",
    "Drew Brees",
    "Dan Marino",
    "Ronnie Lott",
    "Otto Graham",
    "Steve Young",
    "Jack Lambert",
    "Bo Jackson",
    "Ed Reed",
    "Rod Woodson",
    "Roger Staubach",
    "Mike Singletary",
    "Bart Starr",
    "Eric Dickerson",
    "Alan Page",
    "Peyton Manning",
    "Anthony Munoz",
    "Deacon Jones",
    "Gale Sayers"    
    ]
    
    
    function randomOld(){
        var player = oldPlayers[Math.floor(Math.random()*oldPlayers.length)]
        document.querySelector("#playerInput2").value = player
    }
    
    function randomNew(){
        var player = newPlayers[Math.floor(Math.random()*newPlayers.length)]
        document.querySelector("#playerInput1").value = player
    }