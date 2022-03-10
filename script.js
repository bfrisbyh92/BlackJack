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

playerOneCardOne = document.getElementById('player1', 'card-slot1')




function startGame(){
firstCard = newDeck.pop()
secondCard = newDeck.pop()
p2firstCard = newDeck.pop()
p2SecondCard = newDeck.pop()
playerOneHand.push(firstCard,secondCard)
playerTwoHand.push(p2firstCard, p2SecondCard)
playerOneValue.push(firstCard.value,secondCard.value)
playerTwoValue.push(p2firstCard.value, p2SecondCard.value)
totalCardsDrawn += 4
console.log(playerOneHand)
console.log(playerTwoHand)
console.log(playerOneValue)
console.log(playerTwoValue)
}

function p1drawOne(){
  x = newDeck.pop()
  playerOneHand.push(x)
  playerOneValue.push(x.value)
  totalCardsDrawn += 1
  console.log(playerOneHand)
    }
    
    function p2drawOne(){
        x = newDeck.pop()
        playerTwoHand.push(x)
        playerTwoValue.push(x.value)
        totalCardsDrawn += 1
        console.log(playerTwoHand)
          }

          function p1Sum() {
            sum = 0;
            for (let i = 0; i < playerOneValue.length; i++) {
              sum += playerOneValue[i];
            }
            return sum
          }

          function p2Sum() {
            sum = 0;
            for (let i = 0; i < playerTwoValue.length; i++) {
              sum += playerTwoValue[i];
            }
            return sum
          }
            



          









// console.log(cardStack[0].image)
// console.log(cardStack)
// cardStack.push(playerOneHand)
// console.log(cardStack)
// console.log(playerOneHand)
// draw(cardStack)
// console.log(playerOneHand)







