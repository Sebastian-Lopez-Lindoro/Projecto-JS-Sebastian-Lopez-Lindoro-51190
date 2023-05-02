/*

//Ranma 1/2 website interactive simulator

alert("Welcome to Ranma 1/2 website")
alert("please insert your age")

//Age verification

let age
const ageVerification = () => {
    do{
        age = parseInt(prompt("remember that you must be 18+ to use this website \nif not you must leave immediately"))
    }while(age <=17 || age >=99 || isNaN(age))
}

ageVerification()

alert("You may enter the website")

//User name creation

let userName
const userNameCreation = () => {
    do{
        userName = prompt("Please insert your name").toLocaleLowerCase()
    }while(userName == "" || userName == " ")
}

userNameCreation()

alert("Welcome user " + userName + "! enjoy your stay \nPlease choose a category to browse")

//object creation/constructor

class Inventory {
    constructor(name, price, stock){
        this.name = name
        this.price = price
        this.stock = stock
    }
}

const mangapack = new Inventory("mangapack", 360, 55)
const animepack = new Inventory("animepack", 300, 35)
const ovapack   = new Inventory("ovapack", 200, 25)
const moviepack = new Inventory("moviepack", 250, 15)

//Array

const itemList = []

//Main funtion

let decision
const askingClient = () => {  
    alert("what pack do you wish to purchase")
    decision = prompt ("Manga, " + " Anime, " + " OVA, " + " Movie, " + " Exit").toLowerCase()
    
    switch (decision){
        case "manga":
                if(decision == "manga"){
                        itemList.push(" one " + mangapack.name + ", value " + mangapack.price + " dollars ")                      
                }       alert("thank you! Manga pack was added to your cart")
                break
        case "anime":
                if(decision == "anime"){
                        itemList.push(" one " + animepack.name + ", value " + animepack.price + " dollars ")
                }       alert("thank you! Anime pack was added to your cart")                     
                break
        case "ova":
                if(decision == "ova"){
                        itemList.push(" one " + ovapack.name + ", value " + ovapack.price + " dollars ")
                }       alert("thank you! OVA pack was added to your cart") 
                break
        case "movie":
                if(decision == "movie"){
                        itemList.push(" one " + moviepack.name + ", value " + moviepack.price + " dollars ")
                }       alert("thank you! Movie pack was added to your cart") 
                break
        case "exit":
                if(decision == "exit"){
                        alert("you will exit the shop! come again soon! bye bye!")
                }
                break
        default: alert("sorry, value must be Manga or Anime or OVA or Movie or Exit")
   }
}

while(decision != "exit"){
    askingClient()
}

//Alert and Console log output

alert("this are the items in your shopping cart")
alert(itemList)
console.log(itemList)
alert("thank for shopping at Ranma 1/2 shop! have a nice day! <3")

//Alert with forEach method

itemList.forEach(function(myItemlist) {alert(myItemlist)})

*/

let cart = []
const mangaData = []
const animeData = []
const ovaMovieData = []
const completeData = []

class Inventory {
        constructor(name, price){
            this.name = name
            this.price = price
        }
    }
    
    const mangaPack = new Inventory("Manga pack", 360)
    const animePack = new Inventory("Anime pack", 300)
    const ovaMoviePack  = new Inventory("OVA and Movie pack", 200)
    const completePack = new Inventory("Complete pack", 250)

const mangaButton = document.getElementById("manga_button")

mangaButton.addEventListener("click", () => {
        cart.push(mangaPack)
        mangaData.push(mangaPack)
        const manga = document.createElement("div")
        manga.className = "itemStyle"
        manga.innerHTML = `
                        <img class="cart_img" src="img/manga pack.jpg" alt="">
                        <p>"manga pack" ${mangaPack.price}</p>
                        <button class="delete_button">DELETE</button>     
        `
        cart_cards.append(manga)
        alert(cart)   
        localStorage.setItem("mangaStorage", JSON.stringify(mangaData))     
})

const animeButton = document.getElementById("anime_button")

animeButton.addEventListener("click", () =>{
        cart.push(animePack)
        animeData.push(animePack)
        const anime = document.createElement("div")
        anime.className = "itemStyle"
        anime.innerHTML = `
                          <p>ITEM ENTRO</p>      
        `
        cart_cards.append(anime)
        alert(cart)
        localStorage.setItem("animeStorage", JSON.stringify(animeData))
})

const ovaMovieButton = document.getElementById("ovamovie_button")

ovaMovieButton.addEventListener("click", () =>{
        cart.push(ovaMoviePack)
        ovaMovieData.push(ovaMoviePack)
        const ovamovie = document.createElement("div")
        ovamovie.className = "itemStyle"
        ovamovie.innerHTML = `
                          <p>ITEM ENTRO</p>      
        `
        cart_cards.append(ovamovie)
        alert(cart)
        localStorage.setItem("ovaMovieStorage", JSON.stringify(ovaMovieData))
})

    
const completeButton = document.getElementById("complete_button")

completeButton.addEventListener("click", () =>{
        cart.push(completePack)
        completeData.push(completePack)
        const complete = document.createElement("div")
        complete.className = "itemStyle"
        complete.innerHTML = `
                          <p>ITEM ENTRO</p>      
        `
        cart_cards.append(complete)
        alert(cart)
        localStorage.setItem("completeStorage",JSON.stringify(completeData))
})


const mangaStorage = JSON.parse(localStorage.getItem("mangaStorage")) 
console.log(mangaStorage)

const animeStorage = JSON.parse(localStorage.getItem("animeStorage"))
console.log(animeStorage)

const ovaMovieStorage = JSON.parse(localStorage.getItem("ovaMovieStorage"))
console.log(ovaMovieStorage)

const completeStorage = JSON.parse(localStorage.getItem("completeStorage"))
console.log(completeStorage)

console.log(cart)

