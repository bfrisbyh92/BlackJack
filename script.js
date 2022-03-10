// let newDeck = shuffle(cards)
let cardStack = newDeck
// console.log(cardStack)
let playerOneHand = []
let playerTwoHand = []
let p1Aces = 0
let p2Aces = 0
let playerOneValue = []
let playerTwoValue = []
let player1Sum = 0
let player2Sum = 0
let player1SumShow = 0
let player2Turn = false
let roundOver;
let gameStatus = ['You Win!','Bust!','BlackJack!',]
let card = 0
let roundsPlayed = 0
let totalCardsDrawn = 0
let playerOneWins = 0
let playerTwoWins = 0
let ties = 0
let playerOneBlackjacks = 0
let playerTwoBlackjacks = 0
let playerOneBusts = 0
let playerTwoBusts = 0




// console.log(newDeck[1])
// console.log(newDeck)
// I have an array obj cards. A function shuffle() that shuffles cards obj when called

// function startGame(){
//     if(player2Turn === false){
//         roundsPlayed++
//         player2Turn === true
//         for(i=0;i<=10;i++)
//     }
// }

function draw(cardStack){
    firstCard = cardStack[0]
    console.log(cardStack[0])
    if(player2Turn === false){
    playerOneHand = cardStack.splice
} else playerTwoHand = playerTwoHand.push(firstCard)
}

console.log(cardStack[0].image)
console.log(cardStack)
cardStack.push(playerOneHand)
console.log(cardStack)
console.log(playerOneHand)
// draw(cardStack)
// console.log(playerOneHand)
// Once the game has started. Cards already shuffled. My thinking is i can Push that top card in to
// a hand. Need to set alternating turns for players
// I need to get something visual i I can see
// Need to fix the grid template







