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

let deckCount = document.getElementsByClassName('deck')
let p1Score = document.getElementsByClassName('player1-score')
let p2Score = document.getElementsByClassName('player2-score')
let p1Value = document.getElementsByClassName('currentValue-player1')
let p2Value = document.getElementsByClassName('currentValue-player2')
let p1Card1 = document.getElementsByClassName('player1 card-slot1')
let p2Card1 = document.getElementsByClassName('player2 card-slot1')

// console.log(p1Card1)

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
  p1Sum()
  p2Sum()
  checkP1Sum()
  checkP2Sum()
  getImageUrls()
  changeValueText()
  changeDeckCount()
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
  p1Sum()
  checkP1Sum()
  changeValueText()
  changeDeckCount()
  getImageUrls()
  console.log(playerOneHand)
}

function p2drawOne(){
  x = newDeck.pop()
  playerTwoHand.push(x)
  playerTwoValue.push(x.value)
  totalCardsDrawn += 1
  p2Sum()
  checkP2Sum()
  changeValueText()
  changeDeckCount()
  getImageUrls()
  console.log(playerTwoHand)
}

function p1Sum() {
  player1Sum = 0;
  for (let i = 0; i < playerOneValue.length; i++) {
    player1Sum += playerOneValue[i];
  }
  return player1Sum
}

function p2Sum() {
  player2Sum = 0;
  for (let i = 0; i < playerTwoValue.length; i++) {
    player2Sum += playerTwoValue[i];
  }
  return player2Sum
}

function checkP1Sum(){
  if(player1Sum === 21){
    alert('Blackjack')
    playerOneBlackjacks++
    playerOneWins++
    changeScoreText()
    reset()
  }else if (player1Sum > 21){
              alert('Bust!')
              playerOneBusts++
              playerTwoWins++
              changeScoreText()
              reset()
            }else if(player1Sum < 21) {
              console.log('P1 hand is less than 21')
            }
          }



          function checkP2Sum(){
            if(player2Sum === 21){
              alert('Blackjack')
              playerTwoBlackjacks++
              playerTwoWins++
              changeScoreText()
              reset()
            }else if (player2Sum > 21){
              alert('Bust!')
              playerTwoBusts++
              playerOneWins++
              changeScoreText()
              reset()
            }else if (player2Sum < 21) {
              console.log('P2 hand is less than 21')
            }
          }

          function reset(){
            playerOneHand = []
            playerTwoHand = []
            player1Sum = 0
            player2Sum = 0
            playerOneValue = []
            playerTwoValue = []
          }

          function changeScoreText(){
            p1Score[0].innerHTML = `Player Score: ${playerOneWins}`
            p2Score[0].innerHTML = `Dealer Score: ${playerTwoWins}`
          }

          function changeValueText(){
            p1Value[0].innerHTML = `Player Total: ${player1Sum}`
            p2Value[0].innerHTML = `Dealer Total: ${player2Sum}`
          }

          function compareStayValues(){
            if(player1Sum < player2Sum){
              playerTwoWins++
              changeScoreText()
              reset()
              changeValueText()
            } else if (player1Sum > player2Sum) {
              playerOneWins++
              changeScoreText()
              reset()
              changeValueText()
            } else {
              reset()
              changeValueText()
            }
          }

          function changeDeckCount(){
            deckCount[0].innerHTML = `Cards left in Deck: ${newDeck.length}`
          }

function getImageUrls (){
  for(let i = 0, j=0; i < playerOneHand.length, j < playerTwoHand.length;i++, j++){
    let y = document.createElement('div')
    let z = document.createElement('div')
    a = playerOneHand[i].image
    b = playerTwoHand[i].image
    y.innerHTML = `<img src='${a}' width:113 height:157>`
    z.innerHTML = `<img src='${b}' width:113 height:157>`
    console.log(y)
    console.log(z)
    cardSlot1 = p1Card1[0]
    cardSlot1.appendChild(y)
    dealerSlot1 = p2Card1[0]
    dealerSlot1.appendChild(z)

  }
}

// function p1Images(){
//   for(let i = 0; i <= playerOneHand.length; i++)
//   createCard = document.createElement('div')
//   cardURL = playerOneHand[i].image
//   createCard.innerHTML = `<img src='${cardURL}'`
//   cardSlot1 = p1Card1[0]
//   cardSlot1.appendChild(createCard)

// }

// function removeInactiveCards(playerOneHand, playerTwoHand){
//   for(let i = 0, j=0; i < playerOneHand.length, j < playerTwoHand.length;i++, j++){
//     console.log(playerOneHand[i].image)
//     console.log(j.image)
// if(playerOneHand[i] !== playerOneHand[i]){
// document.removeElement()
// }
// //   }
// // }




         



  

            



          









// console.log(cardStack[0].image)
// console.log(cardStack)
// cardStack.push(playerOneHand)
// console.log(cardStack)
// console.log(playerOneHand)
// draw(cardStack)
// console.log(playerOneHand)







