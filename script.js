let homeScores = document.getElementById("home-scores");
let homecount = 0;
let guestcount = 0;
let guestScores = document.getElementById("guest-scores");

function homePlusOne(){
    // Increment the home score by 1
    homecount += 1;
    homeScores.textContent = homecount;
    console.log(homecount)
}

function homePlusTwo(){
    // Increment the home score by 2
    homecount += 2;
    homeScores.textContent = homecount;
}

function homePlusThree(){
    // Increment the home score by 3
    homecount += 3;
    homeScores.textContent = homecount;
}

function guestPlusOne(){
    guestcount +=1;
     guestScores.textContent = guestcount;
}

function guestPlusTwo(){
    guestcount +=2;
     guestScores.textContent = guestcount;
}

function guestPlusThree(){
    guestcount +=3;
     guestScores.textContent = guestcount;
}