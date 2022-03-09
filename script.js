let url = ('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
console.log(cards)
//  ^^ shows the array of cards in console


let newDeck = function newDeck(){
    fetch(url)
    .then (res => { return res.json()})
    .then(data => {
        let obj = data
        let deckID = obj.deck_id
        console.log(data.deck_id)
        console.log(data)
    })
}
newDeck()

// let drawOne = function drawOne(){
//     fetch('https://deckofcardsapi.com/api/"+deckID+"/"+/draw/?count=2')
// .then(res => {return res.json()})
// .then (data => console.log(data))
// }
// drawOne()

