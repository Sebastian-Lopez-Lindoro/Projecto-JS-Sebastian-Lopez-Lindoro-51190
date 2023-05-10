async function showTermsAndConditions() {
        const termsAccepted = localStorage.getItem("termsAccepted");
      
        if (!termsAccepted) {
          const { value: accept } = await Swal.fire({
            title: 'Terms and conditions',
            icon: 'warning',
            padding: '3rem',
            input: 'checkbox',
            inputValue: 1,
            backdrop: 'rgba(0,0,0,0.9)',
            inputPlaceholder: 'I CERTIFY THAT I AM 18+ YEARS OF AGE',
            confirmButtonText: 'Continue <i class="fa fa-arrow-right"></i>',
            inputValidator: (result) => {
              return !result && 'You are NOT allowed to enter the website if you are not 18 years old';
            },
            allowOutsideClick: false,
          });
      
          if (accept) {
            Swal.fire('You may now browse the website');
            localStorage.setItem("termsAccepted", "true");
          }
        }
      }
      
      showTermsAndConditions();
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
        constructor(id, name, price){
            this.id = id
            this.name = name
            this.price = price
        }
    }
    
    const mangaPack = new Inventory(1, "Manga pack", 360)
    const animePack = new Inventory(2, "Anime pack", 300)
    const ovaMoviePack  = new Inventory(3, "OVA and Movie pack", 200)
    const completePack = new Inventory(4, "Complete pack", 250)



const mangaButton = document.getElementById("manga_button")

mangaButton.addEventListener("click", () => {
        cart.push(mangaPack)
        mangaData.push(mangaPack) 
        Toastify({
                className: "info",
                text: "Product added to the cart!",
                duration: 2000
        }).showToast()
        
        localStorage.setItem("mangaStorage", JSON.stringify(mangaData))          
})

const animeButton = document.getElementById("anime_button")

animeButton.addEventListener("click", () =>{
        cart.push(animePack)
        animeData.push(animePack)
        const anime = document.createElement("div")
        anime.className = "itemStyle"
        anime.innerHTML = `
                        <img class="cart_img" src="img/anime pack.jpg" alt="">
                        <p class="cart_p">Anime Pack</p>
                        <p class="cart_p2">$ ${animePack.price}</p>
                        <button class="delete_button">REMOVE</button>     
        `
        cart_cards.append(anime)
        //alert(cart)
        localStorage.setItem("animeStorage", JSON.stringify(animeData))
})

const ovaMovieButton = document.getElementById("ovamovie_button")

ovaMovieButton.addEventListener("click", () =>{
        cart.push(ovaMoviePack)
        ovaMovieData.push(ovaMoviePack)
        const ovamovie = document.createElement("div")
        ovamovie.className = "itemStyle"
        ovamovie.innerHTML = `
                        <img class="cart_img" src="img/ovamovie pack.jpg" alt="">
                        <p class="cart_p">OVA & Movie Pack</p>
                        <p class="cart_p2">$ ${ovaMoviePack.price}</p>
                        <button class="delete_button">REMOVE</button>      
        `
        cart_cards.append(ovamovie)
        //alert(cart)
        localStorage.setItem("ovaMovieStorage", JSON.stringify(ovaMovieData))
})

    
const completeButton = document.getElementById("complete_button")

completeButton.addEventListener("click", () =>{
        cart.push(completePack)
        completeData.push(completePack)
        const complete = document.createElement("div")
        complete.className = "itemStyle"
        complete.innerHTML = `
                        <img class="cart_img" src="img/complete pack.jpg" alt="">
                        <p class="cart_p">Complete Pack</p>
                        <p class="cart_p2">$ ${completePack.price}</p>
                        <button class="delete_button">REMOVE</button>      
        `
        cart_cards.append(complete)
        //alert(cart)
        localStorage.setItem("completeStorage",JSON.stringify(completeData))
})

/*const carrito = JSON.parse(localStorage.getItem("mangaStorage"))
console.log(carrito)
carrito.forEach(cards => {
        const manga = document.createElement("div")
        manga.id = "manga"
        manga.className = "itemStyle"
        manga.innerHTML = `
                        <img class="cart_img" src="img/manga pack.jpg" alt="">
                        <p class="cart_p">Manga Pack</p>
                        <p class="cart_p2">$ ${mangaPack.price}</p>
                        <button id="manga_delete" class="delete_button">REMOVE</button>
        `
        cart_cards.append(manga)
        console.log(cards)
});

const deleteManga = ()=>{
        
        const mangaDelete = document.getElementById("manga_delete")
        mangaDelete.addEventListener("click", ()=>{
        document.getElementById("manga").remove()
        localStorage.removeItem("mangaStorage")
        })
}
deleteManga()*/

/*const carrito = JSON.parse(localStorage.getItem("mangaStorage"));
console.log(carrito);

carrito.forEach((mangaPack, index) => {
  const manga = document.createElement("div");
  const mangaId = `manga_${index}`; // Generar un ID único para cada elemento manga
  manga.id = mangaId;
  manga.className = "itemStyle";
  manga.innerHTML = `
    <img class="cart_img" src="img/manga pack.jpg" alt="">
    <p class="cart_p">Manga Pack</p>
    <p class="cart_p2">$ ${mangaPack.price}</p>
    <button id="manga_delete_${index}" class="delete_button">REMOVE</button>
  `;
  cart_cards.append(manga);
  console.log(mangaPack);

  // Llamar a la función deleteManga después de crear cada elemento manga
  deleteManga(mangaId, index);
});

function deleteManga(mangaId, index) {
  const mangaDelete = document.getElementById(`manga_delete_${index}`);
  mangaDelete.addEventListener("click", () => {
    document.getElementById(mangaId).remove();
    localStorage.removeItem("mangaStorage");
  });
}*/

document.addEventListener("DOMContentLoaded", () => {
        const carrito = JSON.parse(localStorage.getItem("mangaStorage"));
        console.log(carrito);
      
        carrito.forEach((mangaPack, index) => {
          const manga = document.createElement("div");
          const mangaId = `manga_${index}`; // Generar un ID único para cada elemento manga
          manga.id = mangaId;
          manga.className = "itemStyle";
          manga.innerHTML = `
            <img class="cart_img" src="img/manga pack.jpg" alt="">
            <p class="cart_p">Manga Pack</p>
            <p class="cart_p2">$ ${mangaPack.price}</p>
            <button id="manga_delete_${index}" class="delete_button">REMOVE</button>
          `;
          cart_cards.append(manga);
          console.log(mangaPack);
      
          // Llamar a la función deleteManga después de crear cada elemento manga
          deleteManga(mangaId, index);
        });
      
        function deleteManga(mangaId, index) {
          const mangaDelete = document.getElementById(`manga_delete_${index}`);
          mangaDelete.addEventListener("click", () => {
            document.getElementById(mangaId).remove();
            localStorage.removeItem("mangaStorage");
          });
        }
      });