async function showTermsAndConditions() {
   const termsAccepted = localStorage.getItem("termsAccepted")
      
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
         })
      
         if (accept) {
            Swal.fire('You may now browse the website')
            localStorage.setItem("termsAccepted", "true")
         }
   }
}
      
showTermsAndConditions();

let cart = []
let mangaData = []
let animeData = []
let ovaMovieData = []
let completeData = []
let id = 0
  
   class Inventory {
      constructor(name, price) {
         this.id = id++
         this.name = name
         this.price = price
      }
}
      
const mangaPack = new Inventory("Manga pack", 360)
const animePack = new Inventory("Anime pack", 300)
const ovaMoviePack = new Inventory("OVA and Movie pack", 200)
const completePack = new Inventory("Complete pack", 750)
      
const mangaButton = document.getElementById("manga_button")
      
   mangaButton.addEventListener("click", () => {
   const item = new Inventory("Manga pack", 360);
      cart.push(item)
      mangaData.push({
            id: item.id,
            name: item.name,
            price: item.price,
      })
      
      Toastify({
         className: "info",
         text: "Product added to the cart!",
         duration: 2000,
      }).showToast()
      
      localStorage.setItem("mangaStorage", JSON.stringify(mangaData))
})
      

   window.addEventListener("load", () => {
      const storedMangaData = localStorage.getItem("mangaStorage")
      if (storedMangaData) {
      mangaData = JSON.parse(storedMangaData)
   }
})
      
const animeButton = document.getElementById("anime_button")

animeButton.addEventListener("click", () =>{
      const item = new Inventory("Anime Pack", 300)
      cart.push(item)
      animeData.push({
         id: item.id,
         name: item.name,
         price: item.price,
      })

      Toastify({
                className: "info",
                text: "Product added to the cart!",
                duration: 2000
      }).showToast()

      localStorage.setItem("animeStorage", JSON.stringify(animeData))
})

      window.addEventListener("load", () => {
      const storedAnimeData = localStorage.getItem("animeStorage")
      if (storedAnimeData) {
         animeData = JSON.parse(storedAnimeData)
      }
})


const ovaMovieButton = document.getElementById("ovamovie_button")

ovaMovieButton.addEventListener("click", () =>{
      const item = new Inventory ("OVA and Movie pack", 200)
      cart.push(item)
      ovaMovieData.push({
            id: item.id,
            name: item.name,
            price: item.price,
      })
        
      Toastify({
            className: "info",
            text: "Product added to the cart!",
            duration: 2000
        }).showToast()

      localStorage.setItem("ovaMovieStorage", JSON.stringify(ovaMovieData))
})

      window.addEventListener("load", () => {
            const storedOvaData = localStorage.getItem("ovaMovieStorage")
            if (storedOvaData) {
            ovaMovieData = JSON.parse(storedOvaData)
      }
})      
  
const completeButton = document.getElementById("complete_button")

completeButton.addEventListener("click", () =>{
      const item = new Inventory("Complete pack", 750)
      cart.push(item)
      completeData.push({
            id: item.id,
            name: item.name,
            price: item.price,
        })
        
      Toastify({
            className: "info",
            text: "Product added to the cart!",
            duration: 2000
        }).showToast()

      localStorage.setItem("completeStorage",JSON.stringify(completeData))
})

      window.addEventListener("load", () => {
            const storedCompleteData = localStorage.getItem("completeStorage")
            if (storedCompleteData) {
            completeData = JSON.parse(storedCompleteData)
      }
})