//Upper case formatting
function toTitleCase(str) {
    var numUpper = str.length - str.replace(/[A-Z]/g, '').length;
    if (numUpper > 1) {
        return str;
    }  
    return str.replace(
      /\w*/g,
      function(txt) {
        if(txt.length<3){
            if(!["JA","MO","AL","BO","KY","SI","TY","DE","SR","EL","HA","YI","QI","SY","ED","US"].includes(txt.toUpperCase())){
                // console.log(txt.toUpperCase())
                return txt.toUpperCase();
            }
            else{
                // console.log(txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                
            }


        }

        else if(txt==="iii"||txt==="Iii"||txt==="III"){
            return "III";
        }


        else{
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      }
    );
  }

  //auto scroll page
  function scrollPage() {
    var div = document.querySelector(".page");
    $(div).animate({
       scrollTop: div.scrollHeight - div.clientHeight
    }, 1500);
 }

//get shortest path to 2nd player
function getPath() {
    
    document.querySelector(".instructions").classList.add("hidden")
    var startPlayer = toTitleCase(document.getElementById("playerInput1").value).replace("JR.","Jr.")
    var endPlayer = toTitleCase(document.getElementById("playerInput2").value).replace("JR.","Jr.")
    if(!players[startPlayer]||!players[endPlayer]){
        document.getElementById("connections-list").innerHTML = "Player not found: try retyping your player and selecting from the dropdown.";
        return false;
    }

    let seenTeams = []
    let nextTeams = []
    let seenPlayers = [[startPlayer,[startPlayer]]]
    let nextPlayers = [[startPlayer,[startPlayer]]]
    let winArray = [];

    counter = 0;


    while(winArray.length<1){


        //queue up teams

        if(nextPlayers[0]){
            players[nextPlayers[0][0]].forEach(team =>{

                if(seenTeams.includes(team)){
                    return;
                }


                queueObject = [team,nextPlayers[0][1].concat(team)]

                seenTeams.push(team)
                nextTeams.push(queueObject)

                
            })
            nextPlayers.shift();
        }

        //queue up players
        if(nextTeams[0]){
            teams[nextTeams[0][0]].forEach(player =>{

                if(seenPlayers.includes(player)){
                    return;
                }
                
                
                queueObject = [player,nextTeams[0][1].concat(player)]

                if(player===endPlayer){
                    winArray = queueObject[1]
                }
                seenPlayers.push(player)
                nextPlayers.push(queueObject)
                
            })
            nextTeams.shift();
        }

    }
    displayConnections(winArray);
}

function displayConnections(winArray){
    document.getElementById("connections-list").innerHTML = "";
    for(let i=0;i<winArray.length-1;i+=2){
        let teamname = winArray[i+1].slice(8)

        let list = document.createElement("li");  
        //add css colors by team name
        switch(teamname){
            case "Arizona Cardinals":
                            list.classList.add("cardinals");
                            break;
            case "Chicago Cardinals":
                            list.classList.add("cardinals");
                            break;
            case "Chi/Pit Cards/Steelers":
                            list.classList.add("cardinals");
                            break;
            case "St. Louis Cardinals":
                            list.classList.add("cardinals");
                            break;
            case "Phoenix Cardinals":
                            list.classList.add("cardinals");
                            break;
            case "Atlanta Falcons":
                            list.classList.add("falcons");
                            break;       
            case "Baltimore Ravens":
                            list.classList.add("ravens");
                            break;       
            case "Buffalo Bills":
                            list.classList.add("bills");
                            break; 
            case "Carolina Panthers":
                            list.classList.add("panthers");
                            break;
            case "Chicago Bears":
                            list.classList.add("bears");
                            break;
            case "Decatur Staleys":
                            list.classList.add("bears");
                            break;
            case "Chicago Staleys":
                            list.classList.add("bears");
                            break;
            case "Cincinnati Bengals":
                            list.classList.add("bengals");
                            break;
            case "Cleveland Browns":
                            list.classList.add("browns");
                            break;
            case "Dallas Cowboys":
                            list.classList.add("cowboys");
                            break;
            case "Denver Broncos":
                            list.classList.add("broncos");
                            break;
            case "Detroit Lions":
                            list.classList.add("lions");
                            break;
            case "Portsmouth Spartans":
                            list.classList.add("vikings");
                            break;
            case "Green Bay Packers":
                            list.classList.add("packers");
                            break;
            case "Houston Texans":
                            list.classList.add("texans");
                            break;
            case "Indianapolis Colts":
                            list.classList.add("colts");
                            break;
            case "Baltimore Colts":
                            list.classList.add("colts");
                            break;
            case "Jacksonville Jaguars":
                            list.classList.add("jaguars");
                            break;
            case "Kansas City Chiefs":
                            list.classList.add("chiefs");
                            break;
            case "Dallas Texans":
                            list.classList.add("cowboys");
                            break;
            case "Las Vegas Raiders":
                            list.classList.add("raiders");
                            break;
            case "Oakland Raiders":
                            list.classList.add("raiders");
                            break;
            case "Los Angeles Raiders":
                            list.classList.add("raiders");
                            break;
            case "Los Angeles Chargers":
                            list.classList.add("chargers");
                            break;
            case "San Diego Chargers":
                            list.classList.add("chargers");
                            break;
            case "Los Angeles Rams":
                            list.classList.add("rams");
                            break;
            case "Cleveland Rams":
                            list.classList.add("rams");
                            break;
            case "St. Louis Rams":
                            list.classList.add("stlrams");
                            break;
            case "Miami Dolphins":
                            list.classList.add("dolphins");
                            break;
            case "Minnesota Vikings":
                            list.classList.add("vikings");
                            break;
            case "New England Patriots":
                            list.classList.add("patriots");
                            break;
            case "Boston Patriots":
                            list.classList.add("patriots");
                            break;
            case "New England Patriots":
                            list.classList.add("patriots");
                            break;
            case "New Orleans Saints":
                            list.classList.add("saints");
                            break;
            case "New York Giants":
                            list.classList.add("giants");
                            break;
            case "New York Jets":
                            list.classList.add("jets");
                            break;
            case "New York Titans":
                            list.classList.add("stlrams");
                            break;
            case "Philadelphia Eagles":
                            list.classList.add("eagles");
                            break;
            case "Phi/Pit Eagles/Steelers":
                            list.classList.add("eagles");
                            break;
            case "Pittsburgh Steelers":
                            list.classList.add("steelers");
                            break;
            case "Pittsburgh Pirates":
                            list.classList.add("steelers");
                            break;
            case "San Francisco 49ers":
                            list.classList.add("niners");
                            break;
            case "Seattle Seahawks":
                            list.classList.add("seahawks");
                            break;
            case "Tampa Bay Buccaneers":
                            list.classList.add("buccaneers");
                            break;
            case "Tennessee Titans":
                            list.classList.add("titans");
                            break;
            case "Houston Oilers":
                            list.classList.add("oilers");
                            break;
            case "Tennessee Oilers":
                            list.classList.add("oilers");
                            break;
            case "Washington Football Team":
                            list.classList.add("wft");
                            break;
            case "Boston Braves":
                            list.classList.add("wft");
                            break;
            case "Boston Redskins":
                            list.classList.add("wft");
                            break;
            case "Washington Redskins":
                            list.classList.add("wft");
                            break;

            default:
                                list.classList.add("default");
                                break;
        }
 
        let player1 = document.createElement("div"); 
        let team = document.createElement("div"); 
        let player2 = document.createElement("div");

        player1.innerHTML = winArray[i];  
        team.innerHTML = `${winArray[i+1].slice(0,8)}<br>${teamname}`; 
        player2.innerHTML = winArray[i+2];  

        list.appendChild(player1);   
        list.appendChild(team);   
        list.appendChild(player2);
        
        let delayClass = "delay"+i
        list.classList.add(delayClass)
        list.classList.add("fadeInLeft");
                                   
        document.getElementById("connections-list").appendChild(list);
    }
    setTimeout(scrollPage,10)
}