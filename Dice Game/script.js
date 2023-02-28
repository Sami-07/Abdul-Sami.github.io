function generateNum() {
    let num = Math.random()
    num *= 6
    num = Math.floor(num)
    num += 1
    return num
}
let random1 = generateNum();
let random2 = generateNum();
h1 = document.querySelector("h1")
if(random1 > random2)
{
 h1.innerHTML = "Player 1 Wins"
}
else if(random2 > random1)
{
 h1.innerHTML = "Player 2 Wins"
}
else{
    h1.innerHTML = "Match is drawn"
}
console.log("p1 = ", random1)
console.log("p2 = ", random2)
let imgName1 = 'dice' + random1 + '.png'
let imgName2 = 'dice' + random2 + '.png'
srcx1 = "images/" + imgName1
srcx2 = "images/" + imgName2
let p1 = document.querySelector(".img1")
let p2 = document.querySelector(".img2")
p1.setAttribute("src", srcx1)
p2.setAttribute("src", srcx2)






// if (random1 == 1) {

//     let srcx = "images/dice1.png"
//     p1.setAttribute("src", srcx)
// }
// else if (random1 == 2) {

//     let srcx = "images/dice2.png"
//     p1.setAttribute("src", srcx)
// }
// else if (random1 == 3) {

//     let srcx = "images/dice3.png"
//     p1.setAttribute("src", srcx)
// }
// else if (random1 == 5) {
//     let srcx = "images/dice55.png"
//     p1.setAttribute("src", srcx)
// }
// else if(random1 = 6){
//     let srcx = "images/dice66.png"
//     p1.setAttribute("src", srcx)
// }
// else if (random1 = 4) {

//     let srcx = "images/dice4.png"
//     p1.setAttribute("src", srcx)
// }


// let random2 = generateNum();
// console.log("p2 = ", random2)
// if (random2 == 1) {
//     let srcx = "images/dice1.png"
//     p2.setAttribute("src", srcx)
// }
// else if (random2 == 2) {

//     let srcx = "images/dice2.png"
//     p2.setAttribute("src", srcx)
// }
// else if (random2 == 3) {

//     let srcx = "images/dice3.png"
//     p2.setAttribute("src", srcx)
// }
// else if (random2 == 5) {
//     let srcx = "images/dice55.png"
//     p2.setAttribute("src", srcx)
// }
// else if(random2 = 6){
//     let srcx = "images/dice66.png"
//     p2.setAttribute("src", srcx)
// }
// else if (random2 = 4) {

//     let srcx = "images/dice4.png"
//     p2.setAttribute("src", srcx)
// }


