
console.log(newDeck[1])
console.log(newDeck)
// I have an array obj cards. A function shuffle() that shuffles cards obj when called

let playerOneHand = []
let playerTwoHand = []


function draw(newDeck){
    firstCard = newDeck[0]
    console.log(newDeck[0])
    newDeck[0] = playerOneHand.push(firstCard)
}

draw(newDeck)
console.log(playerOneHand)
// Once the game has started. Cards already shuffled. My thinking is i can Push that top card in to
// a hand. Need to set alternating turns for players
// I need to get something visual i I can see
// Need to fix the grid template







