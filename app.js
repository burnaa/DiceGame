//toglogchiin eelj hadgalah huvisagch
var activePlayer;

//onoo hadgalah huvisagch
var scores;

//eeljiin onoo huvisagch
var roundScore;

//togloom duussn eshiig shalagh state huvisagch
var isGameOver;

function initGame() {
    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;
    isGameOver = false;
    window.document.getElementById('score-0').textContent = 0;
    window.document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".dice").style.display = "none";
};

initGame();

//shoo haruulah 
document.querySelector(".btn-roll").addEventListener("click", function () {

    //togloom duusaagu esehiig shalgah
    if (isGameOver === false) {
        var diceNumber = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice").src = "dice-" + diceNumber + ".png";

        //shoo 1 ees ylgaatai bol eeljiiin onoog nemegduulne
        if (diceNumber !== 1) {
            roundScore = roundScore + diceNumber;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
        else {
            //roundScore -iig 0 bolgono
            // eeljsoligdono
            roundScore = 0;
            document.getElementById('current-' + activePlayer).textContent = 0;


            //document.querySelector('.player-'+activePlayer+'-panel').classList.remove("active");
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");
            activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
            //document.querySelector('.player-'+activePlayer+'-panel').classList.add("active");
            document.querySelector(".dice").style.display = "none";
        }
    }
    else{
        alert("togloom duussn bna. NewGame deer darna uu");
    }
});


// hold button
document.querySelector(".btn-hold").addEventListener('click', function () {

    if (isGameOver === false) {
        //tsugluulsun roudScore -iig nemj uguh
        // if(activePlayer===0)
        //     scores[0]= scores[0]+ roundScore;
        // else
        //     scores[1]= scores[1]+ roundScore;
        scores[activePlayer] = scores[activePlayer] + roundScore;
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

        //roundScore -iig 0 bolgoh
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        if (scores[activePlayer] >= 20) {
            document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
            isGameOver = true;
            document.querySelector('.player-' + activePlayer + '-panel').classList.add("winner");
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove("active");
        }
        else {
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");
            document.querySelector(".dice").style.display = 'none';
            activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        }
    }
    else{
        alert("togloom duussn bna. NewGame deer darna uu");
    }

})

//шинээр эхлүүлэх
document.querySelector('.btn-new').addEventListener('click', initGame);

//winner bolohod togloomiin tovch uildel hiihgu bolh
