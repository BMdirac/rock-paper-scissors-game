
const handOptions = {
    "rock": "/assets/Rock.png",
    "paper": "/assets/Paper.png",
    "scissors": "/assets/Scissors.png"
}

const pickUserHand = (hand) => {
    // hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    // show the next page with the hand you picked
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // set the user pick
    document.getElementById("userPickImage").src = handOptions[hand];

    let cpHand = pickComputerHand();
}

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"]
    let cpHand = hands[Math.floor(Math.random() * 3)]

    // set the computer pick
    document.getElementById("computerPickImage").src = handOptions[cpHand];

    return cpHand;
}