// let newDeck = shuffle(cards)
let cardStack = newDeck
// console.log(cardStack)
let playerOneHand = []
let playerTwoHand = []
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
let p1Images = []
let p2Images = []
let a;
// setTimeout()

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
  renderP1()
  renderP2()
  p1Sum()
  p2Sum()
  checkP1Sum()
  checkP2Sum()
  changeValueText()
  changeDeckCount()
  console.log(playerOneHand)
  console.log(playerTwoHand)
  console.log(playerOneValue)
  console.log(playerTwoValue)
}


function p1drawOne(){
removeAllChildNodes(p1Card1[0])
setTimeout(function () {
  x = newDeck.pop()
  playerOneHand.push(x)
  playerOneValue.push(x.value)
  totalCardsDrawn += 1
  renderP1()
  p1Sum()
  checkP1Sum()
  changeValueText()
  changeDeckCount()
  console.log(playerOneHand)
  
}, 0)
}

function p2drawOne(){
  removeAllChildNodes(p2Card1[0])
  setTimeout(function () {
    x = newDeck.pop()
    playerTwoHand.push(x)
    playerTwoValue.push(x.value)
    totalCardsDrawn += 1

    renderP2()
    p2Sum()
    checkP2Sum()
    changeValueText()
    changeDeckCount()
    console.log(playerTwoHand)
    
  }, 0)
  }


function p2drawOne(){
  x = newDeck.pop()
  playerTwoHand.push(x)
  playerTwoValue.push(x.value)
  totalCardsDrawn += 1
  renderP2()
  p2Sum()
  checkP2Sum()
  changeValueText()
  changeDeckCount()
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
            p1Images = []
            p2Images = []
            removeImages()
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



function renderP1(){
  if(p1Card1[0]){
  removeAllChildNodes(p1Card1[0])}
  for(let i = 0; i <= playerOneHand.length - 1;i++){
    console.log(playerOneHand[i].image)
      let p1Show = document.createElement('div')
  p1Show.className = 'p1Show'
  p1Show.innerHTML = `<img src='${playerOneHand[i].image}'> `
  p1Card1[0].appendChild(p1Show)
  
  }
  }

  function renderP2(){
    if(p2Card1[0]){
    removeAllChildNodes(p2Card1[0])}
    for(let i = 0; i <= playerTwoHand.length - 1;i++){
      console.log(playerTwoHand[i].image)
        let p2Show = document.createElement('div')
    p2Show.className = 'p2Show'
    p2Show.innerHTML = `<img src='${playerTwoHand[i].image}'> `
    p2Card1[0].appendChild(p2Show)
    
    }
    }
  








    function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }}

  function removeImages(){
    removeAllChildNodes(p1Card1[0])
    removeAllChildNodes(p2Card1[0])
    return console.log('Cleared the images')
}



  

